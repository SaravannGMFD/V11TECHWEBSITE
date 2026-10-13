import { Instagram, Facebook, Linkedin, ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-10 sm:pt-12 pb-4 sm:pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-5 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block select-none" aria-label="V11TECH Home">
              <span className="font-black text-2xl tracking-tight text-[#38bdf8] hover:text-[#0ea5e9] transition-colors">
                V11<span className="text-[#0284c7]">TECH</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              V11TECH delivers powerful <strong>GST billing software</strong>, POS hardware, and automated cloud workflows. Complete invoice and billing software with inventory management for small businesses and distributors worldwide.
            </p>

            {/* Live Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Cloud POS Services Operational</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Products
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">
                  V11-POS (GST Billing Software)
                </Link>
              </li>
              <li>
                <Link to="/products/qr-ordering" className="hover:text-emerald-400 transition-colors">
                  V11-QR
                </Link>
              </li>
              <li>
                <Link to="/products/kds" className="hover:text-emerald-400 transition-colors">
                  V11-KDS
                </Link>
              </li>
              <li>
                <Link to="/products/kiosk" className="hover:text-emerald-400 transition-colors">
                  V11-Kiosk
                </Link>
              </li>
              <li>
                <Link to="/products/coming-soon" className="hover:text-emerald-400 transition-colors">
                  V11-Connect
                </Link>
              </li>
              <li>
                <Link to="/products/coming-soon" className="hover:text-emerald-400 transition-colors">
                  V11-Queue
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/customers" className="hover:text-emerald-400 transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-a-demo" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1">
                  Book a Demo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:support@v11tech.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>support@v11tech.com</span>
              </a>
              <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>India • Hong Kong • Dubai • UK</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/v11tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-md shadow-[#ee2a7b]/25 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/v11tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md shadow-[#1877F2]/25 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/v11-tech/about/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white shadow-md shadow-[#0A66C2]/25 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-white" />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-black border border-slate-700/80 flex items-center justify-center text-white shadow-md hover:bg-slate-900 hover:border-slate-500 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="X (formerly Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Organic SEO Keywords Bar */}
        <div className="py-4 border-b border-slate-800/80 text-[11px] sm:text-xs text-slate-500 space-y-2">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 justify-center md:justify-start">
            <span className="font-semibold text-slate-400">Restaurant Solutions:</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Restaurant POS Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Restaurant Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Restaurant Management System</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Restaurant POS</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Restaurant Billing POS System</Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 justify-center md:justify-start">
            <span className="font-semibold text-slate-400">GST & Invoicing:</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">GST Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">GST Billing and Inventory Management</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">GST Invoice Generator Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">e-Invoice Software for Businesses</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">e-Way Bill Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Business Billing Software</Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 justify-center md:justify-start">
            <span className="font-semibold text-slate-400">Inventory & Operations:</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Inventory and Stock Management Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Purchase Order and Sales Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Barcode Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Sales and Purchase Management Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Wholesale Billing Software</Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 justify-center md:justify-start">
            <span className="font-semibold text-slate-400">Cloud & Architecture:</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Offline Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Cloud-Based Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Multi-Branch Billing Software</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Billing Software with Accounting</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos#pricing" className="hover:text-emerald-400 transition-colors">Billing Software Price</Link>
            <span className="text-slate-700">•</span>
            <Link to="/book-a-demo?type=demo" className="hover:text-emerald-400 transition-colors">Billing Software Demo</Link>
            <span className="text-slate-700">•</span>
            <Link to="/products/pos" className="hover:text-emerald-400 transition-colors">Billing Software for Distributors</Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {currentYear} V11TECH. All rights reserved. Empowering modern commerce.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="hover:text-emerald-400 transition-colors">
              Support
            </Link>
          </div>

          <div className="flex items-center">
            <img 
              src="/assets/img/payment.png" 
              alt="Supported payment methods - 100% Secure Payment By Razorpay" 
              className="h-7 sm:h-8 w-auto object-contain transition-all" 
            />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;