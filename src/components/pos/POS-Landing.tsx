import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import NavigationBar from '../shared/NavigationBar';
import ShopsSection from '../shared/ShopsSection';
import TalkUs from './Talkus';
import PricingSection, { PricingPlan } from '../shared/PricingSection';
import Comment from '../shared/Comment';
import V11QRLanding from '../landing/V11tech';
import ClientLogosSection from '../shared/ClientLogosSection';
import CTASection from '../shared/CtaSection';
import Footer from '../shared/Footer';

import CarouselPOS from './Carousel-POS';

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

function POSLanding() {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [adjustedPlans, setAdjustedPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    document.title = "Restaurant POS Software & GST Billing and Inventory Management | V11TECH";
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultPlans: PricingPlan[] = [
    {
      title: "Starter Plan",
      subtitle: "Best for single-counter retail, cafes & business billing software",
      monthlyPriceINR: 999,
      yearlyPriceINR: 999 * 12,
      monthlyPrice: "₹999",
      yearlyPrice: "₹11,988",
      yearlyNote: "Billed annually (12 months)",
      annualBonus: {
        title: "Free Thermal Printer",
        badgeText: "FREE",
        description: "Auto-cut 80mm thermal receipt printer included at ₹0 cost with annual plan.",
        gifUrl: "/assets/img/pos/printer_eject.gif",
      },
      features: [
        { name: "Single GST invoice generator software terminal", included: true },
        { name: "Barcode billing software & thermal receipt printer", included: true },
        { name: "GST billing and inventory management", included: true },
        { name: "Sales and purchase management software basics", included: true },
        { name: "100% offline billing software mode", included: true },
        { name: "Multi-branch billing software sync", included: false },
        { name: "e-way bill software & e-invoice automation", included: false },
      ],
    },
    {
      title: "Professional Plan",
      subtitle: "Complete restaurant POS software & growing retail outlets",
      monthlyPriceINR: 1499,
      yearlyPriceINR: 1499 * 12,
      monthlyPrice: "₹1,499",
      yearlyPrice: "₹17,988",
      popular: true,
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Restaurant POS software with table & KDS routing", included: true },
        { name: "Restaurant billing POS system (up to 3 terminals)", included: true },
        { name: "Cloud-based billing software with real-time sync", included: true },
        { name: "Inventory and stock management software", included: true },
        { name: "Automated GST invoice generator software", included: true },
        { name: "Staff roles & cashier shift audits", included: true },
        { name: "Priority 24/7 technical assistance", included: true },
      ],
    },
    {
      title: "Enterprise Plan",
      subtitle: "Multi-branch chains & wholesale billing software",
      monthlyPriceINR: 1999,
      yearlyPriceINR: 1999 * 12,
      monthlyPrice: "₹1,999",
      yearlyPrice: "₹23,988",
      yearlyNote: "Billed annually (12 months)",
      features: [
        { name: "Multi-branch billing software & centralized warehouse", included: true },
        { name: "Wholesale billing software & bulk discounting", included: true },
        { name: "Purchase order and sales billing software", included: true },
        { name: "e-invoice software for businesses & e-way bill software", included: true },
        { name: "Billing software with accounting & ERP sync", included: true },
        { name: "Offline billing software with auto cloud conflict resolution", included: true },
        { name: "99.99% uptime enterprise SLA", included: true },
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
      <CarouselPOS />
      <ShopsSection
        shops={shops}
        badgeText="Restaurant Management System"
        title="Engineered for Every Restaurant Billing POS Rush"
        subtitle="From packed dining rooms and front counter queues to walk-in waitlists, V11TECH restaurant management system and restaurant POS software run your entire venue smoothly."
      />
      <TalkUs />
      <V11QRLanding
        badgeText="Restaurant Management System"
        title="Restaurant Billing POS System for Every Venue"
        subtitle="Engineered to handle fast table turns, multi-station kitchen routing, split bills, and peak-hour rushes across diverse food, hospitality, and wholesale retail operations."
      />

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
              Business Billing Software & POS Plans
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Predictable Restaurant POS Software & Billing Prices
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Powerful cloud-based billing software, wholesale billing software, and restaurant management system plans without hidden fees.
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
      <CTASection product="V11-POS" siteIndex="/" />
      <Footer />
    </>
  );
}

export default POSLanding;
