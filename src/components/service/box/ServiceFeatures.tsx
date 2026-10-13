import { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../Setup';

export default function ServiceFeatures() {
  // Ref for intersection observer
  const featuresRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const boxes = document.querySelectorAll('.feature-box');
            boxes.forEach((box, index) => {
              setTimeout(() => {
                box.classList.add('animate-in');
              }, index * 150); // Staggered animation
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="py-10 sm:py-12 md:py-14 bg-white">
      <div className="relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Red curved line decoration - better positioned for mobile */}
        <div className="absolute right-0 top-40 w-32 md:w-64 h-32 md:h-64 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M190.5 10.5C138 46 110.5 134.5 63 160.5C15.5 186.5 -7.5 102 3.5 58.5C14.5 15 74.5 -17.5 124 16.5C173.5 50.5 243 -25 190.5 10.5Z"
              fill="none"
              stroke="#FE9393"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center pt-6 mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Offshore Engineering & Digital Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Offshore Engineering, Energy & <span className="text-emerald-600">Digital Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Providing dedicated offshore piping design, electrical & instrumentation engineering, renewable energy modeling, and full-stack digital solutions for global energy and enterprise clients.
          </p>
        </div>

        {/* Features Grid - exactly matching QR Ordering ShopsSection layout */}
        <div ref={featuresRef} className="max-w-7xl mx-auto pb-10 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <FeatureCard 
                key={idx} 
                feature={feature} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        .feature-box.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}