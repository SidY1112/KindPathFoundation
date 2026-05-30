const initiatives = [
  {
    title: 'Holiday Gift Drives',
    description: 'Bringing joy during the most wonderful time of the year.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4M12 8v8" />
      </svg>
    ),
  },
  {
    title: 'Back-to-School Support',
    description: 'Providing school supplies and essentials for a strong start.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M5 7h14m-9 4h4m-6 4h8M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Birthday Gift Program',
    description: 'Making birthdays special for children in need.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6zM7 7V5a1 1 0 011-1h8a1 1 0 011 1v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M9 7c0-1.5 1-3 3-3s3 1.5 3 3" />
      </svg>
    ),
  },
  {
    title: 'Community Partnerships',
    description: 'Working with local organizations to reach more children.',
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
