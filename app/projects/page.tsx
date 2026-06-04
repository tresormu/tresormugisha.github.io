'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'
import Pill from '@/components/Pill'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [visibilityFilter, setVisibilityFilter] = useState<'all' | 'public' | 'private'>('all')

  const allDomains = Array.from(new Set(projects.flatMap(p => p.domains)))

  const filteredProjects = projects.filter(project => {
    const matchesDomain = selectedDomains.length === 0 || selectedDomains.some(d => project.domains.includes(d))
    const matchesVisibility = visibilityFilter === 'all' || 
      (visibilityFilter === 'public' && project.visibility === 'public') ||
      (visibilityFilter === 'private' && project.visibility === 'private')
    return matchesDomain && matchesVisibility
  })

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain]
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Work archive</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">Projects</h1>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {allDomains.map(domain => (
              <button
                key={domain}
                onClick={() => toggleDomain(domain)}
                className={`text-xs px-3 py-1.5 rounded transition ${
                  selectedDomains.includes(domain)
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {(['all', 'public', 'private'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setVisibilityFilter(filter)}
                className={`text-xs px-3 py-1.5 rounded transition capitalize ${
                  visibilityFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <Link 
              key={project.slug} 
              href={project.visibility === 'public' ? `/projects/${project.slug}` : '#'}
              className={`border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition group ${
                project.visibility === 'private' ? 'opacity-75' : ''
              }`}
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={project.visibility as 'public' | 'private'}>
                    {project.visibility}
                  </Badge>
                  {project.visibility === 'private' && (
                    <span className="text-xs text-gray-500 italic">Summary only</span>
                  )}
                </div>

                <div className="text-xs text-accent font-medium mb-2">{project.role}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.domains.map(domain => (
                    <Pill key={domain} variant="domain">{domain}</Pill>
                  ))}
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.techStack.map(tech => (
                    <Pill key={tech} variant="tech">{tech}</Pill>
                  ))}
                </div>

                {project.links && (
                  <div className="flex gap-3 text-sm">
                    {project.links.code && (
                      <a 
                        href={project.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    )}
                    {project.links.report && (
                      <a 
                        href={project.links.report} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Report
                      </a>
                    )}
                    {project.links.leaderboard && (
                      <a 
                        href={project.links.leaderboard} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Leaderboard
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
