"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function TimelineSection() {
  const { language, t } = useTranslation();
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#fdfdfb] via-orange-50/15 to-[#fdfdfb] relative overflow-hidden">
      
      {/* Dynamic connecting roadmap line (Visible only on Desktop md screens) */}
      <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-orange-500/40 via-amber-500/40 to-emerald-500/40 border-t border-dashed border-stone-200 -z-0" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 bg-gradient-to-br from-white to-orange-50/5 border border-stone-200/60 border-t-4 border-t-orange-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 gap-5 flex-1 group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center text-base font-black shadow-[0_6px_15px_rgba(234,88,12,0.25)] group-hover:scale-105 transition-transform">
            {language === "en" ? "1" : "১"}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
              {t("step_1")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[260px] md:max-w-none">
              {t("step_1_desc")}
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 bg-gradient-to-br from-white to-amber-50/5 border border-stone-200/60 border-t-4 border-t-amber-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.08)] hover:-translate-y-1.5 transition-all duration-300 gap-5 flex-1 group">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-2xl flex items-center justify-center text-base font-black shadow-[0_6px_15px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform">
            {language === "en" ? "2" : "২"}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-amber-500 transition-colors">
              {t("step_2")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[260px] md:max-w-none">
              {t("step_2_desc")}
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 bg-gradient-to-br from-white to-emerald-50/5 border border-stone-200/60 border-t-4 border-t-emerald-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.08)] hover:-translate-y-1.5 transition-all duration-300 gap-5 flex-1 group">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-base font-black shadow-[0_6px_15px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-transform">
            {language === "en" ? "3" : "৩"}
          </div>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
              {t("step_3")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[260px] md:max-w-none">
              {t("step_3_desc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
