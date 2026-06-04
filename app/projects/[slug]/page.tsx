import Link from 'next/link'
import Image from 'next/image'
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

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <Link href="/projects" className="text-sm text-accent hover:underline mb-4 inline-block">
          ← Back to Projects
        </Link>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                {project.name}
              </h1>
              <Badge variant={project.visibility as 'public' | 'private'}>
                {project.visibility}
              </Badge>
            </div>

            <div className="text-accent font-medium mb-4">{project.role}</div>

            <div className="flex gap-2 flex-wrap mb-8">
              {project.domains.map(domain => (
                <Pill key={domain} variant="domain">{domain}</Pill>
              ))}
            </div>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <div className="flex gap-2 flex-wrap">
                {project.techStack.map(tech => (
                  <Pill key={tech} variant="tech">{tech}</Pill>
                ))}
              </div>
            </div>

            {project.links && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Links</h2>
                <div className="flex gap-4">
                  {project.links.code && (
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
                    >
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.report && (
                    <a 
                      href={project.links.report} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
                    >
                      Report
                    </a>
                  )}
                  {project.links.leaderboard && (
                    <a 
                      href={project.links.leaderboard} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
                    >
                      Leaderboard
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="pt-8 border-t border-gray-200">
              <Link href="/contact" className="text-sm text-accent hover:underline">
                Interested in this project? Let's talk →
              </Link>
            </div>
          </div>

          {/* Project Image */}
          <div className="hidden md:block">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
