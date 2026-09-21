import React from 'react';
import { Shield, Mail, Phone, MapPin, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block">
                <img
                  src="https://6aae6613380f009d8901a4e1.imgix.net/sandbox/Simple%20life%20Logo.png"
                  alt="SimpleLife.lk Logo"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-[#07C28D]">
              Our Philosophy: Insurance, made simple.
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              SimpleLife.lk என்பது இலங்கையில் காப்பீட்டை எளிமையாகவும் வெளிப்படையாகவும் புரிந்துகொள்ள உதவும் digital-first insurance platform.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#07C28D] shrink-0" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              வழிசெலுத்தல் (Explore)
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-[#07C28D] transition-colors">
                  SimpleLife பற்றி (About Us)
                </a>
              </li>
              <li>
                <a href="#advisory" className="hover:text-[#07C28D] transition-colors">
                  ஆலோசனை அணுகுமுறை (Advisory)
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#07C28D] transition-colors">
                  ஏன் SimpleLife? (Why Us?)
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-[#07C28D] transition-colors">
                  6 முக்கிய கோட்பாடுகள் (6 Principles)
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#07C28D] transition-colors">
                  வாடிக்கையாளர் பயணம் (Customer Journey)
                </a>
              </li>
            </ul>
          </div>

          {/* Core Values Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              எங்கள் உறுதிமொழி
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#07C28D] shrink-0 mt-0.5" />
                <span>விற்பனைக்கு முன் சரியான ஆலோசனை (Advice Before Selling)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#07C28D] shrink-0 mt-0.5" />
                <span>எந்தவித அழுத்தமும் இன்றி தெளிவு (No Pressure Policy)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#07C28D] shrink-0 mt-0.5" />
                <span>நீண்டகால தொடர் ஆதரவு (Long-Term Guidance)</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#09448B] bg-[#07C28D] hover:bg-[#06a87a] transition-colors"
              >
                இலவச ஆலோசனைக்கு முன்பதிவு செய்க
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SimpleLife.lk. All rights reserved. Sri Lanka.
          </div>
          <div className="flex items-center gap-1">
            <span>Clarity first. Decision next.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
