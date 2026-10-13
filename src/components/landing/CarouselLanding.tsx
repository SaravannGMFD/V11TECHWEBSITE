import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, QrCode } from 'lucide-react';

export default function CarouselLanding() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-30 md:pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200/70 text-emerald-800 text-xs font-medium shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Next-Gen Restaurant & Retail Point of Sale</span>
            </div>

            {/* Main Headline (compact & balanced) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              Supercharge Orders with{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                Smart QR Technology
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empower small businesses, restaurants, cafes, and retail stores with an all-in-one ordering system. Boost table turnover by <strong className="text-slate-800 font-semibold">35%</strong>, eliminate waiter bottlenecks, and delight guests with instant contactless checkout.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-1.5 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Zero App Download</span>
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Instant Kitchen Sync</span>
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">99.9% Reliable POS</span>
              </div>
            </div>

            {/* Compact CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => navigate('/book-a-demo?type=demo', { state: { type: 'demo', source: 'products' } })}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Schedule a Free Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const pricingEl = document.getElementById('pricing');
                  if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm shadow-2xs hover:shadow-xs transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>Explore Pricing</span>
              </button>
            </div>

            {/* Social proof badge */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-500">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">98%</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-teal-500 text-white text-[9px] font-bold flex items-center justify-center">500+</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center">⭐</span>
              </div>
              <span className="text-[11px] sm:text-xs">Trusted by 500+ restaurants, cafes & retail chains across 4 countries</span>
            </div>
          </div>

          {/* Right Column: Balanced Visual Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg max-h-[440px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
              
              {/* Rounded backdrop with soft glow */}
              <div className="absolute inset-1 sm:inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-400 opacity-90 shadow-xl shadow-emerald-500/20 rotate-1" />
              <div className="absolute inset-1 sm:inset-2 rounded-3xl bg-emerald-600/10 backdrop-blur-md -rotate-1 border border-white/30" />

              {/* Mobile Phone Mockup */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
                <img
                  src="/assets/img/mobile1.png"
                  alt="V11-QR Mobile Ordering"
                  className="w-full h-full object-contain filter drop-shadow-2xl animate-float-gentle select-none pointer-events-none"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/img/Product1.png';
                  }}
                />
              </div>

              {/* Compact Floating Pills */}
              <div className="absolute -top-2 left-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <QrCode className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800">Scan & Dine</p>
                  <p className="text-[9px] text-slate-400">No waiter waiting</p>
                </div>
              </div>

              <div className="absolute -bottom-2 right-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800">Instant KDS Sync</p>
                  <p className="text-[9px] text-emerald-600 font-medium">Real-time orders</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-gentle {
          animation: floatGentle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}