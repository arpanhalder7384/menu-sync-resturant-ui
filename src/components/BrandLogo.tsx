"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

export default function BrandLogo() {
  const { language, t } = useTranslation();
  return (
    <span
      className={`text-xl font-black tracking-tight ${
        language === "en"
          ? "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent"
          : "text-orange-600"
      }`}
    >
      {t("menusync")}
    </span>
  );
}
