import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../shared/NavigationBar';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';
import Comment from '../shared/Comment';
import TalkUs from './Talkus';
import CarouselKIOSK from './Carousel-KIOSK';
import ShopsSection from '../shared/ShopsSection';
import PricingSection, { PricingPlan } from '../shared/PricingSection';

const staggeredCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const KIOSKLanding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [adjustedPlans, setAdjustedPlans] = useState<PricingPlan[]>([]);

  const defaultPlans: PricingPlan[] = [
    {
      title: "Kiosk Basic",
      subtitle: "For quick service counters & cafes",
      monthlyPriceINR: 4499,
      yearlyPriceINR: 4499 * 12,
      monthlyPrice: "₹4,499",
      yearlyPrice: "₹53,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "1 Touch kiosk software license", included: true },
        { name: "Visual digital photo menu", included: true },
        { name: "Automated upsell suggestions", included: true },
        { name: "Direct thermal receipt printing", included: true },
        { name: "Custom brand theme & logo", included: false },
        { name: "Integrated card EDC payments", included: false },
      ],
    },
    {
      title: "Kiosk Business",
      subtitle: "For high-volume fast casuals & food courts",
      monthlyPriceINR: 7499,
      yearlyPriceINR: 7499 * 12,
      monthlyPrice: "₹7,499",
      yearlyPrice: "₹89,988",
      popular: true,
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Up to 3 touch kiosk terminals", included: true },
        { name: "Visual digital photo menu", included: true },
        { name: "Automated upsell & combo suggestions", included: true },
        { name: "Direct thermal receipt printing", included: true },
        { name: "Custom brand theme & promotions", included: true },
        { name: "Integrated card EDC & UPI payments", included: true },
      ],
    },
    {
      title: "Kiosk Enterprise",
      subtitle: "For multi-outlet franchises & malls",
      monthlyPriceINR: 9999,
      yearlyPriceINR: 9999 * 12,
      monthlyPrice: "₹9,999",
      yearlyPrice: "₹1,19,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Unlimited kiosk licenses", included: true },
        { name: "Multi-branch central menu control", included: true },
        { name: "Hardware bundle options (Counter / Floor)", included: true },
        { name: "Custom ERP & inventory sync", included: true },
        { name: "Dedicated 24/7 technical support", included: true },
      ],
    },
  ];

  useEffect(() => {
    document.title = "Self-Service Kiosk POS & Restaurant Billing Software - V11TECH";
    setAdjustedPlans(defaultPlans);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const kioskShops = [
    {
      title: "Handle Your Peak Hours",
      imgSrc: "/assets/img/kiosk0.jpg",
      altText: "Handle Peak Hours with Self-Service Kiosks",
      description: "Quick-service counters, cafes, and food courts eliminate long waiting queues with instant customer self-ordering.",
      badge: "Rush Hours"
    },
    {
      title: "Affordable & Cost-Effective",
      imgSrc: "/assets/img/kiosk2.jpg",
      altText: "Cost-Effective Self-Ordering Kiosk POS",
      description: "Eliminate cashier bottlenecks and manual order taking errors with automated end-to-end order processing.",
      badge: "Cost Saver"
    },
    {
      title: "Easy Menu Setup",
      imgSrc: "/assets/img/kiosk3.jpg",
      altText: "Easy Visual Digital Menu Setup",
      description: "Quick cloud menu onboarding, high-definition photo menus, combo suggestions, and real-time out-of-stock management.",
      badge: "Quick Setup"
    },
    {
      title: "Digital Payments & Sleek Look",
      imgSrc: "/assets/img/kiosk4.jpg",
      altText: "Modern Self-Ordering Touch Kiosk Terminal",
      description: "Integrated card EDC, UPI QR codes, and thermal receipt printing with real-time analytics on a single dashboard.",
      badge: "Smart Kiosk"
    }
  ];

  return (
    <>
      <NavigationBar />
      <CarouselKIOSK />
      <ShopsSection
        shops={kioskShops}
        badgeText="V11 Self-Service Kiosk Solutions"
        title="Delightfully Simple & Deceptively Powerful"
        subtitle="Designed for fast-paced quick service restaurants, cafes, and food courts to accelerate ordering speed and maximize average ticket size."
      />
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
              Kiosk Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Self-Ordering Kiosk Plans
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Boost ticket sizes and eliminate line queues with smart touch self-ordering.
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
      <CTASection product="V11-Kiosk" siteIndex="/" />
      <Footer />
    </>
  );
};

export default KIOSKLanding;