import { useState, useMemo } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { useTheme } from '../../../context/ThemeContext';
import { ThemeName } from '../../../constants/themes';
import ToolNavbar from '../../../components/ToolNavbar/ToolNavbar';
import Button from '../../../components/Button/Button';
import SkillBadge from '../../../components/SkillBadge/SkillBadge';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import TimelineEntry from '../../../components/TimelineEntry/TimelineEntry';
import Footer from '../../../components/Footer/Footer';
import styles from './ComponentGallery.module.css';

// ── Component registry ──

const CATEGORIES = [
  {
    name: 'Buttons',
    items: [
      { id: 'btn-outline', label: 'Outline Button' },
      { id: 'btn-primary', label: 'Primary Button' },
      { id: 'btn-secondary', label: 'Secondary Button' },
      { id: 'btn-danger', label: 'Danger Button' },
      { id: 'btn-dashed', label: 'Dashed Button' },
      { id: 'btn-ghost', label: 'Ghost Button' },
      { id: 'btn-raised', label: 'Raised Button' },
    ],
  },
  {
    name: 'Chips & Badges',
    items: [
      { id: 'skill-badge', label: 'Skill Badge' },
      { id: 'tag-chip', label: 'Tag Chip' },
      { id: 'filter-chip', label: 'Filter Chip' },
    ],
  },
  {
    name: 'Cards',
    items: [
      { id: 'project-card', label: 'Project Card' },
      { id: 'timeline-entry', label: 'Timeline Entry' },
      { id: 'tool-card', label: 'Tool Card' },
    ],
  },
  {
    name: 'Form Elements',
    items: [
      { id: 'text-input', label: 'Text Input' },
      { id: 'textarea', label: 'Textarea' },
      { id: 'select', label: 'Select' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'color-picker', label: 'Color Picker' },
      { id: 'slider', label: 'Slider' },
    ],
  },
  {
    name: 'Layout',
    items: [
      { id: 'footer', label: 'Footer' },
      { id: 'section-heading', label: 'Section Heading' },
      { id: 'divider', label: 'Divider' },
    ],
  },
];

// ── Settings definitions per component ──

