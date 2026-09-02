import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Camera, ChevronLeft, ChevronRight, GraduationCap, Sparkles, ImagePlus, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

const categories = ['All', 'College Branding', 'Admissions', 'Scholarships', 'DIT', 'Faculty & Team']

// Official promotional / branding assets (posters & logos) — NOT campus photographs
const galleryItems = [
  // College Branding
  {
    id: 1,
    category: 'College Branding',
    src: '/logo.png',
    title: 'College Logo',
    desc: 'Official logo of The Scholars\' College Katlang',
    type: 'image',
  },
  // Admissions
  {
    id: 2,
    category: 'Admissions',
    src: '/poster.jpg',
    title: 'Admissions Poster',
    desc: 'Official admissions promotional graphic — Admissions Open 2026–27',
    type: 'image',
    banner: 'Admissions Open 2026–27',
  },
  // Scholarships
  {
    id: 3,
    category: 'Scholarships',
    src: '/poster.jpg',
    title: 'Admissions & Scholarships Poster',
    desc: 'Official promotional graphic highlighting 20% to 100% scholarships',
    type: 'image',
    banner: '20% to 100% Scholarships',
  },
  // DIT
  {
    id: 4,
    category: 'DIT',
    src: '/dit-poster.jpg',
    title: 'One Year DIT Poster',
    desc: 'Official DIT promotional graphic — Board of Technical Education, Admission Open, Limited Seats',
    type: 'image',
    banner: 'One Year DIT',
  },
  // Faculty & Team
  {
    id: 5,
    category: 'Faculty & Team',
    src: '/faculty-team.jpg',
    title: 'Faculty & Team',
    desc: 'Official faculty and team reference graphic',
    type: 'image',
  },
]

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const touchStartX = useRef(null)

  const filtered = activeCat === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCat)

  const closeLightbox = () => setLightbox(null)

  const navigateLightbox = useCallback((dir) => {
    setLightbox((cur) => {
      const items = activeCat === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeCat)
      const idx = items.findIndex((item) => item.id === cur.id)
      const next = (idx + dir + items.length) % items.length
      return items[next]
    })
  }, [activeCat])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(deltaX) < 50) return
    if (deltaX < 0) navigateLightbox(1)  // swipe left → next
    else navigateLightbox(-1)             // swipe right → previous
  }

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
      if (e.key === 'ArrowRight') navigateLightbox(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, navigateLightbox])

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Official promotional assets and branding of The Scholars' College Katlang."
        breadcrumbs={[{ name: 'Gallery' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCat === cat
                    ? 'bg-gold text-navy shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-navy/10 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mb-10">
            Browse our official promotional and branding materials
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 80}>
              <button
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left w-full"
              >
                <div className="relative aspect-[4/3] bg-white overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.desc || item.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-navy/80 text-gold text-xs font-semibold rounded-full px-3 py-1 backdrop-blur-sm">
                    <Camera size={12} /> {item.category}
                  </div>
                  {item.banner && (
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-gold text-navy text-xs font-bold rounded-full px-3 py-1">
                      <Sparkles size={11} /> {item.banner}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 bg-white text-navy font-semibold text-sm rounded-lg px-4 py-2 shadow-lg">
                      <ImagePlus size={16} /> Preview
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-navy text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </button>
              </Reveal>
            ))}
          </div>

          {/* Campus photos coming soon */}
          <Reveal>
          <div className="mt-14 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-gold mx-auto mb-5">
              <ImagePlus size={28} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">
              Campus & Activities Photos Coming Soon
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Official photographs of our campus, classrooms, labs, events, sports and student activities will be added here by the college administration. The items above are our official promotional and branding posters.
            </p>
          </div>
          </Reveal>

          {/* Apply CTA */}
          <Reveal>
          <section className="mt-14 relative overflow-hidden bg-gradient-to-r from-maroon to-navy rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-gold text-navy rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-5">
                <GraduationCap size={16} /> Admissions Open 2026–27
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-black text-white mb-4">
                Start Your Academic Journey
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Admissions are open for Pre-Medical, Pre-Engineering, Computer Science and One Year DIT.
              </p>
              <Button to="/admissions" variant="primary" size="lg" icon={ArrowRight} iconRight>
                Apply Now
              </Button>
            </div>
          </section>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-5 right-5 w-12 h-12 bg-white/10 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-2.5 md:left-8 w-12 h-12 bg-white/10 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative bg-gray-50 flex items-center justify-center" style={{ minHeight: '40vh', maxHeight: '70vh' }}>
                <img
                  src={lightbox.src}
                  alt={lightbox.desc || lightbox.title}
                  className="max-w-full max-h-[70vh] object-contain p-4"
                  draggable={false}
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-navy/80 text-gold text-xs font-semibold rounded-full px-3 py-1 backdrop-blur-sm">
                  <Camera size={12} /> {lightbox.category}
                </div>
              </div>
              <div className="p-5 text-center border-t border-gray-100">
                <h3 className="font-heading font-bold text-navy text-xl">{lightbox.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{lightbox.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-gold mt-2 bg-gold/10 rounded-full px-3 py-1">
                  <GraduationCap size={12} /> The Scholars' College Katlang
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              Use keyboard arrows to navigate · Esc to close
            </p>
          </div>
          <button
            className="absolute right-2.5 md:right-8 w-12 h-12 bg-white/10 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  )
}