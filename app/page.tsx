import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { CovenirLogo } from '@/components/CovenirLogo';
import Footer from '@/components/Footer';

const STRIP = ['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'];

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
            className="text-sm font-medium hover:underline transition-colors"
            style={{ color: '#003087' }}
          >
            CovenirBPO.com ↗
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col">

        {/* ── Hero band — brand gradient ─────────── */}
        <div className="bg-brand-grad text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 text-center">
            <p className="eyebrow mb-3" style={{ color: '#8DC63F' }}>
              Customer Portal
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 text-white">
              Welcome to the Covenir Portal
            </h1>
            <p className="text-white/70 text-base max-w-md mx-auto font-medium">
              Access your services, reports, and support — all in one place.
            </p>
          </div>
          {/* Pinwheel color strip */}
          <div className="flex h-1">
            {STRIP.map((c) => <span key={c} className="flex-1" style={{ backgroundColor: c }} />)}
          </div>
        </div>

        {/* ── Login card ───────────────────────────── */}
        <div className="flex-1 flex items-center justify-center px-4 py-14" style={{ backgroundColor: '#F5F7FA' }}>
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">

              <h2 className="text-xl font-bold text-center mb-1" style={{ color: '#003087' }}>
                Sign In
              </h2>
              <p className="text-sm text-center mb-7" style={{ color: '#BCBEC0' }}>
                Access your CovenirBPO customer account.
              </p>

              <div className="space-y-3">
                <a
                  href="/api/auth/login?returnTo=/dashboard"
                  className="btn-primary w-full justify-center py-3 rounded-xl text-sm font-semibold"
                >
                  Sign In
                </a>
                <a
                  href="/api/auth/login?screen_hint=signup&returnTo=/dashboard"
                  className="flex items-center justify-center w-full py-3 px-5 rounded-xl
                             border text-sm font-semibold transition-colors duration-200"
                  style={{ borderColor: '#BCBEC0', color: '#003087' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#003087';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5F7FA';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#BCBEC0';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                  }}
                >
                  Create Account
                </a>
              </div>

              <p className="text-center text-xs mt-6" style={{ color: '#BCBEC0' }}>
                Need help?{' '}
                <a href="mailto:info@covenirbpo.com"
                   className="font-semibold hover:underline"
                   style={{ color: '#003087' }}>
                  info@covenirbpo.com
                </a>
              </p>
            </div>

            <p className="text-center text-xs mt-5 font-medium" style={{ color: '#BCBEC0' }}>
              Powered by People. Defined by WOW.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
