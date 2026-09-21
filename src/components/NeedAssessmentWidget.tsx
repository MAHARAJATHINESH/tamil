import React, { useState } from 'react';
import { Calculator, Shield, HelpCircle, Check, ArrowRight, RefreshCw } from 'lucide-react';

export const NeedAssessmentWidget: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [monthlyExpense, setMonthlyExpense] = useState<number>(100000); // LKR
  const [yearsOfSupport, setYearsOfSupport] = useState<number>(15);
  const [existingDebts, setExistingDebts] = useState<number>(2000000); // LKR
  const [dependents, setDependents] = useState<number>(2);

  // Suggested Coverage Calculation:
  // (Monthly Expense * 12 * Years of support) + Debts
  const estimatedCoverage = (monthlyExpense * 12 * yearsOfSupport) + existingDebts;

  const formatLKR = (val: number) => {
    if (val >= 10000000) {
      return `LKR ${(val / 10000000).toFixed(1)} கோடி (Crore)`;
    } else if (val >= 100000) {
      return `LKR ${(val / 100000).toFixed(1)} இலட்சம் (Lakhs)`;
    }
    return `LKR ${val.toLocaleString()}`;
  };

  return (
    <section id="calculate-need" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f1fa] text-[#09448B] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#07C28D]" />
              தேவை மதிப்பீடு (Calculate Need)
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              உங்கள் குடும்பத்திற்கு எவ்வளவு கவரேஜ் தேவை?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              எந்தவித விற்பனை நிர்பந்தமும் இன்றி, உங்கள் குடும்பத்தின் நிதிப் பாதுகாப்பை தோராயமாக மதிப்பிடுங்கள்.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left inputs */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>மாதாந்த குடும்பச் செலவு (Monthly Expenses):</span>
                  <span className="text-[#09448B] font-extrabold text-sm">LKR {monthlyExpense.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={30000}
                  max={500000}
                  step={10000}
                  value={monthlyExpense}
                  onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#09448B]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>30,000</span>
                  <span>2.5 இலட்சம்</span>
                  <span>500,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>பாதுகாக்க வேண்டிய வருடங்கள் (Support Duration):</span>
                  <span className="text-[#09448B] font-extrabold text-sm">{yearsOfSupport} வருடங்கள்</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={yearsOfSupport}
                  onChange={(e) => setYearsOfSupport(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#07C28D]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>5 வருடங்கள்</span>
                  <span>15 வருடங்கள்</span>
                  <span>30 வருடங்கள்</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>கடன்கள் / பொறுப்புகள் (Loans / Liabilities):</span>
                  <span className="text-[#09448B] font-extrabold text-sm">LKR {existingDebts.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={20000000}
                  step={500000}
                  value={existingDebts}
                  onChange={(e) => setExistingDebts(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#09448B]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>0</span>
                  <span>1 கோடி</span>
                  <span>2+ கோடி</span>
                </div>
              </div>
            </div>

            {/* Right calculated outcome */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#09448B] to-[#07356e] text-white p-6 rounded-2xl text-center shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#07C28D] mb-1">
                  பரிந்துரைக்கப்படும் கவரேஜ்
                </div>
                <div className="text-xs text-slate-300">
                  Estimated Human Life Value (HLV)
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white mt-4 py-2 border-y border-white/10">
                  {formatLKR(estimatedCoverage)}
                </div>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  உங்கள் குடும்பத்தின் வாழ்க்கை தரம் குறையாமல் இருக்க Term Insurance மூலம் இந்த பாதுகாப்பை குறைந்த செலவில் பெறலாம்.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#09448B] bg-white hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>இதற்கான ஆலோசனையை அறிய</span>
                  <ArrowRight className="w-4 h-4 text-[#07C28D]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
