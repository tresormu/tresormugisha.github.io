import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          © 2026 Tresor Mugisha · Kigali, Rwanda
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="https://github.com/tresormu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a>
          <a href="https://linkedin.com/in/mugisha-tresor-73a876390" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">LinkedIn</a>
          <a href="mailto:tresormugisha07@gmail.com" className="hover:text-gray-900">Email</a>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/projects" className="hover:text-gray-900">Projects</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
