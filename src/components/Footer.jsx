import { Link } from 'react-router-dom'
import { Phone, MapPin, ArrowUp, Mail, Github } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, FB_URL, InstagramIcon, INSTAGRAM_URL } from './FacebookIcon'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Scholarships', path: '/scholarships' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
]

const programs = [
  { name: 'Pre-Medical', path: '/programs' },
  { name: 'Pre-Engineering', path: '/programs' },
  { name: 'Computer Science', path: '/programs' },
  { name: 'One Year DIT', path: '/one-year-dit' },
  { name: 'Computer Courses', path: '/computer-courses' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-gray-300 relative">
      {/* Brand accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold hover:bg-gold-light text-navy w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="h-20 w-auto shrink-0" />
            </div>
            <h3 className="font-heading font-bold text-white text-base leading-tight mb-2">
              The Scholars' College Katlang
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              "We Believe in Quality Education."
            </p>
            <div className="flex gap-3">
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#1877F2] border border-transparent rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#E4405F] border border-transparent rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/923458008782" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#25D366] border border-transparent rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href="https://github.com/myaseen12/Scholar-college-katlang.git" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#171515] border border-transparent rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all" aria-label="GitHub repository">
                <Github size={18} />
              </a>
              <a href="mailto:principal.sck@gmail.com" className="w-9 h-9 bg-white/10 hover:bg-[#D44638] border border-transparent rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full shrink-0"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 relative pb-3">
              Programs
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <ul className="space-y-2.5">
              {programs.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full shrink-0"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 relative pb-3">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold"></span>
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/20">
                  <MapPin size={15} />
                </span>
                <span className="leading-relaxed">Katlang Mella, Near Bilandi Chowk Katlang</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Phone size={15} />
                </span>
                <a href="tel:03439292192" className="hover:text-gold transition-colors">0343-9292192</a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://wa.me/923458008782" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white transition-colors" aria-label="WhatsApp">
                  <WhatsAppIcon size={16} />
                </a>
                <span className="text-gray-300">0345-8008782</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D44638]/10 text-[#D44638] ring-1 ring-[#D44638]/20">
                  <Mail size={15} />
                </span>
                <a href="mailto:principal.sck@gmail.com" className="hover:text-[#D44638] transition-colors">principal.sck@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} The Scholars' College Katlang. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full"></span>
            We Believe in Quality Education
          </p>
        </div>
      </div>
    </footer>
  )
}
