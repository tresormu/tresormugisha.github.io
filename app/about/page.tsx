import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Pill from '@/components/Pill'

const skills = {
  programmingLanguages: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML/CSS'],
  frameworks: ['Node.js', 'NestJS', 'Express.js', 'React', 'Next.js', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'MySQL', 'TypeORM'],
  devOps: ['Docker', 'Git & GitHub', 'Postman', 'Swagger', 'FCM', 'Linux'],
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
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Main Content Page Shell */}
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-35"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-20">
          
          {/* Header Panel */}
          <div className="paper-panel p-6 sm:p-8 mb-10">
            <p className="section-label">Profile</p>
            <div className="mb-4 sm:mb-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#5F7A61]" aria-hidden="true"></div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
                Get to know my background, developer expertise, and professional focus.
              </p>
            </div>
          </div>

          {/* Biography */}
          <section className="mb-16 paper-panel p-6 sm:p-8" aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="sr-only">Biography</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                Software Engineer specializing in backend development, with experience in building and deploying production-grade SaaS products. I focus on creating reliable systems, writing maintainable code, and being a diligent team member.
              </p>
              <p className="text-lg leading-relaxed">
                My experience spans remote software engineering, database design, payment integrations (like mobile money systems), real-time alerts via WebSockets/FCM, and leading full-stack projects from design to deployment.
              </p>
              <p className="text-lg leading-relaxed">
                I am currently pursuing a BSc in Software Engineering at the African Leadership University. My academic background, combined with hands-on startup and remote team experience, shapes my approach to architecting scalable systems and driving software quality.
              </p>
            </div>
          </section>

          {/* Skills & Technologies */}
          <section className="mb-16 section-divider" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Skills &amp; Technologies
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="note-card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programmingLanguages.map(skill => (
                    <Pill key={skill} variant="domain">{skill}</Pill>
                  ))}
                </div>
              </div>
              <div className="note-card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Frameworks &amp; Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(skill => (
                    <Pill key={skill} variant="tech">{skill}</Pill>
                  ))}
                </div>
              </div>
              <div className="note-card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Databases &amp; ORMs</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map(skill => (
                    <Pill key={skill} variant="tech">{skill}</Pill>
                  ))}
                </div>
              </div>
              <div className="note-card p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tools &amp; DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.devOps.map(skill => (
                    <Pill key={skill} variant="default">{skill}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Summary */}
          <section className="mb-16 section-divider" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Experience Summary
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {experienceAreas.map(area => (
                <article key={area.title} className="note-card p-5">
                  <div>
                    <h3 className="font-semibold text-gray-900">{area.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{area.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Leadership & Outreach */}
          <section className="mb-16 section-divider" aria-labelledby="leadership-heading">
            <h2 id="leadership-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Collaboration &amp; Outreach
            </h2>
            <div className="paper-panel p-6 bg-gradient-to-br from-[#EEF3EE]/90 to-[#E6EEE7]/75">
              <p className="text-gray-700 leading-relaxed">
                With experiences spanning multiple tech startups and organizations, I have collaborated with teams at <strong>Scrimba (Norway)</strong>, <strong>KLab Organization (Rwanda)</strong>, and <strong>MP Circle Ltd (South Africa)</strong> to build stable software services.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I am passionate about building reliable tech infrastructure, mentoring fellow developers, and establishing version-control workflows that allow engineering teams to scale. These collaborations have taught me the value of structured API contracts, testable code, and stakeholder-driven product design.
              </p>
            </div>
          </section>

          {/* Let's Connect */}
          <section aria-labelledby="connect-heading" className="paper-panel p-6 sm:p-8 section-divider">
            <h2 id="connect-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing backend engineering roles, system architecture projects, or general collaborations.
            </p>
            <div className="flex flex-wrap gap-4">
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
              <a href="https://github.com/tresormu" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] border-2 border-[#5F7A61] text-[#5F7A61] hover:bg-[#EEF3EE] focus:ring-[#5F7A61] px-5 py-2.5 text-base cursor-pointer">
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
                    className="lucide lucide-github mr-2 w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub
                </button>
              </a>
              <a href="https://linkedin.com/in/mugisha-tresor-73a876390" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] border-2 border-[#5F7A61] text-[#5F7A61] hover:bg-[#EEF3EE] focus:ring-[#5F7A61] px-5 py-2.5 text-base cursor-pointer">
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
                    className="lucide lucide-linkedin mr-2 w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </button>
              </a>
              <Link href="/resume">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-5 py-2.5 text-base cursor-pointer">
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
                  Resume
                </button>
              </Link>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
