'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ]

  // Check if a link is active.
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b transition-all duration-300 border-[#C8D3C9]/80 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="relative flex items-center justify-center transition-all duration-300 h-[4.25rem]">
          {/* Logo only visible on mobile for alignment */}
          <div className="absolute left-4 md:hidden">
            <Link href="/" className="text-sm font-semibold tracking-wider text-[#4F6551]">
              TM
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-8" role="list">
            {navItems.map((item) => {
              const active = isLinkActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-sm tracking-wide font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61] focus-visible:ring-offset-2 rounded-sm ${
                      active ? 'text-[#4F6551]' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-[#5F7A61] transition-all duration-200 ${
                        active ? 'w-full' : 'w-0'
                      }`}
                    ></span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-4 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-[#EEF3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
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
                className="lucide lucide-x w-6 h-6"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
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
                className="lucide lucide-menu w-6 h-6"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#C8D3C9]/40 py-4 bg-white/95" id="mobile-menu">
            <ul className="flex flex-col gap-2 px-2" role="list">
              {navItems.map((item) => {
                const active = isLinkActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm tracking-wide font-medium rounded-xl transition-colors ${
                        active ? 'bg-[#EEF3EE] text-[#4F6551]' : 'text-gray-600 hover:text-gray-900 hover:bg-[#EEF3EE]/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
