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
  const [selectedDomain, setSelectedDomain] = useState<string>('')
  const [visibilityFilter, setVisibilityFilter] = useState<'all' | 'public' | 'private'>('all')

  // Get all unique domains from the projects list
  const allDomains = Array.from(new Set(projects.flatMap(p => p.domains))).sort()

  const filteredProjects = projects.filter(project => {
    const matchesDomain = selectedDomain === '' || project.domains.includes(selectedDomain)
    const matchesVisibility =
      visibilityFilter === 'all' ||
      (visibilityFilter === 'public' && project.visibility === 'public') ||
      (visibilityFilter === 'private' && project.visibility === 'private')
    return matchesDomain && matchesVisibility
  })

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />
      
      {/* Page Shell */}
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-40"></div>
        
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-20">
          
          {/* Header Panel */}
          <div className="paper-panel p-6 sm:p-8 mb-8">
            <p className="section-label">Work archive</p>
            <div className="mb-4 sm:mb-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#5F7A61]" aria-hidden="true"></div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
                Explore backend architectures, e-commerce applications, fintech systems, and mobile money services. Use filters to quickly narrow down by domain and visibility.
              </p>
            </div>
          </div>

          <div className="section-divider">
            
            {/* Filters panel */}
            <div className="mb-8 p-5 bg-white/95 rounded-xl border border-[#DDE5DE] shadow-sm">
              <div className="flex flex-wrap items-end gap-6">
                
                {/* Domain Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <label htmlFor="domain-filter" className="text-sm font-medium text-gray-700">
                    Domain
                  </label>
                  <select
                    id="domain-filter"
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="px-3 py-2 text-sm border border-[#C8D3C9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F7A61] focus:border-transparent bg-white min-w-44 cursor-pointer"
                    aria-label="Filter by domain"
                  >
                    <option value="">All Domains</option>
                    {allDomains.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>

                {/* Visibility Toggles */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Visibility</span>
                  <div className="flex gap-1" role="radiogroup" aria-label="Filter by visibility">
                    {(['all', 'public', 'private'] as const).map(filter => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setVisibilityFilter(filter)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer capitalize ${
                          visibilityFilter === filter
                            ? 'bg-[#5F7A61] text-white shadow-sm'
                            : 'bg-white text-gray-700 border border-[#C8D3C9] hover:bg-[#EEF3EE]'
                        }`}
                        role="radio"
                        aria-checked={visibilityFilter === filter}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Results count indicator */}
            <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-[#DDE5DE] bg-white/95 p-4 shadow-sm">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> of{' '}
                <span className="font-semibold text-gray-900">{projects.length}</span> projects
              </p>
              <p className="text-xs text-gray-500 hidden sm:block">
                Tip: combine domain + visibility filters for faster discovery
              </p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <article
                  key={project.slug}
                  className={`group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-[#C8D3C9] overflow-hidden ${
                    project.visibility === 'private' ? 'opacity-90' : ''
                  }`}
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
                        onClick={(e) => {
                          if (project.visibility === 'private') {
                            e.preventDefault()
                          }
                        }}
                      >
                        {project.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{project.role}</p>
                    <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2" aria-label="Project domains">
                      {project.domains.map(domain => (
                        <Pill key={domain} variant="domain">
                          {domain}
                        </Pill>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {project.techStack.slice(0, 4).map(tech => (
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

                    {project.visibility === 'private' && (
                      <p className="mt-4 text-xs text-gray-500 italic relative z-10">
                        Private — summary only
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
