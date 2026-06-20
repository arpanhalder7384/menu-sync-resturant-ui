/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { MenuItem } from "@/lib/mockData";
import { useTranslation } from "@/lib/translations";
import { useCart } from "@/lib/cart";

interface FoodDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  menu: MenuItem[];
  onSelectAnotherItem?: (item: MenuItem) => void;
}

export default function FoodDetailModal({
  item,
  isOpen,
  onClose,
  menu,
  onSelectAnotherItem,
}: FoodDetailModalProps) {
  const { language, t } = useTranslation();
  const { cart, addToCart, updateQuantity } = useCart();

  if (!isOpen || !item) return null;

  const name = language === "en" ? item.nameEn : item.nameBn;
  const description = language === "en" ? item.descriptionEn : item.descriptionBn;

  // Find current cart state
  const cartItem = cart.find((i) => i.item.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Find paired item if any
  let pairedItem: MenuItem | null = null;
  if (item.pairingPartnerId) {
    pairedItem = menu.find((i) => i.id === item.pairingPartnerId) || null;
  }

  const pairingReason =
    language === "en" ? item.pairingReasonEn : item.pairingReasonBn;

  // Card details for paired item
  const pairedItemName = pairedItem
    ? language === "en"
      ? pairedItem.nameEn
      : pairedItem.nameBn
    : "";

  const handlePairedItemClick = (e: React.MouseEvent, target: MenuItem) => {
    e.stopPropagation();
    if (onSelectAnotherItem) {
      onSelectAnotherItem(target);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] animate-fadeIn border border-stone-250/20"
      >
        {/* Top Header Image Area */}
        <div className="relative w-full h-48 md:h-56 bg-stone-100 flex-shrink-0">
          <img
            src={item.image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-950/10 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-stone-950/60 hover:bg-stone-950/80 text-white transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          
          {/* Main Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* Veg / Non-veg tag */}
              <span
                className={`flex items-center justify-center w-[16px] h-[16px] border-2 rounded p-[2px] ${
                  item.isVeg ? "border-green-600" : "border-red-600"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isVeg ? "bg-green-600" : "bg-red-600"
                  }`}
                />
              </span>

              {/* Chef recommended */}
              {item.isSpecial && (
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-200/50 rounded">
                  ★ {t("chef_recommended")}
                </span>
              )}

              {/* Category Badge */}
              <span className="px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider bg-stone-100 text-stone-500 rounded border border-stone-200">
                {item.category}
              </span>
            </div>

            <h2 className="text-xl font-black text-stone-900 leading-tight">
              {name}
            </h2>

            <p className="text-base font-black text-orange-600 mt-1">
              {t("currency")}{item.price}
            </p>

            <p className="text-xs text-stone-600 mt-3.5 leading-relaxed bg-stone-50/50 border border-stone-100 p-3 rounded-2xl">
              {description}
            </p>
          </div>

          {/* Pairing Recommendation Section */}
          {pairedItem && (
            <div className="border-t border-stone-100 pt-5">
              <h3 className="text-xs font-black text-stone-900 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <span>🍽️</span>
                <span>{t("pairing_suggestion")}</span>
              </h3>

              <div className="space-y-3">
                <p className="text-xs font-bold text-orange-700 bg-orange-50/40 border border-orange-100/60 p-2.5 rounded-xl leading-relaxed">
                  💡 {pairingReason}
                </p>

                {/* Paired item mini-card */}
                <div
                  onClick={(e) => handlePairedItemClick(e, pairedItem!)}
                  className="flex gap-3 p-3 bg-stone-50 hover:bg-orange-50/20 border border-stone-200/60 rounded-2xl transition-all cursor-pointer group shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-orange-200"
                >
                  <img
                    src={pairedItem.image}
                    alt={pairedItemName}
                    className="w-14 h-14 object-cover rounded-xl border border-stone-200/60 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h4 className="text-xs font-extrabold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-normal">
                        {pairedItemName}
                      </h4>
                      <p className="text-[10px] font-black text-stone-500 mt-0.5">
                        {t("currency")}{pairedItem.price}
                      </p>
                    </div>
                    
                    <span className="text-[9px] font-black text-orange-600 uppercase tracking-wider flex items-center gap-0.5 mt-1">
                      <span>👁️</span>
                      <span>{language === "en" ? "View Details" : "বিস্তারিত দেখুন"}</span>
                    </span>
                  </div>

                  {/* Add button inside mini-card */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="self-center flex-shrink-0"
                  >
                    {cart.find((i) => i.item.id === pairedItem!.id) ? (
                      <span className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider">
                        ✓ {language === "en" ? "Added" : "যোগ হয়েছে"}
                      </span>
                    ) : (
                      <button
                        onClick={() => addToCart(pairedItem!)}
                        className="px-2.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider cursor-pointer shadow-sm"
                      >
                        + {language === "en" ? "Add" : "যোগ করুন"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Pinned Bottom Add to Order Bar */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {language === "en" ? "Subtotal" : "সাবটোটাল"}
            </span>
            <span className="text-sm font-black text-stone-900">
              {t("currency")}{quantity > 0 ? item.price * quantity : item.price}
            </span>
          </div>

          <div className="w-36">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(item)}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-xs font-black rounded-xl uppercase tracking-wider cursor-pointer text-center shadow-md flex items-center justify-center gap-1.5"
              >
                <span>+</span>
                <span>{t("add_to_order")}</span>
              </button>
            ) : (
              <div className="flex items-center justify-between text-stone-900 bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm h-[42px]">
                <button
                  onClick={() => updateQuantity(item.id, quantity - 1)}
                  className="px-3.5 h-full flex items-center justify-center text-sm font-black text-orange-600 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  −
                </button>
                <span className="text-xs font-black text-stone-900">{quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, quantity + 1)}
                  className="px-3.5 h-full flex items-center justify-center text-sm font-black text-orange-600 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
