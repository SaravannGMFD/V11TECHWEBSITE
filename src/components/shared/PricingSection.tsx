import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Printer } from 'lucide-react';

export interface Feature {
  name: string;
  included: boolean;
}

export interface AnnualBonus {
  title: string;
  badgeText?: string;
  description?: string;
  gifUrl: string;
}

export interface PricingPlan {
  title: string;
  subtitle: string;
  monthlyPriceINR: number;
  yearlyPriceINR: number;
  monthlyPrice: string;
  yearlyPrice: string;
  features: Feature[];
  popular?: boolean;
  yearlyNote?: string;
  annualBonus?: AnnualBonus;
}

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  isMobile: boolean;
}

const pricingCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const handlePayment = () => {
    const rawPrice = isYearly ? plan.yearlyPriceINR : plan.monthlyPriceINR;
    const amount = Math.round(rawPrice * 100);

    if (!(window as any).Razorpay) {
      alert('Razorpay payment gateway is initializing. You can also book a demo for custom billing assistance.');
      window.location.href = '/book-a-demo';
      return;
    }

    const options = {
      key: 'rzp_live_nejqX35sR3t8v4',
      amount: amount,
      currency: 'INR',
      name: 'V11Tech Point of Sale',
      description: `${plan.title} Subscription Plan`,
      image: '/assets/img/Logo_Last.png',
      handler: function (response: any) {
        alert('Payment successful! Reference ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        plan_type: plan.title,
      },
      theme: {
        color: '#059669',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <motion.div
      variants={pricingCardVariant}
      className={`relative w-full max-w-sm rounded-3xl transition-all duration-300 flex flex-col justify-between ${
        plan.popular
          ? 'bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 md:-translate-y-3 z-10'
          : 'bg-white border border-slate-200/80 shadow-lg hover:shadow-xl hover:border-slate-300'
      }`}
    >
      {/* Popular Highlight Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MOST RECOMMENDED</span>
        </div>
      )}

      <div className="p-7 md:p-8">
        {/* Tier Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
          <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
        </div>

        {/* Price Display */}
        <div className="mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span className="text-sm font-medium text-slate-500">
              / {isYearly ? 'year' : 'month'}
            </span>
          </div>
          {isYearly && (
            <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {plan.yearlyNote !== undefined ? plan.yearlyNote : 'Includes 2 months free with annual billing'}
            </p>
          )}
        </div>

        {/* Feature List */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Included in this plan:
          </p>

          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                )}
                <span className={feature.included ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                  {feature.name}
                </span>
              </li>
            ))}

            {/* Annual Bonus Highlight (e.g. Free Thermal Printer on POS Starter Annual) */}
            {isYearly && plan.annualBonus && (
              <li className="pt-3.5 mt-1 border-t border-dashed border-emerald-300">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-emerald-50/90 border border-emerald-200/90 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-300">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <Printer className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 tracking-tight">
                        {plan.annualBonus.title}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                      {plan.annualBonus.badgeText || 'FREE'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 flex-shrink-0 bg-slate-950 rounded-xl overflow-hidden border border-slate-700/80 p-0.5 flex items-center justify-center shadow-inner">
                      <img
                        src={plan.annualBonus.gifUrl}
                        alt={plan.annualBonus.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-slate-600 leading-snug">
                      <p className="font-semibold text-emerald-800">
                        Thermal Receipt Printer
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {plan.annualBonus.description || 'Auto-cut thermal receipt printer included free with annual plan.'}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Button CTA */}
      <div className="p-7 md:p-8 pt-0">
        <button
          onClick={handlePayment}
          className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            plan.popular
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow'
          }`}
        >
          <span>Get Started with {plan.title}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
