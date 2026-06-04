import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'
import Pill from '@/components/Pill'
import { getProjectBySlug, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Page Shell */}
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-35"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-20">
          
          {/* Back Navigation */}
          <nav className="mb-8">
            <Link
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              href="/projects"
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
                className="lucide lucide-arrow-left mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Projects
            </Link>
          </nav>

          {/* Project Details Sheet */}
          <article className="paper-panel p-6 sm:p-10">
            <header className="mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {project.name}
                  </h1>
                  <p className="mt-2 text-lg text-[#4F6551] font-semibold">{project.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={project.visibility as 'public' | 'private'}>
                    {project.visibility === 'public' ? 'Public Project' : 'Private Project'}
                  </Badge>
                </div>
              </div>

              {/* Domains list */}
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Project domains">
                {project.domains.map((domain) => (
                  <Pill key={domain} variant="domain">
                    {domain}
                  </Pill>
                ))}
              </div>

              {/* Tags / Subdomains */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-1.5 font-medium">Subdomains</p>
                  <div className="flex flex-wrap gap-1.5" aria-label="Project subdomains">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center font-medium rounded-full transition-colors bg-gray-100 text-gray-700 px-2.5 py-0.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Code/Demo Link Section */}
              {project.visibility === 'public' && project.links && (
                <div className="mt-6 flex items-center gap-4">
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      aria-label="View source code on GitHub"
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
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#5F7A61] text-white rounded-lg hover:bg-[#4F6551] transition-colors text-sm font-medium"
                      aria-label="View live demo"
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
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </header>

            {/* Description/Overview */}
            <section className="mb-8" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold text-gray-900 mb-3">
                Overview &amp; Architecture
              </h2>
              <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-8" aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-xl font-semibold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Pill key={tech} variant="tech">
                    {tech}
                  </Pill>
                ))}
              </div>
            </section>

            {/* Talk CTA */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
              <Link href="/contact" className="text-sm font-semibold text-[#5F7A61] hover:text-[#4F6551] transition-colors inline-flex items-center gap-1 group">
                Interested in this project? Let's talk
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
                  className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
