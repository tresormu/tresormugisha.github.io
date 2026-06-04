export default function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'public' | 'private' | 'default' }) {
  const baseClasses = 'text-xs px-2 py-1 rounded font-medium'
  
  const variantClasses = {
    public: 'bg-green-100 text-green-700',
    private: 'bg-gray-100 text-gray-600',
    default: 'bg-gray-100 text-gray-700',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
