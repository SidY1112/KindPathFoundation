import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
              Empowering Families.
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 leading-tight mt-1">
              Restoring Dignity.
            </h2>

            <svg
              className="w-8 h-8 text-blue-500 mt-4 mx-auto lg:mx-0"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 34s-14-8.5-14-18a8 8 0 0 1 14-5.3A8 8 0 0 1 34 16c0 9.5-14 18-14 18z" />
              <path d="M20 13v8M16 17h8" strokeWidth="1.5" />
            </svg>

            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Kind Path Foundation provides essential resources to families in need around the world.
              From clothing and school supplies to furniture and beyond.
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
              alt="Families receiving support from Kind Path Foundation"
              className="w-full h-80 lg:h-[480px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
