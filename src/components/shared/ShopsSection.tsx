import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
  badge?: string;
}

interface ShopsSectionProps {
  shops: ShopItem[];
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

function ShopsSection({
  shops,
  badgeText = "Industry Solutions",
  title = "Tailored for Every Business Model",
  subtitle = "From buzzing dine-in restaurants to high-volume retail stores, V11TECH adapts seamlessly to your operational demands."
}: ShopsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Desktop & Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {shops.map((shop, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={shop.imgSrc}
                  alt={shop.altText}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/img/Product1.png';
                  }}
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Floating category tag */}
                {shop.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                    {shop.badge}
                  </div>
                )}

                {/* Bottom title over image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold drop-shadow-sm flex items-center justify-between">
                    <span>{shop.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-400" />
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {shop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ShopsSection;