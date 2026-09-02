import {
  Microscope, Atom, FlaskConical, Monitor,
  Calculator, BookOpen, BookMarked, ScrollText, BadgeCheck, ArrowRight, Phone,
} from 'lucide-react'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import FacultyCard from '../components/FacultyCard'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'

const leadership = [
  {
    name: 'Abdur Raziq',
    role: 'Principal',
    qualifications: ['MPhil Education', 'MSc'],
    color: 'bg-navy',
    featured: true,
  },
  {
    name: 'Muhammad Zubair',
    role: 'Director',
    qualifications: ['ACCA (UK)', 'M.Com'],
    color: 'bg-royal',
    featured: true,
  },
  {
    name: 'Kashif Anwar',
    role: 'Accountant',
    qualifications: ['BS Accounting & Finance'],
    color: 'bg-maroon',
  },
]

const coordinators = [
  { name: 'Bilal Khan', role: 'Coordinator', color: 'bg-navy-light' },
  { name: 'Suliman Khan', role: 'Coordinator', color: 'bg-royal' },
]

const staff = [
  { name: 'Rifat Ullah', role: 'P.T. / Physical Trainer', qualifications: ['Army Retd'], color: 'bg-maroon' },
]

const departments = [
  {
    name: 'Biology',
    icon: <Microscope size={22} />,
    accent: 'from-royal to-navy',
    tagColor: 'bg-royal',
    members: [
      { name: 'Ijaz Ali', qualification: 'MPhil Biology' },
      { name: 'Mufuza', qualification: 'MPhil Biology' },
    ],
  },
  {
    name: 'Physics',
    icon: <Atom size={22} />,
    accent: 'from-navy to-navy-light',
    tagColor: 'bg-navy',
    members: [
      { name: 'Naveed Ahmad', qualification: 'MPhil Physics' },
      { name: 'Muhammad Shah', qualification: 'BS Physics' },
    ],
  },
  {
    name: 'Chemistry',
    icon: <FlaskConical size={22} />,
    accent: 'from-maroon to-maroon-light',
    tagColor: 'bg-maroon',
    members: [
      { name: 'Hamza Khan', qualification: 'MPhil Chemistry' },
      { name: 'Sheriaz Ahmad', qualification: 'BS Chemistry' },
      { name: 'Ms Palwasha', qualification: 'MPhil Chemistry' },
    ],
  },
  {
    name: 'Computer Science',
    icon: <Monitor size={22} />,
    accent: 'from-royal to-royal-light',
    tagColor: 'bg-royal',
    members: [
      { name: 'Fayaz Ali', qualification: 'BS Computer Science' },
      { name: 'Abubakar', qualification: 'BS Computer Science (Gold Medalist)' },
    ],
  },
  {
    name: 'Mathematics',
    icon: <Calculator size={22} />,
    accent: 'from-navy to-maroon',
    tagColor: 'bg-navy',
    members: [
      { name: 'Shah Iran', qualification: 'MSc Mathematics' },
    ],
  },
  {
    name: 'English',
    icon: <BookOpen size={22} />,
    accent: 'from-gold to-gold-light',
    tagColor: 'bg-gold',
    members: [
      { name: 'Akhar Ali', qualification: 'MA English' },
      { name: 'Muhammad Arif', qualification: 'BS English' },
    ],
  },
  {
    name: 'Urdu',
    icon: <ScrollText size={22} />,
    accent: 'from-maroon to-navy',
    tagColor: 'bg-maroon',
    members: [
      { name: 'Naveed Khan', qualification: 'MA' },
      { name: 'Ayaz Khan', qualification: 'MA' },
    ],
  },
  {
    name: 'Islamiat',
    icon: <BookMarked size={22} />,
    accent: 'from-navy-light to-navy',
    tagColor: 'bg-navy',
    members: [
      { name: 'Qari Rukhsar Khan', qualification: 'MA Islamic Studies' },
      { name: 'Hafiza Liaba', qualification: 'Hifz UL Quran · Islamic Studies / Lecturer' },
    ],
  },
]

function initials(name) {
  return name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function Faculty() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-royal overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 md:pt-20 md:pb-24 relative z-10">
          <Logo className="mb-8 h-20 sm:h-24 w-auto max-w-[200px]" />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Our Faculty & Team</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            The dedicated educators and staff who guide our students toward success.
          </p>
        </div>
      </section>

      {/* ===== Leadership ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Leadership" title="College Leadership" />

          {/* Principal + Director — featured */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {leadership.filter((l) => l.featured).map((person, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <div className={`w-20 h-20 ${person.color} rounded-2xl flex items-center justify-center text-gold font-heading font-black text-2xl shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      {initials(person.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 bg-gold/10 text-maroon text-xs font-bold rounded-full px-3 py-1 mb-3">
                        <BadgeCheck size={12} /> {person.role}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy mb-2">{person.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {person.qualifications.map((q, j) => (
                          <span key={j} className="text-xs bg-white border border-gold/30 text-navy font-medium px-2.5 py-1 rounded-md">
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Accountant */}
          <Reveal>
            <div className="mb-10">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 max-w-lg mx-auto">
                <div className="flex items-start gap-5">
                  <div className={`rounded-2xl flex items-center justify-center text-gold font-heading font-black text-xl shrink-0 shadow-md`}
                       style={{ width: 72, height: 72, backgroundColor: '#6b1d2a' }}>
                    {initials(leadership[2].name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 text-maroon text-xs font-bold rounded-full px-3 py-1 mb-3">
                      <BadgeCheck size={12} /> {leadership[2].role}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">{leadership[2].name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {leadership[2].qualifications.map((q, j) => (
                        <span key={j} className="text-xs bg-white border border-gold/30 text-navy font-medium px-2.5 py-1 rounded-md">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coordinators + PT */}
          <div className="mb-6">
            <Reveal>
            <h3 className="font-heading text-xl font-bold text-navy text-center mb-6">Coordinators & Staff</h3>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[...coordinators, ...staff].map((person, i) => (
                <Reveal key={i} delay={i * 80}>
                  <FacultyCard
                    name={person.name}
                    role={person.role}
                    qualifications={person.qualifications || []}
                    color={person.color}
                    avatarSize="md"
                    centered
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Academic Departments ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Academic Departments" title="Our Faculty" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Department header */}
                  <div className={`bg-gradient-to-r ${dept.accent} px-6 py-5`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white shrink-0">
                        {dept.icon}
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg">{dept.name}</h3>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{dept.members.length} {dept.members.length === 1 ? 'Faculty' : 'Faculty Members'}</p>
                  </div>

                  {/* Members */}
                  <div className="p-5 space-y-4">
                    {dept.members.map((m, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy font-heading font-bold text-xs shrink-0">
                          {initials(m.name)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-heading font-bold text-navy text-sm leading-tight">{m.name}</h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{m.qualification}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-gray-300 mb-9 text-lg">
              Join a college with a dedicated and passionate faculty team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>
                Apply Now
              </Button>
              <Button to="/contact" variant="outlineLight" size="lg" icon={Phone}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}