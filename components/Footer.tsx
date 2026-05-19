import { CovenirLogo } from './CovenirLogo';

export default function Footer() {
  return (
    <footer className="bg-covenir-dark text-white">
      <div className="flex h-1">
        {['#8DC63F','#EC008C','#F7941D','#003087','#00AEEF','#BCBEC0','#7B2D8B'].map((c) => (
          <span key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <CovenirLogo size="sm" />
            <p className="text-white/40 text-xs mt-4 leading-relaxed max-w-xs">
              Business process outsourcing with a heavy focus on the insurance industry.
              Powered by People. Defined by WOW.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>370 Main Street, Suite 880</li>
              <li>Worcester, MA 01608</li>
              <li><a href="tel:+15084715031" className="hover:text-white transition-colors">(508) 471-5031</a></li>
              <li><a href="mailto:info@covenirbpo.com" className="hover:text-white transition-colors">info@covenirbpo.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.covenirbpo.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">CovenirBPO.com</a></li>
              <li><a href="https://www.covenirenterprise.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Covenir Enterprise</a></li>
              <li><a href="https://www.covenirbpo.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
            <div className="flex gap-2 mt-6">
              <a href="https://www.linkedin.com/company/covenirbpo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/covenirbpo" target="_blank" rel="noopener noreferrer" aria-label="X"
                 className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} CovenirBPO. All rights reserved.</span>
          <span>Powered by People. Defined by WOW.</span>
        </div>
      </div>
    </footer>
  );
}
