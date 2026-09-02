import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-gold text-navy font-semibold shadow-sm hover:bg-gold-light hover:shadow-md hover:-translate-y-0.5',
  navy: 'bg-navy text-white font-semibold shadow-sm hover:bg-navy-light hover:shadow-md hover:-translate-y-0.5',
  outline: 'border border-navy/25 text-navy font-medium hover:bg-navy hover:text-white hover:border-navy hover:shadow-md hover:-translate-y-0.5',
  outlineLight: 'border-2 border-white/30 text-white font-medium hover:border-gold hover:text-gold',
  ghost: 'text-gold font-semibold hover:bg-gold/10',
  whatsapp: 'bg-[#25D366] text-white font-semibold shadow-sm hover:bg-[#1da851] hover:shadow-md hover:-translate-y-0.5',
  facebook: 'bg-[#1877F2] text-white font-semibold shadow-sm hover:bg-[#166FE5] hover:shadow-md hover:-translate-y-0.5',
  instagram: 'bg-[#E4405F] text-white font-semibold shadow-sm hover:bg-[#d62976] hover:shadow-md hover:-translate-y-0.5',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  children,
  icon: Icon = null,
  iconRight = false,
  ...rest
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed min-h-11 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ')

  const content = (
    <>
      {Icon && !iconRight && <Icon size={16} />}
      {children}
      {Icon && iconRight && <Icon size={16} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
