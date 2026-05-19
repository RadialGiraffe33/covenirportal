import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { CovenirLogo } from '@/components/CovenirLogo';
import Footer from '@/components/Footer';

export default async function Home() {
  const session = await getSession();
  if (session?.user) redirect('/dashboard');

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── Navbar ───────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <CovenirLogo size="sm" />
          <a
            href="https://www.covenirbpo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-covenir-navy transition-colors font-medium"
          >
            CovenirBPO.com ↗
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────── */}
      <main className="flex-1 flex flex-col">
        {/* Blue accent band */}
        <div className="bg-covenir-navy text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 text-center">
            <p className="text-covenir-cyan text-xs font-semibold uppercase tracking-widest mb-3">
              Customer Portal
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              Welcome to the Covenir Portal
            </h1>
            <p className="text-white/60 text-base max-w-md mx-auto">
              Access your services, reports, and support — all in one place.
            </p>
          </div>
          {/* Brand color strip */}
          <div className="flex h-1">
            {['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'].map((c) => (
              <span key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* ── Login card ───────────────────────────── */}
        <div className="flex-1 flex items-center justify-center px-4 py-14 bg-covenir-light-bg">
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
              <h2 className="text-covenir-navy text-xl font-bold text-center mb-1">Sign In</h2>
              <p className="text-gray-400 text-sm text-center mb-7">
                Access your CovenirBPO customer account.
              </p>

              <div className="space-y-3">
                <a
                  href="/api/auth/login"
                  className="flex items-center justify-center w-full py-3 px-5
                             bg-covenir-navy text-white text-sm font-semibold rounded-xl
                             hover:bg-covenir-dark transition-colors shadow-sm"
                >
                  Sign In
                </a>
                <a
                  href="/api/auth/login?screen_hint=signup"
                  className="flex items-center justify-center w-full py-3 px-5
                             border border-gray-200 text-covenir-navy text-sm font-semibold rounded-xl
                             hover:border-covenir-navy hover:bg-gray-50 transition-colors"
                >
                  Create Account
                </a>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                Need help?{' '}
                <a href="mailto:info@covenirbpo.com" className="text-covenir-navy font-medium hover:underline">
                  info@covenirbpo.com
                </a>
              </p>
            </div>

            {/* Tagline below card */}
            <p className="text-center text-xs text-gray-400 mt-5 font-medium">
              Powered by People. Defined by WOW.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
