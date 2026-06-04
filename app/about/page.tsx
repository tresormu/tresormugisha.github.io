import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Pill from '@/components/Pill'

const skills = {
  programmingLanguages: ['TypeScript', 'JavaScript (ES6+)'],
  frameworks: ['Node.js', 'NestJS', 'Express.js', 'React', 'Next.js', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'TypeORM'],
  devOps: ['Docker', 'Git', 'GitHub', 'Postman', 'Swagger', 'FCM'],
  backend: ['REST API Design', 'WebSockets', 'JWT Authentication', 'Middleware'],
}

const experienceAreas = [
  {
    title: 'Backend Architecture',
    description: 'Designing scalable REST APIs, microservices, and distributed systems with Node.js, NestJS, and Express.',
  },
  {
    title: 'Full Stack Development',
    description: 'Building complete web applications with React, Next.js, and modern frontend frameworks.',
  },
  {
    title: 'Database Design',
    description: 'Schema design, query optimization, and data modeling with PostgreSQL, MongoDB, and MySQL.',
  },
  {
    title: 'Project Leadership',
    description: 'Leading teams through full development lifecycle, from architecture and planning to deployment and stakeholder demos.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Profile</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Software Engineer specializing in backend development, with experience in building and deploying production-grade SaaS products. I focus on creating reliable systems, writing maintainable code, and being a diligent team member.
        </p>

        {/* Skills & Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devOps.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Backend Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience Summary</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {experienceAreas.map(area => (
              <div key={area.title} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Outreach */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership & Outreach</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-accent">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Companies Worked With</h3>
                <p className="text-sm text-gray-600">
                  Collaborated with Scrimba (Norway), KLab Organization (Rwanda), and MP Circle Ltd (South Africa) on various backend and full-stack projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex gap-4">
          <Link href="/contact" className="px-6 py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition">
            Contact Me
          </Link>
          <a href="https://github.com/tresormu" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mugisha-tresor-73a876390" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
            LinkedIn
          </a>
          <Link href="/resume" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
            Resume
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
