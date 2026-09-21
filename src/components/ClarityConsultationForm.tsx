import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Phone, 
  User, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  HeartHandshake,
  Calendar
} from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ClarityConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClarityConsultationModal: React.FC<ClarityConsultationFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: '',
    phone: '',
    email: '',
    insuranceType: 'undecided',
    ageRange: '26-35',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Accent Header */}
        <div className="bg-[#09448B] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07C28D] mb-1">
            <HeartHandshake className="w-4 h-4" />
            No Pressure Consultation
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            இலவச தெளிவு ஆலோசனை (Clarity Call)
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Clarity first. Decision next. எந்தவித விற்பனை அழுத்தமும் இன்றி பேசுங்கள்.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-[#e6f9f3] text-[#07C28D] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                நன்றி! உங்கள் கோரிக்கை பெறப்பட்டது.
              </h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                SimpleLife.lk ஆலோசகர் ஒருவர் உங்களை விரைவில் தொடர்புகொள்வார். எந்தவித விற்பனை அழுத்தமும் இன்றி உங்கள் கேள்விகளுக்கு தெளிவு வழங்குவதே எங்கள் முதல் பணி.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                தொலைபேசி: <strong className="text-slate-800">{formData.phone}</strong> | காப்பீடு விருப்பம்: <strong className="text-slate-800">{formData.insuranceType}</strong>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-8 py-3 rounded-full text-sm font-bold text-white bg-[#09448B] hover:bg-[#07356e] transition-colors"
              >
                முடிந்தது (Close)
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  உங்கள் பெயர் (Full Name) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="எ.கா: சுரேஷ் குமார் / Suresh"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#09448B] focus:ring-2 focus:ring-[#09448B]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  தொலைபேசி / WhatsApp எண் (Phone Number) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="077 123 4567"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#09448B] focus:ring-2 focus:ring-[#09448B]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    ஆர்வமுள்ள காப்பீடு
                  </label>
                  <select
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#09448B]"
                  >
                    <option value="term">Term Insurance (தூய பாதுகாப்பு)</option>
                    <option value="life">Life Insurance (ஆயுள் காப்பீடு)</option>
                    <option value="undecided">இன்னும் முடிவு செய்யவில்லை (Not Sure)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    வயது வரம்பு (Age)
                  </label>
                  <select
                    value={formData.ageRange}
                    onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#09448B]"
                  >
                    <option value="18-25">18 - 25 ஆண்டுகள்</option>
                    <option value="26-35">26 - 35 ஆண்டுகள்</option>
                    <option value="36-45">36 - 45 ஆண்டுகள்</option>
                    <option value="46-60">46 - 60 ஆண்டுகள்</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  ஏதேனும் குறிப்பிட்ட கேள்விகள்? (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="நீங்கள் அறிய விரும்பும் கேள்விகள்..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#09448B] focus:ring-2 focus:ring-[#09448B]/10"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#e6f9f3] text-[#09448B] flex items-start gap-2.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#07C28D] shrink-0 mt-0.5" />
                <span>
                  <strong>SimpleLife.lk உறுதிமொழி:</strong> உங்கள் விவரங்கள் இரகசியமாக வைக்கப்படும். தொடர்ந்து sales calls அல்லது ஸ்பேம் செய்யப்பட மாட்டாது.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#09448B] hover:bg-[#07356e] active:scale-[0.99] transition-all cursor-pointer shadow-md text-sm sm:text-base"
                >
                  ஆலோசனைக்கான கோரிக்கையை சமர்ப்பிக்கவும்
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
