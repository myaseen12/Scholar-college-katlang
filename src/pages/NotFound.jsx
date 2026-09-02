import { Home as HomeIcon, GraduationCap, Phone } from 'lucide-react'
import Logo from '../components/Logo'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-light to-royal overflow-hidden min-h-screen flex items-center">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      {/* Decorative glows (clipped by overflow-hidden) */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-maroon/20 blur-3xl"></div>
      {/* Giant watermark */}
      <div className="hidden md:block absolute -right-6 -bottom-10 font-heading font-black text-[10rem] leading-none text-white/[0.04] select-none pointer-events-none">
        404
      </div>

      <div className="max-w-xl w-full mx-auto px-5 sm:px-6 py-16 sm:py-20 relative z-10 text-center">
        <Logo className="mx-auto mb-8 h-24 sm:h-28 w-auto max-w-[220px]" />

        <p className="font-heading font-black text-gold text-7xl sm:text-8xl leading-none mb-4" aria-hidden="true">404</p>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-9 leading-relaxed">
          The page you are looking for could not be found.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button to="/" variant="primary" size="lg" icon={HomeIcon} className="w-full sm:w-auto justify-center">
            Go Home
          </Button>
          <Button to="/admissions" variant="outlineLight" size="lg" icon={GraduationCap} className="w-full sm:w-auto justify-center">
            Admissions
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg" icon={Phone} className="w-full sm:w-auto justify-center">
            Contact Us
          </Button>
        </div>

        <div className="mt-12">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            We Believe in Quality Education
          </span>
        </div>
      </div>
    </section>
  )
}
