"use client";

import React from "react";
import { useTranslation } from "@/lib/translations";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryNav({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryNavProps) {
  const { language, t } = useTranslation();

  const getEmoji = (category: string) => {
    switch (category) {
      case "All":
        return "🍽️";
      case "Starter":
        return "🍕";
      case "Main":
        return "🍜";
      case "Drink":
        return "🥤";
      case "Dessert":
        return "🍰";
      default:
        return "🍽️";
    }
  };

  const isCategoryKey = (key: string): key is "Starter" | "Main" | "Drink" | "Dessert" => {
    return ["Starter", "Main", "Drink", "Dessert"].includes(key);
  };

  return (
    <div className="flex gap-2.5 overflow-x-auto py-2 no-scrollbar scroll-smooth">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const displayName =
          category === "All"
            ? language === "bn"
              ? "সব খাবার"
              : "All Items"
            : isCategoryKey(category)
              ? t(category)
              : category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold rounded-full whitespace-nowrap border transition-all cursor-pointer ${
              isActive
                ? "bg-amber-500 border-amber-500 text-stone-900 font-extrabold shadow-[0_4px_12px_rgba(245,158,11,0.2)]"
                : "bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300"
            }`}
          >
            <span>{getEmoji(category)}</span>
            <span>{displayName}</span>
          </button>
        );
      })}
    </div>
  );
}
