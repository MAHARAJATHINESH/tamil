import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle, Shield, MessageSquare, Headphones, ArrowRight } from 'lucide-react';

export const WhySimpleLife: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const commonProblems = [
    {
      title: 'அதிகமாக Sales-focused',
      enSubtitle: 'Heavily sales & quota driven',
      desc: 'உங்கள் தேவையை விட விற்பனைக் குறியீட்டை எட்டவே அதிக முக்கியத்துவம் தரப்படுகிறது.',
    },
    {
      title: 'அதிகமாக Complex',
      enSubtitle: 'Unnecessarily complicated structures',
      desc: 'தேவையற்ற விதிகளும் கடினமான கணக்கீடுகளும் பயத்தை ஏற்படுத்துகின்றன.',
    },
    {
      title: 'தேவையான நேரத்தில் சரியான Guidance இல்லாதது',
      enSubtitle: 'Lack of timely, neutral guidance',
      desc: 'சந்தேகங்கள் எழும் போது நம்பகமான பக்கச்சார்பற்ற வழிகாட்டுதல் கிடைப்பதில்லை.',
    },
    {
      title: 'Policy terms புரிந்துகொள்ள கடினமானது',
      enSubtitle: 'Opaque terms & difficult clauses',
      desc: 'சிறு எழுத்துக்களில் உள்ள நிபந்தனைகள் (Fine print) பலருக்கும் புரிவதில்லை.',
    },
    {
      title: 'பல options இருப்பதால் Decision confusion',
      enSubtitle: 'Option overload and decision paralysis',
      desc: 'எந்த நிறுவனம் சிறந்தது, எந்த பாலிசி பொருந்தும் என்பதில் பெரும் குழப்பம்.',
    },
  ];

  const simpleLifePillars = [
    {
      title: 'Clear Advice',
      tamilTitle: 'தெளிவான ஆலோசனை',
      desc: 'உங்களுக்கு என்ன தேவை, என்ன தேவையில்லை என்பதை நடுநிலையோடு எடுத்துரைக்கும் தெளிவான வழிகாட்டல்.',
      icon: MessageSquare,
      color: 'bg-[#e8f1fa] text-[#09448B] border-[#09448B]/20',
    },
    {
      title: 'Simple Explanation',
      tamilTitle: 'எளிய விளக்கம்',
      desc: 'கடினமான ஆங்கில அல்லது காப்பீட்டு சொற்கள் இன்றி எளிய தமிழில் புரிந்துகொள்ளக்கூடிய விளக்கங்கள்.',
      icon: HelpCircle,
      color: 'bg-[#e6f9f3] text-[#07C28D] border-[#07C28D]/30',
    },
    {
      title: 'Customer Support',
      tamilTitle: 'வாடிக்கையாளர் ஆதரவு',
      desc: 'பாலிசி வாங்குவதற்கு முன்பும், வாங்கிய பின்பும், க்ளைம் கோரிக்கையின் போதும் உடனடி நேர்மையான உதவி.',
      icon: Headphones,
      color: 'bg-slate-100 text-[#09448B] border-slate-200',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold mb-3">
            <Shield className="w-4 h-4 text-[#09448B]" />
            Why SimpleLife.lk?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            இலங்கையில் காப்பீடு அனுபவத்தை <br />
            <span className="text-[#09448B]">மறுவரையறை செய்கிறோம்</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            ஏன் மக்கள் காப்பீட்டைத் தவிர்க்கிறார்கள், SimpleLife.lk எவ்வாறு இந்த இடைவெளியை நிரப்புகிறது?
          </p>
        </div>

        {/* 2-Column Comparison: The Reality vs The SimpleLife Solution */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Traditional Experience Problems */}
          <div
            id="traditional-insurance-issues"
            className="lg:col-span-5 bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 text-rose-600 font-bold text-sm sm:text-base mb-1">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>இலங்கையில் காப்பீடு தொடர்பான அனுபவம் பலருக்கு:</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Common challenges faced by individuals seeking insurance in Sri Lanka:
              </p>

              <div className="space-y-3.5">
                {commonProblems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-rose-100 shadow-2xs flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-600 italic">
              "மக்கள் காப்பீட்டை விரும்பாதவர்கள் அல்ல. அதைப் புரிந்துகொள்வது கடினமாக இருப்பதுதான் பிரச்சினை."
            </div>
          </div>

          {/* Right Column: How SimpleLife.lk Fills The Gap */}
          <div
            id="simplelife-solution-card"
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#07C28D]/30 shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#07C28D]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f9f3] text-[#07C28D] text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                The Bridge
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09448B] leading-tight">
                SimpleLife.lk இந்த இடைவெளியை நிரப்ப முயற்சிக்கிறது
              </h3>

              {/* The Core Formula from the prompt */}
              <div className="mt-6 p-4.5 rounded-2xl bg-gradient-to-r from-[#09448B] to-[#07356e] text-white shadow-sm">
                <div className="text-xs uppercase tracking-wider text-slate-200 font-bold mb-1">
                  எங்கள் வாக்குறுதி (Our Core Promise)
                </div>
                <div className="text-base sm:text-xl font-bold flex flex-wrap items-center gap-2">
                  <span className="text-white">Clear Advice</span>
                  <span className="text-[#07C28D] font-black">+</span>
                  <span className="text-[#07C28D]">Simple Explanation</span>
                  <span className="text-[#07C28D] font-black">+</span>
                  <span className="text-white">Customer Support</span>
                </div>
              </div>

              {/* The 3 Pillars Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {simpleLifePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border ${pillar.color} flex flex-col justify-between`}
                    >
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-white shadow-2xs flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {pillar.title}
                        </h4>
                        <div className="text-xs font-semibold text-[#09448B] mt-0.5">
                          {pillar.tamilTitle}
                        </div>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                எந்தவித கட்டாய விற்பனை அழுத்தமும் இன்றி வினாடிகளைத் தொடங்குங்கள்.
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#09448B] hover:bg-[#07356e] active:scale-[0.98] shadow-sm transition-all cursor-pointer"
              >
                <span>தொடர்பு கொள்ள</span>
                <ArrowRight className="w-4 h-4 text-[#07C28D]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
