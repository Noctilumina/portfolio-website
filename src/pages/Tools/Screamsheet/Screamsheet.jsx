import { useState, useCallback } from 'react';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import { useI18n } from '../../../i18n/I18nContext';
import styles from './Screamsheet.module.css';

// Random tables for content generation
const OUTLETS = [
  'NIGHT CITY NEWS',
  'WORLD NEWS SERVICE',
  'THE STREET',
  'CORPO BUZZ',
  'URBAN PULSE',
  'NEON CHRONICLE',
  'STREET INTEL',
  'THE EDGE',
];

const LEAD_TOPICS = [
  { title: 'CORPO EXEC FOUND DEAD IN LUXURY PENTHOUSE', keywords: ['netrunner', 'blackICE', 'murder'] },
  { title: 'GANG TURF WAR LEAVES DISTRICT IN FLAMES', keywords: ['NCPD', 'corpo intervention', 'bodies'] },
  { title: 'FIXER OPERATION EXPOSED BY ROGUE AI', keywords: ['netrunner', 'data breach', 'scandal'] },
  { title: 'UNDERGROUND CLINIC PERFORMING ILLEGAL CYBERWARE', keywords: ['ripper', 'black market', 'augmentation'] },
  { title: 'TRAUMA TEAM RESPONSE TIMES HIT ALL-TIME LOW', keywords: ['ems', 'corpo influence', 'delayed'] },
  { title: 'MEGACORP ANNOUNCES NEW SECURITY CONTRACT', keywords: ['corpo', 'enforcement', 'spending'] },
  { title: 'EDGERUNNER CREW PULLS OFF MAJOR HEIST', keywords: ['job', 'success', 'street cred'] },
  { title: 'NCPD RAIDS UNDERGROUND FIGHTING CIRCUIT', keywords: ['enforcement', 'illegal', 'violence'] },
];

const LEAD_SUBHEADS = [
  'Circumstances unclear; corpo involvement suspected',
  'Casualties mount as gangs vie for dominance',
  'Highly classified corpo files now in public domain',
  'Health violations extend beyond reported incidents',
  'Budget cuts blamed; corpo contractors step in',
  'Deal worth millions in security infrastructure',
  'Team vanishes from the grid; details scarce',
  'Officers injured; suspects still at large',
];

const LEAD_BODY_PARTS = [
  [
    'Sources close to the investigation suggest foul play. A preliminary autopsy reveals traces of military-grade neurotoxin.',
    'The district saw three separate firefights between rival syndicates. Corporate security contractors were observed at the scene.',
    'Authorities are pursuing multiple leads. The stolen data reportedly contains sensitive schematics and personnel files.',
    'Authorities say dozens of unlicensed procedures were performed. Several patients remain in critical condition.',
    'Response times in the outer districts have tripled in recent months. Private contractors now handle 40% of emergency services.',
    'The contract covers 15 city blocks and represents an unprecedented expansion of corporate policing authority.',
    'The job went off without a hitch. Corporate retaliation is anticipated.',
    'Three officers were hospitalized with severe injuries. Gang members escaped through the underground tunnels.',
  ],
  [
    'No suspects have been apprehended. The victim was connected to three different megacorporations.',
    'Displaced residents number in the hundreds. Infrastructure damage will take weeks to assess.',
    'Authorities have not released a suspect list. Specialists in cyberwarfare are examining the breach.',
    'The clinic is now under quarantine. Medical licensing boards are launching a formal investigation.',
    'Cheaper alternatives have forced consolidation of emergency services. Corporate overhead continues to rise.',
    'Implementation begins next quarter. Competing bids were reportedly rejected without review.',
    'Law enforcement has issued no warrants. The crew is presumed to be off-world.',
    'Organizers have gone into hiding. Further raids are expected.',
  ],
];

