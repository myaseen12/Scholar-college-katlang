import { BookOpen, Target, Eye, BookMarked, ShieldCheck, GraduationCap, Star, Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const coreValues = [
  {
    icon: <BookOpen size={28} />,
    value: 'EDUCATION',
    desc: 'A commitment to academic excellence and the pursuit of knowledge for every student.',
  },
  {
    icon: <ShieldCheck size={28} />,
    value: 'DISCIPLINE',
    desc: 'Building responsibility, focus, and self-respect through a structured learning environment.',
  },
  {
    icon: <Award size={28} />,
    value: 'EXCELLENCE',
    desc: 'Striving for the highest standards in teaching, character, and student achievement.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="About The Scholars' College Katlang — our mission, vision, and values."
        breadcrumbs={[{ name: 'About Us' }]}
      />

      {/* ===== Introduction ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">Introduction</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  About The Scholars' College Katlang
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-navy">The Scholars' College Katlang</strong> is an educational
                  institution located in Katlang, Mardan District, Khyber Pakhtunkhwa, Pakistan — at
                  Katlang Mella, near Bilandi Chowk. We proudly follow the motto,
                  <em className="text-maroon"> "We Believe in Quality Education."</em>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The college offers intermediate programs in Pre-Medical (F.Sc), Pre-Engineering
                  (F.Sc), and Computer Science (ICS), along with a One Year Diploma in Information
                  Technology (DIT) and short computer courses.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Guided by qualified and experienced faculty, we are committed to providing a
                  supportive environment where every student can grow academically and personally.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative p-6">
                <Logo className="h-40 sm:h-52 w-auto max-w-full" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Our Purpose" title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-gold mb-5">
                  <Target size={26} />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, quality education that equips students with the knowledge,
                  skills, and values they need to excel in higher education and contribute positively
                  to society.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-gold mb-5">
                  <Eye size={26} />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading intermediate college known for academic integrity, holistic student
                  development, and a lasting commitment to quality education in our community.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Core Values ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="What We Stand For" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreValues.map((v, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group relative overflow-hidden bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-royal to-gold"></div>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-navy/5 group-hover:bg-gold/10 rounded-2xl flex items-center justify-center text-navy group-hover:text-gold transition-colors mx-auto mb-5">
                      {v.icon}
                    </div>
                    <h3 className="font-heading text-xl font-black text-navy tracking-widest mb-2">
                      {v.value}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Commitment to Students ===== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-navy via-navy-light to-royal">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookMarked size={24} className="text-gold" />
                  <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Commitment</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Commitment to Students
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  At The Scholars' College Katlang, students are at the heart of everything we do. We
                  are committed to supporting every learner through a dedicated, experienced faculty
                  and a learning environment built on our core values of education, discipline, and
                  excellence.
                </p>
                <Button to="/admissions" variant="primary" size="lg">
                  <GraduationCap size={18} /> Apply Now
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4">
                {[
                  { icon: <Star size={20} />, title: 'Supportive Guidance', desc: 'Qualified faculty who mentor students at every step.' },
                  { icon: <BookMarked size={20} />, title: 'Modern Programs', desc: 'F.Sc (Pre-Medical, Pre-Engineering), ICS and One Year DIT.' },
                  { icon: <GraduationCap size={20} />, title: 'Focus on Growth', desc: 'Academic preparation and personal character development.' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center text-gold shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{f.title}</h4>
                      <p className="text-sm text-gray-300">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-600 mb-9 text-lg">
              Explore our academic programs or speak with our admissions office today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/programs" variant="primary" size="lg" icon={BookOpen}>
                Explore Our Programs
              </Button>
              <Button to="/admissions" variant="navy" size="lg" icon={Target}>
                Contact Admissions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
