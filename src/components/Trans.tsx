"use client";

import React from "react";
import { useTranslation, translations } from "@/lib/translations";

interface TransProps {
  k: keyof typeof translations["en"];
}

export default function Trans({ k }: TransProps) {
  const { t } = useTranslation();
  return <React.Fragment>{t(k)}</React.Fragment>;
}
