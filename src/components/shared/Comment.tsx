import React from "react";
import { Star, Quote, CheckCircle, Sparkles } from "lucide-react";

interface Review {
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  text: string;
  highlight: string;
}

const reviews: Review[] = [
  {
    name: "Senthil Murugan",
    role: "Managing Director",
    company: "Anjappar Chettinad Restaurant, Chennai",
    avatar: "/assets/img/avatars/avatar_senthil.jpg",
    stars: 5,
    highlight: "+42% table turnaround speed",
    text: "Implementing V11-POS and QR ordering reduced our weekend wait times by over 20 minutes. Diners browse authentic Chettinad photo menus on their phones, and KOT orders fire instantly to our kitchen stations."
  },
  {
    name: "Meenakshi Ramasamy",
    role: "Founder & Master Chef",
    company: "Madurai Meenakshi Bhavan",
    avatar: "/assets/img/avatars/avatar_meenakshi.jpg",
    stars: 5,
    highlight: "Saved 2 full-time cashier costs",
    text: "Before V11, our breakfast tiffin counters were swamped during morning rushes. Now guests order effortlessly, customize idli-dosa combos, and pay instantly via UPI. It completely transformed our operations."
  },
  {
    name: "Anand Sundaram",
    role: "Operations Director",
    company: "Kongu Mess & Biryani Chains (5 Outlets)",
    avatar: "/assets/img/avatars/avatar_anand.jpg",
    stars: 5,
    highlight: "Seamless multi-branch billing",
    text: "Managing multiple branches across Coimbatore and Tiruppur used to be complex. With V11TECH's unified multi-branch billing software and cloud sync, our central kitchen and sales settlements run with zero errors."
  },
  {
    name: "Kavitha Subramanian",
    role: "Co-Founder & Cafe Lead",
    company: "The Kovai Bean Roastery & Cafe",
    avatar: "/assets/img/avatars/avatar_kavitha.jpg",
    stars: 5,
    highlight: "Reliable 100% offline billing",
    text: "We switched from our old desktop POS to V11-POS. Even during internet drops in peak monsoon hours, offline billing software handles customer billing smoothly and auto-syncs to the cloud later."
  },
  {
    name: "Durai Murugan",
    role: "Proprietor",
    company: "Sri Krishna Sweets & Bakery, Madurai",
    avatar: "/assets/img/avatars/avatar_karthik.jpg",
    stars: 5,
    highlight: "Superfast barcode billing",
    text: "During Deepavali festival rushes, speed is everything. V11's barcode billing software helped our cashiers bill 300+ customers per hour effortlessly with zero receipt printer delays."
  },
  {
    name: "Deepa Vijayakumar",
    role: "Managing Partner",
    company: "Thillai Traditional Foods & Retail, Trichy",
    avatar: "/assets/img/avatars/avatar_deepa.jpg",
    stars: 5,
    highlight: "Accurate GST & inventory tracking",
    text: "V11TECH's GST billing and inventory management software gives us real-time stock depletion alerts and automated tax invoicing. Our wastage dropped by 30% within the first two months."
  }
];

const Comment: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-slate-100">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Verified Merchant Reviews
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Loved by Restaurant & Retail Leaders Across Tamil Nadu
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          See how leading food & retail brands across Chennai, Madurai, Coimbatore, and Trichy use V11 POS to accelerate service and grow profits.
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full overflow-hidden relative">
        {/* Soft edge blur masks */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-scroll-marquee py-4 px-4 hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-none w-80 sm:w-96 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-200 p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Rating and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-200" />
                </div>

                {/* Key metric badge */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                  ✨ {review.highlight}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full ring-2 ring-emerald-500/20 bg-slate-100 shadow-xs flex items-center justify-center font-bold text-emerald-800 text-sm overflow-hidden flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/img/avatar.jpeg';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 truncate">{review.name}</p>
                    <p className="text-xs text-slate-500 truncate">{review.role}, {review.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-marquee {
          display: flex;
          width: max-content;
          animation: scrollMarquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Comment;
