"use client";

import React, { useState } from "react";
import { useTranslation } from "@/lib/translations";

export default function ContactForm() {
  const { t } = useTranslation();
  
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!name.trim() || !shopName.trim() || !address.trim() || mobile.trim().length < 10) {
      setError(true);
      return;
    }
    
    setError(false);

    // Formulate pre-formatted template message
    const message = `👋 Hi MenuSync Team,

I am interested in setting up MenuSync for my restaurant! Here are my details:

• Owner Name: ${name}
• Restaurant Name: ${shopName}
• Address: ${address}
• Mobile Number: ${mobile}

Please contact me back to set up the system. Thank you!`;

    // Load WhatsApp number from environment securely
    const targetNumber = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER || "7384190892";
    const cleanNumber = targetNumber.replace(/\D/g, "");
    
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact-section" className="py-12 bg-stone-50 border-y border-stone-200/50 relative overflow-hidden">
      
      {/* Decorative gradient blur background */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-100/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-5">
        
        {/* Headers */}
        <div className="text-center mb-10 flex flex-col gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mx-auto bg-emerald-50 border border-emerald-200/60 rounded-full text-emerald-700 text-[10px] font-black uppercase tracking-wider">
            <span>💬</span>
            <span>Get Started</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight mt-1">
            {t("contact_title")}
          </h2>
          <p className="text-xs md:text-sm text-stone-500 max-w-lg mx-auto leading-relaxed">
            {t("contact_desc")}
          </p>
        </div>

        {/* Card Form */}
        <div className="max-w-lg mx-auto bg-white border border-stone-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Owner Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-stone-700">
                {t("label_name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder={t("placeholder_name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs text-stone-900 px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-stone-400"
              />
            </div>

            {/* Shop Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-stone-700">
                {t("label_shop")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder={t("placeholder_shop")}
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="w-full text-xs text-stone-900 px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-stone-400"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-stone-700">
                {t("label_address")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder={t("placeholder_address")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-xs text-stone-900 px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-stone-400"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-stone-700">
                {t("label_mobile")} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder={t("placeholder_mobile")}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full text-xs text-stone-900 px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-stone-400"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-650 font-bold animate-fadeIn">
                ⚠️ {t("validation_error")}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_6px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.73-1.455L.057 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.01 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.372-9.865 9.802-.001 1.736.47 3.424 1.36 4.922L1.936 21.03l5.526-1.456-1.12.58zM17.13 14.39c-.31-.155-1.847-.91-2.134-1.014-.287-.104-.497-.156-.707.156-.21.312-.818 1.014-1.002 1.222-.185.208-.37.234-.68.078-.31-.156-1.309-.48-2.493-1.537-.92-.818-1.54-1.83-1.72-2.14-.18-.31-.02-.477.136-.632.14-.139.31-.362.465-.544.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.707-1.7-.97-2.327-.253-.611-.513-.53-.708-.53-.182-.006-.39-.007-.598-.007-.208 0-.546.078-.83.39-.287.312-1.096 1.066-1.096 2.6 0 1.534 1.122 3.018 1.278 3.226.156.208 2.208 3.372 5.349 4.726.747.322 1.33.515 1.785.659.75.238 1.432.205 1.97.124.6-.09 1.847-.754 2.107-1.444.262-.69.262-1.282.185-1.404-.078-.122-.287-.23-.598-.385z" />
              </svg>
              <span>{t("btn_submit_contact")}</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
