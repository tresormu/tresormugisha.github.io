import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const experience = [
  {
    role: 'Backend Developer (Remote)',
    company: 'Scrimba, Norway',
    period: '2024 – 2025 (6 months)',
    location: 'Remote',
    bullets: [
      'Delivered production-grade REST APIs with JWT authentication, refresh token, and declarative route protection',
      'Engineered MongoDB schemas with indexing and constraints, eliminating orphaned records',
      'Built reusable middleware pipeline for logging, error normalization, and input sanitization across all endpoints',
      'Collaborated via GitHub PR workflows, delivering features on schedule with zero support tickets from frontend',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    role: 'Full Stack Developer & Lead',
    company: 'KLab Organization, Rwanda',
    period: 'Oct 2025 – Feb 2026',
    location: 'Kigali, Rwanda',
    bullets: [
      'Led backend development of ShieldKids (child safety app), owning architecture, sprint execution, and stakeholder demos',
      'Implemented persistent WebSockets for real-time location tracking and geofence breach alerts',
      'Architected RESTful APIs covering authentication, device registration, app controls, and screen time enforcement',
      'Managed all PR reviews, resolved integration conflicts, and delivered sprints from planning to demo',
    ],
    tech: ['Kotlin', 'WebSockets', 'REST APIs', 'Git', 'GitHub', 'Trello'],
  },
  {
    role: 'Backend Engineer (Remote)',
    company: 'MP Circle Ltd, South Africa',
    period: 'Mar 2026 – Apr 2026',
    location: 'Remote',
    bullets: [
      'Architected NestJS backend services with REST contracts, typed responses, and unified error handling',
      'Produced enterprise grade Swagger/OpenAPI docs enabling self-service client integration',
      'Conducted end-to-end API testing using Postman tool',
      'Troubleshot Docker containerized environments to ensure builds in development stage',
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
      'Software architecture, backend systems, and engineering leadership',
      'Database Systems and Data structures & Algorithms',
    ],
  },
]

const projects = [
  {
    name: 'IkiminaPass',
    role: 'Backend & Project Lead',
    description: 'ROSCA Platform for Rwanda – Architected a full backend system in NestJS and PostgreSQL to digitise Rwanda\'s community savings groups (Ibimina)',
  },
  {
    name: 'TheYouthContest',
    role: 'Full Stack',
    description: 'Platform for debate organization – Designed and built the full-stack infrastructure digitalizing debate championship processes',
  },
  {
    name: 'Job Portal',
    role: 'Backend & Project Lead',
    description: 'Full Stack Recruitment Platform – Led full development lifecycle architecture, task distribution, version control, testing, and deployment',
  },
  {
    name: 'BDifferent',
    role: 'Full Stack',
    description: 'E-commerce platform – Built backend CRUD APIs in Node.js and Express for product, user and category management with image upload support',
  },
]

const skills = {
  languages: ['TypeScript', 'JavaScript (ES6+)'],
  backend: ['Node.js', 'NestJS', 'Express.js', 'REST API Design', 'WebSockets', 'JWT Authentication'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'TypeORM', 'Schema Design', 'Query Optimisation'],
  devOps: ['Docker', 'Git', 'GitHub', 'Postman', 'Swagger', 'FCM'],
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
}

const certifications = [
  'KLab Training Compilation Certificate',
]

const interests = [
  'Building real-time systems',
  'Contributing to open source',
  'Backend tooling automation',
  'Project Leading',
  'DevOps',
]

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Professional snapshot</p>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Resume</h1>
          <a 
            href="/resume.pdf" 
            download 
            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            Software Engineer specializing in backend development, with experience in building and deploying production-grade SaaS products. I focus on creating reliable systems, writing maintainable code, and being a diligent team member.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution} · {edu.location}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company} · {exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Projects */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Relevant Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <span className="text-sm text-accent">{project.role}</span>
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Technical Skills</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Languages</h3>
              <p className="text-gray-600 text-sm">{skills.languages.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Backend</h3>
              <p className="text-gray-600 text-sm">{skills.backend.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Databases</h3>
              <p className="text-gray-600 text-sm">{skills.databases.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">DevOps & Tools</h3>
              <p className="text-gray-600 text-sm">{skills.devOps.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Frontend</h3>
              <p className="text-gray-600 text-sm">{skills.frontend.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Languages</h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>English (Professional)</li>
            <li>Kinyarwanda (Native)</li>
            <li>French (Basic)</li>
          </ul>
        </div>

        {/* Interests */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Interests</h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex gap-4 pt-8 border-t border-gray-200">
          <Link href="/contact" className="px-6 py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition">
            Contact Me
          </Link>
          <Link href="/projects" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
            View My Projects
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
