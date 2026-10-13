import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';
import TalkUs from './Talkus';
import CarouselKDS from './Carousel-KDS';
import PricingSection, { PricingPlan } from '../shared/PricingSection';

const staggeredCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const KDSLanding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [adjustedPlans, setAdjustedPlans] = useState<PricingPlan[]>([]);

  const defaultPlans: PricingPlan[] = [
    {
      title: "KDS Starter",
      subtitle: "For single preparation lines & small kitchens",
      monthlyPriceINR: 4499,
      yearlyPriceINR: 4499 * 12,
      monthlyPrice: "₹4,499",
      yearlyPrice: "₹53,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "1 Kitchen display terminal", included: true },
        { name: "Live color-coded order timer", included: true },
        { name: "Automatic order routing from POS", included: true },
        { name: "Digital ticket bump & recall", included: true },
        { name: "Audio chime alerts on new orders", included: false },
        { name: "Multi-station expeditor view", included: false },
      ],
    },
    {
      title: "KDS Professional",
      subtitle: "For multi-station busy kitchens",
      monthlyPriceINR: 7499,
      yearlyPriceINR: 7499 * 12,
      monthlyPrice: "₹7,499",
      yearlyPrice: "₹89,988",
      popular: true,
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Up to 3 kitchen stations (Grill/Fry/Bar)", included: true },
        { name: "Live color-coded order timer", included: true },
        { name: "Automatic order routing from POS", included: true },
        { name: "Digital ticket bump & recall", included: true },
        { name: "Audio chime alerts on new orders", included: true },
        { name: "Prep time analytics & cook reports", included: true },
      ],
    },
    {
      title: "KDS Enterprise",
      subtitle: "For food courts & high-volume franchises",
      monthlyPriceINR: 9999,
      yearlyPriceINR: 9999 * 12,
      monthlyPrice: "₹9,999",
      yearlyPrice: "₹1,19,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Unlimited kitchen terminals & expo screens", included: true },
        { name: "Central kitchen & hub dispatch", included: true },
        { name: "Customer-facing token display sync", included: true },
        { name: "Custom bump bar hardware support", included: true },
        { name: "Dedicated 24/7 technical support", included: true },
      ],
    },
  ];

  useEffect(() => {
    document.title = "Kitchen Display System & Restaurant Management System - V11TECH";
    setAdjustedPlans(defaultPlans);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <NavigationBar />
      <CarouselKDS />
      <TalkUs />

      {/* Pricing Section */}
      <section id="pricing" className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggeredCards}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
              KDS Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transparent Kitchen Display Plans
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Transform communication between front-of-house and kitchen staff.
            </p>
          </motion.div>

          {/* Billing Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-200/70 border border-slate-300/60 shadow-inner">
              <button
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${!isYearly ? 'bg-white text-slate-900 shadow-md' : 'text-slate-600 hover:text-slate-900'
                  }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${isYearly ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                  }`}
                onClick={() => setIsYearly(true)}
              >
                <span>Yearly</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isYearly ? 'bg-emerald-400 text-slate-950' : 'bg-slate-300 text-slate-700'
                }`}>
                  12 Months
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 max-w-6xl mx-auto">
            {adjustedPlans.map((plan: PricingPlan, index: number) => (
              <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      <Comment />
      <ClientLogosSection />
      <CTASection product="V11-KDS" siteIndex="/" />
      <Footer />
    </>
  );
};

export default KDSLanding;
