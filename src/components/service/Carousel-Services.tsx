import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Smartphone, Layers } from 'lucide-react';

function CarouselServices() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Full-Stack IT & Software Development Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Enterprise Web Portals & Custom Mobile App Development
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We design, engineer, and deploy high-performance web portals, native mobile apps, and scalable cloud systems. From dynamic business portals to custom iOS & Android applications, we deliver robust digital solutions tailored to accelerate your growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                <Globe className="w-5 h-5 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Web Portal Development</h2>
                <p className="text-xs text-slate-500 mt-1">Responsive B2B/B2C portals, interactive client dashboards & SaaS web apps.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                <Smartphone className="w-5 h-5 text-teal-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Mobile App Engineering</h2>
                <p className="text-xs text-slate-500 mt-1">Native iOS, Android & cross-platform Flutter/React Native apps with real-time sync.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                <Layers className="w-5 h-5 text-emerald-600 mb-2" />
                <h2 className="text-sm font-bold text-slate-900">Cloud & Custom APIs</h2>
                <p className="text-xs text-slate-500 mt-1">Scalable microservices, secure payment gateway integrations & database architecture.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/book-a-demo?type=consulting', { state: { type: 'consulting', source: 'services' } })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult Our Tech Architects</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 max-w-md w-full aspect-[4/3] sm:aspect-square group">
              <img
                src="/assets/img/software_dev_service.jpg"
                alt="Web Portal and Mobile App Development Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/img/service.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Enterprise Digital Engineering</p>
                <p className="text-base font-bold mt-1">Full-cycle web portals, mobile apps & custom cloud architecture.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarouselServices;