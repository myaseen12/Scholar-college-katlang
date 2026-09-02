import { BadgeCheck } from 'lucide-react'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function FacultyCard({
  name,
  role,
  qualifications = [],
  color = 'bg-navy',
  avatarSize = 'lg',
  centered = false,
}) {
  const sizeClass =
    avatarSize === 'sm'
      ? 'w-10 h-10 text-xs'
      : avatarSize === 'md'
      ? 'w-14 h-14 text-sm'
      : 'w-16 h-16 text-xl'

  const avatar = (
    <div
      className={`${sizeClass} ${color} rounded-2xl flex items-center justify-center text-gold font-heading font-black shadow-md group-hover:scale-105 transition-transform ${
        centered ? 'mx-auto mb-4' : 'shrink-0'
      }`}
    >
      {initials(name)}
    </div>
  )

  return (
    <div className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 h-full">
      {centered ? (
        <div className="text-center">
          {avatar}
          {role && (
            <div className="inline-flex items-center gap-1.5 bg-gold/10 text-maroon text-xs font-bold rounded-full px-3 py-1 mb-3">
              <BadgeCheck size={12} /> {role}
            </div>
          )}
          <h3 className="font-heading font-bold text-navy">{name}</h3>
          {qualifications.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {qualifications.map((q, j) => (
                <span key={j} className="text-xs bg-white border border-gold/30 text-navy font-medium px-2.5 py-1 rounded-md">
                  {q}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-start gap-5">
          {avatar}
          <div className="flex-1 min-w-0">
            {role && (
              <div className="inline-flex items-center gap-1.5 bg-gold/10 text-maroon text-xs font-bold rounded-full px-3 py-1 mb-3">
                <BadgeCheck size={12} /> {role}
              </div>
            )}
            <h3 className="font-heading font-bold text-navy">{name}</h3>
            {qualifications.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {qualifications.map((q, j) => (
                  <span key={j} className="text-xs bg-white border border-gold/30 text-navy font-medium px-2.5 py-1 rounded-md">
                    {q}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
