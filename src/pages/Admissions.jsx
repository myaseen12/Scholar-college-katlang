import { useRef, useState } from 'react'
import { GraduationCap, CheckCircle, Phone, ChevronDown, ArrowLeft, Home as HomeIcon, Send, Loader2, AlertCircle, Navigation, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import ContactCard from '../components/ContactCard'
import { submitInquiry } from '../services/formService'
import { FacebookIcon, FB_URL, InstagramIcon, INSTAGRAM_URL } from '../components/FacebookIcon'

const PROGRAMS = ['Pre-Medical', 'Pre-Engineering', 'Computer Science', 'One Year DIT']

const CALL_PHONE = '0343-9292192'
const WHATSAPP_PHONE = '0345-8008782'
const WHATSAPP_NUMBER = '923458008782'
const WHATSAPP_MESSAGE = 'Hello, I would like information about admissions for 2026–27.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const PHONE_RE = /^[+]?[\d\s-]{10,15}$/

const FAQS = [
  {
    q: 'When are admissions open?',
    a: 'Admissions are open for the 2026–27 academic session. Please contact the college for specific dates and deadlines.',
  },
  {
    q: 'Which programs are available?',
    a: 'The Scholars\' College Katlang offers Pre-Medical, Pre-Engineering, Computer Science and One Year DIT programs.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes — scholarships from 20% to 100% are available. Please contact the college for current details.',
  },
  {
    q: 'How can I contact the college?',
    a: 'You can call us at 0343-9292192, 0345-8008782, or 0937-576080, or reach us on WhatsApp.',
  },
]

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const inputClass =
  'w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all'
const inputOk = `${inputClass} border-gray-200`
const inputErr = `${inputClass} border-red-400 bg-red-50`

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.fatherName.trim()) errors.fatherName = 'Please enter your father / guardian name.'

  const phone = values.phone.trim()
  if (!phone) {
    errors.phone = 'Please enter your phone number.'
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = 'Please enter a valid phone number (e.g., 03XX-XXXXXXX).'
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.program) errors.program = 'Please select a program.'

  if (values.message.trim() && values.message.trim().length < 10) {
    errors.message = 'Please provide a more detailed message (at least 10 characters).'
  }
  return errors
}

