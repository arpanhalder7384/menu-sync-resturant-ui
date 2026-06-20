"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function HeroTitle() {
  const { language } = useTranslation();
  return (
    <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.15] text-stone-900">
      {language === "en" ? (
        <>
          Transform Your Menu into a{" "}
          <span className="text-orange-600">Digital Experience</span>
        </>
      ) : (
        <>
          আপনার মেনুকে রূপান্তর করুন একটি{" "}
          <span className="text-orange-600 block md:inline">ডিজিটাল অভিজ্ঞতায়</span>
        </>
      )}
    </h1>
  );
}
