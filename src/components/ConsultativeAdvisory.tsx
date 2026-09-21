import React from 'react';
import { UserCheck, MessageSquareText, Compass, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ConsultativeAdvisory: React.FC = () => {
  const steps = [
    {
      stepNum: '01',
      title: 'முதலில் புரிந்துகொள்வது',
      enTitle: 'First Understand',
      desc: 'உங்கள் குடும்ப நிலை, வருமானம், எதிர்கால கனவுகள் மற்றும் பாதுகாப்புக் கடமைகளை முழுமையாகக் கேட்டறிதல்.',
      icon: UserCheck,
      color: 'border-slate-200 bg-white hover:border-[#09448B]',
      accentBg: 'bg-[#e8f1fa] text-[#09448B]',
    },
    {
      stepNum: '02',
      title: 'பிறகு ஆலோசனை வழங்குவது',
      enTitle: 'Then Advise',
      desc: 'விற்பனை நோக்கம் இன்றி, எந்த ஒரு சிக்கலான நிபந்தனைகளும் இன்றி வெளிப்படையான, தெளிவான வழிகாட்டுதல்.',
      icon: MessageSquareText,
      color: 'border-slate-200 bg-white hover:border-[#07C28D]',
      accentBg: 'bg-[#e6f9f3] text-[#07C28D]',
    },
    {
      stepNum: '03',
      title: 'தேவைக்கு ஏற்ற தீர்வை கண்டுபிடிப்பது',
      enTitle: 'Find the Tailored Solution',
      desc: 'உங்கள் வரவு செலவுக்கும் (budget) வாழ்க்கை இலக்குகளுக்கும் பொருந்தக்கூடிய துல்லியமான policy-யை தேர்வு செய்தல்.',
      icon: Compass,
      color: 'border-slate-200 bg-white hover:border-[#09448B]',
      accentBg: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <section id="advisory" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1fa] text-[#09448B] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <HeartHandshake className="w-4 h-4 text-[#07C28D]" />
            Consultative Insurance Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            எங்கள் நோக்கம் ஒரு policy-யை{' '}
            <span className="text-[#09448B]">எப்படியாவது விற்பது அல்ல.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Our goal is not merely to sell a policy. We believe in an honest, consultative advisory methodology centered around you.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNum}
                id={`advisory-step-${idx + 1}`}
                className={`p-7 rounded-2xl border ${item.color} shadow-xs transition-all duration-300 relative group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest text-slate-400 group-hover:text-[#09448B] transition-colors">
                      STEP {item.stepNum}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#09448B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#07C28D] uppercase tracking-wider mt-1">
                    {item.enTitle}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-[#09448B]">
                  <span>SimpleLife.lk தத்துவம்</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#07C28D] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary callout badge */}
        <div
          id="advisory-summary"
          className="mt-12 max-w-2xl mx-auto text-center p-5 rounded-2xl bg-gradient-to-r from-[#09448B]/5 via-[#07C28D]/10 to-[#09448B]/5 border border-[#07C28D]/20"
        >
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-[#09448B]">
            <ShieldCheck className="w-5 h-5 text-[#07C28D]" />
            <span>இதுதான் எங்கள் Consultative Insurance Advisory அணுகுமுறை.</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            விற்பனை அழுத்தங்கள் அற்ற, விழிப்புணர்வையும் பாதுகாப்பையும் முன்னிறுத்தும் புதிய அனுபவம்.
          </p>
        </div>
      </div>
    </section>
  );
};
