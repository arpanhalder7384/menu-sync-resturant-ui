"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-white/80 p-1 rounded-full border border-stone-200/60 shadow-sm backdrop-blur-md transition-all">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
          language === "en"
            ? "bg-stone-900 text-white shadow-sm scale-105"
            : "text-stone-500 hover:text-stone-900"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("bn")}
        className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
          language === "bn"
            ? "bg-stone-900 text-white shadow-sm scale-105"
            : "text-stone-500 hover:text-stone-900"
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
