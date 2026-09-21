import React, { useState } from 'react';
import { Eye, Calculator, ArrowLeftRight, CheckCircle, ShieldAlert, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const AboutJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 'step-understand',
      name: 'Understand',
      tamilName: 'புரிந்துகொள்ளுதல்',
      desc: 'உங்கள் வாழ்க்கை சூழலில் காப்பீடு எதற்காக தேவை, எவை தேவையற்றவை என்பதை எளிய தமிழ் மொழியில் அறிதல்.',
      icon: Eye,
      highlight: 'No complex jargon',
    },
    {
      id: 'step-calculate',
      name: 'Calculate',
      tamilName: 'மதிப்பிடுதல்',
      desc: 'உங்கள் குடும்பத்தின் எதிர்கால பாதுகாப்புக்கான சரியான கவரேஜ் (Coverage amount) தொகையை விஞ்ஞானபூர்வமாக கணக்கிடுதல்.',
      icon: Calculator,
      highlight: 'Accurate human life value',
    },
    {
      id: 'step-compare',
      name: 'Compare',
      tamilName: 'ஒப்பிடுதல்',
      desc: 'இலங்கையில் உள்ள தலைசிறந்த காப்பீட்டுத் திட்டங்களின் பிரீமியம் மற்றும் நன்மைகளை நடுநிலையுடன் ஒப்பிட்டுப் பார்த்தல்.',
      icon: ArrowLeftRight,
      highlight: 'Unbiased evaluation',
    },
    {
      id: 'step-choose',
      name: 'Choose',
      tamilName: 'தேர்வு செய்தல்',
      desc: 'எந்தவிதமான வெளிப்புற விற்பனை அழுத்தமும் இன்றி, உங்கள் நிதி நிலைக்கு ஏற்ப மன அமைதியுடன் முடிவு செய்தல்.',
      icon: CheckCircle,
      highlight: 'Your decision, your pace',
    },
    {
      id: 'step-protect',
      name: 'Protect',
      tamilName: 'பாதுகாத்தல்',
      desc: 'பாலிசி தொடக்கம் முதல் எதிர்காலத்தில் க்ளைம் (Claim) உதவி தேவைப்படும் தருணங்கள் வரை உடனடி நம்பகமான ஆதரவு.',
      icon: ShieldAlert,
      highlight: 'Lifelong claim assistance',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-[#09448B] shadow-2xs mb-3">
            <Layers className="w-4 h-4 text-[#07C28D]" />
            SimpleLife.lk பற்றி
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            இலங்கையின் முதல் <span className="text-[#09448B]">Digital-First</span> காப்பீட்டு தளம்
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            SimpleLife.lk என்பது இலங்கையில் காப்பீட்டை எளிமையாகவும் வெளிப்படையாகவும் புரிந்துகொள்ள உதவும் <strong>digital-first insurance platform</strong>.
          </p>
        </div>

        {/* Philosophy Card Banner */}
        <div
          id="philosophy-card"
          className="mt-12 rounded-3xl bg-gradient-to-br from-[#09448B] to-[#062c5b] text-white p-8 sm:p-12 shadow-lg relative overflow-hidden"
        >
          {/* Subtle Graphic Accents */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 bg-[#07C28D]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#07C28D] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Our Philosophy
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Insurance, <span className="text-[#07C28D]">made simple.</span>
              </h3>
              <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                முக்கியமாக <strong>Life Insurance</strong> மற்றும் <strong>Term Insurance</strong> போன்ற தீர்வுகளை எளிய மொழியில் புரிந்துகொள்ள உதவுவதிலிருந்து தொடங்கி, எதிர்காலத்தில் ஒரு விரிவான digital insurance ecosystem-ஐ உருவாக்குவதே எங்கள் நோக்கம்.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 max-w-xs">
                <div className="text-xs text-slate-300 font-medium">முக்கிய ஆரம்ப கவனம்:</div>
                <div className="text-base font-bold text-white mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#07C28D]" />
                  Life Insurance
                </div>
                <div className="text-base font-bold text-white mt-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#07C28D]" />
                  Term Insurance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 5-Step Journey: Understand -> Calculate -> Compare -> Choose -> Protect */}
        <div id="journey" className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              நாங்கள் காப்பீட்டை மாற்ற விரும்பும் எளிய பயணம்
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              The 5-Step Customer Journey from confusion to complete protection
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.id}
                  id={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 text-left relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#07C28D] ring-2 ring-[#07C28D]/20 shadow-md -translate-y-1'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#09448B] text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-[#07C28D]">
                      {step.name}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">
                      {step.tamilName}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                    <span>{step.highlight}</span>
                    {idx < 4 && <ArrowRight className="w-3 h-3 text-slate-400 hidden lg:block" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stepper Arrow Flow Bar on desktop */}
          <div className="hidden lg:flex items-center justify-center gap-2 mt-6 text-xs font-semibold text-[#09448B]">
            <span>Understand</span>
            <span className="text-[#07C28D]">→</span>
            <span>Calculate</span>
            <span className="text-[#07C28D]">→</span>
            <span>Compare</span>
            <span className="text-[#07C28D]">→</span>
            <span>Choose</span>
            <span className="text-[#07C28D]">→</span>
            <span className="text-[#07C28D] font-bold">Protect</span>
          </div>
        </div>
      </div>
    </section>
  );
};
