import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MessageSquare } from 'lucide-react';

function TalkUs() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [, setAnimateQR] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const qrInterval = setInterval(() => {
      setAnimateQR(prev => !prev);
    }, 3000);
    return () => clearInterval(qrInterval);
  }, []);

  const handleTalkToUsClick = () => {
    navigate('/book-a-demo?type=consulting', { state: { type: 'consulting', source: 'about' } });
  };

  const features = [
    { text: 'Retail Kiosk', icon: CheckCircle },
    { text: 'Grocery Kiosk', icon: CheckCircle },
    { text: 'Restaurants Kiosk', icon: CheckCircle },
    { text: 'Convenience Kiosk', icon: CheckCircle },
    { text: 'Bus Ticket Kiosk', icon: CheckCircle },
    { text: 'Ticket Kiosk', icon: CheckCircle },
    { text: 'Saloon Kiosk', icon: CheckCircle },
    { text: "Hospital Kiosk", icon: CheckCircle },
    { text: 'Cinema ticket Kiosk', icon: CheckCircle },
    { text: 'Railway ticket Kiosk', icon: CheckCircle },
  ];

  return (
    <div className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content container */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left column */}
          <div className="flex flex-col justify-between h-full">
            <div className="transition-all duration-700 delay-300">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2.5 flex items-center">
                <span className="inline-block w-8 h-0.5 bg-emerald-500 mr-2.5 rounded-full"></span>
                Extensive R&D Across Multiple Sectors
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineered for a Wide Spectrum of Retail & Food Enterprises
              </h2>
            </div>
            
            {/* Feature grid with reasonable gaps and clean card styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 lg:my-8 flex-grow content-center">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-emerald-50/90 border-emerald-500 shadow-sm translate-x-0.5' 
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-300 shadow-xs'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <feature.icon className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    activeFeature === index ? 'scale-110' : ''
                  }`} />
                  <span className="text-slate-800 font-medium text-sm sm:text-base leading-snug">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Call to action button with animation */}
            <div className="pt-2 transition-all duration-700 delay-700">
              <button
                onClick={handleTalkToUsClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Us</span>
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Right column - Illustration with matching height */}
          <div className="relative transition-all duration-1000 delay-500 h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="/assets/img/illustartion1.png"
                alt="Self-service retail and food kiosks illustration"
                className="w-full h-full max-h-[500px] lg:max-h-[560px] object-contain object-center drop-shadow-xl"
              />
            </div>
          </div>
           {/* Calendly widget container - conditionally rendered */}
                
        </div>
        </div>
      </div>
    
  );
}

export default TalkUs;