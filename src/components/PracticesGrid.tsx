import React from 'react';
import { 
  Users, 
  HelpCircle, 
  BookCheck, 
  Target, 
  Smile, 
  LifeBuoy, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PracticePillar } from '../types';

export const PracticesGrid: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const customerFirstItems = [
    'வயது (Age)',
    'குடும்ப நிலை (Family Status)',
    'வருமானம் (Income)',
    'எதிர்கால இலக்குகள் (Future Goals)',
    'நிதி பொறுப்புகள் (Financial Liabilities)',
    'Protection needs (பாதுகாப்புத் தேவைகள்)',
  ];

  return (
    <section id="principles" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-[#09448B] shadow-2xs mb-3">
            <Sparkles className="w-4 h-4 text-[#07C28D]" />
            What This Means in Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            செயல்முறையில் எங்கள் <span className="text-[#09448B]">6 முக்கிய கோட்பாடுகள்</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            How we put our customer-centric advisory values into daily practice
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 01 — Customer First */}
          <div
            id="practice-01"
            className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#09448B]/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#09448B]">01</span>
                <div className="w-10 h-10 rounded-xl bg-[#e8f1fa] text-[#09448B] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Customer First
              </h3>
              <div className="text-xs font-semibold text-[#07C28D] mt-0.5">
                வாடிக்கையாளரின் தேவைக்கு முதல் இடம்
              </div>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                வாடிக்கையாளரின் தேவையை முதலில் புரிந்துகொள்வோம்.
              </p>

              {/* Items checklist */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2">அவர்களின்:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {customerFirstItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#07C28D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-medium mt-3 italic">
                  ஆகியவற்றை புரிந்துகொண்ட பிறகே ஆலோசனை வழங்கப்படும்.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#09448B]">
              Understanding Before Offering
            </div>
          </div>

          {/* 02 — Advice Before Selling */}
          <div
            id="practice-02"
            className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#07C28D]/50 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#07C28D]">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#e6f9f3] text-[#07C28D] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Advice Before Selling
              </h3>
              <div className="text-xs font-semibold text-[#09448B] mt-0.5">
                விற்பனைக்கு முன் சரியான ஆலோசனை
              </div>

              <p className="text-sm text-slate-700 mt-4 leading-relaxed font-medium">
                எங்கள் முதல் நோக்கம் ஒரு policy விற்பது அல்ல.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  சரியான கேள்விகளை கேட்டு, சரியான புரிதலை உருவாக்குவதே எங்கள் முதல் படி.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#07C28D]">
              Clarity & Advisory Centered
            </div>
          </div>

          {/* 03 — Simple Explanation */}
          <div
            id="practice-03"
            className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#09448B]/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#09448B]">03</span>
                <div className="w-10 h-10 rounded-xl bg-[#e8f1fa] text-[#09448B] flex items-center justify-center">
                  <BookCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Simple Explanation
              </h3>
              <div className="text-xs font-semibold text-[#07C28D] mt-0.5">
                எளிய மொழியில் தெளிவான விளக்கம்
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Insurance terminology-ஐ எளிய மொழியில் விளக்க வேண்டும்.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-[#09448B]/5 border border-[#09448B]/10">
                <div className="flex items-start gap-2">
                  <span className="text-base text-[#09448B]">❝</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#09448B] leading-relaxed">
                    வாடிக்கையாளர் புரிந்துகொள்ளாத ஒரு விஷயத்தை, அவரிடம் வாங்கச் சொல்லக்கூடாது.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#09448B]">
              Absolute Transparency
            </div>
          </div>

          {/* 04 — Right Fit */}
          <div
            id="practice-04"
            className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#07C28D]/50 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#07C28D]">04</span>
                <div className="w-10 h-10 rounded-xl bg-[#e6f9f3] text-[#07C28D] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Right Fit
              </h3>
              <div className="text-xs font-semibold text-[#09448B] mt-0.5">
                உங்களுக்குப் பொருத்தமான தீர்வு
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                ஒவ்வொரு customer-க்கும் ஒரே insurance solution பொருந்தாது.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  தேவை, budget மற்றும் long-term goals-க்கு பொருந்தக்கூடிய options-ஐ விளக்குவது எங்கள் பணி.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#07C28D]">
              Tailored to Your Life & Goals
            </div>
          </div>

          {/* 05 — No Pressure */}
          <div
            id="practice-05"
            className="rounded-3xl bg-white p-7 border-2 border-[#07C28D]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#07C28D] text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-xl uppercase tracking-wider">
              Zero Pressure Policy
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#09448B]">05</span>
                <div className="w-10 h-10 rounded-xl bg-[#e6f9f3] text-[#07C28D] flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                No Pressure
              </h3>
              <div className="text-xs font-semibold text-[#07C28D] mt-0.5">
                அழுத்தங்கள் அற்ற அணுகுமுறை
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                தொடர்ந்து calls செய்து customer-ஐ pressure செய்வது எங்கள் approach அல்ல.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/50">
                <div className="text-center font-bold text-sm sm:text-base text-[#09448B]">
                  Clarity first. <span className="text-[#07C28D]">Decision next.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
              Respect for Customer Autonomy
            </div>
          </div>

          {/* 06 — Long-Term Support */}
          <div
            id="practice-06"
            className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#09448B]/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-black tracking-widest text-[#09448B]">06</span>
                <div className="w-10 h-10 rounded-xl bg-[#e8f1fa] text-[#09448B] flex items-center justify-center">
                  <LifeBuoy className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Long-Term Support
              </h3>
              <div className="text-xs font-semibold text-[#07C28D] mt-0.5">
                நீண்டகால தொடர் உதவி
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                Policy வாங்கிய பிறகும் customer journey முடிவதில்லை.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  தேவையான support மற்றும் guidance-ஐ தொடர்ந்து வழங்குவதே SimpleLife.lk அனுபவத்தின் ஒரு பகுதியாக இருக்கும்.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#09448B]">
              Claims & Ongoing Guidance
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900">
            காப்பீட்டுத் தேவையை எளிமையாகப் புரிந்துகொள்ள தயாரா?
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            எந்தவித விற்பனை அழுத்தமும் இன்றி, உங்கள் குடும்பத்திற்கு தேவையானதை தெளிவாகப் பேசுவோம்.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-[#09448B] hover:bg-[#07356e] active:scale-[0.98] shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>இலவச ஆலோசனையைத் தொடங்குங்கள்</span>
              <ArrowRight className="w-5 h-5 text-[#07C28D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
