'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/50 backdrop-blur-sm border-b border-gray-100">
      <Link href="/" className="text-sm font-semibold text-gray-900">
        TM
      </Link>
      <ul className="flex gap-6 text-xs uppercase tracking-wider text-gray-600">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className={`hover:text-gray-900 ${pathname === item.href ? 'text-gray-900 font-medium' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
