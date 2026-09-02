import Reveal from './Reveal'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  const titleColor = tone === 'dark' ? 'text-white' : 'text-navy'
  const subtitleColor = tone === 'dark' ? 'text-gray-400' : 'text-gray-500'

  return (
    <Reveal className={`flex flex-col ${alignment} mb-14 ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-gold font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
          <span className={`w-7 h-px bg-gold ${align === 'left' ? '' : 'hidden'}`}></span>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold ${titleColor} mb-4 ${align === 'center' ? 'tracking-tight' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleColor} max-w-2xl leading-relaxed ${align === 'left' ? '' : 'mx-auto'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-gradient-to-r from-gold via-gold-light to-gold/40 ${align === 'left' ? 'w-14 mx-0' : 'w-20 mx-auto'} rounded-full mt-5 shadow-[0_1px_8px_rgba(212,168,67,0.35)]`}></div>
    </Reveal>
  )
}