export default function Admissions() {
  const [values, setValues] = useState({
    fullName: '',
    fatherName: '',
    phone: '',
    email: '',
    program: '',
    qualification: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submitError, setSubmitError] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const formRef = useRef(null)

  const setValue = (name) => (e) => {
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (errors[name]) {
      const nextErrors = { ...errors }
      delete nextErrors[name]
      setErrors(nextErrors)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setStatus('submitting')
    setSubmitError('')
    try {
      await submitInquiry('admission', values)
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setStatus('error')
      setSubmitError(err?.message || 'Something went wrong while submitting. Please try again.')
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <PageHero
        title="Admissions Open 2026–27"
        subtitle="Begin your academic journey at The Scholars' College Katlang."
        breadcrumbs={[{ name: 'Admissions' }]}
      />

      {/* Overview & Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <Reveal>
              <div>
                <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">Join Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-5">
                  Admissions Open 2026–27
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Scholars' College Katlang invites applications for the 2026–27 academic session.
                  We welcome students who are eager to pursue quality education — with 20% to 100%
                  scholarships available to support deserving students.
                </p>

                <div className="bg-navy/5 rounded-2xl p-6 mb-6">
                  <h4 className="font-heading font-bold text-navy mb-4 flex items-center gap-2">
                    <GraduationCap size={18} className="text-gold" /> Available Programs
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {PROGRAMS.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <CheckCircle size={16} className="text-gold shrink-0" />
                        <span className="font-medium text-navy">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scholarship highlight */}
                <div className="relative overflow-hidden bg-gradient-to-r from-maroon to-navy rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy shrink-0">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-white text-lg leading-tight">Limited Seats — Confirm Your Seat</p>
                      <p className="text-gold-light text-sm font-semibold mt-1">20% to 100% Scholarships Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Admission inquiry form */}
            <Reveal delay={120}>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7 sm:p-8">
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-1">Admission Inquiry</h3>
                  <p className="text-sm text-gray-500">
                    Fill in the form and our admissions team will contact you.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-5">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-navy text-xl mb-2">Inquiry Recorded!</h4>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      Your inquiry has been recorded in this demo. Connect a backend/email service to
                      receive submissions.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setValues({
                          fullName: '', fatherName: '', phone: '', email: '',
                          program: '', qualification: '', message: '',
                        })
                      }}
                      className="mt-6 text-gold font-semibold text-sm hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    {status === 'error' && (
                      <div role="alert" className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-maroon">*</span>
                        </label>
                        <input id="fullName" name="fullName" type="text" value={values.fullName} onChange={setValue('fullName')} className={errors.fullName ? inputErr : inputOk} />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Father / Guardian Name <span className="text-maroon">*</span>
                        </label>
                        <input id="fatherName" name="fatherName" type="text" value={values.fatherName} onChange={setValue('fatherName')} className={errors.fatherName ? inputErr : inputOk} />
                        {errors.fatherName && <p className="text-xs text-red-500 mt-1">{errors.fatherName}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number <span className="text-maroon">*</span>
                        </label>
                        <input id="phone" name="phone" type="tel" value={values.phone} onChange={setValue('phone')} placeholder="e.g., 0345-8008782" className={errors.phone ? inputErr : inputOk} />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input id="email" name="email" type="email" value={values.email} onChange={setValue('email')} placeholder="you@example.com" className={errors.email ? inputErr : inputOk} />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Program <span className="text-maroon">*</span>
                        </label>
                        <select id="program" name="program" value={values.program} onChange={setValue('program')} className={errors.program ? inputErr : inputOk}>
                          <option value="">Select a program</option>
                          {PROGRAMS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        {errors.program && <p className="text-xs text-red-500 mt-1">{errors.program}</p>}
                      </div>
                      <div>
                        <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Previous Qualification
                        </label>
                        <input id="qualification" name="qualification" type="text" value={values.qualification} onChange={setValue('qualification')} placeholder="e.g., Matriculation" className={inputOk} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea id="message" name="message" rows="4" value={values.message} onChange={setValue('message')} placeholder="Any questions or details you would like to share..." className={`${errors.message ? inputErr : inputOk} resize-none`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-4 rounded-lg shadow hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Submit Admission Inquiry
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-400 text-center">
                      Demo: your inquiry is recorded in this browser and not yet sent to the college.
                      Connect a backend/email service to receive submissions.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            <ContactCard icon={<Phone size={20} />} title="Call">
              <div className="flex flex-col gap-2.5">
                <Button href={`tel:0343-9292192`} variant="outline" className="justify-start">
                  <Phone size={16} /> Call 0343-9292192
                </Button>
                <Button href={`tel:0345-8008782`} variant="outline" className="justify-start">
                  <Phone size={16} /> Call 0345-8008782
                </Button>
              </div>
            </ContactCard>

            <ContactCard icon={<Navigation size={20} />} title="WhatsApp">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-5 py-3 rounded-lg transition-all"
              >
                <WhatsAppIcon size={18} /> WhatsApp Admissions — 0345-8008782
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Opens WhatsApp with a pre-filled message.
              </p>
            </ContactCard>

            <ContactCard icon={<FacebookIcon size={20} />} title="Facebook">
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold px-5 py-3 rounded-lg transition-all"
              >
                <FacebookIcon size={18} /> Follow Us on Facebook
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Opens our official Facebook page in a new tab.
              </p>
            </ContactCard>

            <ContactCard icon={<InstagramIcon size={20} />} title="Instagram">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E4405F] hover:bg-[#d62976] text-white font-semibold px-5 py-3 rounded-lg transition-all"
              >
                <InstagramIcon size={18} /> Follow Us on Instagram
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Opens our official Instagram page in a new tab.
              </p>
            </ContactCard>

            <ContactCard icon={<Mail size={20} />} title="Email">
              <a
                href="mailto:principal.sck@gmail.com"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
              >
                <Mail size={16} /> principal.sck@gmail.com
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Send us an email for admissions inquiries and official correspondence.
              </p>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">FAQs</span>
            <h2 className="font-heading text-3xl font-bold text-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-heading font-bold text-navy">{faq.q}</span>
                  <ChevronDown size={18} className={`text-gold shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation buttons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          <Button to="/programs" variant="navy" icon={ArrowLeft}>
            Back to Programs
          </Button>
          <Button to="/" variant="outline" icon={HomeIcon}>
            Home
          </Button>
        </div>
      </section>
    </>
  )
}
