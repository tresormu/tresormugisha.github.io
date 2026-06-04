import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in opportunities where thoughtful technology can create measurable impact. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:tresormugisha07@gmail.com" className="text-accent hover:underline">
                  tresormugisha07@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+250 785 220 022</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Social Links</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/tresormu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/mugisha-tresor-73a876390" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent transition"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white text-sm font-medium rounded hover:bg-accent-dark transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="flex gap-4">
            <Link href="/projects" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
              View My Projects
            </Link>
            <Link href="/resume" className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition">
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
