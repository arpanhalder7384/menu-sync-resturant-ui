"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function TaglinePill() {
  const { language } = useTranslation();
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200/60 rounded-full text-orange-700 text-xs font-black uppercase tracking-wider animate-fadeIn">
      <span>🔥</span>
      <span>{language === "en" ? "Interactive QR Menu System" : "ইন্টারেক্টিভ কিউআর মেনু সিস্টেম"}</span>
    </div>
  );
}
