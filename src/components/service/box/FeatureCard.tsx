import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FeatureType } from '../types';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  feature: FeatureType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/book-a-demo?type=consulting', { state: { type: 'consulting', source: 'services' } });
  };

  return (
    <div
      onClick={handleCardClick}
      className="feature-box group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col cursor-pointer opacity-0 transform translate-y-8"
    >
      {/* Image Container - matching QR Ordering h-64 size */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={feature.imageUrl}
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/assets/img/Product1.png';
          }}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Floating category tag */}
        {feature.badge && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
            {feature.badge}
          </div>
        )}

        {/* Bottom title over image */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-bold drop-shadow-sm flex items-center justify-between">
            <span>{feature.title}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-400" />
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1">
        <p className="text-sm text-slate-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;