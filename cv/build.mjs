// Builds the ES and EN CVs from one source and prints them to PDF with headless Edge or Chrome.
// Usage: npm run cv
// Output: public/hector-almonte-cv-es.pdf, public/hector-almonte-cv-en.pdf
// The layout is deliberately plain (one column, real text, standard headings) so ATS parsers read it.

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'cv', 'out');

const contact = {
  phone: '+51 916 734 449',
  email: 'hectoralmoten@gmail.com',
  site: 'hectoralmonte.com',
  linkedin: 'linkedin.com/in/hector-almonte-788a4a212',
  github: 'github.com/HectorAlmonte',
};

const cv = {
  es: {
    title: 'Desarrollador Full Stack · Next.js, React, Node.js, .NET',
    location: 'Ilo, Perú (GMT−5) · Disponible para trabajo remoto',
    h: { summary: 'Resumen', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', education: 'Educación', languages: 'Idiomas' },
    summary:
      'Desarrollador Full Stack con más de 4 años construyendo sistemas en producción para operaciones industriales y agrícolas: materiales peligrosos, monitoreo GPS de flotas y seguridad industrial. Llevo productos de punta a punta (diseño, frontend, backend, base de datos y despliegue) con React, Next.js, Node.js, ASP.NET Core, PostgreSQL y SQL Server. Más de 3 años de trabajo remoto con autonomía y comunicación asíncrona.',
    jobs: [
      {
        role: 'Supervisor de Sistemas y Operaciones',
        org: 'Global Plus',
        meta: 'Ilo, Perú · Presencial',
        period: 'Dic 2025 – Presente',
        bullets: [
          'Diseñé y desarrollé un sistema de seguridad industrial multi-rol (supervisor, operador, auditor) con biblioteca de protocolos, inspecciones digitales, registro de incidentes con fotos y control de certificaciones.',
          'Lo publiqué como PWA con modo offline para las zonas del almacén sin WiFi, desplegada on-premise con Docker.',
          'Las auditorías de cumplimiento pasaron de días a minutos, con trazabilidad completa por rol y fecha.',
          'Superviso los sistemas tecnológicos y la operación de una empresa de almacenaje de materiales peligrosos.',
        ],
        tech: 'Next.js · TypeScript · PostgreSQL · Prisma · Docker · PWA',
      },
      {
        role: 'Desarrollador Full Stack Freelance',
        org: 'Independiente',
        meta: 'Remoto',
        period: 'Mar 2025 – Nov 2025',
        bullets: [
          'Desarrollé aplicaciones web a medida para clientes, desde la especificación hasta el despliegue.',
          'Construí gre-materiales, una PWA para consultar los 2,661 materiales de la guía GRE 2024: búsqueda offline en menos de 100 ms con IndexedDB y OCR de etiquetas por cámara que reduce cada consulta de 30–60 s a menos de 3 s.',
        ],
        tech: 'Next.js · TypeScript · PostgreSQL · Tesseract.js · PWA',
      },
      {
        role: 'Desarrollador Full Stack',
        org: 'Agrosoft S.A.C.',
        meta: 'Remoto',
        period: 'Dic 2021 – Feb 2025',
        bullets: [
          'Construí un sistema de monitoreo de flotas agrícolas en tiempo real con Mapbox: rutas históricas, posición actual, zonas de trabajo y alertas automáticas de detención y consumo anómalo de combustible.',
          'Desarrollé el backend en .NET C# que procesa telemetría GPS de alta frecuencia y los reportes por hacienda, maquinaria y período para más de 50 propietarios, que pasaron de semanales a tiempo real.',
          'Diseñé reportes analíticos sobre grandes volúmenes de datos en SQL Server con procedimientos almacenados y consultas optimizadas por rango de fechas.',
        ],
        tech: 'React · Node.js · ASP.NET Core · .NET C# · SQL Server · Mapbox',
      },
    ],
    projects: [
      {
        name: 'rindex',
        text: 'Plataforma de evaluación académica con 3 niveles de roles, exámenes temporizados y aleatorizados, puntaje ponderado por sección y analítica de rendimiento.',
        tech: 'Next.js · TypeScript · Prisma · PostgreSQL · NextAuth',
      },
    ],
    moreProjects: 'Más proyectos y casos de estudio en hectoralmonte.com',
    skills: [
      ['Lenguajes', 'TypeScript, JavaScript, C#, SQL'],
      ['Frontend', 'React, Next.js, TailwindCSS, PWA, Mapbox GL, Recharts'],
      ['Backend', 'Node.js, Express, ASP.NET Core, Entity Framework Core, APIs REST, JWT'],
      ['Datos', 'PostgreSQL, SQL Server, SQLite, Prisma, Drizzle'],
      ['Herramientas', 'Docker, Git, GitHub, Vercel, Tesseract.js (OCR)'],
    ],
    education: { degree: 'Bachiller en Ingeniería de Sistemas', school: 'Universidad José Carlos Mariátegui · Ilo, Perú', period: '2016 – 2021' },
    languages: 'Español: nativo · Inglés: intermedio (B1)',
  },
  en: {
    title: 'Full Stack Developer · Next.js, React, Node.js, .NET',
    location: 'Ilo, Peru (GMT−5) · Open to remote work',
    h: { summary: 'Summary', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', languages: 'Languages' },
    summary:
      'Full Stack Developer with 4+ years building production systems for industrial and agricultural operations: hazardous materials, GPS fleet monitoring and industrial safety. I take products end to end (design, front end, back end, database and deployment) with React, Next.js, Node.js, ASP.NET Core, PostgreSQL and SQL Server. 3+ years of remote work with autonomy and async communication.',
    jobs: [
      {
        role: 'Systems & Operations Supervisor',
        org: 'Global Plus',
        meta: 'Ilo, Peru · On-site',
        period: 'Dec 2025 – Present',
        bullets: [
          'Designed and built a multi-role industrial safety system (supervisor, operator, auditor) with a protocol library, digital inspections, incident logging with photos and certification tracking.',
          'Shipped it as an offline-capable PWA for warehouse zones without WiFi, deployed on-premise with Docker.',
          'Compliance audits went from days to minutes, with full traceability by role and timestamp.',
          'Supervise technology systems and operations at a hazardous materials storage company.',
        ],
        tech: 'Next.js · TypeScript · PostgreSQL · Prisma · Docker · PWA',
      },
      {
        role: 'Freelance Full Stack Developer',
        org: 'Self-employed',
        meta: 'Remote',
        period: 'Mar 2025 – Nov 2025',
        bullets: [
          'Built custom web applications for clients, from specification to deployment.',
          'Built gre-materiales, a PWA to look up the 2,661 materials in the ERG 2024 guide: offline search under 100 ms with IndexedDB and camera OCR of hazard labels that cuts each lookup from 30–60 s to under 3 s.',
        ],
        tech: 'Next.js · TypeScript · PostgreSQL · Tesseract.js · PWA',
      },
      {
        role: 'Full Stack Developer',
        org: 'Agrosoft S.A.C.',
        meta: 'Remote',
        period: 'Dec 2021 – Feb 2025',
        bullets: [
          'Built a real-time agricultural fleet monitoring system with Mapbox: route history, live position, work zones and automatic alerts for stops and abnormal fuel consumption.',
          'Developed the .NET C# back end that processes high-frequency GPS telemetry, and reports by farm, machine and period for 50+ owners, moving them from weekly to real time.',
          'Designed analytics reports over large data volumes in SQL Server with stored procedures and date-range query optimization.',
        ],
        tech: 'React · Node.js · ASP.NET Core · .NET C# · SQL Server · Mapbox',
      },
    ],
    projects: [
      {
        name: 'rindex',
        text: 'Academic assessment platform with 3 role levels, timed and randomized exams, weighted section scoring and performance analytics.',
        tech: 'Next.js · TypeScript · Prisma · PostgreSQL · NextAuth',
      },
    ],
    moreProjects: 'More projects and case studies at hectoralmonte.com',
    skills: [
      ['Languages', 'TypeScript, JavaScript, C#, SQL'],
      ['Front end', 'React, Next.js, TailwindCSS, PWA, Mapbox GL, Recharts'],
      ['Back end', 'Node.js, Express, ASP.NET Core, Entity Framework Core, REST APIs, JWT'],
      ['Data', 'PostgreSQL, SQL Server, SQLite, Prisma, Drizzle'],
      ['Tools', 'Docker, Git, GitHub, Vercel, Tesseract.js (OCR)'],
    ],
    education: { degree: "Bachelor's Degree in Systems Engineering", school: 'Universidad José Carlos Mariátegui · Ilo, Peru', period: '2016 – 2021' },
    languages: 'Spanish: native · English: intermediate (B1)',
  },
};

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const link = (text, href) => `<a href="${href}">${esc(text)}</a>`;

function html(lang) {
  const c = cv[lang];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>Hector Almonte — CV</title>
<style>
  @page { size: A4; margin: 11mm 14mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Calibri, Carlito, Arial, sans-serif; font-size: 10pt; line-height: 1.28; color: #1f1a1c; }
  a { color: inherit; text-decoration: none; }
  header { text-align: center; margin-bottom: 6pt; }
  h1 { margin: 0; font-size: 21pt; letter-spacing: .3pt; color: #2c0f1e; }
  .title { font-size: 11.5pt; font-weight: bold; color: #9c3b36; margin-top: 1pt; }
  .contact { font-size: 9.4pt; margin-top: 3pt; color: #333; }
  h2 { font-size: 10.6pt; text-transform: uppercase; letter-spacing: 1pt; color: #2c0f1e; border-bottom: 1.2pt solid #9c3b36; padding-bottom: 1.5pt; margin: 8pt 0 4pt; }
  p { margin: 0; }
  .job { margin-bottom: 5pt; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; gap: 10pt; }
  .role { font-weight: bold; }
  .period { white-space: nowrap; font-weight: bold; }
  .meta { color: #555; font-style: italic; }
  ul { margin: 2pt 0 2pt 0; padding-left: 13pt; }
  li { margin: 0.8pt 0; }
  .tech { font-size: 9.3pt; color: #444; }
  .tech b { color: #1f1a1c; }
  .skills { display: grid; grid-template-columns: max-content 1fr; gap: 1.5pt 10pt; }
  .skills dt { font-weight: bold; }
  .skills dd { margin: 0; }
  .more { font-size: 9.3pt; color: #444; margin-top: 2pt; }
</style>
</head>
<body>
<header>
  <h1>Hector Gabriel Almonte Salazar</h1>
  <div class="title">${esc(c.title)}</div>
  <div class="contact">${esc(c.location)}</div>
  <div class="contact">
    ${esc(contact.phone)} · ${link(contact.email, `mailto:${contact.email}`)} · ${link(contact.site, `https://${contact.site}`)}<br>
    ${link(contact.linkedin, `https://www.${contact.linkedin}`)} · ${link(contact.github, `https://${contact.github}`)}
  </div>
</header>

<h2>${c.h.summary}</h2>
<p>${esc(c.summary)}</p>

<h2>${c.h.experience}</h2>
${c.jobs.map(j => `<div class="job">
  <div class="row"><span><span class="role">${esc(j.role)}</span> — ${esc(j.org)} <span class="meta">· ${esc(j.meta)}</span></span><span class="period">${esc(j.period)}</span></div>
  <ul>${j.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
  <div class="tech"><b>Stack:</b> ${esc(j.tech)}</div>
</div>`).join('\n')}

<h2>${c.h.projects}</h2>
${c.projects.map(p => `<div class="job"><p><span class="role">${esc(p.name)}</span> — ${esc(p.text)}</p><div class="tech"><b>Stack:</b> ${esc(p.tech)}</div></div>`).join('\n')}
<p class="more">${link(c.moreProjects, `https://${contact.site}`)}</p>

<h2>${c.h.skills}</h2>
<dl class="skills">${c.skills.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>

<h2>${c.h.education} · ${c.h.languages}</h2>
<div class="row"><span><span class="role">${esc(c.education.degree)}</span> — ${esc(c.education.school)}</span><span class="period">${esc(c.education.period)}</span></div>
<p>${esc(c.languages)}</p>
</body>
</html>`;
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const found = candidates.find(p => existsSync(p));
  if (!found) throw new Error('No Edge/Chrome found. Set CHROME_PATH to a Chromium browser.');
  return found;
}

mkdirSync(outDir, { recursive: true });
const browser = findBrowser();

for (const lang of ['es', 'en']) {
  const htmlPath = resolve(outDir, `cv-${lang}.html`);
  const pdfPath = resolve(root, 'public', `hector-almonte-cv-${lang}.pdf`);
  writeFileSync(htmlPath, html(lang));
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });
  console.log(`✓ ${lang}: ${pdfPath}`);
}
