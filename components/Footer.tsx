import { CovenirLogo } from './CovenirLogo';

const NAV_LINKS = [
  { label: 'Home',      href: 'https://www.covenirbpo.com' },
  { label: 'Pricing',   href: 'https://www.covenirbpo.com/pricing' },
  { label: 'Solutions', href: 'https://www.covenirbpo.com/solutions' },
  { label: 'About',     href: 'https://www.covenirbpo.com/about-us' },
  { label: 'Contact',   href: 'https://www.covenirbpo.com/contact' },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #003087 0%, #00AEEF 50%, #7B2D8B 100%)' }}>
      {/* Pinwheel color strip */}
      <div className="flex h-1">
        {['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'].map((c) => (
          <span key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* ── Left: HQ + contact + disclaimer ── */}
          <div className="max-w-sm">
            <CovenirLogo size="sm" />

            <h3 className="text-sm font-bold mt-6 mb-2 text-white">Corporate Headquarters</h3>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              370 Main Street, Suite 880<br />
              Worcester, MA 01608
            </address>

            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="mailto:info@covenirbpo.com"
                   className="text-white/70 hover:text-white transition-colors">
                  info@covenirbpo.com
                </a>
              </li>
              <li>
                <a href="tel:+15084715031"
                   className="text-white/70 hover:text-white transition-colors">
                  (508) 471-5031
                </a>
              </li>
            </ul>

            <p className="mt-5 text-xs text-white/50 leading-relaxed">
              Covenir BPO is a division of Covenir, a Policy Processing System
              Technology Corporation (&ldquo;PPSTC&rdquo;) company.
            </p>

            <a href="https://www.covenirbpo.com/privacy-policy"
               target="_blank" rel="noopener noreferrer"
               className="inline-block mt-3 text-xs text-white/60 hover:text-white underline transition-colors">
              Privacy Policy
            </a>

            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              <a href="https://www.linkedin.com/company/covenirbpo"
                 target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="w-8 h-8 rounded-full border border-white/30 hover:border-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/covenirbpo"
                 target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                 className="w-8 h-8 rounded-full border border-white/30 hover:border-white flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Nav links ── */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap lg:flex-col gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     target="_blank" rel="noopener noreferrer"
                     className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} CovenirBPO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
