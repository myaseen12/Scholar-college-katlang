import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Code2, Braces, FileSpreadsheet, Users, BadgeCheck, Phone, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const features = [
  { icon: <Users size={28} />, title: 'Qualified Staff', desc: 'Trained instructors guiding students through every course.' },
  { icon: <Monitor size={28} />, title: 'Standard Computer Lab', desc: 'A dedicated lab for hands-on, practical training.' },
  { icon: <BadgeCheck size={28} />, title: 'Practical Classes', desc: 'Real practical learning — not just theory.' },
]

const courses = [
  {
    icon: <Code2 size={26} />,
    title: 'Python Course',
    desc: 'Learn one of the world\'s most in-demand programming languages in a hands-on setting.',
  },
  {
    icon: <Braces size={26} />,
    title: 'C++ Course',
    desc: 'Build a strong foundation in core programming concepts with C++.',
  },
  {
    icon: <FileSpreadsheet size={26} />,
    title: 'MS Office',
    desc: 'Master essential productivity tools — Word, Excel and PowerPoint — for study and work.',
  },
]

export default function ComputerCourses() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-royal overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-gold text-navy rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-5">
                <BadgeCheck size={14} /> Admissions Open
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
                One Year <span className="text-gold">DIT</span>
              </h1>
              <p className="text-gray-300 font-heading font-bold text-lg mb-4">
                Board of Technical Education
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
                Practical IT education — Python, C++ and MS Office — taught by qualified staff in a
                standard computer lab.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>
                  Enroll Now
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative max-w-md lg:max-w-lg mx-auto w-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 via-transparent to-maroon/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-transparent via-white/10 to-white/20 border-2 border-gold/40 rounded-3xl p-3 sm:p-4 rotate-[-1deg] hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden bg-white">
                    <img
                      src="/dit-poster.jpg"
                      alt="One Year DIT Official Poster — The Scholars' College Katlang"
                      className="w-full h-auto block"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Why DIT?" title="Course Features" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-navy/5 group-hover:bg-gold/10 rounded-2xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mx-auto mb-5">
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

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Courses" title="Our Courses" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {courses.map((course, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 bg-navy/5 group-hover:bg-gold/10 rounded-2xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mb-5">
                    {course.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{course.desc}</p>
                  <Link
                    to="/admissions"
                    className="inline-flex items-center justify-center gap-1.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-3 rounded-lg transition-all"
                  >
                    Enroll Now <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Seats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-maroon via-maroon-light to-navy p-8 md:p-12 text-center">
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy">
                    <GraduationCap size={24} />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-black text-white">
                    Limited Seats — Confirm Your Seat
                  </h2>
                </div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Seats are limited for the One Year DIT program. Confirm your seat early to secure
                  your place.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ask About DIT
            </h2>
            <p className="text-gray-600 mb-9 text-lg">
              Have questions about the One Year DIT program or computer courses? Reach out to us.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={Phone}>
              Contact Us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
