import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConsultativeAdvisory } from './components/ConsultativeAdvisory';
import { AboutJourney } from './components/AboutJourney';
import { WhySimpleLife } from './components/WhySimpleLife';
import { PracticesGrid } from './components/PracticesGrid';
import { NeedAssessmentWidget } from './components/NeedAssessmentWidget';
import { Footer } from './components/Footer';
import { ClarityConsultationModal } from './components/ClarityConsultationForm';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#07C28D]/20 selection:text-[#09448B]">
      {/* Top sticky responsive navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero with the question hook, pain point cards, and SimpleLife promise */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 2. Consultative Advisory (First understand -> Then advise -> Tailored solution) */}
        <ConsultativeAdvisory />

        {/* 3. About SimpleLife.lk & The 5-Step Journey (Understand -> Calculate -> Compare -> Choose -> Protect) */}
        <AboutJourney />

        {/* 4. Interactive Need Assessment Widget (Calculate Coverage without pressure) */}
        <NeedAssessmentWidget onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 5. Why SimpleLife.lk (The gap in Sri Lanka and our 3-pillar bridge) */}
        <WhySimpleLife onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 6. What This Means in Practice (The 6 Principles: Customer First, Advice Before Selling, etc.) */}
        <PracticesGrid onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Free Clarity Consultation Modal */}
      <ClarityConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating Action Button for easy quick contact */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-clarity-btn"
          onClick={() => setIsConsultationOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#09448B] text-white font-bold text-sm shadow-xl hover:bg-[#07356e] active:scale-95 transition-all border-2 border-white/20 cursor-pointer group"
          title="Free Clarity Call - SimpleLife.lk"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#07C28D] animate-ping" />
          <PhoneCall className="w-4 h-4 text-[#07C28D] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">தெளிவு ஆலோசனை (Clarity Call)</span>
          <span className="sm:hidden">ஆலோசனை</span>
        </button>
      </div>
    </div>
  );
}
