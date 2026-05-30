export default function OurStory() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=700&q=80"
              alt="A family receiving support"
              className="w-full h-80 lg:h-[420px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Why We Started
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Kind Path Foundation was built on a simple belief: every family deserves to live
              with dignity. No matter where you are in the world, the basics of life should
              never feel out of reach.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We provide clothing, school supplies, furniture, and more to families who need
              a hand getting back on their feet. Because when a family is stable, everything
              else becomes possible.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors"
            >
              More About Us
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
