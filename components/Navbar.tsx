'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-brand-navy font-bold text-xl tracking-tight">Covenir</span>
              <span className="text-brand-blue font-bold text-xl">Portal</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-brand-navy font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-3">
                  {user.picture && (
                    <Image
                      src={user.picture}
                      alt={user.name ?? 'User'}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-brand-sky"
                    />
                  )}
                  <span className="text-sm text-gray-600">{user.name}</span>
                  <a
                    href="/api/auth/logout"
                    className="btn-primary !py-2 !px-4 text-sm"
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
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2 px-2 pb-2 border-b border-gray-100">
                  {user.picture && (
                    <Image src={user.picture} alt={user.name ?? 'User'} width={28} height={28} className="rounded-full" />
                  )}
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <Link href="/dashboard" className="text-gray-700 font-medium hover:text-brand-navy px-2">
                  Dashboard
                </Link>
                <a href="/api/auth/logout" className="text-brand-blue font-medium px-2">
                  Sign Out
                </a>
              </>
            ) : (
              <a href="/api/auth/login" className="btn-primary text-center mx-2">
                Sign In
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
