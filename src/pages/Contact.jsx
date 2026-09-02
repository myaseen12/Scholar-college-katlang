import { useState, useRef } from 'react'
import { Phone, MapPin, Send, CheckCircle, GraduationCap, Navigation, Loader2, AlertCircle, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ContactCard from '../components/ContactCard'
import Button from '../components/Button'
import { submitInquiry } from '../services/formService'
import { FacebookIcon, FB_URL, InstagramIcon, INSTAGRAM_URL } from '../components/FacebookIcon'

const WHATSAPP_NUMBER = '923458008782'
const WHATSAPP_MESSAGE = 'Hello, I would like to contact The Scholars’ College Katlang.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent("The Scholars' College Katlang, Katlang Mella, Near Bilandi Chowk Katlang")

const PHONES = [
  { display: '0343-9292192', raw: '03439292192' },
  { display: '0345-8008782', raw: '03458008782' },
  { display: '0937-576080', raw: '0937576080' },
]

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const inputBase =
  'w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all'
const inputOk = `${inputBase} border-gray-200`
const inputErr = `${inputBase} border-red-400 bg-red-50`

const PHONE_RE = /^[+]?[\d\s-]{10,15}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  else if (!PHONE_RE.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number (e.g., 03XX-XXXXXXX).'
  if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please enter your message.'
  else if (values.message.trim().length < 10) errors.message = 'Please provide a more detailed message (at least 10 characters).'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '', phone: '', email: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef(null)

  const handleChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (errors[e.target.name]) {
      const nextErrors = { ...errors }
      delete nextErrors[e.target.name]
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
      await submitInquiry('contact', values)
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setStatus('error')
      setSubmitError(err?.message || 'Something went wrong while sending your message. Please try again.')
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Contact The Scholars' College Katlang. Reach out with any questions or inquiries."
        breadcrumbs={[{ name: 'Contact Us' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">Reach Out</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              Contact The Scholars' College Katlang
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              For admissions, scholarships, computer courses or any other inquiry, get in touch with
              our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <Reveal>
              <div className="space-y-4">
                <ContactCard icon={<MapPin size={20} />} title="Address">
                  <p className="font-medium text-gray-800">Katlang Mella, Near Bilandi Chowk Katlang</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Also known as: Porana Mela, Bilandi Chowk, Katlang
                  </p>
                </ContactCard>

                <ContactCard icon={<Phone size={20} />} title="Phone">
                  <div className="flex flex-col gap-2.5">
                    {PHONES.map((p) => (
                      <Button
                        key={p.raw}
                        href={`tel:${p.raw}`}
                        variant="outline"
                        className="justify-start"
                      >
                        <Phone size={16} /> Call {p.display}
                      </Button>
                    ))}
                  </div>
                </ContactCard>

                <ContactCard icon={<Navigation size={20} />} title="WhatsApp">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-5 py-3 rounded-lg transition-all"
                  >
                    <WhatsAppIcon size={18} /> WhatsApp Us — 0345-8008782
                  </a>
                  <p className="text-xs text-gray-400 mt-2">
                    Opens WhatsApp with a pre-filled message to The Scholars' College Katlang.
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

                <ContactCard icon={<Navigation size={20} />} title="Get Directions">
                  <Button href={MAPS_URL} variant="navy" icon={Navigation}>
                    Get Directions on Google Maps
                  </Button>
                  <p className="text-xs text-gray-400 mt-2">
                    Opens a Google Maps search for "The Scholars' College Katlang, Katlang Mella, Near
                    Bilandi Chowk Katlang".
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
                    Send us an email for detailed inquiries and official correspondence.
                  </p>
                </ContactCard>
              </div>
            </Reveal>

            {/* Right — contact form */}
            <Reveal delay={100}>
              <div ref={formRef} className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">Send a Message</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Fill in the form below. Fields marked with * are required.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-5">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-navy text-xl mb-2">Message Recorded!</h4>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      Your inquiry has been recorded in this demo. Connect a backend/email service to
                      receive submissions.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setValues({ name: '', phone: '', email: '', subject: '', message: '' })
                      }}
                      className="mt-6 text-gold font-semibold text-sm hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {status === 'error' && (
                      <div role="alert" className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name <span className="text-maroon">*</span>
                        </label>
                        <input id="name" name="name" type="text" value={values.name} onChange={handleChange} className={errors.name ? inputErr : inputOk} />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-maroon">*</span>
                        </label>
                        <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder="e.g., 0345-8008782" className={errors.phone ? inputErr : inputOk} />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@example.com" className={errors.email ? inputErr : inputOk} />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                        <select id="subject" name="subject" value={values.subject} onChange={handleChange} className={inputOk}>
                          <option value="">Select a subject (optional)</option>
                          <option value="Admissions 2026-27">Admissions 2026–27</option>
                          <option value="One Year DIT">One Year DIT</option>
                          <option value="Scholarships">Scholarships</option>
                          <option value="Computer Courses">Computer Courses</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-maroon">*</span>
                      </label>
                      <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} placeholder="Write your message..." className={`${errors.message ? inputErr : inputOk} resize-none`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-4 rounded-lg shadow hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-400 text-center">
                      Demo: your message is recorded in this browser and not yet sent to the college.
                      Connect a backend/email service to receive submissions.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Apply CTA */}
          <Reveal className="mt-16">
            <section className="relative overflow-hidden bg-gradient-to-r from-maroon to-navy rounded-2xl p-10 md:p-14 text-center">
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
              <div className="relative">
                <h2 className="font-heading text-2xl md:text-4xl font-black text-white mb-4">
                  Ready to Join The Scholars' College?
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                  Admissions are open for the 2026–27 academic session. Take the first step today.
                </p>
                <Button to="/admissions" variant="primary" size="lg" icon={GraduationCap}>
                  Apply Now
                </Button>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  )
}
