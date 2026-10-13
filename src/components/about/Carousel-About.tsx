import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Users2, Award } from 'lucide-react';

function CarouselAbout() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Empowering Modern Food & Retail Businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We Build Intelligent POS Systems for Growing Enterprises
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our mission is to simplify commerce for restaurant owners, independent retailers, and franchise brands. With powerful automation, intuitive tablet apps, and seamless QR payments, we help merchants boost revenue while minimizing manual workload.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Target className="w-6 h-6 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">User-Centric</h2>
                <p className="text-xs text-slate-500 mt-1">Designed for staff to learn in under 10 minutes.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Award className="w-6 h-6 text-teal-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">99.9% Reliable</h2>
                <p className="text-xs text-slate-500 mt-1">Offline-resilient sync so you never miss an order.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Users2 className="w-6 h-6 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Dedicated Care</h2>
                <p className="text-xs text-slate-500 mt-1">Direct WhatsApp & dedicated priority support 24/7.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/book-a-demo?type=consulting', { state: { type: 'consulting', source: 'about' } })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 max-w-md w-full aspect-[4/3] sm:aspect-square">
              <img
                src="/assets/img/about.jpg"
                alt="About V11TECH Team and Platform"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/img/Product1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Our Vision</p>
                <p className="text-base font-bold mt-1">Smart technology made accessible for every merchant.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarouselAbout;