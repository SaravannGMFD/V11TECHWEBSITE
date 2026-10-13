import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Laptop, 
  PhoneCall, 
  ExternalLink, 
  Calendar, 
  Briefcase, 
  FileText, 
  Users, 
  Mail, 
  Compass, 
  Layers
} from 'lucide-react';
import NavigationBar from '../shared/NavigationBar';
import Footer from '../shared/Footer';

const BookDemo: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [iframeLoading, setIframeLoading] = useState(true);

  // Detect session type from URL param, location state, or document referrer
  const typeParam = searchParams.get('type') || searchParams.get('mode');
  const sourceParam = searchParams.get('source');
  const locationState = location.state as { type?: string; source?: string } | undefined;

  const isConsultingInitial = 
    typeParam === 'consulting' ||
    sourceParam === 'services' ||
    sourceParam === 'about' ||
    locationState?.type === 'consulting' ||
    locationState?.source === 'services' ||
    locationState?.source === 'about' ||
    (typeof document !== 'undefined' && (
      document.referrer.includes('/services') || 
      document.referrer.includes('/about-us')
    ));

  const [sessionType, setSessionType] = useState<'demo' | 'consulting'>(
    isConsultingInitial ? 'consulting' : 'demo'
  );

  // Sync if URL query parameters change
  useEffect(() => {
    if (typeParam === 'consulting' || sourceParam === 'services' || sourceParam === 'about') {
      setSessionType('consulting');
    } else if (typeParam === 'demo' || sourceParam === 'products') {
      setSessionType('demo');
    }
  }, [typeParam, sourceParam]);

  // Update dynamic page title
  useEffect(() => {
    if (sessionType === 'consulting') {
      document.title = "Book a Consulting Session - V11TECH Engineering & IT Services";
    } else {
      document.title = "Book a Free Restaurant POS Software & GST Billing Demo - V11TECH";
    }
    window.scrollTo(0, 0);
  }, [sessionType]);

  const handleTypeToggle = (newType: 'demo' | 'consulting') => {
    setSessionType(newType);
    setSearchParams({ type: newType }, { replace: true });
  };

  const isConsulting = sessionType === 'consulting';

  return (
    <>
      <NavigationBar />

      <main className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-30 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Mode Switcher */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs gap-1.5">
              <button
                type="button"
                onClick={() => handleTypeToggle('demo')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  !isConsulting
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Product Demo (POS / KDS / Kiosk)</span>
              </button>
              <button
                type="button"
                onClick={() => handleTypeToggle('consulting')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isConsulting
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Consulting Session (Engineering & IT)</span>
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>
                {isConsulting 
                  ? "Technical Advisory & Dedicated Offshore Engineering" 
                  : "Live 1-on-1 Billing Software Demo"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {isConsulting ? "Book a Technical Consulting Session" : "Schedule a Live Restaurant POS & Billing Demo"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {isConsulting
                ? "Connect directly with our senior engineering architects and domain leads for offshore piping design, electrical & instrumentation schematics, renewable energy modeling, and custom web & mobile software development."
                : "Experience how V11TECH restaurant POS software, restaurant billing software, and GST billing and inventory management eliminate wait queues, generate compliant GST invoices, and scale your business."}
            </p>
          </div>

          {/* Equal-Width, Equal-Height Side Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column: Value Props Card */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                  <Calendar className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span>
                    {isConsulting 
                      ? "What to Expect in Your Consulting Session" 
                      : "What to Expect in Your Billing Software Demo"}
                  </span>
                </h2>

                <div className="space-y-6">
                  {isConsulting ? (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                          <Compass className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">30-Minute Architecture & Scope Review</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Deep dive into your plant P&ID, 3D piping specifications (E3D/PDMS), electrical single lines, cloud architecture, or mobile app scope.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Dedicated Offshore Resource Modeling</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Explore tailored engagement frameworks: dedicated offshore CAD drafters, specialized full-stack software squads, or fixed-scope delivery with SLAs.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                          <Layers className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Milestone, Cost & Timeline Planning</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Receive realistic work-breakdown structures, sprint planning, and transparent offshore cost models designed for energy & global enterprise clients.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Confidential NDA & Direct Lead Engagement</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Immediate mutual NDA execution, direct collaboration with principal piping leads, electrical engineers, and senior software architects with zero friction.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">20-Minute Tailored Restaurant POS & Billing Demo</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            No generic slide decks. Experience live restaurant POS software, restaurant billing software, and wholesale billing software customized for your specific venue.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                          <Laptop className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Live GST Invoicing & Stock Management Walkthrough</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Test rapid barcode billing software, instant GST invoice generator software, offline billing software, and real-time inventory and stock management software live.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Transparent Billing Software Price & Hardware Guidance</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Get clear billing software price breakdown, hardware compatibility checks (printers, barcode guns, tablets), and onboarding timelines.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                          <PhoneCall className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Direct Support Onboarding</h2>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Our technical deployment engineer assists with menu upload, staff training, and go-live with zero downtime.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom Footer Section */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                {/* Trust Callout */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isConsulting ? "Non-disclosure agreement (NDA) protected" : "No credit card required"}</span>
                  </div>
                  <span className="text-sm text-slate-500">
                    {isConsulting ? "Senior technical architect lead" : "Free 14-day trial account"}
                  </span>
                </div>

                {/* Direct App / Support Badge */}
                {isConsulting ? (
                  <div 
                    className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm border border-emerald-200/80"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-slate-900">Have project specs or drawings ready?</p>
                      <p className="text-xs text-emerald-700 font-medium mt-0.5">Email direct RFPs to our engineering team</p>
                    </div>
                    <a
                      href="mailto:support@v11tech.com"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 !text-white text-xs sm:text-sm font-semibold flex items-center gap-2 flex-shrink-0 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                      style={{ backgroundColor: '#059669', color: '#ffffff' }}
                    >
                      <span className="!text-white font-semibold">support@v11tech.com</span>
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                ) : (
                  <div 
                    className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm border border-emerald-200/80"
                    style={{ backgroundColor: '#ecfdf5' }}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-slate-900">Want to try the mobile app right away?</p>
                      <p className="text-xs text-emerald-700 font-medium mt-0.5">Download V11-POS on Android Play Store</p>
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.v11tech.mobkms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 !text-white text-xs sm:text-sm font-semibold flex items-center gap-2 flex-shrink-0 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                      style={{ backgroundColor: '#059669', color: '#ffffff' }}
                    >
                      <span className="!text-white font-semibold">Google Play</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Direct Calendly Booking Embed */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {isConsulting 
                        ? "Senior Engineering & IT Specialist" 
                        : "Instant 1-on-1 Specialist Booking"}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {isConsulting 
                      ? "Pick Your Technical Consultation Date & Time" 
                      : "Pick Your Live Demo Date & Time"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {isConsulting
                      ? "Select your preferred 30-minute consultation slot below. Zero form filling required—connect directly with our senior engineering architects & tech leads."
                      : "Select your preferred 30-minute slot below. Zero form filling required—you will receive an instant calendar invitation and demo link directly."}
                  </p>
                </div>

                <div className="w-full flex-1 rounded-2xl overflow-hidden relative border border-slate-200 bg-white" style={{ minHeight: '680px' }}>
                  {iframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 gap-3">
                      <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs sm:text-sm font-medium text-slate-500">
                        {isConsulting ? "Loading consultation schedule..." : "Loading live booking calendar..."}
                      </p>
                    </div>
                  )}
                  <iframe
                    src="https://calendly.com/saravanan-gunasekaran/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                    className="w-full h-full border-0"
                    style={{ width: '100%', height: '100%', minHeight: '680px' }}
                    title={isConsulting ? "Select Technical Consultation Date & Time - Calendly" : "Select a Date & Time - Calendly"}
                    onLoad={() => setIframeLoading(false)}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default BookDemo;