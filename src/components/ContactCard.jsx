export default function ContactCard({ icon, title, children, className = '' }) {
  return (
    <div className={`group flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-soft hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300 ${className}`}>
      <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-heading font-bold text-navy text-sm mb-1">{title}</h4>
        <div className="text-sm text-gray-600">{children}</div>
      </div>
    </div>
  )
}
