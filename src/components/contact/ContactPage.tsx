import { useState, useEffect, useRef } from 'react';
import NavigationBar from '../shared/NavigationBar';
import Footer from '../shared/Footer';
import { MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

declare global {
  interface Window {
    initGoogleMap?: () => void;
    google?: any;
  }
}

interface LocationInfo {
  id: number;
  name: string;
  isHeadOffice?: boolean;
  flag: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  address?: string;
  position: { lat: number; lng: number };
}

const ContactUsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ marker: google.maps.Marker; location: LocationInfo }[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const locations: LocationInfo[] = [
    {
      id: 1,
      name: 'India',
      isHeadOffice: true,
      flag: '🇮🇳',
      city: 'Mayiladuthurai',
      addressLine1: '27 Sri Lakshmi Nagar, Sembarnarkoil',
      addressLine2: 'Tharangambody, Mayiladuthurai, Tamil Nadu, India',
      address: '27 Sri Lakshmi Nagar, Sembarnarkoil, Tharangambody, Mayiladuthurai, Tamil Nadu, India',
      position: { lat: 11.1075, lng: 79.6524 }
    },
    {
      id: 2,
      name: 'Hong Kong',
      flag: '🇭🇰',
      city: 'Kowloon',
      addressLine1: 'Unit 1205, Modern Commercial Plaza',
      addressLine2: 'Nathan Road, Kowloon, Hong Kong',
      address: 'Unit 1205, Modern Commercial Plaza, Nathan Road, Kowloon, Hong Kong',
      position: { lat: 22.3193, lng: 114.1694 }
    },
    {
      id: 3,
      name: 'Dubai (UAE)',
      flag: '🇦🇪',
      city: 'Business Bay',
      addressLine1: 'Iris Bay Tower, Business Bay',
      addressLine2: 'Sheikh Zayed Road, Dubai, UAE',
      address: 'Iris Bay Tower, Business Bay, Sheikh Zayed Road, Dubai, UAE',
      position: { lat: 25.2048, lng: 55.2708 }
    },
    {
      id: 4,
      name: 'United Kingdom',
      flag: '🇬🇧',
      city: 'London',
      addressLine1: '71-75 Shelton Street, Covent Garden',
      addressLine2: 'London, WC2H 9JQ, United Kingdom',
      address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
      position: { lat: 51.5138, lng: -0.1234 }
    },
  ];

  useEffect(() => {
    document.title = "Contact Us - V11TECH Point of Sale";
    setSelectedLocation(locations[0]);
    window.scrollTo(0, 0);
  }, []);

  // Google Maps Initialization
  useEffect(() => {
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const mapOptions = {
        center: { lat: 22.5, lng: 60.0 },
        zoom: 3,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9f5f0" }] },
          { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f8fafc" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
          { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f1f5f9" }] },
        ]
      };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
      infoWindowRef.current = new window.google.maps.InfoWindow();

      locations.forEach(location => {
        const marker = new window.google.maps.Marker({
          position: location.position,
          map: mapInstanceRef.current,
          title: location.name,
        });

        marker.addListener('click', () => {
          setSelectedLocation(location);
          if (infoWindowRef.current) {
            infoWindowRef.current.setContent(`
              <div style="padding: 8px; font-family: sans-serif;">
                <h4 style="font-weight: bold; margin: 0 0 4px 0; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                  <span>${location.flag} ${location.name}</span>
                  ${location.isHeadOffice ? '<span style="font-size: 10px; background: #059669; color: white; padding: 2px 6px; border-radius: 9999px; font-weight: 600;">Head Office</span>' : ''}
                </h4>
                <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.4;">${location.addressLine1}<br/>${location.addressLine2}</p>
              </div>
            `);
            infoWindowRef.current.open(mapInstanceRef.current, marker);
          }
        });

        markersRef.current.push({ marker, location });
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnalBnI47bSAIrFXzJ8qCOaTq_dUTVQxo&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      window.initGoogleMap = initMap;
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) script.parentNode.removeChild(script);
        if (window.initGoogleMap) delete window.initGoogleMap;
      };
    } else {
      initMap();
    }
  }, []);

  const handleLocationClick = (loc: LocationInfo) => {
    setSelectedLocation(loc);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.panTo(loc.position);
      mapInstanceRef.current.setZoom(6);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <NavigationBar />

      <main className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-30 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in Touch with V11TECH
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions about our QR ordering, kitchen display systems, or kiosk hardware? Reach out to our regional specialists.
            </p>
          </div>

          {/* Main Grid: Form + Regional Hubs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-9 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Send Us a Direct Message</h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">Our technical consulting team responds within 2 business hours.</p>
              </div>

              {formSubmitted ? (
                <div className="my-auto py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out. We will connect with you via email shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col justify-between gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleFormChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-slate-50/40 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleFormChange}
                        required
                        placeholder="john@restaurant.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-slate-50/40 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleFormChange}
                        placeholder="+91 / +852 / +971..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-slate-50/40 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleFormChange}
                        placeholder="POS Pricing / Hardware Inquiry"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-slate-50/40 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">How can we assist you? *</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={contactForm.message}
                      onChange={handleFormChange}
                      required
                      placeholder="Tell us about your restaurant or store type, number of tables, and POS requirements..."
                      className="w-full flex-1 min-h-[90px] px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none bg-slate-50/40 focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Regional Hub Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Our Global Hubs</h2>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  4 Global Offices
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3">
                {locations.map((loc) => {
                  const isSelected = selectedLocation?.id === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => handleLocationClick(loc)}
                      className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-center ${
                        isSelected
                          ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500'
                          : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                          <span className="text-base">{loc.flag}</span>
                          <span>{loc.name}</span>
                          <span className="text-xs font-normal text-slate-400">({loc.city})</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {loc.isHeadOffice && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                              Head Office
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                              Active Pin
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-slate-600 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col leading-snug">
                          <span className="font-medium text-slate-700">{loc.addressLine1}</span>
                          <span className="text-slate-500">{loc.addressLine2}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Interactive Map Container */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
            <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-800">Global Locations Map</h3>
              </div>
              <span className="text-xs text-slate-500">Click pins or country cards to zoom</span>
            </div>
            <div ref={mapRef} className="w-full h-80 sm:h-96 bg-slate-100" />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactUsPage;
