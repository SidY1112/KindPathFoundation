import Link from 'next/link'
import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About Us | Kind Path Foundation',
  description:
    'Empowering families in need with essential resources, support, and dignity anywhere in the world.',
}

const values = [
  {
    title: 'Compassion',
    description: 'We lead with empathy in everything we do. Every family we serve is someone\'s whole world.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-8-5-8-11a6 6 0 0 1 8-5.66A6 6 0 0 1 20 10c0 6-8 11-8 11z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We believe real change starts close to home and grows outward. One family at a time.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m4 5v-1a4 4 0 00-2-3.46M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path d="M21 15a4 4 0 00-4-4" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    description: 'Every resource we provide and every family we reach matters. Nothing we do is small.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
]

const initiatives = [
  {
    title: 'Clothing Drives',
    description:
      'We organize clothing drives to collect gently used and new clothing for families who need it. No one should go without the basics, and we make sure they don\'t have to.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5H9z" />
        <path d="M9 3v5h5M9 12h6m-6 4h4" />
      </svg>
    ),
  },
  {
    title: 'Back-to-School Support',
    description:
      'When a child walks into school with the supplies they need, they carry confidence with them. We make sure that happens for families who need a little help at the start of every school year.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 01-8 0M5 7h14m-9 4h4m-6 4h8M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
        <rect x="3" y="7" width="18" height="13" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Furniture Program',
    description:
      'A house becomes a home when families have the essentials to live with dignity. We help furnish spaces for families starting fresh, so they can feel settled and safe.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v5a1 1 0 001 1h16a1 1 0 001-1v-5" />
        <path d="M6 17v2m12-2v2" />
      </svg>
    ),
  },
  {
    title: 'Community Partnerships',
    description:
      'Our reach extends globally through partnerships with local shelters, schools, and organizations that know their communities best. Together we go further than any of us could alone.',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m4 5v-1a4 4 0 00-2-3.46M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path d="M21 15a4 4 0 00-4-4" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero banner */}
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About Kind Path Foundation
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering families in need with essential resources, support, and dignity.
              From clothing and school supplies to furniture and beyond, anywhere in the world.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
                What Guides Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Make An Impact */}
        <HowItWorks />

        {/* Upcoming Initiatives with extended descriptions */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
                What We're Working Toward
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Upcoming Initiatives</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item) => (
                <div key={item.title} className="flex gap-5 bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
              Your support helps families around the world access the resources they need
              to live with dignity.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              Donate Today
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
