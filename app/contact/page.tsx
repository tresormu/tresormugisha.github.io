import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EmailContactForm from '@/components/EmailContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Nav />
      
      {/* Page Shell */}
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 -z-10 dotted-grid opacity-35"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-20">
          
          {/* Header Panel */}
          <div className="paper-panel p-6 sm:p-8 mb-10">
            <p className="section-label">Get in touch</p>
            <div className="mb-4 sm:mb-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-[#5F7A61]" aria-hidden="true"></div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Me</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
                Feel free to connect through any of the channels below.
              </p>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="space-y-6 section-divider">
            
            {/* GitHub Card */}
            <a
              href="https://github.com/tresormu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-150 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
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
                className="lucide lucide-github w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <div>
                <h2 className="font-semibold text-gray-900 group-hover:text-[#4F6551] transition-colors">GitHub</h2>
                <p className="text-gray-600 text-sm mt-0.5">Check out my open-source work and backend repositories</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/mugisha-tresor-73a876390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-150 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
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
                className="lucide lucide-linkedin w-6 h-6 text-[#4F6551] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>
                <h2 className="font-semibold text-gray-900 group-hover:text-[#4F6551] transition-colors">LinkedIn</h2>
                <p className="text-gray-600 text-sm mt-0.5">Connect professionally and follow my engineering updates</p>
              </div>
            </a>

            {/* Response Time Card */}
            <div className="flex items-start gap-4 p-4 bg-[#EEF3EE] border border-[#C8D3C9] rounded-xl">
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
                className="lucide lucide-clock w-6 h-6 text-[#4F6551] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <h2 className="font-semibold text-[#334155]">Response Time &amp; Direct Email</h2>
                <p className="text-[#475569] text-sm mt-0.5">
                  I typically respond within 24-48 hours. You can email me directly at{' '}
                  <a href="mailto:tresormugisha07@gmail.com" className="text-[#4F6551] font-semibold hover:underline">
                    tresormugisha07@gmail.com
                  </a>{' '}
                  or send a message via LinkedIn.
                </p>
              </div>
            </div>

          </div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <EmailContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
