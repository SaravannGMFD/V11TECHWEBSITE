import Bhavika_LogoF from '../../../src/assets/img/clients/Bhavika_LogoF.png';
import Dessert_Bossz from '../../../src/assets/img/clients/Dessert_Bossz.png';
import IBS from '../../../src/assets/img/clients/IBS.png';
import Kurunji_Metro from '../../../src/assets/img/clients/Kurunji_Metro.png';
import LOGO_Karaikudi from '../../../src/assets/img/clients/LOGO_Karaikudi.png';
import thalappakatti from '../../../src/assets/img/clients/thalappakatti.gif';
import Together_Restaurant from '../../../src/assets/img/clients/Together_Restaurant.png';

export default function WorldwideCustomers() {
  const customers = [
    { id: 1, name: "Bhavika Foods", logo: Bhavika_LogoF },
    { id: 2, name: "Dessert Bossz", logo: Dessert_Bossz },
    { id: 3, name: "IBS Global", logo: IBS },
    { id: 4, name: "Kurunji Metro", logo: Kurunji_Metro },
    { id: 5, name: "Karaikudi Restaurant", logo: LOGO_Karaikudi },
    { id: 6, name: "Dindigul Thalappakatti", logo: thalappakatti },
    { id: 7, name: "Together Restaurant", logo: Together_Restaurant }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-slate-900 text-white relative overflow-hidden">
      {/* World map background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url("/assets/img/worldmap.png")' }}
      />

      {/* Ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by Reputed Global Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From iconic biryani houses to modern patisseries and supermarket networks, leading merchants run on V11.
          </p>
        </div>

        {/* CSS Hardware-Accelerated Infinite Scrolling Track */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 sm:gap-8 animate-clients-marquee hover:[animation-play-state:paused]">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={`${customer.id}-${index}`}
                className="group flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white/10 hover:bg-white border border-white/10 hover:border-emerald-400 p-4 flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-full h-20 flex items-center justify-center p-2">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/img/Product1.png';
                    }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-300 group-hover:text-slate-900 mt-2 truncate w-full text-center transition-colors">
                  {customer.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-emerald-400">500+</p>
            <p className="text-xs text-slate-400 mt-1">Active Outlets</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-teal-400">1.2M+</p>
            <p className="text-xs text-slate-400 mt-1">Orders Processed Monthly</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-emerald-400">4</p>
            <p className="text-xs text-slate-400 mt-1">Global Markets (IN, HK, UAE, UK)</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-teal-400">99.9%</p>
            <p className="text-xs text-slate-400 mt-1">Uptime SLA Reliability</p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes clientsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clients-marquee {
          display: flex;
          width: max-content;
          animation: clientsMarquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
