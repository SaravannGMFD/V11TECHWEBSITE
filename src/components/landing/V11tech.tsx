import React from "react";
import { Sparkles, Store } from "lucide-react";

interface ServiceItem {
  icon: string;
  text: string;
  subtext?: string;
  category?: string;
}

interface V11QRLandingProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

const V11QRLanding: React.FC<V11QRLandingProps> = ({
  badgeText = "Universal Compatibility",
  title = "V11-QR is Perfect for Your Venue",
  subtitle = "Engineered to handle fast table flips, custom modifications, split bills, and peak-hour rushes across diverse food & hospitality operations.",
}) => {
  const serviceItems: ServiceItem[] = [
    { icon: "beer-mug", text: "Bars & Pubs", category: "Nightlife" },
    { icon: "burger", text: "Quick Service Restaurants", subtext: "(QSR)", category: "Fast Casual" },
    { icon: "hotel", text: "Hotels & Resorts", category: "Hospitality" },
    { icon: "bakery", text: "Bakery & Dessert Shops", category: "Retail F&B" },
    { icon: "chain", text: "Franchise Chains", category: "Multi-Outlet" },
    { icon: "restaurant", text: "Full Service Restaurants", category: "Dine-In" },
    { icon: "cloud-kitchen", text: "Cloud & Ghost Kitchens", category: "Delivery" },
    { icon: "food-court", text: "Food Courts & Malls", category: "Multi-Vendor" },
    { icon: "canteen", text: "Institutional Canteens", category: "High Volume" },
    { icon: "buffet", text: "All-You-Can-Eat Buffets", category: "Self-Service" },
    { icon: "grocery", text: "Food & Beverage Retail", category: "Grocery" },
    { icon: "popup-store", text: "Pop-up Stores & Events", category: "Temporary" },
  ];

  const getIconSrc = (iconName: string) => {
    switch (iconName) {
      case "beer-mug": return "/assets/img/pos/Bars.png";
      case "burger": return "/assets/img/pos/QSR.png";
      case "hotel": return "/assets/img/pos/HotelsResorts.png";
      case "bakery": return "/assets/img/pos/BakeryShops.png";
      case "chain": return "/assets/img/pos/Chains.png";
      case "restaurant": return "/assets/img/pos/FSR.png";
      case "cloud-kitchen": return "/assets/img/pos/CloudKitchens.png";
      case "food-court": return "/assets/img/pos/FoodCourts.png";
      case "canteen": return "/assets/img/pos/Canteens.png";
      case "buffet": return "/assets/img/pos/AIBuffet.png";
      case "grocery": return "/assets/img/pos/FoodRetail.png";
      case "popup-store": return "/assets/img/pos/PopUpStores.png";
      default: return "/assets/img/pos/QSR.png";
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#009968] p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300">
                <img
                  src={getIconSrc(item.icon)}
                  alt={item.text}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 group-hover:text-emerald-700">
                  {item.category}
                </span>
                <p className="font-bold text-slate-800 group-hover:text-emerald-800 text-sm leading-snug transition-colors line-clamp-2">
                  {item.text} {item.subtext && <span className="text-slate-400 font-normal">{item.subtext}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Venue stats */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-100/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">Have a specialized hospitality format?</p>
              <p className="text-sm text-slate-600">We support custom workflows, multiple kitchens, barcode scales, and multi-currency billing.</p>
            </div>
          </div>
          <a
            href="/contact-us"
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            Ask Our POS Experts &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default V11QRLanding;