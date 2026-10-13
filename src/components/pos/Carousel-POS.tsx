import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Monitor } from 'lucide-react';

export default function CarouselPOS() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-30 md:pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200/70 text-emerald-800 text-xs font-medium shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>#1 Restaurant POS Software & GST Billing and Inventory Management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              Smart Restaurant POS Software &{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                GST Billing System
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              High-speed <strong>restaurant billing POS system</strong> and <strong>business billing software</strong>. Complete with <strong>barcode billing software</strong>, <strong>offline billing software</strong>, <strong>cloud-based billing software</strong>, and real-time <strong>inventory and stock management software</strong>.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-1.5 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Restaurant Billing Software</span>
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">GST Billing & Stock Management</span>
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Offline & Multi-Branch POS</span>
              </div>
            </div>

            {/* Compact CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => navigate('/book-a-demo?type=demo', { state: { type: 'demo', source: 'products' } })}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Billing Software Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const pricingEl = document.getElementById('pricing');
                  if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm shadow-2xs hover:shadow-xs transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Monitor className="w-4 h-4 text-emerald-600" />
                <span>Billing Software Price</span>
              </button>
            </div>

            {/* Social proof badge */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-500">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">98%</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-teal-500 text-white text-[9px] font-bold flex items-center justify-center">500+</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-sky-500 text-white text-[9px] font-bold flex items-center justify-center">⭐</span>
              </div>
              <span className="text-[11px] sm:text-xs">Trusted by 500+ small businesses, retail stores & distributors worldwide</span>
            </div>
          </div>

          {/* Right Column: Point of Sale Video Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl xl:max-w-2xl h-[380px] sm:h-[420px] lg:h-[440px] rounded-3xl p-2 sm:p-2.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-400 shadow-2xl shadow-emerald-500/25">
              
              {/* Soft ambient glow behind */}
              <div className="absolute -inset-2 rounded-3xl bg-emerald-500/20 blur-xl pointer-events-none -z-10" />

              {/* Video container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-white/30 shadow-inner flex items-center justify-center">
                {/* Ambient video blur fill to seamlessly expand vertical height */}
                <video
                  src="/assets/videos/pos_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110 pointer-events-none"
                />

                {/* Full-width crisp foreground video preserving entire monitor and printer */}
                <video
                  src="/assets/videos/pos_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                />
              </div>

              {/* Compact Floating Pills positioned so they don't block the monitor or printer */}
              <div className="absolute -top-3.5 left-2 sm:-left-3 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Monitor className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800">Point of Sale</p>
                  <p className="text-[9px] text-slate-400">Live POS Workflow</p>
                </div>
              </div>

              <div className="absolute -bottom-3.5 right-2 sm:-right-3 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800">Instant Sync</p>
                  <p className="text-[9px] text-emerald-600 font-medium">Real-time billing</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
