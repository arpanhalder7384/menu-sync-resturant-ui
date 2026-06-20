import React from "react";
import LanguageSelector from "@/components/LanguageSelector";
import BrandLogo from "@/components/BrandLogo";
import TaglinePill from "@/components/TaglinePill";
import HeroTitle from "@/components/HeroTitle";
import PhoneMockup from "@/components/PhoneMockup";
import HeroCTAs from "@/components/HeroCTAs";
import TimelineSection from "@/components/TimelineSection";
import SimulatedTables from "@/components/SimulatedTables";
import FeaturesSection from "@/components/FeaturesSection";
import ContactForm from "@/components/ContactForm";
import Trans from "@/components/Trans";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfb] text-stone-900 font-sans antialiased relative overflow-x-hidden">
      
      {/* Decorative colored blur blobs in the background for a modern HSL-tailored visual depth */}
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-orange-200/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] rounded-full bg-amber-200/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[65%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-200/15  blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-red-200/10 blur-3xl -z-10 pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200/40 transition-all">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-pulse">🍽️</span>
            <BrandLogo />
          </div>
          <LanguageSelector />
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-5 py-12 flex flex-col gap-20">
        
        {/* Split Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center py-6">
          
          {/* Left Column: Copy & CTAs */}
          <div className="md:col-span-7 flex flex-col gap-6 text-left items-start">
            <TaglinePill />
            <HeroTitle />
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-xl">
              <Trans k="homepage_hero_desc" />
            </p>
            <HeroCTAs />
          </div>

          {/* Right Column: Interactive CSS Phone Mockup Screen */}
          <div className="md:col-span-5 flex items-center justify-center md:justify-end animate-fadeIn">
            <PhoneMockup />
          </div>
        </section>

        {/* Dynamic Visual Timeline Steps Flow Section */}
        <TimelineSection />

        {/* Simulated Table QR Scan Panel (Demo Dashboard) */}
        <SimulatedTables />

        {/* Feature Highlights Grid */}
        <FeaturesSection />

        {/* Contact Us Form Section */}
        <ContactForm />

      </main>

      {/* Footer */}
      <footer className="w-full bg-stone-100 border-t border-stone-200/50 py-8 text-center text-xs text-stone-500 mt-12">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p><Trans k="copyright" /></p>
          <div className="flex gap-4">
            <span className="font-bold">West Bengal, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
