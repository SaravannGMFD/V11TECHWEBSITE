import React, { ChangeEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const businessTypes = [
  "Restaurant", 
  "Coffee/Tea Shop",
  "Cake Shop", 
  "Cloud Kitchen",
  "Bar & Pub",
  "Food Court / Kiosk",
  "Retail & Grocery",
  "Other"
];

const consultingServices = [
  "Oil & Gas Piping Design",
  "Electrical & Instrumentation Design",
  "Renewable Energy Engineering",
  "Offshore Marine & Structural Design",
  "Web Portal & Cloud Development",
  "Mobile Application Engineering",
  "AutoCAD & 3D Plant Modeling",
  "Digital Marketing & Growth",
  "Enterprise Software Consulting",
  "Other Technical Advisory"
];

export interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  product: string;
  message: string;
}

interface FormFieldsProps {
  formData: FormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText?: string;
  serviceType?: 'demo' | 'consulting';
}

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  onChange,
  onSubmit,
  buttonText = "Schedule My Live Demo",
  serviceType = 'demo'
}) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2">
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          placeholder="e.g. John Doe"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          placeholder="john@example.com"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          Phone Number <span className="text-rose-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          placeholder="+1 (555) 000-0000"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>

      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          Country <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onChange}
          required
          placeholder="e.g. United States"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          State / Province <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={onChange}
          required
          placeholder="e.g. California"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>
      
      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          City <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={onChange}
          required
          placeholder="e.g. Los Angeles"
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        />
      </div>

      <div>
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          {serviceType === 'consulting' ? 'Consulting Domain / Service' : 'Business Format'}{' '}
          <span className="text-rose-500">*</span>
        </label>
        <select
          name="product"
          value={formData.product}
          onChange={onChange}
          required
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm"
        >
          <option value="">
            {serviceType === 'consulting' ? 'Select consulting area' : 'Select business format'}
          </option>
          {(serviceType === 'consulting' ? consultingServices : businessTypes).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-slate-700 mb-1.5 text-sm font-semibold">
          {serviceType === 'consulting' ? 'Project Scope & Requirements' : 'Additional Requirements'}{' '}
          <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={3}
          placeholder={
            serviceType === 'consulting'
              ? 'Tell us about your engineering drawings (P&ID/3D), tech stack, deliverables, or expected project timeline...'
              : 'Tell us about your venue, number of counters, or current challenges...'
          }
          className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition text-sm resize-none"
        />
      </div>
      
      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm sm:text-base shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="sm:col-span-2 text-center text-xs text-slate-500 mt-1">
        🔒 We respect your privacy. By submitting, you agree to our Terms of Service and Privacy Policy.
      </div>
    </form>
  );
};

export default FormFields;