import { useState } from 'react'
import { FlaskConical, Atom, Monitor, Code2, CheckCircle, ArrowRight, Users, Laptop, Wrench } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Modal from '../components/Modal'

const programs = [
  {
    id: 'pre-medical',
    title: 'Pre-Medical',
    tag: 'F.Sc',
    icon: <FlaskConical size={26} />,
    accent: 'from-royal to-royal-light',
    description:
      'A pathway to medicine, dentistry, pharmacy and allied health sciences, building a strong foundation in the life sciences.',
    details: [
      'A focused intermediate stream for students aiming at careers in medicine, dentistry, pharmacy and allied health sciences.',
      'Taught by our qualified and experienced faculty.',
      'Part of the college\'s science program offerings.',
      'For complete admission information, contact the admissions office or apply online.',
    ],
  },
  {
    id: 'pre-engineering',
    title: 'Pre-Engineering',
    tag: 'F.Sc',
    icon: <Atom size={26} />,
    accent: 'from-navy to-navy-light',
    description:
      'A strong foundation in mathematics and the physical sciences for engineering, technology and applied sciences.',
    details: [
      'An intermediate stream designed to prepare students for engineering and technology programmes.',
      'Delivered by dedicated, qualified faculty.',
      'Part of the college\'s science program offerings.',
      'For complete admission information, contact the admissions office or apply online.',
    ],
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    tag: 'ICS',
    icon: <Monitor size={26} />,
    accent: 'from-maroon to-maroon-light',
    description:
      'Modern computing, programming and IT education that prepares students for the digital future.',
    details: [
      'An intermediate computer science stream introducing students to computing, programming and modern IT.',
      'Taught with access to a standard computer lab.',
      'Part of the college\'s science program offerings.',
      'For complete admission information, contact the admissions office or apply online.',
    ],
  },
  {
    id: 'dit',
    title: 'One Year DIT',
    tag: 'DIT',
    icon: <Code2 size={26} />,
    accent: 'from-gold to-maroon-light',
    description:
      'A one-year Diploma in Information Technology — recognized by the Board of Technical Education.',
    features: [
      'One Year DIT',
      'Board of Technical Education recognized',
      'Qualified Staff',
      'Standard Computer Lab',
      'Practical Classes',
      'Admission Open — Limited Seats',
    ],
    courses: ['Python', 'C++', 'MS Office'],
  },
]

const infoBanner = [
  { icon: <Users size={28} />, title: 'Experienced Faculty', desc: 'Dedicated and qualified teaching staff.' },
  { icon: <Laptop size={28} />, title: 'Modern Computer Lab', desc: 'Practical computing for DIT and computer courses.' },
  { icon: <Wrench size={28} />, title: 'Practical Classes', desc: 'Hands-on learning alongside classroom teaching.' },
]

export default function Programs() {
  const [openId, setOpenId] = useState(null)
  const active = programs.find((p) => p.id === openId) || null

  const close = () => setOpenId(null)

  return (
    <>
      <PageHero
        title="Academic Programs"
        subtitle="Explore the academic programs offered at The Scholars' College Katlang."
        breadcrumbs={[{ name: 'Programs' }]}
      />

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 90}>
                <div className="group relative bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
                  <div className={`bg-gradient-to-br ${prog.accent} h-1.5 group-hover:h-2 transition-all`}></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center text-navy group-hover:text-gold transition-colors">
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
                    <div className="mt-auto flex flex-col gap-2.5 pt-2">
                      <button
                        onClick={() => setOpenId(prog.id)}
                        className="inline-flex items-center justify-center gap-1.5 border border-navy/15 text-navy hover:bg-navy hover:text-white font-medium text-sm px-5 py-3 rounded-lg transition-all"
                      >
                        View Details <ArrowRight size={15} />
                      </button>
                      <Button to="/admissions" variant="primary" size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 text-center">
          {infoBanner.map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 mb-9 text-lg">
              Take the next step toward a bright future at The Scholars' College Katlang.
            </p>
            <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>
              Apply Now
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Details Modal */}
      <Modal isOpen={!!active} onClose={close} title={active ? active.title : ''} size="lg">
        {active && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                {active.icon}
              </div>
              {active.tag && (
                <span className="text-xs font-bold text-gold bg-gold/10 rounded-full px-3 py-1">
                  {active.tag}
                </span>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{active.description}</p>

            {active.features && (
              <div className="mb-6">
                <h4 className="font-heading font-bold text-navy text-sm mb-3">Highlights</h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {active.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5">
                      <CheckCircle size={15} className="text-gold shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {active.courses && (
              <div className="mb-6">
                <h4 className="font-heading font-bold text-navy text-sm mb-3">Courses Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {active.courses.map((c, j) => (
                    <span key={j} className="text-sm bg-white border border-gold/30 text-navy font-medium px-3 py-1.5 rounded-md">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {active.details && (
              <ul className="space-y-2.5">
                {active.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <CheckCircle size={15} className="text-gold shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/admissions" variant="primary" icon={ArrowRight} iconRight>
                Apply Now
              </Button>
              <Button onClick={close} variant="outline">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