const SIDE_STORIES = [
  { headline: 'STREET MARKET PRICES SOAR', byline: 'Black market cyberware dealers report record demand.' },
  { headline: 'NEW VIRUS DETECTED ON NET', byline: 'Netrunners warn of aggressive ICE spreading through corporate networks.' },
  { headline: 'GANG RECRUITMENT SPIKE', byline: 'Youth unemployment drives record join rates among street crews.' },
  { headline: 'CORPO STOCK PRICES RALLY', byline: 'Security investments boost investor confidence.' },
  { headline: 'UNDERGROUND CLINIC BUSTED', byline: 'NCPD conducts surprise raid on illicit augmentation facility.' },
  { headline: 'FIXER GOES DARK', byline: 'Prominent job broker disappears without trace; associates unsure of whereabouts.' },
  { headline: 'CORPO EXEC DEFECTS', byline: 'High-ranking official flees with sensitive intelligence.' },
  { headline: 'STREET DOC UNDER INVESTIGATION', byline: 'Authorities probe ethics violations at renowned augmentation specialist.' },
];

const RUMORS = [
  'Heard there\'s a massive bounty on some edgerunner crew. Street sources say 6 figures.',
  'Corpo rumor: New AI security system going live next week. Netrunners better watch out.',
  'Clinic sources report new military-grade cyberware hitting the black market.',
  'NCPD insider says they\'re cracking down on gang activity in the outer districts.',
  'Fixer gossip: Some crew is hiring for a job. Don\'t know details, but pay sounds serious.',
  'Street chatter: Trauma Team response protocols changing. Something about corpo influence.',
  'Tech shops reporting surge in demand for military-grade upgrades.',
  'Word is a major gang leader just got murdered. Turf war might be coming.',
];

const CLASSIFIEDS = [
  'CYBER AUGMENTATION - Military grade. No questions asked. Msg 6723.',
  'HACKER NEEDED - Urgent. Quick job, high pay. Msg 4501.',
  'WEAPONS - Cold steel & smart guns. In stock now. Msg 8842.',
  'SAFE HOUSE - Hidden location. Month to month. Msg 7234.',
  'DATA SPECIALIST - Need discrete work done. References required. Msg 5601.',
  'TRANSPORT - Off-world shuttle available. Departure ASAP. Msg 9876.',
  'FIXER SERVICES - Job placement, connections, leads. Msg 2245.',
  'MEDICAL AID - No records, no trace. Dr. available 24/7. Msg 3389.',
];

const CORP_ADS = [
  { name: 'MILITECH', slogan: 'Trust the professionals. Trust MILITECH.' },
  { name: 'ARASAKA', slogan: 'Family. Honor. Future.' },
  { name: 'TRAUMA TEAM', slogan: 'When seconds count, we answer.' },
  { name: 'DYNAMIC OPTION', slogan: 'Building a better future.' },
  { name: 'KURODA-SYNTH', slogan: 'Excellence in augmentation.' },
  { name: 'RAVEN MICROCYBERNETICS', slogan: 'The edge you need.' },
  { name: 'ZETATECH', slogan: 'Innovation. Excellence. You.' },
  { name: 'NEOTECH SOLUTIONS', slogan: 'Smarter security. Smarter world.' },
];

const TONES = [
  { label: 'STREET', desc: 'Gritty & raw' },
  { label: 'CORPO', desc: 'Corporate spin' },
  { label: 'NEUTRAL', desc: 'Balanced reporting' },
];

