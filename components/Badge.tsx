export default function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'public' | 'private' | 'default' }) {
  const baseClasses = 'text-xs font-medium px-2 py-1 rounded-full inline-flex items-center gap-1'
  
  const variantClasses = {
    public: 'bg-green-50 text-green-700 border border-green-200/40',
    private: 'bg-amber-50 text-amber-700 border border-amber-200/40',
    default: 'bg-gray-100 text-gray-700',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {variant === 'private' && (
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
          className="lucide lucide-lock w-3 h-3 flex-shrink-0"
          aria-hidden="true"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )}
      {children}
    </span>
  )
}
