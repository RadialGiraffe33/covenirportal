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
                  className="text-sm font-medium text-gray-600 hover:text-covenir-navy transition-colors">
                  Dashboard
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  {user.picture && (
                    <Image src={user.picture} alt={user.name ?? ''} width={30} height={30} className="rounded-full" />
                  )}
                  <span className="text-sm text-gray-600 hidden lg:block">{user.name}</span>
                  <a href="/api/auth/logout"
                     className="text-sm font-semibold text-covenir-navy border border-covenir-navy/20 rounded-lg px-4 py-1.5 hover:bg-covenir-navy hover:text-white transition-colors">
                    Sign Out
                  </a>
                </div>
              </>
            ) : (
              <a href="/api/auth/login?returnTo=/dashboard"
                 className="text-sm font-semibold bg-covenir-navy text-white rounded-lg px-5 py-2 hover:bg-covenir-dark transition-colors">
                Sign In
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-500" onClick={() => setMenuOpen(!menuOpen)}>
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
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-covenir-navy rounded-lg hover:bg-gray-50">
                  Dashboard
                </Link>
                <a href="/api/auth/logout" className="block px-2 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg">
                  Sign Out
                </a>
              </>
            ) : (
              <a href="/api/auth/login?returnTo=/dashboard" className="block text-center py-2.5 text-sm font-semibold bg-covenir-navy text-white rounded-xl mx-2">
                Sign In
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