const TONE_MODIFIERS = {
  STREET: {
    leadWord: ['BREAKING:', 'HEADS UP:', 'LISTEN UP:'],
    adjectives: ['brutal', 'vicious', 'devastating', 'shocking'],
  },
  CORPO: {
    leadWord: ['REPORT:', 'NOTICE:', 'STATEMENT:'],
    adjectives: ['unprecedented', 'concerning', 'significant', 'noteworthy'],
  },
  NEUTRAL: {
    leadWord: ['UPDATE:', 'NEWS:', 'REPORT:'],
    adjectives: ['reported', 'confirmed', 'documented', 'ongoing'],
  },
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function formatDate() {
  const now = new Date();
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

function generateContent(tone = 'NEUTRAL') {
  const toneData = TONE_MODIFIERS[tone];
  const leadStory = getRandomItem(LEAD_TOPICS);
  const subhead = getRandomItem(LEAD_SUBHEADS);
  const bodyPart1 = LEAD_BODY_PARTS[0][LEAD_TOPICS.indexOf(leadStory)] || getRandomItem(LEAD_BODY_PARTS[0]);
  const bodyPart2 = LEAD_BODY_PARTS[1][LEAD_TOPICS.indexOf(leadStory)] || getRandomItem(LEAD_BODY_PARTS[1]);

  const sideStories = getRandomItems(SIDE_STORIES, 3);
  const rumors = getRandomItems(RUMORS, 2);
  const classifieds = getRandomItems(CLASSIFIEDS, 3);
  const ad = getRandomItem(CORP_ADS);

  return {
    outlet: getRandomItem(OUTLETS),
    date: formatDate(),
    leadHeadline: leadStory.title,
    leadSubhead: subhead,
    leadBody: `${bodyPart1} ${bodyPart2}`,
    sideStories,
    rumors,
    classifieds,
    ad,
    tone,
  };
}

export default function Screamsheet() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const [content, setContent] = useState(() => generateContent());
  const [tone, setTone] = useState('NEUTRAL');

  const handleGenerate = useCallback(() => {
    setContent(generateContent(tone));
  }, [tone]);

  const handleToneChange = (newTone) => {
    setTone(newTone);
    setContent(generateContent(newTone));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('screamsheet.heading')}</h1>
        <p className={styles.subtitle}>{t('screamsheet.subtitle')}</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Tone</label>
          <div className={styles.toneButtons}>
            {TONES.map(t => (
              <button
                key={t.label}
                className={`${styles.toneBtn} ${tone === t.label ? styles.toneBtnActive : ''}`}
                onClick={() => handleToneChange(t.label)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.generateBtn} onClick={handleGenerate}>
            Generate New
          </button>
          <button className={styles.printBtn} onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>

      <div className={styles.screamsheet}>
        {/* MASTHEAD */}
        <div className={styles.masthead}>
          <div className={styles.mastName}>{content.outlet}</div>
          <div className={styles.mastDate}>{content.date}</div>
        </div>

        {/* LEAD STORY */}
        <div className={styles.leadStory}>
          <div className={styles.leadHeadline}>{content.leadHeadline}</div>
          <div className={styles.leadSubhead}>{content.leadSubhead}</div>
          <div className={styles.leadBody}>
            <span className={styles.dropCap}>{content.leadBody[0]}</span>
            {content.leadBody.slice(1)}
          </div>
        </div>

        <div className={styles.divider} />

        {/* SIDE STORIES & CLASSIFIEDS */}
        <div className={styles.sidePanels}>
          <div className={styles.sideStoriesCol}>
            {content.sideStories.map((story, i) => (
              <div key={i} className={styles.sideStory}>
                <div className={styles.sideHeadline}>{story.headline}</div>
                <div className={styles.sideByline}>{story.byline}</div>
              </div>
            ))}

            <div className={styles.divider} />

            <div className={styles.rumorBox}>
              <div className={styles.rumorTitle}>RUMORS</div>
              {content.rumors.map((rumor, i) => (
                <div key={i} className={styles.rumorItem}>{rumor}</div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.classifieds}>
              <div className={styles.classHeading}>CLASSIFIEDS</div>
              {content.classifieds.map((ad, i) => (
                <div key={i} className={styles.classItem}>{ad}</div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.corpAd}>
              <div className={styles.corpName}>{content.ad.name}</div>
              <div className={styles.corpSlogan}>{content.ad.slogan}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('screamsheet.backTools')}
        </button>
      </div>
    </main>
  );
}
