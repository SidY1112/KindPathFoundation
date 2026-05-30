const initiatives = [
  {
    title: 'Clothing Drives',
    description: 'Providing clothing for families who need it most.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v5h5M9 12h6m-6 4h4" />
      </svg>
    ),
  },
  {
    title: 'Back-to-School Support',
    description: 'School supplies and essentials so every child starts the year ready.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M5 7h14m-9 4h4m-6 4h8M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Furniture Program',
    description: 'Helping families turn a house into a home.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v5a1 1 0 001 1h16a1 1 0 001-1v-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 17v2m12-2v2" />
      </svg>
    ),
  },
  {
    title: 'Community Partnerships',
    description: 'Working with local organizations to reach families worldwide.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m4 5v-1a4 4 0 00-2-3.46M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a4 4 0 00-4-4" />
      </svg>
    ),
  },
]

export default function Initiatives() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
            What We're Working Toward
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Upcoming Initiatives
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
