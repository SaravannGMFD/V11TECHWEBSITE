import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, MessageSquare } from 'lucide-react';

function TalkUs() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [animateQR, setAnimateQR] = useState(false);

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
    { text: 'Fully Integrated KDS', icon: CheckCircle },
    { text: 'Alarm Alert System', icon: CheckCircle },
    { text: 'Automatic Printing', icon: CheckCircle },
    { text: 'Chef Performance', icon: CheckCircle },
    { text: 'FoodApps Integration', icon: CheckCircle },
    { text: 'Reduce Manpower', icon: CheckCircle },
    { text: 'Voice Over System', icon: CheckCircle },
    { text: "Live Status update", icon: CheckCircle },
    { text: '100% business growth', icon: CheckCircle },
    { text: 'Menu Control', icon: CheckCircle },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white overflow-hidden">
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
                Kitchen Display System Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Specially Built for Rush Hours & High-Volume Kitchen Operations
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
          
          {/* Right column - Card with 3D effect */}
          <div className="relative transition-all duration-1000 delay-500 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-900 rounded-3xl transform rotate-2 lg:rotate-3 opacity-20 blur-md pointer-events-none"></div>
            
            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative z-10 h-full flex flex-col justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
              
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-teal-100">V11-KDS</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight flex items-center">
                    Kitchen Display System
                    <ArrowUpRight className="w-8 h-8 ml-2 animate-pulse text-white flex-shrink-0" />
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {['Monitor the kitchen Operation', 'Update sold-out items instantly', 'Increase chef performance'].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 transition-all duration-300"
                      style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                    >
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <p className="text-lg sm:text-xl text-teal-50 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 mt-6 border-t border-teal-600/40">
                <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-md whitespace-nowrap cursor-pointer">
                  Now Available
                </button>
                
                <div className={`relative transition-all duration-700 flex-shrink-0 ${animateQR ? 'scale-105' : 'scale-100'}`}>
                  <div className="absolute inset-0 bg-emerald-400 opacity-20 rounded-xl blur-md"></div>
                  <img 
                    src="/assets/img/kds.png"
                    alt="Kitchen Display System"
                    className="w-full sm:w-72 md:w-80 h-40 sm:h-44 object-cover rounded-xl relative z-10 transition-transform duration-300 shadow-md"
                  />
                  {/* Scanning effect */}
                  <div className={`absolute left-0 w-full h-1 bg-emerald-400 opacity-70 blur-sm z-20 transition-all duration-1500 ease-in-out ${
                    animateQR ? 'top-0' : 'top-full'
                  }`}></div>
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