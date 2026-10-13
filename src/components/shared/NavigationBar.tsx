import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

function NavigationBar() {
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const products = [
    {
      name: 'V11-POS',
      badge: 'Restaurant POS',
      desc: 'Restaurant POS & GST billing and inventory management',
      image: '/assets/img/Product1.png',
      link: '/products/pos'
    },
    {
      name: 'V11-QR',
      badge: 'Popular',
      desc: 'Tabletop QR ordering & contactless payments',
      image: '/assets/img/v11-qr.png',
      link: '/products/qr-ordering'
    },
    {
      name: 'V11-KDS',
      badge: 'Essential',
      desc: 'Kitchen display system with real-time routing',
      image: '/assets/img/v11-kds.png',
      link: '/products/kds'
    },
    {
      name: 'V11-Kiosk',
      badge: 'Smart POS',
      desc: 'Self-ordering interactive touch kiosk',
      image: '/assets/img/v11-kiosk.png',
      link: '/products/kiosk'
    },
    {
      name: 'V11-Connect',
      badge: 'Coming Soon',
      desc: 'Unified multi-outlet cloud sync hub',
      image: '/assets/img/v11-conect.png',
      link: '/products/coming-soon'
    },
    {
      name: 'V11-Queue',
      badge: 'Coming Soon',
      desc: 'Automated token & customer queue manager',
      image: '/assets/img/v11-queue.png',
      link: '/products/coming-soon'
    }
  ];

  const menuItems = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Customers', path: '/customers' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      setProductsDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleProductsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setProductsDropdownOpen((prev) => !prev);
  };

  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white shadow-sm border-slate-100 py-2'
            : 'bg-white border-slate-100 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11 sm:h-12">

          {/* Typography Logo: V11TECH in original dark skyblue */}
          <Link
            to="/"
            className="flex items-center gap-1 group py-0.5 select-none"
            aria-label="V11TECH Home"
          >
            <span className="font-black text-2xl sm:text-2xl tracking-tight text-[#0284c7] group-hover:text-[#0369a1] transition-colors">
              V11<span className="text-[#0369a1]">TECH</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button
                onClick={toggleProductsDropdown}
                className={`nav-menu-btn group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
                  isProductsActive
                    ? '!bg-emerald-600 !text-white font-semibold shadow-sm'
                    : 'text-slate-700 hover:!bg-emerald-600 hover:!text-white'
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span className="transition-colors group-hover:!text-white">Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    productsDropdownOpen ? 'rotate-180 !text-inherit group-hover:!text-white' : 'text-slate-500 group-hover:!text-white'
                  }`}
                />
              </button>

              {/* Mega-menu Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[640px] max-w-[95vw] bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 transition-all duration-200 origin-top z-50 ${
                  productsDropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 mb-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    V11 Ecosystem Solutions
                  </span>
                  <Link
                    to="/book-a-demo"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    Compare all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.link}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-emerald-50 transition-all duration-150 border border-transparent hover:border-emerald-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/assets/img/Product1.png';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                            {product.name}
                          </span>
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded-full font-medium ${
                              product.badge === 'Coming Soon'
                                ? 'bg-amber-50 text-amber-600 border border-amber-200'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            }`}
                          >
                            {product.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {product.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Standard Nav Items */}
            {menuItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`nav-menu-link group px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-150 ${
                    isActive
                      ? '!bg-emerald-600 !text-white font-semibold shadow-sm'
                      : 'text-slate-700 hover:!bg-emerald-600 hover:!text-white'
                  }`}
                >
                  <span className="transition-colors group-hover:!text-white">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <Link
              to={location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? "/book-a-demo?type=consulting" : "/book-a-demo?type=demo"}
              state={{ type: location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? 'consulting' : 'demo' }}
              style={{ backgroundColor: '#059669', color: '#ffffff' }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 !text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/25 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer select-none"
            >
              <span className="!text-white font-semibold">
                {location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? "Book Consultation" : "Book a Demo"}
              </span>
              <ArrowRight className="w-3.5 h-3.5 !text-white" />
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:bg-sky-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-200 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-black text-xl tracking-tight text-[#0284c7]">
                V11<span className="text-[#0369a1]">TECH</span>
              </span>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Products
              </p>
              <div className="space-y-1">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    to={p.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="nav-menu-link group flex items-center justify-between p-2 rounded-lg hover:!bg-emerald-600 hover:!text-white text-slate-700 transition-colors"
                  >
                    <span className="text-xs font-medium group-hover:!text-white">{p.name}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-700 group-hover:!text-white">
                      {p.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Company
              </p>
              <div className="space-y-1">
                {menuItems.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="nav-menu-link group block p-2 rounded-lg hover:!bg-emerald-600 hover:!text-white text-slate-700 font-medium text-xs transition-colors"
                  >
                    <span className="group-hover:!text-white">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <Link
              to={location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? "/book-a-demo?type=consulting" : "/book-a-demo?type=demo"}
              state={{ type: location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? 'consulting' : 'demo' }}
              onClick={() => setMobileMenuOpen(false)}
              style={{ backgroundColor: '#059669', color: '#ffffff' }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 !text-white font-semibold text-xs shadow-md transition-colors"
            >
              <span className="!text-white font-semibold">
                {location.pathname.startsWith('/services') || location.pathname.startsWith('/about') ? "Book Consultation" : "Book a Free Demo"}
              </span>
              <ArrowRight className="w-3.5 h-3.5 !text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;