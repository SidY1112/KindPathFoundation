import Link from 'next/link'

export const metadata = {
  title: 'Donate | Kind Path Foundation',
  description: 'Support Kind Path Foundation and help bring joy to children in need.',
}

export default function DonatePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-10 text-center">
        <svg
          className="w-14 h-14 text-blue-600 mx-auto mb-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Make a Donation</h1>
        <p className="text-gray-500 mb-8">
          Every child deserves to feel seen, valued, and loved. Your generosity helps Kind Path
          Foundation bring joy to children in need one child at a time. Online donations
          coming soon. Thank you for your support!
        </p>
        <Link
          href="/"
          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
