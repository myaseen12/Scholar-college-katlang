import { Monitor, Users, Wrench, ArrowRight, Phone, Code2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const features = [
  {
    icon: <Users size={28} />,
    title: 'Qualified Staff',
    desc: 'Our college is supported by qualified and experienced staff dedicated to guiding students toward success.',
    accent: 'from-royal to-royal-light',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Standard Computer Lab',
    desc: 'A standard computer lab supporting IT education and practical, hands-on computing for students.',
    accent: 'from-navy to-navy-light',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Practical Classes',
    desc: 'Practical, hands-on classes complement classroom learning and help students build real skills.',
    accent: 'from-maroon to-maroon-light',
  },
]

const courses = [
  { icon: <Code2 size={22} />, name: 'Python', desc: 'Modern programming fundamentals' },
  { icon: <Code2 size={22} />, name: 'C++', desc: 'Structured programming & applications' },
  { icon: <Code2 size={22} />, name: 'MS Office', desc: 'Word, Excel, PowerPoint & more' },
]

export default function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="A campus environment designed to support learning, growth, and student wellbeing."
        breadcrumbs={[{ name: 'About', path: '/about' }, { name: 'Facilities' }]}
      />

      {/* Feature cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="College Highlights"
            title="Our Facilities"
            subtitle="The facilities highlighted in the college's promotional material."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((fac, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group relative bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
                  <div className={`bg-gradient-to-br ${fac.accent} h-1.5 group-hover:h-2 transition-all`}></div>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-navy/5 group-hover:bg-gold/10 rounded-2xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mx-auto mb-5">
                      {fac.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-3">{fac.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Lab highlight */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-royal py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy">
                    <Monitor size={24} />
                  </div>
                  <span className="text-gold font-semibold text-sm tracking-widest uppercase">Computer Lab</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                  Standard Computer Lab
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Our standard computer lab provides students with a dedicated space to learn modern
                  computing — with practical coverage of Python, C++ and MS Office.
                </p>
                <Button to="/computer-courses" variant="primary" size="lg" icon={ArrowRight} iconRight>
                  Explore Computer Courses
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4">
                {courses.map((c) => (
                  <div key={c.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white">{c.name}</h4>
                      <p className="text-sm text-gray-300">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Learn More About Our Facilities
            </h2>
            <p className="text-gray-600 mb-9 text-lg">
              Get in touch with us for more information about the college and its facilities.
            </p>
            <Button to="/computer-courses" variant="primary" size="lg" icon={ArrowRight} iconRight>
              Explore Computer Courses
            </Button>
            <div className="mt-4">
              <Button to="/contact" variant="navy" size="lg" icon={Phone}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
