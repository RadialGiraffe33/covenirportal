import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'FNOL & Claims',
    desc: 'First notice of loss processing and claims management support.',
    accentColor: '#003087',
    status: 'Active' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Virtual Mail Room',
    desc: 'Print and digital mail processing with secure document management.',
    accentColor: '#00AEEF',
    status: 'Active' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support',
    desc: 'Dedicated support agents for your policyholders and customers.',
    accentColor: '#8DC63F',
    status: 'Active' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Underwriting Support',
    desc: 'Policy review, data entry, and underwriting assistance services.',
    accentColor: '#F7941D',
    status: 'Coming Soon' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'IntellAgent AI Intake',
    desc: 'AI-powered intake routing for insurance workflows.',
    accentColor: '#7B2D8B',
    status: 'Coming Soon' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'IntelliClaims Advantage',
    desc: 'AI-assisted claims processing and real-time reporting platform.',
    accentColor: '#EC008C',
    status: 'Coming Soon' as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default async function Dashboard() {
  const session = await getSession();
  if (!session?.user) redirect('/');

  const { user } = session;
  const firstName = user.given_name ?? user.name?.split(' ')[0] ?? 'there';

  return (
    <div className="min-h-screen flex flex-col bg-covenir-light-bg">
      <Navbar />

      <main className="flex-1">

        {/* ── Welcome header ────────────────────── */}
        <div className="bg-covenir-navy text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
            <div className="flex items-center gap-4">
              {user.picture ? (
                <Image
                  src={user.picture}
                  alt={user.name ?? 'User'}
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-white/20"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  {firstName[0]}
                </div>
              )}
              <div>
                <p className="text-covenir-cyan text-xs font-semibold uppercase tracking-widest">Welcome back</p>
                <h1 className="text-xl sm:text-2xl font-bold">{firstName}</h1>
                <p className="text-white/50 text-sm">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="flex h-1">
            {['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'].map((c) => (
              <span key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* ── Services grid ─────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="section-eyebrow mb-1">Your Services</p>
              <h2 className="section-heading">Portal Services</h2>
            </div>
            <a
              href="https://www.covenirbpo.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-covenir-navy font-semibold hover:underline hidden sm:block"
            >
              All solutions ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <div key={svc.title} className="card flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl text-white" style={{ backgroundColor: svc.accentColor }}>
                    {svc.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    svc.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {svc.status}
                  </span>
                </div>
                <h3 className="font-bold text-covenir-navy mb-1.5">{svc.title}</h3>
                <p className="text-sm text-gray-500 flex-1 leading-relaxed">{svc.desc}</p>
                <button
                  disabled={svc.status === 'Coming Soon'}
                  className="mt-5 w-full py-2.5 text-sm font-semibold rounded-xl border-2 transition-colors duration-200
                             disabled:opacity-40 disabled:cursor-not-allowed"
                  style={svc.status === 'Active' ? { borderColor: svc.accentColor, color: svc.accentColor } : {}}
                >
                  {svc.status === 'Coming Soon' ? 'Coming Soon' : 'Open Service'}
                </button>
              </div>
            ))}
          </div>

          {/* ── Support CTA ───────────────────── */}
          <div className="mt-10 bg-covenir-navy rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center sm:text-left">
              <p className="text-covenir-cyan text-xs font-semibold uppercase tracking-widest mb-1">We&apos;re here for you</p>
              <h3 className="text-lg font-bold">Need assistance?</h3>
              <p className="text-white/60 text-sm mt-0.5">Our team is ready to help — reach out anytime.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="mailto:info@covenirbpo.com"
                 className="px-5 py-2.5 border-2 border-white text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-covenir-navy transition-colors">
                Email Us
              </a>
              <a href="tel:+15084715031"
                 className="px-5 py-2.5 bg-covenir-green text-white text-sm font-semibold rounded-xl hover:brightness-95 transition-all">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
