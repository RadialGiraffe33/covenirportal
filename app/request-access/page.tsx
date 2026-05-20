'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CovenirLogo } from '@/components/CovenirLogo';
import Footer from '@/components/Footer';

const INTERESTS = [
  'FNOL & Claims Processing',
  'Virtual Mail Room',
  'Customer Support',
  'Underwriting Support',
  'Product Sales Advisors',
  'IntellAgent AI Intake',
  'IntelliClaims Advantage',
  'Agent Coach AI Coaching',
  'Other / Not Sure Yet',
];

const STRIP = ['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RequestAccess() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    company:   '',
    jobTitle:  '',
    message:   '',
  });
  const [interests, setInterests] = useState<string[]>([]);

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const toggleInterest = (label: string) =>
    setInterests(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/request-access', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, interests }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? 'Submission failed.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  /* ── Label + input helpers ────────────────────────── */
  const inputCls =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-covenir-text ' +
    'placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-covenir-navy/30 ' +
    'focus:border-covenir-navy transition-colors bg-white';
  const labelCls = 'block text-xs font-semibold uppercase tracking-widest mb-1.5';

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/"><CovenirLogo size="sm" /></Link>
          <Link href="/" className="text-sm font-semibold transition-colors hover:underline"
            style={{ color: '#003087' }}>
            ← Back to Sign In
          </Link>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero band */}
        <div className="bg-brand-grad text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#8DC63F' }}>
              Get Started
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Request Portal Access</h1>
            <p className="text-white/70 max-w-lg mx-auto text-base font-medium">
              Tell us a bit about yourself and your needs — our team will be in touch to set up your account.
            </p>
          </div>
          <div className="flex h-1">
            {STRIP.map(c => <span key={c} className="flex-1" style={{ backgroundColor: c }} />)}
          </div>
        </div>

        {/* Form / Success */}
        <div className="max-w-3xl mx-auto px-4 py-12">

          {status === 'success' ? (
            /* ── Success state ────────────────────── */
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                   style={{ backgroundColor: '#EDFAD3' }}>
                <svg className="w-8 h-8" fill="none" stroke="#8DC63F" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#003087' }}>Request Received!</h2>
              <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: '#BCBEC0' }}>
                Thank you for your interest in the Covenir Portal. Our team will review your request
                and reach out to <strong style={{ color: '#414042' }}>{form.email}</strong> shortly.
              </p>
              <Link href="/"
                className="btn-primary inline-flex text-sm px-8 py-3 rounded-xl">
                Back to Portal
              </Link>
            </div>
          ) : (
            /* ── Form ─────────────────────────────── */
            <form onSubmit={handleSubmit} noValidate>
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">

                {/* Section: Contact */}
                <div className="px-8 pt-8 pb-6">
                  <h2 className="text-base font-bold mb-5" style={{ color: '#003087' }}>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        First Name <span style={{ color: '#EC008C' }}>*</span>
                      </label>
                      <input required value={form.firstName} onChange={set('firstName')}
                        placeholder="Jane" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        Last Name <span style={{ color: '#EC008C' }}>*</span>
                      </label>
                      <input required value={form.lastName} onChange={set('lastName')}
                        placeholder="Smith" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        Work Email <span style={{ color: '#EC008C' }}>*</span>
                      </label>
                      <input required type="email" value={form.email} onChange={set('email')}
                        placeholder="jane@company.com" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        Phone Number
                      </label>
                      <input type="tel" value={form.phone} onChange={set('phone')}
                        placeholder="(508) 555-0100" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        Company / Organization <span style={{ color: '#EC008C' }}>*</span>
                      </label>
                      <input required value={form.company} onChange={set('company')}
                        placeholder="Acme Insurance" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls} style={{ color: '#BCBEC0' }}>
                        Job Title
                      </label>
                      <input value={form.jobTitle} onChange={set('jobTitle')}
                        placeholder="Operations Manager" className={inputCls} />
                    </div>

                  </div>
                </div>

                <div className="h-px mx-8" style={{ backgroundColor: '#F5F7FA' }} />

                {/* Section: Interests */}
                <div className="px-8 py-6">
                  <h2 className="text-base font-bold mb-1" style={{ color: '#003087' }}>
                    Areas of Interest
                  </h2>
                  <p className="text-xs mb-5" style={{ color: '#BCBEC0' }}>
                    Select all that apply
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTERESTS.map((interest) => {
                      const checked = interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium
                                     text-left transition-all duration-150"
                          style={{
                            borderColor:      checked ? '#003087' : '#E5E7EB',
                            backgroundColor:  checked ? '#EEF3FC' : '#fff',
                            color:            checked ? '#003087' : '#414042',
                          }}
                        >
                          <span
                            className="w-4 h-4 rounded flex items-center justify-center shrink-0 border-2 transition-colors"
                            style={{
                              borderColor:     checked ? '#003087' : '#BCBEC0',
                              backgroundColor: checked ? '#003087' : 'transparent',
                            }}
                          >
                            {checked && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                              </svg>
                            )}
                          </span>
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px mx-8" style={{ backgroundColor: '#F5F7FA' }} />

                {/* Section: Notes */}
                <div className="px-8 py-6">
                  <label className={labelCls} style={{ color: '#BCBEC0' }}>
                    Additional Notes
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                    placeholder="Anything else you'd like us to know about your needs or timeline..."
                    className={inputCls + ' resize-none'}
                  />
                </div>

                {/* Submit */}
                <div className="px-8 pb-8">
                  {status === 'error' && (
                    <p className="text-sm mb-4 font-medium text-center"
                       style={{ color: '#EC008C' }}>
                      {errorMsg}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-3.5 text-sm rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                        </svg>
                        Submitting…
                      </span>
                    ) : 'Submit Request'}
                  </button>
                  <p className="text-center text-xs mt-4" style={{ color: '#BCBEC0' }}>
                    Our team typically responds within 1 business day.
                  </p>
                </div>

              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
