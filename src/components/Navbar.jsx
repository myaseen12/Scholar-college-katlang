import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, MapPin, Mail } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, FB_URL, InstagramIcon, INSTAGRAM_URL } from './FacebookIcon'

const WHATSAPP_URL =
  'https://wa.me/923458008782?text=' +
  encodeURIComponent("Hello, I would like to inquire about admission at The Scholars' College Katlang.")

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/faculty' },
      { name: 'Facilities', path: '/facilities' },
    ],
  },
  { name: 'Programs', path: '/programs' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Scholarships', path: '/scholarships' },
  { name: 'DIT Course', path: '/one-year-dit' },
  {
    name: 'More',
    children: [
      { name: 'Computer Courses', path: '/computer-courses' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock page scroll while the mobile menu is open; restores automatically on close.
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen])

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:03439292192" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={13} /> 0343-9292192
            </a>
            <a href="tel:03458008782" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={13} /> 0345-8008782
            </a>
            <a href="tel:0937576080" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={13} /> 0937-576080
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <FacebookIcon size={13} /> Facebook
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <InstagramIcon size={13} /> Instagram
            </a>
            <a
              href="mailto:principal.sck@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail size={13} /> Email
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-gray-300">
            <MapPin size={13} /> Katlang Mella, Near Bilandi Chowk Katlang
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo + College name */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="The Scholars' College Katlang — Home">
              <Logo className="h-14 md:h-[4.5rem] w-auto shrink-0" />
              <span className="hidden sm:inline-block leading-tight">
                <span className="block font-heading font-black text-navy text-sm md:text-base uppercase">
                  The Scholars'<br />
                  <span className="text-gold">College Katlang</span>
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                        link.children.some(c => location.pathname === c.path)
                          ? 'text-gold bg-navy/5'
                          : 'text-navy hover:text-gold hover:bg-navy/5'
                      }`}
                      aria-expanded={activeDropdown === link.name}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                        location.pathname === link.path
                          ? 'text-gold bg-navy/5'
                          : 'text-navy hover:text-gold hover:bg-navy/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.children && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-soft border border-gray-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.path ? 'text-gold bg-gold/5 font-medium' : 'text-gray-700 hover:bg-navy/5 hover:text-gold'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/admissions"
                onClick={closeMenu}
                className="hidden md:inline-flex bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow hover:shadow-md"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-navy hover:bg-gray-100 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <div className="px-4 py-2.5 text-sm font-semibold text-navy uppercase tracking-wider">
                        {link.name}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMenu}
                          className={`block pl-8 pr-4 py-3 text-[15px] rounded-lg transition-colors ${
                            location.pathname === child.path
                              ? 'bg-gold/10 text-gold font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-[15px] font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'bg-gold/10 text-gold'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/admissions"
                onClick={closeMenu}
                className="block bg-gold text-navy font-semibold text-center py-4 rounded-lg mt-3 text-[15px]"
              >
                Apply Now
              </Link>
            </div>

            {/* Quick contact — phone & WhatsApp always reachable on mobile */}
            <div className="border-t border-gray-100 px-4 py-4 space-y-2 bg-gray-50">
              <a
                href="tel:03439292192"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-navy"
              >
                <Phone size={16} className="text-gold" /> 0343-9292192
              </a>
              <div className="flex gap-2">
                <a
                  href="tel:03458008782"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium border border-gray-200 rounded-lg text-navy"
                >
                  <Phone size={15} className="text-gold" /> Call
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold bg-[#25D366] text-white rounded-lg"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
