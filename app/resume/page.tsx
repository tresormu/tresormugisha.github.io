import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const experience = [
  {
    role: 'Backend Developer (Remote)',
    company: 'Scrimba',
    location: 'Norway (Remote)',
    period: '2024 – 2025 (6 months)',
    bullets: [
      'Delivered production-grade REST APIs with JWT authentication, refresh token, and declarative route protection.',
      'Engineered MongoDB schemas with indexing and constraints, eliminating orphaned records.',
      'Built reusable middleware pipeline for logging, error normalization, and input sanitization across all endpoints.',
      'Collaborated via GitHub PR workflows, delivering features on schedule with zero support tickets from frontend.',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    role: 'Full Stack Developer & Lead',
    company: 'KLab Organization',
    location: 'Kigali, Rwanda',
    period: 'Oct 2025 – Feb 2026',
    bullets: [
      'Led backend development of ShieldKids (child safety app), owning architecture, sprint execution, and stakeholder demos.',
      'Implemented persistent WebSockets for real-time location tracking and geofence breach alerts.',
      'Architected RESTful APIs covering authentication, device registration, app controls, and screen time enforcement.',
      'Managed all PR reviews, resolved integration conflicts, and delivered sprints from planning to demo.',
    ],
    tech: ['Kotlin', 'WebSockets', 'REST APIs', 'Git', 'GitHub', 'Trello'],
  },
  {
    role: 'Backend Engineer (Remote)',
    company: 'MP Circle Ltd',
    location: 'South Africa (Remote)',
    period: 'Mar 2026 – Apr 2026',
    bullets: [
      'Architected NestJS backend services with REST contracts, typed responses, and unified error handling.',
      'Produced enterprise grade Swagger/OpenAPI docs enabling self-service client integration.',
      'Conducted end-to-end API testing using Postman tool.',
      'Troubleshot Docker containerized environments to ensure builds in development stage.',
    ],
    tech: ['NestJS', 'TypeScript', 'Docker', 'Swagger', 'GitHub'],
  },
]

const education = [
  {
    degree: 'BSc Software Engineering',
    institution: 'African Leadership University',
    location: 'Kigali, Rwanda',
    period: 'Expected Graduation: July 2028',
    details: [
      'Focus areas: Software architecture, backend systems, database management, and engineering leadership.',
      'Coursework: Database Systems, Data Structures & Algorithms, Software Engineering Principles.',
    ],
  },
]

const projectsList = [
  {
    name: 'IkiminaPass',
    role: 'Backend & Project Lead',
    description: 'ROSCA Platform for Rwanda – Digitised community savings groups (Ibimina). Built on NestJS, TypeScript, and PostgreSQL with Prisma ORM. Handles automated contribution tracking, USSD interface, and SMS/Push notifications.',
  },
  {
    name: 'MamaCare',
    role: 'Backend Developer & Project Lead',
    description: 'Maternal Health Platform – Developed a maternal health tracking system with RESTful APIs, pregnancy milestone logs, and real-time appointment alerts via FCM push notifications.',
  },
  {
    name: 'TheYouthContest',
    role: 'Full-Stack Developer',
    description: 'Debate Championship Platform – Created role-based tournament software managing bracket scheduling, speaker scoring, and online registration using Node.js and React.',
  },
  {
    name: 'Job Portal',
    role: 'Backend & Project Lead',
    description: 'Recruitment Platform – Engineered backend user workflows separating employers and job seekers with MongoDB schema validation, role-based controls, and JWT routes.',
  },
  {
    name: 'BDifferent',
    role: 'Full-Stack Developer',
    description: 'E-commerce platform – Built a full-stack store API utilizing Node.js/Express, MongoDB relationships, image upload, and Zod validator middleware.',
  },
]

const skills = {
  languages: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML/CSS'],
  backend: ['Node.js', 'NestJS', 'Express.js', 'REST API Design', 'WebSockets', 'JWT Authentication', 'Middleware'],
  databases: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'MySQL', 'TypeORM', 'Schema Design', 'Query Optimisation'],
  devOps: ['Docker', 'Git', 'GitHub', 'Postman', 'Swagger', 'FCM', 'Linux'],
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
}

const certifications = [
  'KLab Training Compilation Certificate',
]

const awards = [
  'KLab Hackathon Winner - MamaCare Project',
]

const extracurricular = [
  'KLab Incubation Program - Full Stack Development',
  'Open Source Contributions on GitHub',
]

