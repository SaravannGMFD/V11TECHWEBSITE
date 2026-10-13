import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Calendar, Sparkles } from 'lucide-react';

function TalkUs() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const handleTalkToUsClick = () => {
    navigate('/book-a-demo?type=demo', { state: { type: 'demo', source: 'products' } });
  };

  const features = [
    { text: 'Restaurant POS Software & Captain Orders', desc: 'Table-side order punching on tablets or terminals with instantaneous kitchen ticket routing' },
    { text: 'GST Invoice Generator Software', desc: 'Rapid GST invoice generator software with thermal printing, tax split, and automated round-off' },
    { text: 'Inventory and Stock Management Software', desc: 'Real-time ingredient depletion, stock deduction, and purchase order re-stocking alerts' },
    { text: 'Barcode Billing Software & Fast Scanning', desc: 'High-speed retail barcode checkout, item variants, combos, and multi-tender split pay' },
    { text: '100% Offline Billing Software Resilience', desc: 'Uninterrupted order punch & receipt printing during internet outages with auto cloud sync' },
    { text: 'Cloud-Based Billing Software & Analytics', desc: 'Real-time sales and purchase management software reports accessible from any mobile or laptop' },
    { text: 'Multi-Branch Billing Software & Warehouses', desc: 'Centralized stock movement, store-to-store transfers, and wholesale billing software controls' },
    { text: 'e-Way Bill Software & e-Invoice Automation', desc: 'One-click IRN e-invoice software for businesses with compliant B2B and e-way bill generation' },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-slate-50/60 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Restaurant Management System & GST Billing
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                All-in-One Restaurant Billing POS System & Business Billing Software
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Misplaced kitchen tickets, manual ledger errors, and slow checkout queues cost you revenue. V11TECH restaurant billing software and wholesale billing software unify ordering, purchase order and sales billing software, offline billing software, and accounting into one powerful platform.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white border-emerald-500 shadow-md translate-x-1'
                      : 'bg-white/80 border-slate-200/80 hover:border-emerald-300 hover:bg-white'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{feature.text}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <button
                onClick={handleTalkToUsClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a 1-on-1 Consultation</span>
                <MessageSquare className="w-4 h-4 ml-1 opacity-80" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-8 text-white shadow-2xl overflow-hidden border border-slate-700/50">
              
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Live Restaurant Demo
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    High-Volume POS
                  </span>
                </div>

                <div>
                  <p className="text-2xl font-bold tracking-tight text-white">Peak-Rush Dine-In Checkout Flow</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Captains punch orders, kitchen stations fire tickets instantly, and cashiers clear long billing lines in seconds.
                  </p>
                </div>

                {/* Dine-In Visual Showcase with Image Provided */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-700/60 p-3 sm:p-4 flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden group/img">
                    <img
                      src="/assets/img/dinein/dinein_pos_rush.jpg"
                      alt="Dine-in restaurant peak-hour checkout rush"
                      className="w-full h-full object-cover object-center rounded-xl opacity-95 transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/img/Product1.png';
                      }}
                    />
                    {/* Subtle gradient vignette for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
                    
                    {/* Status badge overlaid on image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white/95 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Peak Dine-In Counter Speed
                      </span>
                      <span className="text-[11px] text-emerald-300 font-semibold">Zero Lag</span>
                    </div>
                  </div>

                  {/* Operational Metrics */}
                  <div className="w-full mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-lg font-bold text-emerald-400">&lt; 3s</p>
                      <p className="text-[11px] text-slate-400">Bill Generation Speed</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-lg font-bold text-teal-400">100%</p>
                      <p className="text-[11px] text-slate-400">Kitchen KOT Accuracy</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleTalkToUsClick}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Talk with a POS Specialist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default TalkUs;
