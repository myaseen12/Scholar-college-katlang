const LOGO_SRC = '/logo.png'

export default function Logo({ className = '', alt = "The Scholars' College Katlang official logo", ...props }) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      className={`select-none ${className}`}
      draggable={false}
      decoding="async"
      loading="lazy"
      style={{ imageRendering: 'auto' }}
      {...props}
    />
  )
}
