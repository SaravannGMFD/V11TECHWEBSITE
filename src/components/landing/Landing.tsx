import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import NavigationBar from '../shared/NavigationBar';
import ShopsSection from '../shared/ShopsSection';
import TalkUs from './Talkus';
import PricingSection, { PricingPlan } from '../shared/PricingSection';
import Comment from '../shared/Comment';
import V11QRLanding from './V11tech';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';

import CarouselLanding from './CarouselLanding';

const staggeredCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface ShopItem {
  title: string;
  imgSrc: string;
  altText: string;
  description: string;
  badge?: string;
}

function Landing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [adjustedPlans, setAdjustedPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    document.title = "Restaurant QR Ordering & Restaurant POS Software - V11TECH";
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultPlans: PricingPlan[] = [
    {
      title: "Starter",
      subtitle: "Best for single-outlet cafes & food trucks",
      monthlyPriceINR: 250,
      yearlyPriceINR: 250 * 12,
      monthlyPrice: "₹250",
      yearlyPrice: "₹3,000",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Single user & terminal", included: true },
        { name: "QR menu & contactless ordering", included: true },
        { name: "Inventory management", included: true },
        { name: "Sales report & analytics", included: true },
        { name: "Kitchen printer routing", included: false },
        { name: "Multi-branch cloud sync", included: false },
        { name: "24/7 dedicated account manager", included: false },
      ],
    },
    {
      title: "Professional",
      subtitle: "For busy restaurants & expanding businesses",
      monthlyPriceINR: 499,
      yearlyPriceINR: 499 * 12,
      monthlyPrice: "₹499",
      yearlyPrice: "₹5,988",
      popular: true,
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Up to 3 users & terminals", included: true },
        { name: "QR menu & contactless ordering", included: true },
        { name: "Real-time inventory deduction", included: true },
        { name: "Advanced sales & profit reports", included: true },
        { name: "Kitchen display (KDS) integration", included: true },
        { name: "Automated WhatsApp receipts", included: true },
        { name: "Priority 24/7 technical support", included: true },
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For multi-chain brands & franchises",
      monthlyPriceINR: 999,
      yearlyPriceINR: 999 * 12,
      monthlyPrice: "₹999",
      yearlyPrice: "₹11,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Unlimited users & devices", included: true },
        { name: "Full Kiosk & POS integration", included: true },
        { name: "Multi-location central inventory", included: true },
        { name: "Custom API & ERP integrations", included: true },
        { name: "Dynamic pricing & coupon engine", included: true },
        { name: "Dedicated onboarding manager", included: true },
        { name: "24/7 VIP priority support & SLA", included: true },
      ],
    },
  ];

  useEffect(() => {
    setAdjustedPlans(defaultPlans);
  }, []);

  const shops: ShopItem[] = [
    {
      title: 'Full-Service Dining',
      imgSrc: '/assets/img/dinein/dinein_dining.jpg',
      altText: 'Bustling Dine-In Restaurant Tables',
      description: 'Streamline tabletop ordering, captain order sync & faster table turns with instant kitchen dispatch.',
    },
    {
      title: 'Express Counter Ordering',
      imgSrc: '/assets/img/dinein/dinein_counter.jpg',
      altText: 'Fast-Paced Food Counter Ordering',
      description: 'Eliminate front-counter bottlenecks with high-speed touch billing, visual combos & contactless pay.',
    },
    {
      title: 'Waitlist & Table Queues',
      imgSrc: '/assets/img/dinein/dinein_queue.jpg',
      altText: 'Crowd Queue Outside Restaurant Entrance',
      description: 'Turn waiting crowds into seated guests with digital queue tokens, SMS alerts & pre-ordering.',
    },
    {
      title: 'Peak-Hour Rush & Billing',
      imgSrc: '/assets/img/dinein/dinein_rush.jpg',
      altText: 'High-Volume Checkout Rush at Counter',
      description: 'Conquer peak weekend rushes with automated split billing, multi-tender payments & zero system lag.',
    },
  ];

  return (
    <>
      <NavigationBar />
      <CarouselLanding />
      <ShopsSection
        shops={shops}
        badgeText="Dine-In Restaurant Solutions"
        title="Engineered for Every Dine-In Restaurant Rush"
        subtitle="From packed dining rooms and front counter queues to walk-in waitlists and high-velocity weekend billing, V11TECH runs your entire venue smoothly."
      />
      <TalkUs />
      <V11QRLanding />

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
              Simple & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Predictable Plans That Grow With Your Business
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              No hidden fees, no surprise hardware lock-ins. Switch or cancel anytime.
            </p>
          </motion.div>

          {/* Billing Interval Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-200/70 border border-slate-300/60 shadow-inner">
              <button
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  !isYearly
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly Billing
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isYearly
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setIsYearly(true)}
              >
                <span>Annual Billing</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isYearly ? 'bg-emerald-400 text-slate-950' : 'bg-slate-300 text-slate-700'
                }`}>
                  12 Months
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 max-w-6xl mx-auto">
            {adjustedPlans.map((plan: PricingPlan, index: number) => (
              <PricingSection key={index} plan={plan} isYearly={isYearly} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      <Comment />
      <ClientLogosSection />
      <CTASection product="V11-QR" siteIndex="/" />
      <Footer />
    </>
  );
}

export default Landing;
