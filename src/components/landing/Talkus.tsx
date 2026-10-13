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
    { text: 'Automated Kitchen Printing', desc: 'Orders route directly to kitchen thermal printers instantly' },
    { text: 'Cut Labor & Waitstaff Cost', desc: 'Free up servers to focus on hospitality rather than order entry' },
    { text: '24/7 Digital Ordering', desc: 'Accept dine-in, takeaway, and scheduled orders round the clock' },
    { text: 'No Website Required', desc: 'Launch a branded digital menu in minutes with just your QR codes' },
    { text: '100% Reliable Transactions', desc: 'Secure integrated contactless checkout with zero order loss' },
    { text: 'Spam & Fake Order Prevention', desc: 'Pre-validated customer phone & table numbers for every order' },
    { text: 'Real-Time Sales Dashboard', desc: 'Live item sales, peak hours, and staff performance reports' },
    { text: 'Effortless QR Table Marketing', desc: 'Standee, sticker, or acrylic table markers ready to scan' },
  ];

  return (
    <section id="consultation" className="py-10 sm:py-12 md:py-14 bg-slate-50/60 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Why Switch to V11-QR
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed to Eliminate Operational Headaches
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Traditional order taking is slow, prone to errors, and expensive. V11-QR automates your front-of-house operations so you never miss a sale.
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
                    Live Demo Preview
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Interactive
                  </span>
                </div>

                <div>
                  <p className="text-2xl font-bold tracking-tight text-white">V11-QR Order Flow</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Customers scan, browse rich photo menus, customize dishes, and pay seamlessly.
                  </p>
                </div>

                {/* QR Visual Showcase with Scanner Line */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-700/60 p-4 flex flex-col items-center">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <img
                      src="/assets/img/What to Know Before Scanning a QR Code.jpeg"
                      alt="QR Order in action"
                      className="w-full h-full object-cover rounded-xl opacity-90"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/img/Product1.png';
                      }}
                    />
                    {/* Continuous smooth scanning beam */}
                    <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399] animate-scan-beam" />
                  </div>

                  <div className="w-full mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-lg font-bold text-emerald-400">&lt; 15s</p>
                      <p className="text-[11px] text-slate-400">Average Order Time</p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-lg font-bold text-teal-400">0%</p>
                      <p className="text-[11px] text-slate-400">Order Mishearing Rate</p>
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

      <style>{`
        @keyframes scanBeam {
          0% { top: 0%; opacity: 0.8; }
          50% { top: 95%; opacity: 1; }
          100% { top: 0%; opacity: 0.8; }
        }
        .animate-scan-beam {
          animation: scanBeam 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default TalkUs;