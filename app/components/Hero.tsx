import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
              Bringing Joy to Children
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 leading-tight mt-1">
              One Gift at a Time
            </h2>

            <svg
              className="w-7 h-7 text-blue-400 mt-4 mx-auto lg:mx-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-8-5-8-11a6 6 0 0 1 8-5.66A6 6 0 0 1 20 10c0 6-8 11-8 11z" />
            </svg>

            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Every child deserves to feel seen, valued, and loved. Kind Path Foundation brings
              joy to children in need through meaningful gifts and acts of kindness one child
              at a time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Donate
              </Link>
              <a
                href="#about"
                className="flex items-center gap-2 border border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-7 py-3 rounded-full transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
              alt="Happy children receiving gifts"
              className="w-full h-80 lg:h-[480px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