const interests = [
  'Building real-time systems',
  'Contributing to open source',
  'Backend tooling automation',
  'Project Leading',
  'DevOps & CI/CD Pipelines',
]

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />
      
      {/* Page Shell */}
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-35"></div>
        
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-20">
          
          {/* Header Panel */}
          <div className="paper-panel p-6 sm:p-8 mb-10">
            <p className="section-label">Professional snapshot</p>
            <div className="mb-4 sm:mb-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#5F7A61]" aria-hidden="true"></div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Resume</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
                View my professional experience and qualifications, or download a PDF copy.
              </p>
            </div>
          </div>

          {/* Download Panel */}
          <div className="mb-12 p-6 paper-panel bg-[#EEF3EE]/80 section-divider">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text w-10 h-10 text-[#5F7A61] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Download Resume</h2>
                  <p className="text-sm text-gray-600">Get a PDF copy of my complete resume</p>
                </div>
              </div>
              <a
                href="/Tresor_Mugisha_Resume.docx.pdf"
                download
                className="inline-flex items-center px-5 py-2.5 bg-[#5F7A61] text-white font-medium rounded-lg hover:bg-[#4F6551] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5F7A61] focus:ring-offset-2 cursor-pointer shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download mr-2 w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Download PDF
              </a>
            </div>
          </div>

          {/* Printable Resume paper-panel */}
          <div className="paper-panel p-8">
            <header className="border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Tresor Mugisha</h1>
              <p className="mt-2 text-lg text-[#4F6551] font-medium">Software Engineer · Backend Developer</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <a
                  href="https://linkedin.com/in/mugisha-tresor-73a876390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4F6551] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/tresormu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4F6551] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </header>

            {/* Summary */}
            <section className="mb-8" aria-label="Professional summary">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Summary</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Software Engineer specializing in backend development, with experience in building and deploying production-grade SaaS products. I focus on creating reliable systems, writing maintainable code, and being a diligent team member.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <article key={idx} className="note-card p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <span className="text-xs text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{edu.institution} · {edu.location}</p>
                    <ul className="list-disc list-inside text-gray-600 text-xs mt-2 space-y-1">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <article key={idx} className="note-card p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{exp.company} · {exp.location}</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Relevant Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Relevant Projects</h2>
              <div className="space-y-4">
                {projectsList.map((project, idx) => (
                  <article key={idx} className="note-card p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                      <span className="text-xs text-accent font-medium">{project.role}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="note-card p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Languages</h3>
                  <p className="text-gray-600 text-sm">{skills.languages.join(', ')}</p>
                </div>
                <div className="note-card p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Backend Frameworks</h3>
                  <p className="text-gray-600 text-sm">{skills.backend.join(', ')}</p>
                </div>
                <div className="note-card p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Databases &amp; ORMs</h3>
                  <p className="text-gray-600 text-sm">{skills.databases.join(', ')}</p>
                </div>
                <div className="note-card p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">DevOps &amp; Tools</h3>
                  <p className="text-gray-600 text-sm">{skills.devOps.join(', ')}</p>
                </div>
                <div className="note-card p-4 col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Frontend</h3>
                  <p className="text-gray-600 text-sm">{skills.frontend.join(', ')}</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            {certifications.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Awards */}
            {awards.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Awards &amp; Achievements</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {awards.map((award, idx) => (
                    <li key={idx}>{award}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Languages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>English (Professional Working Proficiency)</li>
                <li>Kinyarwanda (Native)</li>
                <li>French (Elementary Proficiency)</li>
              </ul>
            </section>

            {/* Extracurriculars */}
            {extracurricular.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Extracurricular Activities</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {extracurricular.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Interests */}
            {interests.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Interests</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {interests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Bottom CTA section */}
          <div className="mt-12 text-center section-divider">
            <p className="text-gray-600 mb-4 font-medium">Interested in discussing backend roles or projects?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] bg-[#5F7A61] text-white hover:bg-[#4F6551] hover:shadow-md focus:ring-[#5F7A61] px-5 py-2.5 text-base cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-2 w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  Contact Me
                </button>
              </Link>
              <Link href="/projects">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] border-2 border-[#5F7A61] text-[#5F7A61] hover:bg-[#EEF3EE] focus:ring-[#5F7A61] px-5 py-2.5 text-base cursor-pointer">
                  View My Projects
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
