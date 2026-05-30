const steps = [
  {
    label: '1. Donations',
    description: 'Generous support from people like you makes it possible.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
  },
  {
    label: '2. Gifts',
    description: 'We carefully purchase and prepare meaningful gifts.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: '3. Delivered',
    description: 'We deliver smiles and spread joy to children who need it most.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9.5 15a4 4 0 005 0" />
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
            Simple Steps. Big Smiles.
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col sm:flex-row items-center">
              {/* Step card */}
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <p className="font-bold text-blue-900 mb-1">{step.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
              {/* Arrow between steps */}
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
