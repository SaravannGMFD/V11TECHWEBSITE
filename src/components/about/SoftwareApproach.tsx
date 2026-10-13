import { CheckCircle2, Calendar, ShoppingCart, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Workflow Mapping",
    subtitle: "Understand your operational bottleneck",
    icon: <Calendar size={28} className="text-emerald-600" />,
    badgeText: "60-Min Consultation",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: [
      "Analyze current order taking & billing flow",
      "Evaluate hardware requirements (printers, KDS)",
      "Clear transparent subscription pricing",
      "Custom table / counter setup blueprint",
      "Live Q&A with technical specialist",
    ],
  },
  {
    step: "02",
    title: "Menu Digitization & Setup",
    subtitle: "Custom configured for your store",
    icon: <ShoppingCart size={28} className="text-emerald-600" />,
    badgeText: "Fast 48-Hour Turnaround",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    items: [
      "Upload digital photo menus & item variants",
      "Configure tax slabs, service charge & currency",
      "End-to-end sandbox testing of orders & receipts",
      "Pre-program thermal printers & QR stands",
      "Staff demo and onboarding walkthrough",
    ],
  },
  {
    step: "03",
    title: "Go-Live & Ongoing Scale",
    subtitle: "Run your venue with 100% digital ease",
    icon: <Rocket size={28} className="text-emerald-600" />,
    badgeText: "Instant Activation",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: [
      "Zero customer queueing or ordering bottlenecks",
      "Automated kitchen printing & KDS routing",
      "Real-time sales & inventory tracking on cloud",
      "Instant WhatsApp receipts & payment reconciliation",
      "24/7 Priority technical support & SLA warranty",
    ],
  },
];

export default function SoftwareApproach() {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seamless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Get You Live in 3 Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No painful weeks of setup. We configure your POS ecosystem smoothly so your daily operations never miss a beat.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-emerald-200 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${step.badgeColor} mb-2`}>
                    {step.badgeText}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {step.subtitle}
                  </p>
                </div>

                {/* Items */}
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 flex items-center gap-1">
                  Guaranteed zero downtime &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}