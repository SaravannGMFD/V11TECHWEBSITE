import { FeatureType } from './types';

export const features: FeatureType[] = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M3 21h18M5 21V7l8-4v18M13 11l6-3v13M9 9v.01M9 12v.01M9 15v.01M9 18v.01M17 12v.01M17 15v.01M17 18v.01"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Oil & Gas Piping Design',
    badge: 'Oil & Gas',
    description:
      'Offshore and onshore piping layout, 3D plant modeling (E3D/PDMS/SP3D), equipment layouts, isometric extractions, and comprehensive piping stress analysis.',
    imageUrl: '/assets/img/services/oil_gas_piping.jpg',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Electrical & Instrumentation Design',
    badge: 'Electrical & I&C',
    description:
      'Single Line Diagrams (SLD), cable tray routing, substation layouts, lighting design, power distribution, and instrumentation control loop schematics.',
    imageUrl: '/assets/img/services/electrical_design.jpg',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Renewable Energy Engineering',
    badge: 'Renewables',
    description:
      'Solar PV park design, wind farm balance of plant (BOP), grid interconnection modeling, battery energy storage (BESS), and green hydrogen facility layouts.',
    imageUrl: '/assets/img/services/renewable_energy.jpg',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002-1"
          strokeLinecap="round"
        />
        <path
          d="M4 18l3-12h10l3 12M12 6v6M8 12h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Offshore Engineering & Design',
    badge: 'Offshore Marine',
    description:
      'Dedicated offshore drafting for offshore oil & gas platforms, topside modules, FPSO structures, clash detection, and marine structural packages.',
    imageUrl: '/assets/img/services/offshore_engineering.jpg',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" />
      </svg>
    ),
    title: 'Digital Marketing & Growth',
    badge: 'Growth & SEO',
    description:
      'Data-driven SEO, PPC campaigns, B2B lead generation, social media management, brand positioning, and conversion rate optimization for global enterprises.',
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Web Portal & Cloud Development',
    badge: 'Web & Cloud',
    description:
      'Scalable enterprise portals, client dashboards, responsive web apps, and custom SaaS platforms built with high-performance modern architectures.',
    imageUrl: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" />
        <path d="M12 18h.01" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Mobile Application Engineering',
    badge: 'Mobile Apps',
    description:
      'Native iOS & Android development, cross-platform Flutter and React Native mobile apps with seamless cloud synchronization and intuitive UX.',
    imageUrl: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-emerald-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
    title: 'AutoCAD & 3D Plant Modeling',
    badge: 'CAD & Plant 3D',
    description:
      'Multi-disciplinary CAD drafting, intelligent P&ID drafting, 2D to 3D plant conversion, point cloud 3D modeling, and offshore engineering documentation.',
    imageUrl: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];