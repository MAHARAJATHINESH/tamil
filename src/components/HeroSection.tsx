import React from 'react';
import { HelpCircle, FileText, BookOpen, PhoneOff, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const painPoints = [
    {
      id: 'pain-confusion',
      icon: HelpCircle,
      title: 'குழப்பமா?',
      subtitle: 'Confusion?',
      color: 'bg-amber-50 text-amber-600 border-amber-200/60',
    },
    {
      id: 'pain-rules',
      icon: FileText,
      title: 'அதிகமான விதிமுறைகளா?',
      subtitle: 'Too many complex terms?',
      color: 'bg-rose-50 text-rose-600 border-rose-200/60',
    },
    {
      id: 'pain-jargon',
      icon: BookOpen,
      title: 'புரியாத வார்த்தைகளா?',
      subtitle: 'Unclear insurance jargon?',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
    },
    {
      id: 'pain-calls',
      icon: PhoneOff,
      title: 'தொடர்ந்து வரும் Sales Calls-ஆ?',
      subtitle: 'Unsolicited pressure calls?',
      color: 'bg-orange-50 text-orange-600 border-orange-200/60',
    },
  ];

  const valueProps = [
    'எளிமையாகப் புரிந்துகொள்ளுதல் (Understand)',
    'தேவையை மதிப்பிடுதல் (Calculate Need)',
    'பொருத்தமான விருப்பங்களை ஒப்பிடுதல் (Compare)',
    'நம்பிக்கையுடன் முடிவு எடுத்தல் (Choose Confidently)',
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/50"
    >
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-r from-[#09448B]/5 via-[#07C28D]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-[#09448B] shadow-xs mb-6"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#07C28D] animate-pulse" />
            <span>Digital-First Insurance Platform for Sri Lanka</span>
          </div>

          {/* Primary Question Headline */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.25] sm:leading-[1.2]"
          >
            காப்பீடு என்றால் உங்களுக்கு முதலில்{' '}
            <span className="relative inline-block text-[#09448B]">
              என்ன தோன்றுகிறது?
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#07C28D]/20 -z-1 rounded-sm"></span>
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            What is the first thing that comes to your mind when you think of insurance?
          </p>

          {/* 4 Pain Point Cards Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {painPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`p-4 sm:p-5 rounded-2xl border ${item.color} bg-white shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-xs mb-3 border border-slate-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transformation Pivot */}
          <div
            id="hero-statement"
            className="mt-10 sm:mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm text-left max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#09448B] via-[#07C28D] to-[#09448B]" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#07C28D]">
                  <Sparkles className="w-4 h-4" />
                  <span>The SimpleLife.lk Difference</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09448B] leading-snug">
                  SimpleLife.lk உருவானதே இதை மாற்றுவதற்காக.
                </h3>
                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  மக்கள் காப்பீட்டை விரும்பாதவர்கள் அல்ல. <br className="hidden sm:inline" />
                  <span className="text-slate-900 font-bold">அதைப் புரிந்துகொள்வது கடினமாக இருப்பதுதான் பிரச்சினை.</span>
                </p>
              </div>

              <div className="shrink-0 flex sm:flex-col justify-center">
                <div className="p-4 rounded-2xl bg-[#e6f9f3] border border-[#07C28D]/30 text-center">
                  <div className="text-xs font-semibold text-[#09448B] uppercase tracking-wide">Our Philosophy</div>
                  <div className="text-lg sm:text-xl font-black text-[#09448B] mt-1">
                    Insurance, <span className="text-[#07C28D]">made simple.</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-6 border-slate-100" />

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong className="text-[#09448B]">SimpleLife.lk-ல்</strong>, காப்பீட்டை எளிமையாகப் புரிந்துகொள்ளவும், தேவையை மதிப்பிடவும், பொருத்தமான விருப்பங்களை ஒப்பிடவும், நம்பிக்கையுடன் முடிவு எடுக்கவும் மக்களுக்கு உதவுகிறோம்.
            </p>

            {/* 4 Pillars Mini List */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {valueProps.map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#07C28D] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-[#09448B] hover:bg-[#07356e] active:scale-[0.98] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>இலவச தெளிவு ஆலோசனை (Clarity Call)</span>
                <ArrowRight className="w-5 h-5 text-[#07C28D]" />
              </button>

              <a
                href="#advisory"
                id="hero-secondary-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <span>எங்கள் அணுகுமுறையை அறிக</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
