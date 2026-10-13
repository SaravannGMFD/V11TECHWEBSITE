import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, ChefHat, Clock, CheckCircle2 } from 'lucide-react';

function CarouselKDS() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Smart Kitchen Display System (KDS)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Orchestrate Your Kitchen with Real-Time Digital Precision
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Eliminate lost paper tickets, misread handwriting, and kitchen chaos. V11-KDS routes dine-in, takeaway, and delivery orders instantly to the right prep stations with color-coded timers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <ChefHat className="w-5 h-5 text-emerald-600 mb-1.5" />
                <h2 className="text-xs font-bold text-slate-900">Station Routing</h2>
                <p className="text-[11px] text-slate-500">Route grill, fry, salad & bar items to separate screens.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Clock className="w-5 h-5 text-teal-600 mb-1.5" />
                <h2 className="text-xs font-bold text-slate-900">Prep Timers</h2>
                <p className="text-[11px] text-slate-500">Color-coded alerts for tickets exceeding target prep time.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
                <h2 className="text-xs font-bold text-slate-900">Bump Bar & Touch</h2>
                <p className="text-[11px] text-slate-500">Works seamlessly on commercial touchscreens or bump bars.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/book-a-demo?type=demo', { state: { type: 'demo', source: 'products' } })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a KDS Walkthrough</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 flex items-center justify-center p-4">
              <img
                src="/assets/img/kdscar.jpg"
                alt="V11 Kitchen Display System Screen"
                className="w-full h-full object-contain rounded-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/img/v11-kds.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarouselKDS;