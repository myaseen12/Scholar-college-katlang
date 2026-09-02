import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import { FacebookIcon, FB_URL, InstagramIcon, INSTAGRAM_URL } from '../components/FacebookIcon'
import {
  Microscope, Atom, Monitor, BookOpenCheck, GraduationCap, Sparkles,
  HeartHandshake, ArrowRight, BadgeCheck, FlaskConical, Code2, Phone,
  MapPin, School, PhoneCall, ChevronRight, Users, Laptop, Wrench, Mail,
} from 'lucide-react'

const WHATSAPP_NUMBER = '923458008782'
const WHATSAPP_MESSAGE =
  'Hello, I would like to inquire about The Scholars\u2019 College Katlang.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Scholars College Katlang, Near Bilandi Chowk, Katlang')

const PHONES = ['0343-9292192', '0345-8008782', '0937-576080']

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const whyChoose = [
  { icon: <BookOpenCheck size={24} />, title: 'Quality Education', desc: 'Focused on delivering quality education for measurable student success.' },
  { icon: <GraduationCap size={24} />, title: 'Experienced Faculty', desc: 'Learn from qualified and experienced faculty guiding every student.' },
  { icon: <Sparkles size={24} />, title: 'Bright Future', desc: 'Preparing students for a successful future and higher education.' },
  { icon: <HeartHandshake size={24} />, title: 'Character Building', desc: 'Developing responsible and confident students through strong values.' },
]

const academicPrograms = [
  {
    icon: <FlaskConical size={26} />,
    title: 'Pre-Medical',
    tag: 'F.Sc',
    description: 'A pathway to medicine, dentistry, pharmacy and allied health sciences.',
    accent: 'from-royal to-royal-light',
  },
  {
    icon: <Atom size={26} />,
    title: 'Pre-Engineering',
    tag: 'F.Sc',
    description: 'A strong foundation for engineering, technology and applied sciences.',
    accent: 'from-navy to-navy-light',
  },
  {
    icon: <Monitor size={26} />,
    title: 'Computer Science',
    tag: 'ICS',
    description: 'Modern computing, programming and IT education for the digital future.',
    accent: 'from-maroon to-maroon-light',
  },
  {
    icon: <Code2 size={26} />,
    title: 'One Year DIT',
    tag: 'DIT',
    description: 'Diploma in IT — Board of Technical Education recognized.',
    accent: 'from-gold to-maroon-light',
  },
]

const ditFeatures = [
  { icon: <Users size={24} />, label: 'Qualified Staff' },
  { icon: <Laptop size={24} />, label: 'Standard Computer Lab' },
  { icon: <Wrench size={24} />, label: 'Practical Classes' },
]

const facultyPreview = [
  { name: 'Abdur Raziq', role: 'Principal', qual: 'MPhil Education, MSc' },
  { name: 'Muhammad Zubair', role: 'Director', qual: 'ACCA UK, M.Com' },
  { name: 'Kashif Anwar', role: 'Accountant', qual: 'BS Accounting & Finance' },
  { name: 'Bilal Khan', role: 'Coordinator', qual: 'Faculty' },
]

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative bg-navy overflow-hidden">
        {/* Subtle topography */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '44px 44px'
        }}></div>
        <div className="absolute -top-32 right-1/4 w-[34rem] h-[34rem] rounded-full bg-royal/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-16 w-[30rem] h-[30rem] rounded-full bg-maroon/20 blur-3xl"></div>
        <div className="hidden lg:block absolute top-20 right-[38%] w-52 h-52 opacity-[0.07]">
          <Microscope size={200} strokeWidth={1} className="text-gold rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-12 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
            {/* LEFT */}
            <Reveal>
              <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                {/* Branding — logo + name (eye path 1) */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
                  <Logo className="h-20 sm:h-24 xl:h-28 w-auto shrink-0 drop-shadow-lg" />
                  <div className="text-center sm:text-left">
                    <p className="font-heading font-black text-white uppercase text-lg sm:text-xl xl:text-2xl leading-[1.1]">
                      The Scholars'<br />
                      <span className="text-gold">College Katlang</span>
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-2 text-gray-300 font-heading italic text-xs sm:text-sm">
                      <span className="hidden sm:inline w-5 h-px bg-gold"></span>
                      We Believe in Quality Education
                    </p>
                  </div>
                </div>

                {/* Main heading (single) + 2026-27 */}
                <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase leading-[1.15] tracking-tight mt-4">
                  Admissions <span className="text-gold">Open</span>
                </h1>
                <p className="mt-3 font-heading text-sm sm:text-base lg:text-lg font-semibold text-white/90 tracking-wide">
                  2026<span className="text-gold">–</span>27
                </p>

                {/* Scholarship highlight (eye path 4) */}
                <div className="mt-5 inline-flex items-center gap-3.5 bg-gradient-to-r from-maroon to-navy ring-1 ring-gold/50 rounded-xl px-5 py-3.5 shadow-lg">
                  <div className="w-11 h-11 bg-gold rounded-lg flex items-center justify-center text-navy shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-black text-white text-lg sm:text-xl leading-tight">20% TO 100%</p>
                    <p className="text-gold-light text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase">Scholarships Available</p>
                  </div>
                </div>

                {/* Programs (eye path 5) */}
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {[
                    { label: 'Pre-Medical', icon: <FlaskConical size={15} className="text-gold" /> },
                    { label: 'Pre-Engineering', icon: <Atom size={15} className="text-gold" /> },
                    { label: 'Computer Science', icon: <Monitor size={15} className="text-gold" /> },
                  ].map((p) => (
                    <Link
                      key={p.label}
                      to="/programs"
                      className="inline-flex items-center gap-2 bg-white/[0.07] ring-1 ring-white/15 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gold hover:text-navy hover:ring-gold transition-all"
                    >
                      {p.icon} {p.label}
                    </Link>
                  ))}
                </div>

                {/* CTAs (eye path 6) */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>Apply Now</Button>
                  <Button to="/programs" variant="outlineLight" size="lg">Explore Programs</Button>
                  <Button to="/contact" variant="outlineLight" size="lg">Contact Us</Button>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — official poster, framed, balanced */}
            <Reveal delay={120}>
              <div className="relative max-w-md mx-auto w-full">
                <div className="relative bg-gradient-to-b from-white/10 to-white/[0.03] ring-1 ring-gold/30 rounded-2xl p-2.5 sm:p-3 shadow-2xl">
                  <div className="rounded-xl overflow-hidden bg-white">
                    <img
                      src="/poster.jpg"
                      alt="Official Admissions & Scholarships poster — The Scholars' College Katlang, Admissions Open 2026-27"
                      className="w-full h-auto block"
                      loading="eager"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="mt-4 text-center flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <BadgeCheck size={14} className="text-gold" />
                  Official poster — Admissions Open 2026–27
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom accent hairlines */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </section>

      {/* ===== Why Choose ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader eyebrow="Why Choose Us" title="Why Choose The Scholars' College?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group bg-white rounded-xl border border-gray-200 p-7 text-center shadow-sm hover:shadow-soft hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-navy/[0.04] group-hover:bg-gold/10 rounded-xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mx-auto mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Programs ===== */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader eyebrow="Explore Our Programs" title="Academic Programs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicPrograms.map((prog, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-soft hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className={`bg-gradient-to-r ${prog.accent} h-1`}></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-navy/[0.04] group-hover:bg-gold/10 rounded-xl flex items-center justify-center text-navy group-hover:text-gold transition-colors">
                        {prog.icon}
                      </div>
                      {prog.tag && (
                        <span className="text-xs font-bold text-gold bg-gold/10 rounded-full px-3 py-1">
                          {prog.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">{prog.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{prog.description}</p>
                    <div className="mt-auto flex flex-col gap-2.5">
                      <Link
                        to="/programs"
                        className="inline-flex items-center justify-center gap-1.5 border border-navy/20 text-navy hover:bg-navy hover:text-white font-medium text-sm px-5 py-3 rounded-lg transition-all"
                      >
                        View Details <ChevronRight size={15} />
                      </Link>
                      <Button to="/admissions" variant="primary" size="sm" className="w-full">Apply Now</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Scholarships ===== */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}></div>
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 text-gold font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">
                  <BadgeCheck size={16} /> Scholarships
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                  Scholarships Available
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  We are committed to making quality education accessible. Merit-based and need-based
                  scholarships are available for aspiring students.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <Button to="/scholarships" variant="primary" size="lg" icon={ArrowRight} iconRight>Explore Scholarships</Button>
                  <Button to="/admissions" variant="outlineLight" size="lg">Apply Now</Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-white/[0.04] ring-1 ring-gold/40 rounded-2xl p-10 sm:p-12 text-center shadow-xl">
                <p className="font-heading text-5xl md:text-6xl font-black text-gold">20% — 100%</p>
                <p className="text-gray-200 text-lg sm:text-xl mt-4 font-semibold tracking-wide uppercase">Scholarships Available</p>
                <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
                <p className="text-sm text-gray-400 mt-6">
                  Ask about scholarship opportunities when you contact our admissions office.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Admissions CTA ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-maroon text-white rounded-full px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-6">
              <GraduationCap size={15} className="text-gold" /> Admissions Open 2026–27
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-4">
              Begin Your Academic Journey
            </h2>
            <p className="text-gray-600 mb-9 text-lg">
              Start your journey toward a brighter future with quality education, experienced faculty
              and scholarships up to 100%.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>Apply Now</Button>
              <Button to="/contact" variant="navy" size="lg">Contact Admissions</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== DIT & Computer Courses ===== */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader eyebrow="One Year DIT & Computer Courses" title="Practical IT Education" />
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center max-w-5xl mx-auto">
            <Reveal>
              <div className="space-y-3">
                {ditFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="w-12 h-12 bg-navy/[0.04] rounded-xl flex items-center justify-center text-navy shrink-0">
                      {f.icon}
                    </div>
                    <span className="font-heading font-bold text-navy">{f.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  One Year DIT recognized by the Board of Technical Education — with practical coverage
                  of Python, C++ and MS Office.
                </p>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {['Python', 'C++', 'MS Office'].map((c) => (
                    <span key={c} className="inline-flex items-center gap-2 bg-white border border-gold/30 text-navy font-medium text-sm px-4 py-2 rounded-lg">
                      <Code2 size={15} className="text-gold" /> {c}
                    </span>
                  ))}
                </div>
                <Button to="/computer-courses" variant="navy" size="lg" icon={ArrowRight} iconRight>
                  Explore Computer Courses
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-gold font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">About Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  Built on Education, Discipline &amp; Excellence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Scholars' College Katlang provides intermediate education in Pre-Medical (F.Sc),
                  Pre-Engineering (F.Sc) and Computer Science (ICS), guided by qualified and experienced
                  faculty.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { t: 'Education', icon: <BookOpenCheck size={20} /> },
                    { t: 'Discipline', icon: <HeartHandshake size={20} /> },
                    { t: 'Excellence', icon: <Sparkles size={20} /> },
                  ].map((v) => (
                    <div key={v.t} className="border border-gray-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-navy/[0.04] rounded-lg flex items-center justify-center text-gold mx-auto mb-2">
                        {v.icon}
                      </div>
                      <span className="text-sm font-heading font-bold text-navy">{v.t}</span>
                    </div>
                  ))}
                </div>
                <Button to="/about" variant="navy" size="lg" icon={ArrowRight} iconRight>Learn More About Us</Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col items-center gap-6">
                <div className="bg-gray-50 ring-1 ring-gray-200 rounded-2xl p-8 sm:p-10 w-full max-w-sm text-center">
                  <Logo className="h-40 sm:h-48 w-auto max-w-full mx-auto" />
                </div>
                <p className="font-heading italic text-gray-500 text-center max-w-sm">
                  "We Believe in Quality Education"
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Faculty ===== */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader eyebrow="Our Team" title="Meet Our Faculty & Team" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyPreview.map((f, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="group bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-soft hover:border-gold/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold font-heading font-black shadow-md mx-auto mb-4 group-hover:scale-105 transition-transform">
                    {f.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 text-maroon text-xs font-bold rounded-full px-3 py-1 mb-3">
                    <BadgeCheck size={12} /> {f.role}
                  </span>
                  <h3 className="font-heading font-bold text-navy">{f.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{f.qual}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Button to="/faculty" variant="navy" size="lg">View Full Faculty</Button>
          </Reveal>
        </div>
      </section>

      {/* ===== Student Stories (no fake testimonials) ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <SectionHeader eyebrow="Testimonials" title="Student Success Stories" />
          <Reveal>
            <div className="bg-gray-50 ring-1 ring-gray-200 rounded-2xl p-10 sm:p-14">
              <GraduationCap size={36} className="text-gold mx-auto mb-5" />
              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Student stories and achievements will be featured here as they become available.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader eyebrow="Get in Touch" title="Contact Us" />
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 text-center sm:text-left mb-10">
                  <div className="w-14 h-14 bg-maroon/10 rounded-xl flex items-center justify-center text-maroon mx-auto sm:mx-0 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy text-lg">Our Location</p>
                    <p className="text-gray-600">Katlang Mella, Near Bilandi Chowk Katlang</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/-/g, '')}`}
                      className="inline-flex items-center gap-2 border border-gray-200 rounded-lg px-5 py-3 text-navy font-semibold hover:border-gold/50 hover:text-gold hover:shadow-sm transition-all"
                    >
                      <Phone size={16} className="text-maroon" /> {phone}
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <Button href={`tel:${PHONES[0].replace(/-/g, '')}`} variant="navy" size="lg" icon={PhoneCall}>Call Now</Button>
                  <Button href={WHATSAPP_URL} variant="whatsapp" size="lg"><WhatsAppIcon size={18} /> WhatsApp</Button>
                  <Button href={MAPS_URL} variant="outline" size="lg" icon={School}>Get Directions</Button>
                  <Button href={FB_URL} variant="facebook" size="lg"><FacebookIcon size={16} /> Facebook</Button>
                  <Button href={INSTAGRAM_URL} variant="instagram" size="lg"><InstagramIcon size={16} /> Instagram</Button>
                  <Button href="mailto:principal.sck@gmail.com" variant="primary" size="lg" icon={Mail}>Email</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
