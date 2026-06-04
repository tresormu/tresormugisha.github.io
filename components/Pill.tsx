export default function Pill({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'domain' | 'tech' }) {
  const baseClasses = 'text-xs px-2 py-1 rounded'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700',
    domain: 'bg-accent/10 text-accent',
    tech: 'bg-gray-50 text-gray-600',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
