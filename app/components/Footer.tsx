import Link from 'next/link'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#get-involved' },
]

const getInvolvedLinks = [
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '#' },
  { label: 'Spread the Word', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg
                className="w-8 h-8 text-blue-600"
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
              <div className="leading-tight">
                <p className="text-[11px] font-bold tracking-[0.18em] text-blue-900 uppercase">Kind Path</p>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-blue-900 uppercase">Foundation</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every child deserves to feel seen, valued, and loved — one child at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-blue-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-sm font-bold text-blue-900 mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {getInvolvedLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold text-blue-900 mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H8v-2.88h2.44V9.84c0-2.41 1.44-3.74 3.63-3.74 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8H16l-.39 2.88h-2.15v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415a4.49 4.49 0 011.62 1.053 4.49 4.49 0 011.053 1.62c.166.422.361 1.057.415 2.226.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.227a4.49 4.49 0 01-1.053 1.62 4.49 4.49 0 01-1.62 1.053c-.422.166-1.057.361-2.226.415-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.415a4.49 4.49 0 01-1.62-1.053 4.49 4.49 0 01-1.053-1.62c-.166-.422-.361-1.057-.415-2.226C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.227a4.49 4.49 0 011.053-1.62 4.49 4.49 0 011.62-1.053c.422-.166 1.057-.361 2.226-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a6.65 6.65 0 00-2.403 1.566A6.65 6.65 0 00.171 4.6C-.127 5.362-.33 6.234-.388 7.512-.446 8.792-.46 9.2-.46 12.458c0 3.259.014 3.667.072 4.947.058 1.278.261 2.15.559 2.912a6.65 6.65 0 001.566 2.403 6.65 6.65 0 002.403 1.566c.762.298 1.634.501 2.912.559C8.333 24.901 8.741 24.915 12 24.915s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.912-.559a6.65 6.65 0 002.403-1.566 6.65 6.65 0 001.566-2.403c.298-.762.501-1.634.559-2.912.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.559-2.912a6.65 6.65 0 00-1.566-2.403A6.65 6.65 0 0019.859.63C19.097.332 18.225.129 16.947.071 15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:hello@kindpathfoundation.org" aria-label="Email" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-gray-400">
            © 2024 Kind Path Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
