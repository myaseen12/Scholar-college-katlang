import { GraduationCap, ArrowRight, BadgeCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

const levels = [
  { pct: '20%', label: 'Starting', emoji: '🌱' },
  { pct: '50%', label: 'Support', emoji: '📈' },
  { pct: '75%', label: 'Assistance', emoji: '⭐' },
  { pct: '100%', label: 'Full', emoji: '🏆' },
]

function FAQ() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
        <div className="px-6 py-5">
          <h3 className="font-heading font-bold text-navy">
            What scholarship opportunities are available?
          </h3>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed bg-white">
          The college promotional material states that scholarships from 20% to 100% are available.
          Please contact the college for current eligibility and terms.
        </div>
      </div>
    </div>
  )
}

export default function Scholarships() {
  return (
    <>
      <PageHero
        title="Scholarships"
        subtitle="20% to 100% scholarships available at The Scholars' College Katlang."
        breadcrumbs={[{ name: 'Scholarships' }]}
      />

      {/* Large visual scholarship section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-maroon via-maroon-light to-navy rounded-3xl text-white shadow-2xl">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
              {/* Left — heading */}
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-gold-light font-semibold text-sm tracking-widest uppercase">
                    Scholarships
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
                  20% to 100%<br />
                  <span className="text-gold">Scholarships</span>
                </h1>
                <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
                  The Scholars' College Katlang believes in quality education for everyone. Our
                  promotional material highlights scholarship support from 20% all the way to 100%.
                  Ask about scholarship opportunities when you contact our admissions office.
                </p>
              </Reveal>

              {/* Right — percentage showcase */}
              <Reveal delay={120}>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                  {levels.map((l) => (
                    <div
                      key={l.pct}
                      className="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 text-center hover:bg-white/15 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{l.emoji}</div>
                      <p className="font-heading text-4xl font-black text-gold">{l.pct}</p>
                      <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">{l.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Poster reference note */}
          <Reveal className="mt-10">
            <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
              <BadgeCheck size={15} className="text-gold" />
              Percentages shown are promotional levels as displayed in the official admissions material.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ask About Scholarships
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions about scholarship opportunities? Our team is happy to help.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={GraduationCap}>
              Contact Admissions
            </Button>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-bold text-navy mb-3">
              Apply for Admission
            </h3>
            <p className="text-gray-600 mb-6">
              Take the next step and apply for the 2026–27 academic session.
            </p>
            <Button to="/admissions" variant="navy" size="lg" icon={ArrowRight} iconRight>
              Apply for Admission
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">FAQs</span>
            <h2 className="font-heading text-3xl font-bold text-navy">Scholarship Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  )
}
