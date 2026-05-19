import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { CovenirLogo } from '@/components/CovenirLogo';
import Footer from '@/components/Footer';

const features = [
  {
    label: 'Insurance Services',
    desc: 'FNOL, claims & underwriting support',
    color: 'bg-covenir-green',
  },
  {
    label: 'Virtual Mail Room',
    desc: 'Print & digital mail management',
    color: 'bg-covenir-cyan',
  },
  {
    label: 'AI-Powered Solutions',
    desc: 'IntelliClaims & IntellAgent AI',
    color: 'bg-covenir-orange',
  },
  {
    label: 'Customer Support',
    desc: 'Dedicated agents for policyholders',
    color: 'bg-covenir-purple',
  },
];

export default async function Home() {
  const session = await getSession();
  if (session?.user) redirect('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col" style={{ background: 'linear-gradient(135deg, #001A4D 0%, #003087 55%, #0047BE 100%)' }}>

        {/* ── Top bar ──────────────────────────────── */}
        <header className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <CovenirLogo theme="dark" size="md" />
          <a
            href="https://www.covenirbpo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
          >
            CovenirBPO.com
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </header>

        {/* ── Hero / Login card ─────────────────────── */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">

            {/* Tagline above card */}
            <div className="text-center mb-8">
              <p className="text-covenir-green font-semibold text-xs uppercase tracking-widest mb-2">
                Customer Portal
              </p>
              <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
                Powered by People.<br />
                <span className="text-covenir-cyan">Defined by WOW.</span>
              </h1>
            </div>

            {/* Login card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
              <div className="flex justify-center mb-6">
                {/* Accent bar using brand colors */}
                <div className="flex gap-1 h-1 w-24 rounded-full overflow-hidden">
                  <span className="flex-1 bg-covenir-green" />
                  <span className="flex-1 bg-covenir-pink" />
                  <span className="flex-1 bg-covenir-orange" />
                  <span className="flex-1 bg-covenir-navy" />
                  <span className="flex-1 bg-covenir-cyan" />
                  <span className="flex-1 bg-covenir-purple" />
                </div>
              </div>

              <h2 className="text-covenir-navy text-xl font-bold text-center mb-1">Welcome Back</h2>
              <p className="text-gray-500 text-sm text-center mb-8">
                Sign in to access your CovenirBPO customer dashboard.
              </p>

              <div className="space-y-3">
                <a
                  href="/api/auth/login"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6
                             bg-covenir-navy text-white font-semibold text-sm rounded-xl
                             hover:bg-covenir-dark transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Sign In
                </a>

                <a
                  href="/api/auth/login?screen_hint=signup"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6
                             border-2 border-covenir-navy/20 text-covenir-navy font-semibold text-sm rounded-xl
                             hover:border-covenir-navy hover:bg-covenir-navy/5 transition-all duration-200"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Create Account
                </a>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                Need help?{' '}
                <a href="mailto:info@covenirbpo.com" className="text-covenir-navy hover:underline font-medium">
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Feature strip ─────────────────────────── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className={`mt-0.5 w-2.5 h-2.5 rounded-full shrink-0 ${f.color}`} />
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{f.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{f.desc}</p>
                  </div>
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
