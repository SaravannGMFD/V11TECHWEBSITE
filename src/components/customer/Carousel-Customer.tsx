import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Store, Coffee } from 'lucide-react';

function CarouselCustomer() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Proven Results Across 500+ Businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Powering High-Volume Restaurants, Cafes & Retail Chains
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover how dining destinations, grocery supermarkets, sweet houses, and cloud kitchens streamline thousands of daily transactions with V11 Point of Sale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Coffee className="w-5 h-5 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Cafes & QSRs</h2>
                <p className="text-xs text-slate-500 mt-1">Faster queue clearance and tabletop digital payments.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Store className="w-5 h-5 text-teal-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Retail & Marts</h2>
                <p className="text-xs text-slate-500 mt-1">Barcode scanning, stock alerts & instant invoicing.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left">
                <Building2 className="w-5 h-5 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Franchises</h2>
                <p className="text-xs text-slate-500 mt-1">Central multi-branch reporting & inventory sync.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/book-a-demo')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Our Merchant Network</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 max-w-md w-full aspect-[4/3] sm:aspect-square">
              <img
                src="/assets/img/customers.jpg"
                alt="Happy V11 POS Customers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/img/Product1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Customer Success</p>
                <p className="text-base font-bold mt-1">Over 1.2 million transactions handled smoothly every month.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarouselCustomer;