import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Pill from '@/components/Pill'
import Badge from '@/components/Badge'
import { projects } from '@/lib/projects'

const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Main Content Area */}
      <div className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-4 pb-14 sm:pb-20" aria-labelledby="hero-heading">
          <div className="absolute inset-0 -z-10 bg-white/70" aria-hidden="true"></div>
          <div className="absolute inset-0 -z-10 dotted-grid opacity-50"></div>
          <div className="absolute right-0 top-0 h-72 w-72 mesh-orb -translate-y-1/3 translate-x-1/3 rounded-full"></div>
          
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
            
            {/* Left Main Panel */}
            <div className="paper-panel p-6 sm:p-10">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Tresor Mugisha
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-[#4F6551]">
                Software Engineer | Backend Developer
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
                Building reliable systems, writing maintainable code, and creating production-grade SaaS products with focus on backend architecture and full-stack development.
              </p>

              {/* Now / Next Splits */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
                <div className="rounded-xl border border-[#C8D3C9] bg-[#EEF3EE]/70 p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#5F7A61]">Now</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-4 leading-relaxed">
                    <li>Building production-grade backend systems with NestJS and Node.js.</li>
                    <li>Developing RESTful APIs with JWT authentication and middleware.</li>
                    <li>Leading full-stack projects from architecture to deployment.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[#DDE5DE] bg-white/90 p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#5F7A61]">Next</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-4 leading-relaxed">
                    <li>Expanding expertise in distributed systems and microservices.</li>
                    <li>Contributing to open-source backend tooling projects.</li>
                    <li>Publishing technical articles on backend architecture patterns.</li>
                  </ul>
                </div>
              </div>

              {/* Stats Chips */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="info-chip">
                  <span className="chip-number">6+</span>
                  <span className="chip-label">Total projects</span>
                </div>
                <div className="info-chip">
                  <span className="chip-number">3</span>
                  <span className="chip-label">Companies</span>
                </div>
                <div className="info-chip col-span-2 sm:col-span-1">
                  <span className="chip-number">2+</span>
                  <span className="chip-label">Years Exp</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/projects">
                  <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] bg-[#5F7A61] text-white hover:bg-[#4F6551] hover:shadow-md focus:ring-[#5F7A61] px-6 py-3 text-base group cursor-pointer">
                    Explore Projects
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
                      className="lucide lucide-arrow-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
                <Link href="/resume">
                  <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] border-2 border-[#5F7A61] text-[#5F7A61] hover:bg-[#EEF3EE] focus:ring-[#5F7A61] px-6 py-3 text-base cursor-pointer">
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
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-6 py-3 text-base cursor-pointer">
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
                    Connect
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Aside Profile Section */}
            <aside className="space-y-4">
              <div className="flex justify-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border border-[#C8D3C9]">
                  <Image
                    alt="Photo of Tresor Mugisha"
                    src="/profile.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                  />
                </div>
              </div>
              <div className="paper-panel p-5">
                <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Current signal</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
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
                      className="lucide lucide-sparkles w-4 h-4 text-[#5F7A61] flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                    Backend architecture &amp; API design
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="lucide lucide-sparkles w-4 h-4 text-[#5F7A61] flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                    Database optimization &amp; schema design
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="lucide lucide-clock3 w-4 h-4 text-[#5F7A61] flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12 6v6h4"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    Real-time systems with WebSockets
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 sm:py-20 section-divider" aria-labelledby="featured-projects-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 id="featured-projects-heading" className="mt-2 text-3xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <p className="mt-2 text-gray-600">Reliable systems across fintech, health, and e-commerce.</p>
            </div>
            <Link
              className="inline-flex items-center text-[#5F7A61] hover:text-[#4F6551] font-medium transition-colors group"
              href="/projects"
            >
              View all projects
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
                className="lucide lucide-arrow-right ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-[#C8D3C9] overflow-hidden"
                aria-labelledby={`project-title-${project.slug}`}
              >
                <div className="relative h-44 w-full bg-gray-100">
                  <Image
                    alt={`${project.name} preview`}
                    src={project.image}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.visibility as 'public' | 'private'}>
                      {project.visibility}
                    </Badge>
                  </div>
                  <h3
                    id={`project-title-${project.slug}`}
                    className="text-xl font-semibold text-gray-900 pr-20 group-hover:text-[#4F6551] transition-colors"
                  >
                    <Link
                      className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2 rounded-xl"
                      href={project.visibility === 'public' ? `/projects/${project.slug}` : '#'}
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{project.role}</p>
                  <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2" aria-label="Project domains">
                    {project.domains.map((domain) => (
                      <Pill key={domain} variant="domain">
                        {domain}
                      </Pill>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Pill key={tech} variant="tech">
                        {tech}
                      </Pill>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-gray-500 font-semibold px-2.5 py-0.5 bg-gray-50 rounded-full">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {project.visibility === 'public' && project.links && (
                    <div className="mt-4 flex items-center gap-4 relative z-10">
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                          aria-label={`View ${project.name} source code on GitHub`}
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
                            className="lucide lucide-github w-4 h-4"
                            aria-hidden="true"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                          Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5F7A61] hover:text-[#4F6551] transition-colors"
                          aria-label={`View ${project.name} live demo`}
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
                            className="lucide lucide-external-link w-4 h-4"
                            aria-hidden="true"
                          >
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Expertise Summary Section */}
        <section className="py-16 sm:py-20 section-divider" aria-labelledby="expertise-heading">
          <div className="paper-panel p-6 sm:p-8">
            <p className="section-label text-center">Capability Stack</p>
            <h2 id="expertise-heading" className="mt-2 text-3xl font-bold text-gray-900 text-center">
              Areas of Expertise
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <article className="note-card p-5">
                <h3 className="text-base font-semibold text-gray-900">Backend Architecture</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Designing scalable REST APIs, microservices, and distributed systems with Node.js, NestJS, and Express.
                </p>
              </article>
              <article className="note-card p-5">
                <h3 className="text-base font-semibold text-gray-900">Database Design</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Schema design, query optimization, and data modeling with PostgreSQL, MongoDB, and MySQL.
                </p>
              </article>
              <article className="note-card p-5">
                <h3 className="text-base font-semibold text-gray-900">Full Stack Development</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Building complete web applications with React, Next.js, and modern frontend frameworks.
                </p>
              </article>
              <article className="note-card p-5">
                <h3 className="text-base font-semibold text-gray-900">DevOps &amp; Deployment</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Containerization with Docker, CI/CD pipelines, and robust cloud deployment strategies.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Let's Work Together Panel */}
        <section className="py-16 sm:py-20 section-divider" aria-labelledby="cta-heading">
          <div className="paper-panel p-8 sm:p-10 text-center">
            <p className="section-label">Open to collaboration</p>
            <h2 id="cta-heading" className="mt-2 text-3xl font-bold text-gray-900">
              Let's Work Together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in opportunities where thoughtful technology can create measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] bg-[#5F7A61] text-white hover:bg-[#4F6551] hover:shadow-md focus:ring-[#5F7A61] px-6 py-3 text-base cursor-pointer">
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
                  Get in Touch
                </button>
              </Link>
              <Link href="/about">
                <button className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] border-2 border-[#5F7A61] text-[#5F7A61] hover:bg-[#EEF3EE] focus:ring-[#5F7A61] px-6 py-3 text-base cursor-pointer">
                  Learn More About Me
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  )
}
