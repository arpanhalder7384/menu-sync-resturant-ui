"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function HeroCTAs() {
  const { language, t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
      <a
        href="#demo-section"
        className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs rounded-xl shadow-[0_4px_12px_rgba(234,88,12,0.15)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider text-center"
      >
        ⚡ {t("scan_demo")}
      </a>
      <a
        href="#features-section"
        className="px-6 py-3.5 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 font-extrabold text-xs rounded-xl transition-all cursor-pointer uppercase tracking-wider text-center"
      >
        {language === "en" ? "Explore Features" : "ফিচার সমূহ"}
      </a>
    </div>
  );
}
