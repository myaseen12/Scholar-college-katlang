import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProgramCard({
  title,
  icon,
  tag,
  description,
  to = '/programs',
  accent = 'from-royal to-royal-light',
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full"
    >
      <div className={`bg-gradient-to-br ${accent} h-1.5 group-hover:h-2 transition-all`}></div>
      <div className="p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center text-navy group-hover:text-gold transition-colors">
            {icon}
          </div>
          {tag && (
            <span className="text-xs font-bold text-gold bg-gold/10 rounded-full px-3 py-1">
              {tag}
            </span>
          )}
        </div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>
        <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          View Program <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
