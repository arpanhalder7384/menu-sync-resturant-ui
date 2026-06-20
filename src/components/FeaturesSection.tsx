"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function FeaturesSection() {
  const { t } = useTranslation();
  return (
    <section id="features-section" className="py-12 scroll-mt-20 relative">
      
      {/* Background visual blob */}
      <div className="absolute top-[80%] right-[10%] w-96 h-96 rounded-full bg-amber-100/10 blur-3xl pointer-events-none -z-10" />

      <div className="text-center mb-16 flex flex-col gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 mx-auto bg-orange-50 border border-orange-200/50 rounded-full text-orange-700 text-[10px] font-black uppercase tracking-wider">
          <span>🚀</span>
          <span>Core Advantages</span>
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight mt-2">
          Restaurant Owner Advantages
        </h2>
        <p className="text-xs md:text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
          Unlock higher customer satisfaction, zero table bottlenecks, and faster checkout speeds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Capability 1 */}
        <div className="flex items-start gap-5 p-6 md:p-8 bg-gradient-to-br from-white to-stone-50/5 border border-stone-200/60 border-l-4 border-l-orange-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.1)] hover:border-orange-500/30 hover:-translate-y-1.5 transition-all duration-300 group">
          <span className="text-2xl bg-orange-50 border border-orange-250/60 text-orange-600 p-3.5 rounded-2xl shadow-[0_4px_10px_rgba(234,88,12,0.1)] group-hover:scale-105 transition-transform flex-shrink-0">📱</span>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
              {t("feature_qr_title")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t("feature_qr_desc")}
            </p>
          </div>
        </div>

        {/* Capability 2 */}
        <div className="flex items-start gap-5 p-6 md:p-8 bg-gradient-to-br from-white to-stone-50/5 border border-stone-200/60 border-l-4 border-l-blue-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.1)] hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 group">
          <span className="text-2xl bg-blue-50 border border-blue-200/60 text-blue-600 p-3.5 rounded-2xl shadow-[0_4px_10px_rgba(37,99,235,0.1)] group-hover:scale-105 transition-transform flex-shrink-0">🌐</span>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-blue-600 transition-colors">
              {t("feature_lang_title")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t("feature_lang_desc")}
            </p>
          </div>
        </div>

        {/* Capability 3 */}
        <div className="flex items-start gap-5 p-6 md:p-8 bg-gradient-to-br from-white to-stone-50/5 border border-stone-200/60 border-l-4 border-l-purple-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(147,51,234,0.1)] hover:border-purple-500/30 hover:-translate-y-1.5 transition-all duration-300 group">
          <span className="text-2xl bg-purple-50 border border-purple-200/60 text-purple-600 p-3.5 rounded-2xl shadow-[0_4px_10px_rgba(147,51,234,0.1)] group-hover:scale-105 transition-transform flex-shrink-0">🎡</span>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-2 group-hover:text-purple-600 transition-colors">
              {t("feature_spin_title")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t("feature_spin_desc")}
            </p>
          </div>
        </div>

        {/* Capability 4 */}
        <div className="flex items-start gap-5 p-6 md:p-8 bg-gradient-to-br from-white to-stone-50/5 border border-stone-200/60 border-l-4 border-l-emerald-500 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 hover:-translate-y-1.5 transition-all duration-300 group">
          <span className="text-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-600 p-3.5 rounded-2xl shadow-[0_4px_10px_rgba(16,185,129,0.1)] group-hover:scale-105 transition-transform flex-shrink-0">💬</span>
          <div>
            <h3 className="text-base font-extrabold text-stone-900 mb-1 group-hover:text-emerald-600 transition-colors">
              {t("feature_wa_title")}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t("feature_wa_desc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
