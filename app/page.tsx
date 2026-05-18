import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Footer from '@/components/Footer';

export default async function Home() {
  const session = await getSession();
  if (session?.user) redirect('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero / Login section */}
      <main className="flex-1 bg-hero-pattern flex flex-col">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <span className="text-white font-bold text-2xl tracking-tight">Covenir</span>
            <span className="text-blue-300 font-bold text-2xl">Portal</span>
          </div>
          <a
            href="https://www.covenirbpo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-200 hover:text-white transition-colors"
          >
            CovenirBPO.com ↗
          </a>
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-sky rounded-full mb-4">
                  <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-brand-navy">Welcome to the Portal</h1>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  Sign in to access your CovenirBPO customer dashboard, reporting, and services.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="/api/auth/login"
                  className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </a>

                <a
                  href="/api/auth/login?screen_hint=signup"
                  className="flex items-center justify-center gap-3 w-full py-3 px-6 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-sky transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Create Account
                </a>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                Need help? Contact{' '}
                <a href="mailto:info@covenirbpo.com" className="text-brand-blue hover:underline">
                  info@covenirbpo.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: '🏥', title: 'Insurance Services', desc: 'FNOL, claims, underwriting support' },
                { icon: '📬', title: 'Virtual Mail Room', desc: 'Print & digital mail management' },
                { icon: '🤖', title: 'AI-Powered', desc: 'IntelliClaims & IntellAgent AI' },
              ].map((f) => (
                <div key={f.title} className="text-white">
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-blue-200 text-xs mt-0.5">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
