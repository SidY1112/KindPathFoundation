const steps = [
  {
    label: '1. Donations',
    description: 'Your support gives us the ability to reach families around the world.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
  },
  {
    label: '2. Resources',
    description: 'We source and prepare essential items like clothing, supplies, and furniture.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
  },
  {
    label: '3. Delivered',
    description: 'We get what families need into their hands, wherever they are.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="impact" className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
            How We Make an Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Simple Steps. Real Change.
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col sm:flex-row items-center">
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <p className="font-bold text-blue-900 mb-1">{step.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="w-8 h-8 text-blue-300 mx-4 my-4 sm:my-0 rotate-90 sm:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
                </svg>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
