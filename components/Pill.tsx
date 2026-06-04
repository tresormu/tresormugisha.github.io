export default function Pill({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'domain' | 'tech' }) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors px-2.5 py-0.5 text-xs'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700',
    domain: 'bg-[#EEF3EE] text-[#4F6551] border border-[#C8D3C9]/40',
    tech: 'bg-green-100 text-green-800',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
