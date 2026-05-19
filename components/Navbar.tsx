'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CovenirLogo } from './CovenirLogo';

export default function Navbar() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          <Link href="/">
            <CovenirLogo size="sm" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard"
                  className="text-sm font-semibold transition-colors hover:underline"
                  style={{ color: '#414042' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#003087')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#414042')}
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  {user.picture && (
                    <Image src={user.picture} alt={user.name ?? ''} width={30} height={30} className="rounded-full" />
                  )}
                  <span className="text-sm hidden lg:block" style={{ color: '#414042' }}>{user.name}</span>
                  <a
                    href="/api/auth/logout"
                    className="text-sm font-semibold rounded-lg px-4 py-1.5 border transition-colors"
                    style={{ color: '#003087', borderColor: '#BCBEC0' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(90deg,#003087,#00AEEF)';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = '';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#003087';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#BCBEC0';
                    }}
                  >
                    Sign Out
                  </a>
                </div>
              </>
            ) : (
              <a
                href="/api/auth/login?returnTo=/dashboard"
                className="btn-primary text-sm rounded-lg px-5 py-2"
              >
                Sign In
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" style={{ color: '#414042' }} onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {user ? (
              <>
                <div className="flex items-center gap-2.5 px-2 py-2 mb-1">
                  {user.picture && <Image src={user.picture} alt="" width={28} height={28} className="rounded-full"/>}
                  <span className="text-sm font-medium" style={{ color: '#414042' }}>{user.name}</span>
                </div>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-sm font-semibold rounded-lg hover:bg-gray-50"
                  style={{ color: '#003087' }}>
                  Dashboard
                </Link>
                <a href="/api/auth/logout"
                   className="block px-2 py-2 text-sm font-semibold rounded-lg hover:bg-red-50"
                   style={{ color: '#EC008C' }}>
                  Sign Out
                </a>
              </>
            ) : (
              <a href="/api/auth/login?returnTo=/dashboard"
                 className="btn-primary block text-center mx-2 py-2.5 text-sm rounded-xl">
                Sign In
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
