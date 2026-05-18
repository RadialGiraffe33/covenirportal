import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'FNOL & Claims',
    description: 'First notice of loss processing and claims management support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    status: 'Active',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    title: 'Virtual Mail Room',
    description: 'Print and digital mail processing with secure document management.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    status: 'Active',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    title: 'Customer Support',
    description: 'Dedicated support agents for your policyholders and customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    status: 'Active',
    statusColor: 'text-green-600 bg-green-50',
  },
  {
    title: 'Underwriting Support',
    description: 'Policy review, data entry, and underwriting assistance services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    status: 'Coming Soon',
    statusColor: 'text-amber-600 bg-amber-50',
  },
  {
    title: 'AI Intake (IntellAgent)',
    description: 'AI-powered intake and routing for insurance workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    status: 'Coming Soon',
    statusColor: 'text-amber-600 bg-amber-50',
  },
  {
    title: 'IntelliClaims Advantage',
    description: 'Signature AI-assisted claims processing and reporting platform.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    status: 'Coming Soon',
    statusColor: 'text-amber-600 bg-amber-50',
  },
];

export default async function Dashboard() {
  const session = await getSession();
  if (!session?.user) redirect('/');

  const { user } = session;
  const firstName = user.given_name ?? user.name?.split(' ')[0] ?? 'there';

  return (
    <div className="min-h-screen flex flex-col bg-brand-light-gray">
      <Navbar />

      <main className="flex-1">
        {/* Welcome banner */}
        <div className="bg-hero-pattern text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-4">
              {user.picture && (
                <Image
                  src={user.picture}
                  alt={user.name ?? 'User'}
                  width={56}
                  height={56}
                  className="rounded-full ring-4 ring-white/30"
                />
              )}
              <div>
                <p className="text-blue-200 text-sm font-medium">Welcome back</p>
                <h1 className="text-2xl sm:text-3xl font-bold">Hello, {firstName}!</h1>
                <p className="text-blue-200 text-sm mt-0.5">{user.email}</p>
              </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Active Services', value: '3' },
                { label: 'Open Tickets', value: '—' },
                { label: 'Documents', value: '—' },
                { label: 'Last Login', value: 'Today' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-brand-navy">Your Services</h2>
            <a
              href="https://www.covenirbpo.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-blue hover:text-brand-navy font-medium transition-colors"
            >
              Explore all solutions ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="card hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-brand-sky rounded-lg text-brand-navy">
                    {service.icon}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${service.statusColor}`}>
                    {service.status}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-navy mb-1.5">{service.title}</h3>
                <p className="text-sm text-gray-500 flex-1">{service.description}</p>
                <button
                  disabled={service.status === 'Coming Soon'}
                  className="mt-5 w-full py-2 text-sm font-medium rounded-lg border border-brand-blue text-brand-blue
                             hover:bg-brand-blue hover:text-white transition-colors duration-200
                             disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand-blue"
                >
                  {service.status === 'Coming Soon' ? 'Coming Soon' : 'Open'}
                </button>
              </div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-10 bg-brand-navy rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Need assistance?</h3>
              <p className="text-blue-200 text-sm">
                Our team is ready to help — reach out via email or phone anytime.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="mailto:info@covenirbpo.com"
                className="btn-outline !py-2.5 !px-5 text-sm"
              >
                Email Us
              </a>
              <a
                href="tel:+15084715031"
                className="btn-primary !py-2.5 !px-5 text-sm bg-brand-blue border-brand-blue"
              >
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
