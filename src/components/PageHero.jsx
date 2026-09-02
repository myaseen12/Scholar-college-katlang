import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Logo from './Logo'

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-navy pt-12 pb-16 md:pt-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Soft ambient glows (clipped by overflow-hidden) */}
      <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-royal/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-maroon/25 blur-3xl"></div>
      {/* Brand accent underline */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gold shadow-[0_0_18px_rgba(212,168,67,0.55)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Brand logo — recognizable on every page */}
        <Logo
          className="h-16 sm:h-20 w-auto max-w-[160px] drop-shadow-lg mb-5"
        />

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-sm mb-5 text-gray-400">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {bc.path ? (
                  <Link to={bc.path} className="hover:text-gold transition-colors">{bc.name}</Link>
                ) : (
                  <span className="text-gold">{bc.name}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">{title}</h1>
        {subtitle && <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
