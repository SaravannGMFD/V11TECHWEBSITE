import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, MessageSquare } from 'lucide-react';

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
    navigate('/book-a-demo?type=demo', { state: { type: 'demo', source: 'products' } });
  };

  const features = [
    { text: 'Digital Payment', icon: CheckCircle },
    { text: 'Zero Down Time', icon: CheckCircle },
    { text: 'Automatic Printing', icon: CheckCircle },
    { text: 'Multi Language', icon: CheckCircle },
    { text: 'FoodApps Integration', icon: CheckCircle },
    { text: 'Reduce Manpower', icon: CheckCircle },
    { text: 'Voice Over System', icon: CheckCircle },
    { text: "Easy Menu Setup", icon: CheckCircle },
    { text: 'Extra Earning', icon: CheckCircle },
    { text: 'Customer Friendly', icon: CheckCircle },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content container */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Left column */}
          <div className="flex flex-col justify-between h-full">
            <div className="transition-all duration-700 delay-300">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2.5 flex items-center">
                <span className="inline-block w-8 h-0.5 bg-emerald-500 mr-2.5 rounded-full"></span>
                Kiosk Self-Service System Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Specially Built for Fast-Paced & Crowded Food Businesses
              </h2>
            </div>

            {/* Feature grid with reasonable gaps and clean card styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 lg:my-8 flex-grow content-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeFeature === index
                      ? 'bg-emerald-50/90 border-emerald-500 shadow-sm translate-x-0.5'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-300 shadow-xs'
                    }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <feature.icon className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${activeFeature === index ? 'scale-110' : ''
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

          {/* Right column - Card with 3D effect */}
          <div className="relative transition-all duration-1000 delay-500 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-900 rounded-3xl transform rotate-2 lg:rotate-3 opacity-20 blur-md pointer-events-none"></div>

            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative z-10 h-full flex flex-col justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>

              <div>
                <p className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-teal-100">V11-Kiosk</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight flex items-center">
                  Self Service Kiosk
                  <ArrowUpRight className="w-8 h-8 ml-2 animate-pulse text-white flex-shrink-0" />
                </h2>
              </div>

              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 flex-grow py-4 my-auto">
                {/* Left side in card: 7 bullet points and Now Available button */}
                <div className="flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3 sm:space-y-3.5">
                    {[
                      'Self Ordering Kiosk',
                      'Orders go to Kitchen',
                      'Integrated payments',
                      'Instant receipt printing',
                      '24/7 Zero downtime',
                      'Easy to use',
                      'All on One Solution',
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2.5 transition-all duration-300"
                        style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <p className="text-base sm:text-lg text-teal-50 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-md whitespace-nowrap cursor-pointer">
                      Now Available
                    </button>
                  </div>
                </div>

                {/* Right side in card: Standing Kiosk hardware image */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/img/kiosk1.png"
                    alt="Self Service Kiosk"
                    className="w-44 sm:w-52 md:w-56 lg:w-60 max-h-[340px] sm:max-h-[380px] object-contain rounded-lg relative z-10 transition-transform duration-300 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkUs;