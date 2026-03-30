import { useState, useRef } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import CvPreview from './CvPreview';
import styles from './CvBuilder.module.css';

const EMPTY_EXPERIENCE = { role: '', company: '', period: '', description: '', clients: [] };
const EMPTY_CLIENT = { company: '', period: '', skills: '' };
const EMPTY_EDUCATION = { role: '', company: '', period: '', description: '' };
const EMPTY_SKILL_CATEGORY = { category: '', skills: '' };

const BLANK_DATA = {
  name: '',
  role: '',
  photoUrl: '',
  photoFile: null,
  aboutText: '',
  accentColor: '#E91E63',
  contact: { email: '', location: '', linkedin: '', github: '', website: '' },
  skillCategories: [{ category: '', skills: '' }],
  experience: [{ ...EMPTY_EXPERIENCE }],
  education: [{ ...EMPTY_EDUCATION }],
};

const COLOR_PRESETS = [
  { color: '#E91E63', name: 'Pink' },
  { color: '#9C27B0', name: 'Purple' },
  { color: '#3F51B5', name: 'Indigo' },
  { color: '#2196F3', name: 'Blue' },
  { color: '#009688', name: 'Teal' },
  { color: '#4CAF50', name: 'Green' },
  { color: '#FF9800', name: 'Orange' },
  { color: '#F44336', name: 'Red' },
  { color: '#607D8B', name: 'Slate' },
  { color: '#795548', name: 'Brown' },
  { color: '#1a1a1a', name: 'Black' },
  { color: '#37474F', name: 'Charcoal' },
];

const PREFILLED_DATA = {
  name: 'Iris Peters',
  role: 'Fullstack Developer',
  photoUrl: '',
  photoFile: null,
  aboutText: 'Fullstack developer with 4+ years of experience in web applications, cloud infrastructure, and CI/CD pipelines. Broad experience in diverse sectors. Outside of work, an active HEMA practitioner (sword fighting), Cyberpunk Red GM, and hobbyist game developer.',
  accentColor: '#E91E63',
  contact: {
    email: 'irispeters05@gmail.com',
    location: "'s-Hertogenbosch, NL",
    linkedin: 'linkedin.com/in/iris-peters-421774158',
    github: 'github.com/Noctilumina',
    website: 'noctilumina.github.io/portfolio-website',
  },
  skillCategories: [
    { category: 'Frontend', skills: 'Flutter, Ember.js, React / React Native, Angular, TypeScript, JavaScript, Lit, Gatsby, HTML / CSS, jQuery' },
    { category: 'Backend', skills: 'C# / .NET, ASP.NET, Entity Framework, SQL / T-SQL, SQL Server, REST APIs, PHP, Java' },
    { category: 'DevOps & Tools', skills: 'Azure, Azure DevOps, Azure Functions, Bicep / IaC, Docker, CI/CD, Git / GitHub, Storyblok, Unity3D, Godot' },
    { category: 'Methodology & Soft Skills', skills: 'Scrum, Kanban, DevOps, IT Consulting, TDD & DDD' },
    { category: 'Languages', skills: 'Dutch (native), English (fluent)' },
  ],
  experience: [
    { role: 'Fullstack Medior Developer', company: 'Gynzy', period: 'May 2025 — Present', description: 'Building educational software as a fullstack developer. Working with Flutter for cross-platform development and Ember.js for web applications in a hybrid team environment.', clients: [] },
    {
      role: 'IT Consultant', company: 'Info Support', period: 'Feb 2021 — May 2025',
      description: 'Consulted as a DevOps engineer across multiple client organizations. Mainly focussed on the Microsoft techstack with JavaScript framework frontends.',
      clients: [
        { company: 'NutriControl B.V.', period: 'Aug 2024 — May 2025', skills: 'C#, jQuery, AngularJS, Azure DevOps, Microsoft Azure' },
        { company: 'Agrifac Machinery B.V.', period: 'Aug 2023 — May 2025', skills: 'C#, Azure Functions, Azure DevOps, Microsoft Azure' },
        { company: 'Air Miles', period: 'Mar 2023 — May 2025', skills: 'C#, Microsoft Azure, Bicep' },
        { company: 'Delicia', period: 'Aug 2021 — May 2025', skills: 'C#, Bicep, ASP.NET, Azure DevOps' },
        { company: 'Moba Group', period: 'Aug 2021 — May 2025', skills: 'C#, Bicep, React.js, Azure DevOps, SQL Server' },
        { company: 'MetrixLab', period: 'Jun 2020 — Aug 2021', skills: 'C#, .NET Core, TypeScript, Microsoft SQL Server, Azure DevOps' },
      ],
    },
    { role: 'AR Development Intern', company: 'ICT Group', period: 'Sep 2020 — Jan 2021', description: 'Developed virtual screens in augmented reality on the Microsoft HoloLens 2 for remote office workers. Built with Unity3D, C#, UWP, and the Mixed Reality Toolkit (MRTK).', clients: [] },
    { role: 'Junior Software Developer', company: 'OrcaGroup Communication Solutions', period: 'Mar 2019 — Aug 2019', description: 'Developed software solutions at a communication technology company, gaining hands-on experience with professional development workflows and team collaboration.', clients: [] },
    { role: 'React Native Developer Intern', company: 'Colours', period: 'Sep 2018 — Jan 2019', description: 'Built cross-platform mobile applications using React Native during an internship at a digital agency in \'s-Hertogenbosch.', clients: [] },
  ],
  education: [
    { role: 'BASc Computer Software Engineering', company: 'Avans Hogeschool', period: '2017 — 2021', description: 'Bachelor of Applied Science in Computer Software Engineering. Built a strong foundation in software architecture, web development, and agile project management.' },
    { role: 'Nature & Technology', company: 'ds. Pierson College', period: '2011 — 2015', description: '' },
  ],
};

