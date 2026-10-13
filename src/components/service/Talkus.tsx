import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

function TalkUs() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [, setAnimateQR] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const qrInterval = setInterval(() => {
      setAnimateQR(prev => !prev);
    }, 3000);
    return () => clearInterval(qrInterval);
  }, []);

  const handleTalkToUsClick = () => {
    navigate('/book-a-demo?type=consulting', { state: { type: 'consulting', source: 'services' } });
  };

  const features = [
    {
      id: '01',
      title: 'Simplified Label Creation',
      description: 'Pre-designed templates and user-friendly interfaces make it easy for anyone'
    },
    {
      id: '02',
      title: 'Increased Efficiency',
      description: 'Streamlines the label creation process, allowing businesses to quickly design and generate labels for new products or variations.'
    },
    {
      id: '03',
      title: 'Customization Options',
      description: 'Provides options to personalize labels with brand logos, colors, and product information, while maintaining a consistent brand identity.'
    },
    {
      id: '04',
      title: 'Data Integration',
      description: 'Platforms can integrate with product data management systems, allowing automatic population of label information, reducing errors and saving time.'
    }
  ];

  // const features = [
  //   { text: 'Digital Payment', icon: CheckCircle },
  //   { text: 'Zero Down Time', icon: CheckCircle },
  //   { text: 'Automatic Printing', icon: CheckCircle },
  //   { text: 'Multi Language', icon: CheckCircle },
  //   { text: 'FoodApps Integration', icon: CheckCircle },
  //   { text: 'Reduce Manpower', icon: CheckCircle },
  //   { text: 'Voice Over System', icon: CheckCircle },
  //   { text: "Easy Menu Setup", icon: CheckCircle },
  //   { text: 'Extra Earning', icon: CheckCircle },
  //   { text: 'Customer Friendly', icon: CheckCircle },
  // ];

  return (
    <div className="py-10 sm:py-12 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content container */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Left column */}
          <div className="space-y-12">
            <div className="transition-all duration-700 delay-300">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center">
                <span className="inline-block w-8 h-0.5 bg-emerald-500 mr-2.5 rounded-full"></span>
                Product Label Features
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Create and customize product labels easily without design skills.
              </h2>
              <p className="text-gray-600 text-lg">
              </p>
            </div>

            {/* Feature grid with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white font-bold text-xl">
                    {feature.id}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Call to action button with animation */}
            <div className="transition-all duration-700 delay-700">
            <button
                onClick={handleTalkToUsClick}
                className="group relative bg-green-500 text-white px-8 py-4 rounded-lg flex items-center space-x-2 overflow-hidden transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Talk to Us</span>
                <MessageSquare className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>

          {/* Right column - Card with 3D effect */}
          <img
            src="/assets/img/illustartion1.png"
            alt="QR code scanning"
            className="w-full max-w-sm object-cover rounded-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default TalkUs;