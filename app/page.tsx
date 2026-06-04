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
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
          Portfolio · Backend Development & Full Stack Engineering
        </p>
        
        <div className="text-center mb-12">
          {/* Profile Photo - Circular and moved down */}
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Tresor Mugisha"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            Tresor Mugisha
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Software Engineer · Backend Developer
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Building reliable systems, writing maintainable code, and creating production-grade SaaS products with focus on backend architecture and full-stack development.
          </p>

          {/* Now / Next */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12 text-left">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Now</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Building production-grade backend systems with NestJS and Node.js</li>
                <li>• Developing RESTful APIs with JWT authentication and middleware</li>
                <li>• Leading full-stack projects from architecture to deployment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Next</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Expanding expertise in distributed systems and microservices</li>
                <li>• Contributing to open-source backend tooling projects</li>
                <li>• Publishing technical articles on backend architecture patterns</li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center mb-12">
            <div>
              <div className="text-3xl font-bold text-gray-900">6+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/projects" className="px-6 py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition">
              Explore Projects
            </Link>
            <Link href="/resume" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
              Resume
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
              Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Current Signal */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Current signal</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Backend architecture and API design</li>
            <li>• Database optimization and schema design</li>
            <li>• Real-time systems with WebSockets</li>
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Selected work</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition group"
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
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={project.visibility as 'public' | 'private'}>
                    {project.visibility}
                  </Badge>
                  <div className="text-xs text-accent font-medium">{project.role}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{tech}</span>
                  ))}
                </div>
                <div className="text-sm text-accent group-hover:underline">View details →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/projects" className="text-sm text-accent hover:underline">View all projects →</Link>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Capabilities</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Architecture</h3>
            <p className="text-sm text-gray-600">Designing scalable REST APIs, microservices, and distributed systems with Node.js, NestJS, and Express.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Design</h3>
            <p className="text-sm text-gray-600">Schema design, query optimization, and data modeling with PostgreSQL, MongoDB, and MySQL.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack Development</h3>
            <p className="text-sm text-gray-600">Building complete web applications with React, Next.js, and modern frontend frameworks.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps & Deployment</h3>
            <p className="text-sm text-gray-600">Containerization with Docker, CI/CD pipelines, and cloud deployment strategies.</p>
          </div>
        </div>
      </section>

      {/* Let's Work Together */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in opportunities where thoughtful technology can create measurable impact.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition">
              Get in Touch
            </Link>
            <Link href="/about" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