export default function CvBuilder() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [data, setData] = useState(PREFILLED_DATA);
  const [tab, setTab] = useState('edit');
  const previewRef = useRef(null);
  const fileInputRef = useRef(null);

  const update = (path, value) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const addItem = (path, template) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const arr = path.split('.').reduce((o, k) => o[k], next);
      arr.push(JSON.parse(JSON.stringify(template)));
      return next;
    });
  };

  const removeItem = (path, index) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const arr = path.split('.').reduce((o, k) => o[k], next);
      arr.splice(index, 1);
      return next;
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setData((prev) => ({ ...prev, photoUrl: ev.target.result, photoFile: file.name }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setData((prev) => ({ ...prev, photoUrl: '', photoFile: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleClear = () => {
    setData(JSON.parse(JSON.stringify(BLANK_DATA)));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handlePrint = () => window.print();

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('cvBuilder.heading')}</h1>
        <p className={styles.subtitle}>{t('cvBuilder.subtitle')}</p>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'edit' ? styles.tabActive : ''}`}
          onClick={() => setTab('edit')}
        >
          {t('cvBuilder.editTab')}
        </button>
        <button
          className={`${styles.tab} ${tab === 'preview' ? styles.tabActive : ''}`}
          onClick={() => setTab('preview')}
        >
          {t('cvBuilder.previewTab')}
        </button>
      </div>

      <div className={styles.workspace}>
        {/* Editor */}
        <div className={`${styles.editor} ${tab === 'edit' ? styles.panelVisible : styles.panelHidden}`}>
          <div className={styles.editorToolbar}>
            <button className={styles.clearBtn} onClick={handleClear}>
              {t('cvBuilder.clearAll')}
            </button>
          </div>

          {/* Personal Info */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('cvBuilder.personalInfo')}</legend>
            <label className={styles.label}>
              {t('cvBuilder.fullName')}
              <input className={styles.input} value={data.name} onChange={(e) => update('name', e.target.value)} />
            </label>
            <label className={styles.label}>
              {t('cvBuilder.jobTitle')}
              <input className={styles.input} value={data.role} onChange={(e) => update('role', e.target.value)} />
            </label>

            {/* Photo upload */}
            <div className={styles.label}>
              {t('cvBuilder.photo')}
              <div className={styles.photoUploadArea}>
                {data.photoUrl ? (
                  <div className={styles.photoPreviewRow}>
                    <img src={data.photoUrl} alt="" className={styles.photoThumb} />
                    <span className={styles.photoFileName}>{data.photoFile || t('cvBuilder.photoFromUrl')}</span>
                    <button className={styles.removeBtn} onClick={removePhoto} aria-label="Remove photo">x</button>
                  </div>
                ) : (
                  <div className={styles.photoActions}>
                    <button className={styles.uploadBtn} onClick={() => fileInputRef.current?.click()}>
                      {t('cvBuilder.uploadPhoto')}
                    </button>
                    <span className={styles.photoOr}>{t('cvBuilder.or')}</span>
                    <input
                      className={styles.input}
                      placeholder={t('cvBuilder.pasteUrl')}
                      onBlur={(e) => e.target.value && update('photoUrl', e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && e.target.value && update('photoUrl', e.target.value)}
                    />
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className={styles.hiddenFileInput}
                  tabIndex={-1}
                />
              </div>
            </div>

            <label className={styles.label}>
              {t('cvBuilder.aboutYou')}
              <textarea className={styles.textarea} rows={3} value={data.aboutText} onChange={(e) => update('aboutText', e.target.value)} />
            </label>

            {/* Accent Color with presets */}
            <div className={styles.label}>
              {t('cvBuilder.accentColor')}
              <div className={styles.colorSection}>
                <div className={styles.colorPresets}>
                  {COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.color}
                      className={`${styles.colorSwatch} ${data.accentColor === preset.color ? styles.colorSwatchActive : ''}`}
                      style={{ background: preset.color }}
                      onClick={() => update('accentColor', preset.color)}
                      aria-label={preset.name}
                      title={preset.name}
                    />
                  ))}
                </div>
                <div className={styles.colorRow}>
                  <input type="color" value={data.accentColor} onChange={(e) => update('accentColor', e.target.value)} className={styles.colorPicker} />
                  <span className={styles.colorValue}>{data.accentColor}</span>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Contact */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('cvBuilder.contactInfo')}</legend>
            <label className={styles.label}>
              {t('cvBuilder.emailLabel')}
              <input className={styles.input} type="email" value={data.contact.email} onChange={(e) => update('contact.email', e.target.value)} />
            </label>
            <label className={styles.label}>
              {t('cvBuilder.location')}
              <input className={styles.input} value={data.contact.location} onChange={(e) => update('contact.location', e.target.value)} />
            </label>
            <label className={styles.label}>
              LinkedIn
              <input className={styles.input} value={data.contact.linkedin} onChange={(e) => update('contact.linkedin', e.target.value)} placeholder="linkedin.com/in/..." />
            </label>
            <label className={styles.label}>
              GitHub
              <input className={styles.input} value={data.contact.github} onChange={(e) => update('contact.github', e.target.value)} placeholder="github.com/..." />
            </label>
            <label className={styles.label}>
              {t('cvBuilder.website')}
              <input className={styles.input} value={data.contact.website} onChange={(e) => update('contact.website', e.target.value)} placeholder="yoursite.com" />
            </label>
          </fieldset>

          {/* Skills */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('cvBuilder.skills')}</legend>
            {data.skillCategories.map((cat, i) => (
              <div key={i} className={styles.repeaterItem}>
                <div className={styles.repeaterRow}>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.categoryName')}
                    <input className={styles.input} value={cat.category} onChange={(e) => update(`skillCategories.${i}.category`, e.target.value)} />
                  </label>
                  <button className={styles.removeBtn} onClick={() => removeItem('skillCategories', i)} aria-label="Remove">x</button>
                </div>
                <label className={styles.label}>
                  {t('cvBuilder.skillsList')}
                  <input className={styles.input} value={cat.skills} onChange={(e) => update(`skillCategories.${i}.skills`, e.target.value)} placeholder={t('cvBuilder.skillsPlaceholder')} />
                </label>
              </div>
            ))}
            <button className={styles.addBtn} onClick={() => addItem('skillCategories', EMPTY_SKILL_CATEGORY)}>
              + {t('cvBuilder.addCategory')}
            </button>
          </fieldset>

          {/* Experience */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('cvBuilder.experience')}</legend>
            {data.experience.map((exp, i) => (
              <div key={i} className={styles.repeaterItem}>
                <div className={styles.repeaterRow}>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.roleTitle')}
                    <input className={styles.input} value={exp.role} onChange={(e) => update(`experience.${i}.role`, e.target.value)} />
                  </label>
                  <button className={styles.removeBtn} onClick={() => removeItem('experience', i)} aria-label="Remove">x</button>
                </div>
                <div className={styles.row}>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.company')}
                    <input className={styles.input} value={exp.company} onChange={(e) => update(`experience.${i}.company`, e.target.value)} />
                  </label>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.period')}
                    <input className={styles.input} value={exp.period} onChange={(e) => update(`experience.${i}.period`, e.target.value)} placeholder="Jan 2020 — Present" />
                  </label>
                </div>
                <label className={styles.label}>
                  {t('cvBuilder.description')}
                  <textarea className={styles.textarea} rows={2} value={exp.description} onChange={(e) => update(`experience.${i}.description`, e.target.value)} />
                </label>

                {exp.clients.length > 0 && (
                  <div className={styles.clientsSection}>
                    <span className={styles.clientsLabel}>{t('cvBuilder.clients')}</span>
                    {exp.clients.map((client, j) => (
                      <div key={j} className={styles.clientEntry}>
                        <div className={styles.repeaterRow}>
                          <input className={`${styles.input} ${styles.flexGrow}`} value={client.company} onChange={(e) => update(`experience.${i}.clients.${j}.company`, e.target.value)} placeholder={t('cvBuilder.clientName')} />
                          <input className={`${styles.input} ${styles.flexGrow}`} value={client.period} onChange={(e) => update(`experience.${i}.clients.${j}.period`, e.target.value)} placeholder={t('cvBuilder.period')} />
                          <button className={styles.removeBtn} onClick={() => removeItem(`experience.${i}.clients`, j)} aria-label="Remove">x</button>
                        </div>
                        <input className={styles.input} value={client.skills} onChange={(e) => update(`experience.${i}.clients.${j}.skills`, e.target.value)} placeholder={t('cvBuilder.clientSkillsPlaceholder')} />
                      </div>
                    ))}
                  </div>
                )}
                <button className={styles.addBtnSmall} onClick={() => addItem(`experience.${i}.clients`, EMPTY_CLIENT)}>
                  + {t('cvBuilder.addClient')}
                </button>
              </div>
            ))}
            <button className={styles.addBtn} onClick={() => addItem('experience', EMPTY_EXPERIENCE)}>
              + {t('cvBuilder.addExperience')}
            </button>
          </fieldset>

          {/* Education */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t('cvBuilder.education')}</legend>
            {data.education.map((edu, i) => (
              <div key={i} className={styles.repeaterItem}>
                <div className={styles.repeaterRow}>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.degree')}
                    <input className={styles.input} value={edu.role} onChange={(e) => update(`education.${i}.role`, e.target.value)} />
                  </label>
                  <button className={styles.removeBtn} onClick={() => removeItem('education', i)} aria-label="Remove">x</button>
                </div>
                <div className={styles.row}>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.institution')}
                    <input className={styles.input} value={edu.company} onChange={(e) => update(`education.${i}.company`, e.target.value)} />
                  </label>
                  <label className={`${styles.label} ${styles.flexGrow}`}>
                    {t('cvBuilder.period')}
                    <input className={styles.input} value={edu.period} onChange={(e) => update(`education.${i}.period`, e.target.value)} />
                  </label>
                </div>
                <label className={styles.label}>
                  {t('cvBuilder.description')}
                  <textarea className={styles.textarea} rows={2} value={edu.description} onChange={(e) => update(`education.${i}.description`, e.target.value)} />
                </label>
              </div>
            ))}
            <button className={styles.addBtn} onClick={() => addItem('education', EMPTY_EDUCATION)}>
              + {t('cvBuilder.addEducation')}
            </button>
          </fieldset>
        </div>

        {/* Preview */}
        <div className={`${styles.preview} ${tab === 'preview' ? styles.panelVisible : styles.panelHidden}`}>
          <div className={styles.previewActions}>
            <button className={styles.printBtn} onClick={handlePrint}>
              {t('cvBuilder.print')}
            </button>
          </div>
          <div ref={previewRef}>
            <CvPreview data={data} />
          </div>
        </div>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('cvBuilder.backTools')}
        </button>
      </div>
    </main>
  );
}
