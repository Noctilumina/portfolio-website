import { useState, useCallback, useRef, useMemo } from 'react';
import ToolNavbar from '../../../components/ToolNavbar/ToolNavbar';
import { Routes } from '../../../constants/routes';
import TIPS from './tips';
import IMAGES from './images';
import styles from './CpRedLoadingScreen.module.css';

function randomIndex(exclude, max) {
  let idx;
  do { idx = Math.floor(Math.random() * max); } while (idx === exclude && max > 1);
  return idx;
}

function generateDeck() {
  return TIPS.map((_, i) => ({
    tipIdx: i,
    imgIdx: IMAGES.length ? Math.floor(Math.random() * IMAGES.length) : 0,
  }));
}

function DeckCard({ card, onChangeImage }) {
  const tip = TIPS[card.tipIdx];
  const img = IMAGES[card.imgIdx];
  return (
    <div className={styles.deckCard}>
      {img && <div className={styles.deckCardBg} style={{ backgroundImage: `url(${img})` }} />}
      <div className={styles.deckCardOverlay} />
      {/* Mini corner brackets */}
      <div className={`${styles.miniCorner} ${styles.miniTL}`} />
      <div className={`${styles.miniCorner} ${styles.miniTR}`} />
      <div className={`${styles.miniCorner} ${styles.miniBL}`} />
      <div className={`${styles.miniCorner} ${styles.miniBR}`} />
      <div className={styles.deckCardContent}>
        <span className={styles.deckCardLabel}>// {tip.category.toUpperCase()}</span>
        <p className={styles.deckCardTip}>{tip.text}</p>
      </div>
      {onChangeImage && (
        <select
          className={styles.deckCardSelect}
          value={card.imgIdx}
          onChange={(e) => onChangeImage(+e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          {IMAGES.map((_, i) => (
            <option key={i} value={i}>Image {i + 1}</option>
          ))}
        </select>
      )}
    </div>
  );
}

/* Print-only card (simplified, no interactivity) */
function PrintCard({ card }) {
  const tip = TIPS[card.tipIdx];
  const img = IMAGES[card.imgIdx];
  return (
    <div className={styles.printCard}>
      {img && <div className={styles.printCardBg} style={{ backgroundImage: `url(${img})` }} />}
      <div className={styles.printCardOverlay} />
      <div className={`${styles.miniCorner} ${styles.miniTL}`} />
      <div className={`${styles.miniCorner} ${styles.miniTR}`} />
      <div className={`${styles.miniCorner} ${styles.miniBL}`} />
      <div className={`${styles.miniCorner} ${styles.miniBR}`} />
      <div className={styles.printCardContent}>
        <span className={styles.printCardLabel}>// {tip.category.toUpperCase()}</span>
        <p className={styles.printCardTip}>{tip.text}</p>
      </div>
    </div>
  );
}

export default function CpRedLoadingScreen() {
  const [mode, setMode] = useState('single');
  const [tipIdx, setTipIdx] = useState(() => Math.floor(Math.random() * TIPS.length));
  const [imgIdx, setImgIdx] = useState(() => IMAGES.length ? Math.floor(Math.random() * IMAGES.length) : -1);
  const [visible, setVisible] = useState(true);
  const [deck, setDeck] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const screenRef = useRef(null);

  const randomize = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setTipIdx((prev) => randomIndex(prev, TIPS.length));
      if (IMAGES.length) setImgIdx((prev) => randomIndex(prev, IMAGES.length));
      setVisible(true);
    }, 300);
  }, []);

  const handleGenerateDeck = useCallback(() => {
    setDeck(generateDeck());
  }, []);

  const handleChangeCardImage = useCallback((cardIdx, imgIdx) => {
    setDeck((prev) => prev.map((c, i) => i === cardIdx ? { ...c, imgIdx } : c));
  }, []);

  const handlePrintSingle = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      @page { size: landscape; margin: 0; }
      @media print {
        [role="navigation"] { display: none !important; }
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    document.head.removeChild(style);
  }, []);

  const handlePrintDeck = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      @page { size: landscape; margin: 5mm; }
      @media print {
        [role="navigation"] { display: none !important; }
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    document.head.removeChild(style);
  }, []);

  const deckPages = useMemo(() => {
    if (!deck) return [];
    const pages = [];
    for (let i = 0; i < deck.length; i += cardsPerPage) {
      pages.push(deck.slice(i, i + cardsPerPage));
    }
    return pages;
  }, [deck, cardsPerPage]);

  const bgImage = IMAGES.length && imgIdx >= 0 ? IMAGES[imgIdx] : null;
  const tipPreview = (t) => t.text.length > 40 ? t.text.slice(0, 40) + '...' : t.text;

  return (
    <div className={styles.screen} ref={screenRef} data-mode={mode}>
      <ToolNavbar title="Loading Screen" backTo={Routes.TOOLS} backLabel="&larr; Tools">
        <button
          className={`${styles.modeBtn} ${mode === 'single' ? styles.modeBtnActive : ''}`}
          onClick={() => setMode('single')}
        >Screen</button>
        <button
          className={`${styles.modeBtn} ${mode === 'deck' ? styles.modeBtnActive : ''}`}
          onClick={() => setMode('deck')}
        >Deck</button>
        {mode === 'single' && (
          <>
            <select className={styles.navSelect} value={tipIdx} onChange={(e) => setTipIdx(+e.target.value)}>
              {TIPS.map((t, i) => (
                <option key={i} value={i}>[{t.category}] {tipPreview(t)}</option>
              ))}
            </select>
            {IMAGES.length > 0 && (
              <select className={styles.navSelect} value={imgIdx} onChange={(e) => setImgIdx(+e.target.value)}>
                {IMAGES.map((_, i) => <option key={i} value={i}>Image {i + 1}</option>)}
              </select>
            )}
            <button className={styles.printBtn} onClick={handlePrintSingle}>Save as PDF</button>
          </>
        )}
        {mode === 'deck' && (
          <>
            <button className={styles.printBtn} onClick={handleGenerateDeck}>
              {deck ? 'Regenerate' : 'Generate Deck'}
            </button>
            {deck && (
              <>
                <select className={styles.navSelect} value={cardsPerPage} onChange={(e) => setCardsPerPage(+e.target.value)}>
                  <option value={4}>2x2 (4/page)</option>
                  <option value={6}>2x3 (6/page)</option>
                  <option value={8}>2x4 (8/page)</option>
                </select>
                <button className={styles.printBtn} onClick={handlePrintDeck}>Print Deck</button>
              </>
            )}
          </>
        )}
      </ToolNavbar>

      {/* ── Single mode ── */}
      {mode === 'single' && (
        <>
          {bgImage && (
            <div
              className={`${styles.bgImage} ${visible ? styles.bgVisible : ''}`}
              style={{ backgroundImage: `url(${bgImage})` }}
            />
          )}
          <div className={styles.scanLines} />
          <div className={`${styles.hudCorner} ${styles.hudTL}`} />
          <div className={`${styles.hudCorner} ${styles.hudTR}`} />
          <div className={`${styles.hudCorner} ${styles.hudBL}`} />
          <div className={`${styles.hudCorner} ${styles.hudBR}`} />
          <div className={styles.imageArea} onClick={randomize}>
            <div className={styles.loadingBlock}>
              <span className={styles.loadingText}>LOADING</span>
              <div className={styles.loadingBarWrap}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.loadingSegment} ${i < Math.ceil(((tipIdx + 1) / TIPS.length) * 20) ? styles.loadingSegmentFilled : ''}`}
                  />
                ))}
              </div>
              <div className={styles.loadingMeta}>
                <span className={styles.loadingPct}>{Math.min(Math.round(((tipIdx + 1) / TIPS.length) * 100), 100)}%</span>
                <span className={styles.loadingStatus}>SYS.READY</span>
              </div>
            </div>
          </div>
          <div className={styles.tipBar} onClick={randomize}>
            <div className={styles.tipFrame}>
              <div className={`${styles.frameCorner} ${styles.frameTL}`} />
              <div className={`${styles.frameCorner} ${styles.frameTR}`} />
              <div className={`${styles.frameCorner} ${styles.frameBL}`} />
              <div className={`${styles.frameCorner} ${styles.frameBR}`} />
              <span className={styles.label}>// {TIPS[tipIdx].category.toUpperCase()}</span>
              <p className={`${styles.tip} ${visible ? styles.tipVisible : ''}`}>{TIPS[tipIdx].text}</p>
            </div>
            <span className={styles.prompt}>Click to randomize</span>
            <span className={styles.counter}>[{tipIdx + 1}/{TIPS.length}]</span>
          </div>
        </>
      )}

      {/* ── Deck mode ── */}
      {mode === 'deck' && (
        <div className={styles.deckView}>
          {!deck && (
            <div className={styles.deckEmpty}>
              <p>Click "Generate Deck" to create {TIPS.length} loading screen cards.</p>
              <p>Each tip gets a random background. You can change any card's image before printing.</p>
            </div>
          )}
          {deck && (
            <div className={styles.deckGrid}>
              {deck.map((card, i) => (
                <DeckCard
                  key={i}
                  card={card}
                  onChangeImage={(imgIdx) => handleChangeCardImage(i, imgIdx)}
                />
              ))}
            </div>
          )}

          {/* Hidden print layout */}
          {deck && (
            <div className={styles.deckPrint} data-cols="2" data-rows={cardsPerPage / 2}>
              {deckPages.map((page, pi) => (
                <div key={pi} className={styles.printPage} style={{ gridTemplateRows: `repeat(${cardsPerPage / 2}, 1fr)` }}>
                  {page.map((card, ci) => (
                    <PrintCard key={ci} card={card} />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
