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
    <nav className="bg-white shadow-nav border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CovenirLogo size="sm" theme="light" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-semibold text-covenir-text hover:text-covenir-navy transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  Dashboard
                </Link>

                <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                  {user.picture && (
                    <Image
                      src={user.picture}
                      alt={user.name ?? 'User'}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-covenir-navy/10"
                    />
                  )}
                  <div className="hidden lg:block">
                    <p className="text-xs font-semibold text-covenir-navy leading-none">{user.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-none">{user.email}</p>
                  </div>
                  <a
                    href="/api/auth/logout"
                    className="btn-primary !py-2 !px-4 text-xs"
                  >
                    Sign Out
                  </a>
                </div>
              </>
            ) : (
              <a href="/api/auth/login" className="btn-primary !py-2 !px-5 text-sm">
                Sign In
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-covenir-text hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-3 py-2 mb-2 bg-gray-50 rounded-xl">
                  {user.picture && (
                    <Image src={user.picture} alt={user.name ?? 'User'} width={36} height={36} className="rounded-full" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-covenir-navy">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-xl text-sm font-semibold text-covenir-text hover:bg-gray-50 transition-colors">
                  Dashboard
                </Link>
                <a href="/api/auth/logout"
                  className="flex items-center px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                  Sign Out
                </a>
              </>
            ) : (
              <a href="/api/auth/login" className="btn-primary w-full justify-center">
                Sign In
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
