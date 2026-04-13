import { useState, useCallback, useMemo } from 'react';
import { QUICK_REF, QUICK_REF_TOPICS } from './quickref';
import { WIKI_ENTRIES, WIKI_CATEGORIES } from './wikidata';
import irisExpansion from './presets/iris-expansion.json';

const STORAGE_KEY = 'cpred-presets';
const BUILTIN_PRESETS = [irisExpansion];

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

function saveToStorage(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function initPresets() {
  const saved = loadFromStorage();
  const presets = {};

  // Load built-ins
  for (const bp of BUILTIN_PRESETS) {
    presets[bp.id] = {
      meta: { id: bp.id, name: bp.name, author: bp.author, version: bp.version, description: bp.description, builtIn: true },
      data: { quickref: bp.quickref || [], wiki: bp.wiki || [] },
      enabled: saved?.enabled?.[bp.id] ?? false,
    };
  }

  // Load imported presets from storage
  if (saved?.imported) {
    for (const imp of saved.imported) {
      presets[imp.id] = {
        meta: { id: imp.id, name: imp.name, author: imp.author, version: imp.version, description: imp.description, builtIn: false },
        data: { quickref: imp.quickref || [], wiki: imp.wiki || [] },
        enabled: saved?.enabled?.[imp.id] ?? false,
      };
    }
  }

  return presets;
}

function persistState(presets) {
  const enabled = {};
  const imported = [];
  for (const [id, p] of Object.entries(presets)) {
    enabled[id] = p.enabled;
    if (!p.meta.builtIn) {
      imported.push({ id, ...p.meta, ...p.data });
    }
  }
  saveToStorage({ enabled, imported });
}

export default function usePresets() {
  const [presets, setPresets] = useState(initPresets);

  const togglePreset = useCallback((id) => {
    setPresets((prev) => {
      const next = { ...prev, [id]: { ...prev[id], enabled: !prev[id].enabled } };
      persistState(next);
      return next;
    });
  }, []);

  const importPreset = useCallback((json) => {
    if (!json.id || !json.name) throw new Error('Invalid preset: missing id or name');
    setPresets((prev) => {
      const next = {
        ...prev,
        [json.id]: {
          meta: { id: json.id, name: json.name, author: json.author || 'Unknown', version: json.version || '1.0', description: json.description || '', builtIn: false },
          data: { quickref: json.quickref || [], wiki: json.wiki || [] },
          enabled: true,
        },
      };
      persistState(next);
      return next;
    });
  }, []);

  const removePreset = useCallback((id) => {
    setPresets((prev) => {
      if (prev[id]?.meta.builtIn) return prev;
      const next = { ...prev };
      delete next[id];
      persistState(next);
      return next;
    });
  }, []);

  const exportPreset = useCallback((id) => {
    const p = presets[id];
    if (!p) return;
    const json = { id, ...p.meta, ...p.data };
    delete json.builtIn;
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [presets]);

  const activePresets = useMemo(() =>
    Object.values(presets).filter((p) => p.enabled),
  [presets]);

  const activePresetNames = useMemo(() =>
    activePresets.map((p) => p.meta.name),
  [activePresets]);

  // Merged quick ref: official + active homebrew entries (tagged with source)
  const mergedQuickRef = useMemo(() => {
    const base = QUICK_REF.map((e) => ({ ...e, source: null }));
    for (const p of activePresets) {
      for (const entry of p.data.quickref) {
        base.push({ ...entry, source: p.meta.name });
      }
    }
    return base;
  }, [activePresets]);

  // Merged quick ref topics: official + any new topics from homebrew
  const mergedTopics = useMemo(() => {
    const topicSet = new Set(QUICK_REF_TOPICS);
    for (const p of activePresets) {
      for (const entry of p.data.quickref) {
        if (entry.topic) topicSet.add(entry.topic);
      }
    }
    return [...topicSet].sort();
  }, [activePresets]);

  // Merged wiki: official + active homebrew entries (tagged), with parentId subsections resolved
  const mergedWiki = useMemo(() => {
    const base = WIKI_ENTRIES.map((e) => ({ ...e, source: null, subsections: [] }));
    const baseById = {};
    for (const e of base) baseById[e.id] = e;

    for (const p of activePresets) {
      for (const entry of p.data.wiki) {
        if (entry.parentId && baseById[entry.parentId]) {
          // Subsection: attach to parent
          baseById[entry.parentId].subsections.push({ ...entry, source: p.meta.name });
        } else {
          // Standalone article
          base.push({ ...entry, source: p.meta.name, subsections: [] });
        }
      }
    }
    return base;
  }, [activePresets]);

  // Merged wiki categories
  const mergedCategories = useMemo(() => {
    const catSet = new Set(WIKI_CATEGORIES);
    for (const p of activePresets) {
      for (const entry of p.data.wiki) {
        if (entry.category && !entry.parentId) catSet.add(entry.category);
      }
    }
    return [...catSet];
  }, [activePresets]);

  return {
    presets,
    togglePreset,
    importPreset,
    removePreset,
    exportPreset,
    activePresetNames,
    hasActivePresets: activePresets.length > 0,
    mergedQuickRef,
    mergedTopics,
    mergedWiki,
    mergedCategories,
  };
}
