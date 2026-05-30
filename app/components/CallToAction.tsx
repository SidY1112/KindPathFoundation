import Link from 'next/link'

export default function CallToAction() {
  return (
    <section id="get-involved" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-blue-50 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="flex items-center gap-6">
            <svg
              className="hidden sm:block w-16 h-16 text-blue-300 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-8-5-8-11a6 6 0 0 1 8-5.66A6 6 0 0 1 20 10c0 6-8 11-8 11z" />
            </svg>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-blue-900 mb-1">
                Be Part of Their Happiness
              </h2>
              <p className="text-gray-500 text-sm">
                Your kindness today can create a memory they will cherish forever.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors shrink-0"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            Donate Today
          </Link>

        </div>
      </div>
    </section>
  )
}
