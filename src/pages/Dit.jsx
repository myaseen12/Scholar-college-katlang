import { Link } from 'react-router-dom'
import {
  ArrowRight, Users, Monitor, Laptop, Code2, Braces, FileSpreadsheet,
  BadgeCheck, GraduationCap, AlarmClock, Phone,
} from 'lucide-react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    icon: <Users size={26} />,
    title: 'Qualified Staff',
    desc: 'Trained instructors guiding students through every course.',
  },
  {
    icon: <Monitor size={26} />,
    title: 'Standard Computer Lab',
    desc: 'A dedicated computer lab for hands-on practical training.',
  },
  {
    icon: <Laptop size={26} />,
    title: 'Practical Classes',
    desc: 'Real, practical learning — not just theory.',
  },
]

const courses = [
  {
    icon: <Code2 size={26} />,
    title: 'Python Course',
    desc: 'Learn one of the world\'s most in-demand programming languages.',
    accent: 'from-maroon to-maroon-light',
  },
  {
    icon: <Braces size={26} />,
    title: 'C++ Course',
    desc: 'Build a strong foundation in core programming with C++.',
    accent: 'from-navy to-royal',
  },
  {
    icon: <FileSpreadsheet size={26} />,
    title: 'MS Office',
    desc: 'Master essential productivity tools for study and work.',
    accent: 'from-gold to-gold-light',
  },
]

export default function Dit() {
  return (
    <>
      {/* ===== DIT Hero ===== */}
      <section className="relative bg-gradient-to-br from-[#170709] via-[#2a0d18] to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '46px 46px'
        }}></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-maroon/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl"></div>
        {/* Giant DIT watermark */}
        <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 font-heading font-black text-[16rem] leading-none text-white/[0.04] select-none pointer-events-none">
          DIT
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <Reveal>
            <div>
              <Logo className="mb-8 h-24 sm:h-28 w-auto max-w-[240px]" />

              {/* Admission badge */}
              <div className="inline-flex items-center gap-2 bg-maroon text-gold rounded-full px-5 py-2 mb-6 border border-gold/40 shadow-lg">
                <BadgeCheck size={16} />
                <span className="font-semibold text-sm tracking-[0.2em] uppercase">Admissions Open</span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-none mb-5">
                One Year<br />
                <span className="text-gold">DIT</span>
              </h1>

              {/* Board highlight */}
              <div className="inline-flex items-center gap-3 bg-black/30 border border-gold/30 rounded-xl px-5 py-3 mb-7 backdrop-blur-sm">
                <GraduationCap size={20} className="text-gold shrink-0" />
                <p className="text-white font-heading font-bold text-sm sm:text-base">
                  Board of Technical Education
                </p>
              </div>

              {/* Limited seats */}
              <div className="flex items-start gap-2 text-white/90 mb-9">
                <AlarmClock size={18} className="text-gold mt-0.5 shrink-0" />
                <p className="text-lg">
                  Limited Seats — <span className="font-heading font-bold text-gold">Confirm Your Seats</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Enroll Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-light text-white font-medium px-8 py-3.5 rounded-lg transition-all border border-white/10"
                >
                  <Phone size={16} /> Contact Us
                </Link>
              </div>
            </div>
            </Reveal>

            {/* Right — seat confirmation panel (poster-inspired, not the raw poster) */}
            <Reveal delay={120}>
            <div className="relative max-w-md mx-auto w-full">
              <div className="absolute -inset-3 bg-gradient-to-br from-maroon/40 via-transparent to-gold/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-b from-black/60 to-navy-light border-2 border-gold/50 rounded-3xl p-8 sm:p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-gold font-bold text-sm tracking-[0.25em] uppercase">One Year DIT</span>
                  <div className="inline-flex items-center gap-1.5 bg-maroon text-gold text-xs font-bold rounded-full px-3 py-1">
                    <BadgeCheck size={12} /> Admission Open
                  </div>
                </div>

                <div className="h-1 w-full bg-gradient-to-r from-gold via-maroon to-transparent rounded-full mb-8"></div>

                <div className="text-center mb-10">
                  <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-3">Board of Technical Education</p>
                  <p className="font-heading text-white text-2xl font-bold">Limited Seats</p>
                  <p className="font-heading text-gold text-4xl font-black mt-2">Confirm Your Seats</p>
                </div>

                <ul className="space-y-3 mb-9">
                  {['Qualified Staff', 'Standard Computer Lab', 'Practical Classes'].map((f) => (
                    <li key={f} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm">
                      <BadgeCheck size={16} className="text-gold shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold py-3.5 rounded-lg transition-all shadow-lg"
                >
                  Enroll Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Why This Course?" title="What You Get" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 bg-navy/5 group-hover:bg-maroon/10 rounded-2xl flex items-center justify-center text-navy group-hover:text-maroon transition-colors mx-auto mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Computer Courses ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Computer Courses" title="Courses Covered in DIT" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((c, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={`h-1.5 bg-gradient-to-r ${c.accent}`}></div>
                  <div className="p-7">
                    <div className="w-14 h-14 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mb-5">
                      {c.icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-2">{c.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-maroon to-navy py-16">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-gold text-navy rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
              <AlarmClock size={15} /> Admission Open — Limited Seats
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4">
              Confirm Your Seats
            </h2>
            <p className="text-gray-300 text-lg mb-9 max-w-2xl mx-auto">
              One Year DIT under the Board of Technical Education — with qualified staff, a standard computer lab and practical classes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-all border border-white/20 text-lg">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}