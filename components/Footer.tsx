import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-white font-bold text-xl">Covenir</span>
              <span className="text-brand-blue font-bold text-xl">BPO</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Powered by People. Defined by WOW.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Business process outsourcing with a heavy focus on the insurance industry.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>370 Main Street, Suite 880</li>
              <li>Worcester, MA 01608</li>
              <li>
                <a href="tel:+15084715031" className="hover:text-white transition-colors">
                  (508) 471-5031
                </a>
              </li>
              <li>
                <a href="mailto:info@covenirbpo.com" className="hover:text-white transition-colors">
                  info@covenirbpo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.covenirbpo.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  CovenirBPO.com
                </a>
              </li>
              <li>
                <a href="https://www.covenirbpo.com/privacy-policy" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/api/auth/login" className="text-brand-blue hover:text-white transition-colors">
                  Sign In to Portal
                </a>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/covenirbpo" target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/covenirbpo" target="_blank" rel="noopener noreferrer"
                 aria-label="X / Twitter" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CovenirBPO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