const SETTINGS_DEFS = {
  'btn-outline': { label: { type: 'text', default: 'Click Me' }, small: { type: 'bool', default: false }, fullWidth: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-primary': { label: { type: 'text', default: 'Submit' }, small: { type: 'bool', default: false }, fullWidth: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-secondary': { label: { type: 'text', default: 'Cancel' }, small: { type: 'bool', default: false }, fullWidth: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-danger': { label: { type: 'text', default: 'Delete' }, small: { type: 'bool', default: false }, fullWidth: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-dashed': { label: { type: 'text', default: '+ Add Item' }, small: { type: 'bool', default: false }, fullWidth: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-ghost': { label: { type: 'text', default: 'Back to home' }, small: { type: 'bool', default: false }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'btn-raised': { label: { type: 'text', default: 'Print / Save as PDF' }, color: { type: 'select', options: ['primary', 'secondary', 'danger', 'none'], default: 'primary' }, disabled: { type: 'bool', default: false }, pressed: { type: 'bool', default: false }, hovered: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'skill-badge': { name: { type: 'text', default: 'React' }, icon: { type: 'text', default: '\u269B\uFE0F' }, hovered: { type: 'bool', default: false } },
  'tag-chip': { label: { type: 'text', default: 'JavaScript' }, hovered: { type: 'bool', default: false } },
  'filter-chip': { label: { type: 'text', default: 'Productivity' }, active: { type: 'bool', default: false }, hovered: { type: 'bool', default: false } },
  'project-card': {
    title: { type: 'text', default: 'Example Project' },
    description: { type: 'text', default: 'A sample project card showing the pop art style.' },
    techStack: { type: 'text', default: 'React, CSS Modules, Vite' },
    hovered: { type: 'bool', default: false },
  },
  'timeline-entry': {
    role: { type: 'text', default: 'Senior Flight Software Engineer' },
    company: { type: 'text', default: 'European Space Agency (ESA)' },
    period: { type: 'text', default: 'Mar 2025 \u2014 Present' },
    description: { type: 'text', default: 'Developing mission-critical guidance systems for deep space exploration vehicles.' },
  },
  'tool-card': {
    title: { type: 'text', default: 'My Tool' },
    description: { type: 'text', default: 'A useful developer utility.' },
    techStack: { type: 'text', default: 'React, Node.js' },
    hovered: { type: 'bool', default: false },
  },
  'text-input': { placeholder: { type: 'text', default: 'Enter text...' }, disabled: { type: 'bool', default: false }, value: { type: 'text', default: '' }, focused: { type: 'bool', default: false } },
  'textarea': { placeholder: { type: 'text', default: 'Write something...' }, rows: { type: 'number', default: 4, min: 2, max: 10 }, disabled: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'select': { options: { type: 'text', default: 'Option 1, Option 2, Option 3' }, disabled: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'checkbox': { label: { type: 'text', default: 'Enable feature' }, checked: { type: 'bool', default: false }, focused: { type: 'bool', default: false } },
  'color-picker': { value: { type: 'select', options: ['#E91E63', '#9C27B0', '#2196F3', '#4CAF50', '#FF9800', '#F44336', '#000000', '#ffffff'], default: '#E91E63' }, focused: { type: 'bool', default: false } },
  'slider': { min: { type: 'number', default: 0, min: 0, max: 100 }, max: { type: 'number', default: 100, min: 0, max: 1000 }, value: { type: 'number', default: 50, min: 0, max: 100 }, focused: { type: 'bool', default: false } },
  'footer': {},
  'section-heading': { text: { type: 'select', options: ['Projects', 'Skills', 'Experience', 'About Me', 'Tools', 'Blog'], default: 'Projects' } },
  'divider': {},
};

// ── Component renderers ──

function getStateClasses(id, settings) {
  const c = [];
  if (settings.hovered) {
    if (id === 'btn-raised') c.push(styles.forceHoverRaised);
    else if (id === 'btn-ghost') c.push(styles.forceHoverGhost);
    else if (id === 'btn-danger') c.push(styles.forceHoverDanger);
    else if (id === 'btn-dashed') c.push(styles.forceHoverDashed);
    else c.push(styles.forceHover);
  }
  if (settings.pressed) {
    if (id === 'btn-raised') c.push(styles.forcePressedRaised);
    else c.push(styles.forcePressed);
  }
  if (settings.focused) c.push(styles.forceFocus);
  return c.join(' ');
}

function renderComponent(id, settings) {
  const stateClass = getStateClasses(id, settings);
  switch (id) {
    case 'btn-outline': return <Button className={stateClass} disabled={settings.disabled} small={settings.small} fullWidth={settings.fullWidth}>{settings.label}</Button>;
    case 'btn-primary': return <Button className={stateClass} primary disabled={settings.disabled} small={settings.small} fullWidth={settings.fullWidth}>{settings.label}</Button>;
    case 'btn-secondary': return <Button className={stateClass} secondary disabled={settings.disabled} small={settings.small} fullWidth={settings.fullWidth}>{settings.label}</Button>;
    case 'btn-danger': return <Button className={stateClass} danger disabled={settings.disabled} small={settings.small} fullWidth={settings.fullWidth}>{settings.label}</Button>;
    case 'btn-dashed': return <Button className={stateClass} dashed disabled={settings.disabled} small={settings.small} fullWidth={settings.fullWidth}>{settings.label}</Button>;
    case 'btn-ghost': return <Button className={stateClass} ghost disabled={settings.disabled} small={settings.small}>{settings.label}</Button>;
    case 'btn-raised': return <Button className={stateClass} raised primary={settings.color === 'primary'} secondary={settings.color === 'secondary'} danger={settings.color === 'danger'} disabled={settings.disabled}>{settings.label}</Button>;
    case 'skill-badge': return <div className={settings.hovered ? styles.forceHoverBadge : ''}><SkillBadge skill={{ name: settings.name, icon: settings.icon }} /></div>;
    case 'tag-chip': return <span className={`${styles.demoTag} ${settings.hovered ? styles.forceHoverChip : ''}`}>{settings.label}</span>;
    case 'filter-chip': return <button className={`${styles.demoFilterChip} ${settings.active ? styles.demoFilterChipActive : ''} ${settings.hovered ? styles.forceHoverChip : ''}`}>{settings.label}</button>;
    case 'project-card': return <div className={`${styles.projectCardPreview} ${settings.hovered ? styles.forceHoverCard : ''}`}><ProjectCard project={{ slug: 'demo', title: settings.title, shortDescription: settings.description, techStack: settings.techStack.split(',').map(s => s.trim()), image: '' }} index={0} /></div>;
    case 'timeline-entry': return <TimelineEntry entry={{ role: settings.role, company: settings.company, period: settings.period, description: settings.description }} />;
    case 'tool-card': return (
      <div className={`${styles.demoToolCard} ${settings.hovered ? styles.forceHoverCard : ''}`}>
        <h2 className={styles.demoToolTitle}>{settings.title}</h2>
        <p className={styles.demoToolDesc}>{settings.description}</p>
        <div className={styles.demoToolTags}>{settings.techStack.split(',').map(t => <span key={t} className={styles.demoTag}>{t.trim()}</span>)}</div>
      </div>
    );
    case 'text-input': return <input className={`${styles.demoInput} ${settings.focused ? styles.forceFocusInput : ''}`} type="text" placeholder={settings.placeholder} value={settings.value} disabled={settings.disabled} readOnly />;
    case 'textarea': return <textarea className={`${styles.demoTextarea} ${settings.focused ? styles.forceFocusInput : ''}`} placeholder={settings.placeholder} rows={settings.rows} disabled={settings.disabled} readOnly />;
    case 'select': return <select className={`${styles.demoSelect} ${settings.focused ? styles.forceFocusInput : ''}`} disabled={settings.disabled}>{settings.options.split(',').map(o => <option key={o}>{o.trim()}</option>)}</select>;
    case 'checkbox': return <label className={`${styles.demoCheckbox} ${settings.focused ? styles.forceFocus : ''}`}><input type="checkbox" checked={settings.checked} readOnly />{settings.label}</label>;
    case 'color-picker': return <input type="color" value={settings.value} className={`${styles.demoColorPicker} ${settings.focused ? styles.forceFocusInput : ''}`} readOnly />;
    case 'slider': return <input type="range" min={settings.min} max={settings.max} value={settings.value} className={`${styles.demoSlider} ${settings.focused ? styles.forceFocusInput : ''}`} readOnly />;
    case 'footer': return <Footer />;
    case 'section-heading': return <h2 className={styles.demoSectionHeading}>{settings.text}</h2>;
    case 'divider': return <hr className={styles.demoDivider} />;
    default: return <p>Component not found</p>;
  }
}

function generateCode(id, settings) {
  switch (id) {
    case 'btn-outline': return `<Button${settings.small ? ' small' : ''}${settings.fullWidth ? ' fullWidth' : ''}${settings.disabled ? ' disabled' : ''}>${settings.label}</Button>`;
    case 'btn-primary': return `<Button primary${settings.small ? ' small' : ''}${settings.fullWidth ? ' fullWidth' : ''}${settings.disabled ? ' disabled' : ''}>${settings.label}</Button>`;
    case 'btn-secondary': return `<Button secondary${settings.small ? ' small' : ''}${settings.fullWidth ? ' fullWidth' : ''}${settings.disabled ? ' disabled' : ''}>${settings.label}</Button>`;
    case 'btn-danger': return `<Button danger${settings.small ? ' small' : ''}${settings.fullWidth ? ' fullWidth' : ''}${settings.disabled ? ' disabled' : ''}>${settings.label}</Button>`;
    case 'btn-dashed': return `<Button dashed${settings.small ? ' small' : ''}${settings.fullWidth ? ' fullWidth' : ''}>${settings.label}</Button>`;
    case 'btn-ghost': return `<Button ghost${settings.small ? ' small' : ''}>${settings.label}</Button>`;
    case 'btn-raised': return `<Button raised${settings.color !== 'none' ? ` ${settings.color}` : ''}>${settings.label}</Button>`;
    case 'skill-badge': return `<SkillBadge skill={{ name: "${settings.name}", icon: "${settings.icon}" }} />`;
    case 'tag-chip': return `<span className={styles.tag}>${settings.label}</span>`;
    case 'filter-chip': return `<button className={\`\${styles.filterChip}${settings.active ? ` \${styles.filterChipActive}` : ''}\`}>${settings.label}</button>`;
    case 'project-card': return `<ProjectCard project={{\n  title: "${settings.title}",\n  shortDescription: "${settings.description}",\n  techStack: [${settings.techStack.split(',').map(s => `"${s.trim()}"`).join(', ')}]\n}} />`;
    case 'timeline-entry': return `<TimelineEntry entry={{\n  role: "${settings.role}",\n  company: "${settings.company}",\n  period: "${settings.period}",\n  description: "${settings.description}"\n}} />`;
    case 'text-input': return `<input type="text" placeholder="${settings.placeholder}"${settings.disabled ? ' disabled' : ''} />`;
    case 'textarea': return `<textarea placeholder="${settings.placeholder}" rows={${settings.rows}}${settings.disabled ? ' disabled' : ''} />`;
    case 'select': return `<select${settings.disabled ? ' disabled' : ''}>\n${settings.options.split(',').map(o => `  <option>${o.trim()}</option>`).join('\n')}\n</select>`;
    case 'checkbox': return `<label><input type="checkbox"${settings.checked ? ' checked' : ''} />${settings.label}</label>`;
    case 'color-picker': return `<input type="color" value="${settings.value}" />`;
    case 'slider': return `<input type="range" min={${settings.min}} max={${settings.max}} value={${settings.value}} />`;
    case 'footer': return `<Footer />`;
    case 'section-heading': return `<h2 className={styles.heading}>${settings.text}</h2>`;
    case 'divider': return `<hr />`;
    default: return '';
  }
}

// ── Main component ──

export default function ComponentGallery() {
  const { t } = useI18n();
  const { themeName, setThemeName } = useTheme();
  const [activeId, setActiveId] = useState('btn-primary');
  const [expanded, setExpanded] = useState({});
  const [settings, setSettings] = useState({});

  const activeItem = CATEGORIES.flatMap(c => c.items).find(i => i.id === activeId);
  const settingsDef = SETTINGS_DEFS[activeId] || {};

  const currentSettings = useMemo(() => {
    const defaults = {};
    Object.entries(settingsDef).forEach(([key, def]) => { defaults[key] = def.default; });
    return { ...defaults, ...(settings[activeId] || {}) };
  }, [activeId, settings, settingsDef]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [activeId]: { ...(prev[activeId] || {}), [key]: value } }));
  };

  const toggleCategory = (name) => {
    setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleCopy = () => navigator.clipboard.writeText(generateCode(activeId, currentSettings));

  return (
    <main id="main-content" className={styles.page}>
      <ToolNavbar title="Component Gallery" backTo="/tools" backLabel={t('tools.backHome')} />

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav>
            {CATEGORIES.map(cat => (
              <div key={cat.name} className={styles.catGroup}>
                <button className={styles.catHeader} onClick={() => toggleCategory(cat.name)}>
                  <span className={styles.catChevron}>{expanded[cat.name] ? '\u25BC' : '\u25B6'}</span>
                  <span>{cat.name}</span>
                  <span className={styles.catCount}>{cat.items.length}</span>
                </button>
                {expanded[cat.name] && cat.items.map(item => (
                  <button
                    key={item.id}
                    className={`${styles.navItem} ${activeId === item.id ? styles.navItemActive : ''}`}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Preview */}
        <div className={styles.preview}>
          <div className={styles.previewLabel}>{activeItem?.label}</div>
          <div className={styles.previewStage}>
            {renderComponent(activeId, currentSettings)}
          </div>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeLabel}>JSX</span>
              <button className={styles.copyBtn} onClick={handleCopy}>Copy</button>
            </div>
            <pre className={styles.code}>{generateCode(activeId, currentSettings)}</pre>
          </div>
        </div>

        {/* Settings panel */}
        <aside className={styles.settingsPanel}>
          <div className={styles.settingsSection}>
            <span className={styles.settingsTitle}>Theme</span>
            <div className={styles.themeToggle}>
              <button className={`${styles.themeBtn} ${themeName === ThemeName.LIGHT ? styles.themeBtnActive : ''}`} onClick={() => setThemeName(ThemeName.LIGHT)}>Light</button>
              <button className={`${styles.themeBtn} ${themeName === ThemeName.DARK ? styles.themeBtnActive : ''}`} onClick={() => setThemeName(ThemeName.DARK)}>Dark</button>
            </div>
          </div>

          {Object.keys(settingsDef).length > 0 && (
            <div className={styles.settingsSection}>
              <span className={styles.settingsTitle}>Properties</span>
              {Object.entries(settingsDef).map(([key, def]) => (
                <label key={key} className={styles.settingRow}>
                  <span className={styles.settingLabel}>{key}</span>
                  {def.type === 'text' && (
                    <input className={styles.settingInput} type="text" value={currentSettings[key]} onChange={(e) => updateSetting(key, e.target.value)} />
                  )}
                  {def.type === 'bool' && (
                    <input type="checkbox" checked={currentSettings[key]} onChange={(e) => updateSetting(key, e.target.checked)} />
                  )}
                  {def.type === 'number' && (
                    <input className={styles.settingInput} type="number" min={def.min} max={def.max} value={currentSettings[key]} onChange={(e) => updateSetting(key, +e.target.value)} />
                  )}
                  {def.type === 'select' && (
                    <select className={styles.settingSelect} value={currentSettings[key]} onChange={(e) => updateSetting(key, e.target.value)}>
                      {def.options.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}
                </label>
              ))}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
