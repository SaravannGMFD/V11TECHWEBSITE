import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, Headphones } from 'lucide-react';

interface CTASectionProps {
  product?: string;
  siteIndex?: string;
  isConsulting?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  product = "V11-QR",
  isConsulting = false
}) => {
  const isConsultingMode = isConsulting || product === "V11TECH";

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-900 text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-emerald-600/30">
          
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>
                {isConsultingMode
                  ? "Specialized Engineering & IT Advisory"
                  : "Transform Your Checkout Experience"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {isConsultingMode ? (
                <>
                  Accelerate Your Operations with{' '}
                  <span className="text-emerald-300 underline decoration-emerald-400/50 decoration-wavy underline-offset-8">
                    V11TECH
                  </span>{' '}
                  Engineering & Digital Solutions
                </>
              ) : (
                <>
                  Upgrade Your Business with Next-Gen{' '}
                  <span className="text-emerald-300 underline decoration-emerald-400/50 decoration-wavy underline-offset-8">
                    {product}
                  </span>{' '}
                  Solutions
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
              {isConsultingMode
                ? "Scale your technical capacity with dedicated offshore piping design, electrical & instrumentation schematics, renewable energy modeling, and full-stack software development. Book your strategy consultation today."
                : `Experience frictionless checkout and retail transactions. Book your free billing software demo today and see how ${product || 'V11-POS'} cuts overhead and increases customer satisfaction.`}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={isConsultingMode ? "/book-a-demo?type=consulting" : "/book-a-demo?type=demo"}
                state={{ type: isConsultingMode ? 'consulting' : 'demo' }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{isConsultingMode ? "Schedule Consulting Session" : "Schedule Billing Software Demo"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </Link>

              <Link
                to={isConsultingMode ? "/book-a-demo?type=consulting" : "/book-a-demo?type=demo"}
                state={{ type: isConsultingMode ? 'consulting' : 'demo' }}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Speak with Sales</span>
              </Link>
            </div>

            {/* Feature Badges */}
            <div className="pt-6 border-t border-emerald-600/40 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200 font-medium">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-300" />
                <span>15-Minute Easy Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-300" />
                <span>No Long-Term Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-emerald-300" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;