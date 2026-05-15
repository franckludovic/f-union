"use client"
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import { WhyParticipateCard } from "./WhyParticipateCard";
import offer1 from "@/core/assets/offer1.jpeg";
import day2 from "@/core/assets/day2.jpeg";
import offer3 from "@/core/assets/offer3.jpeg";
import day1 from "@/core/assets/day1.jpeg";
import participate1img from "@/core/assets/participateimg1.png"
import participate2img from "@/core/assets/participateimg2.jpeg"
import participate3img from "@/core/assets/participateimg3.jpeg"
import participate4img from "@/core/assets/participateimg4.jpeg"

export const MissionSection = () => {
  return (
    <section id="mission" className="py-15 bg-white">
      <Container className="max-w-[85rem] mx-auto px-2 md:px-4">
        {/* Top Header and Grid */}
        <div className="mb-1">
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-bold leading-tight mb-12 tracking-tight">
            <span className="text-[#151f2e] border-b-[5px] border-[#2998e3] pb-1 mr-3 inline-block">
              Pourquoi
            </span>
            <span className="text-[#2998e3]">participer ?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 items-stretch mt-12">
            <WhyParticipateCard
              imageSrc={participate1img.src}
              title="Accéder à un réseau stratégique"
              description="Rencontrez plus de 600 femmes leaders, entrepreneures et décideuses institutionnelles. Créez des connexions directes avec celles qui font avancer l’Afrique."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
            />
            <WhyParticipateCard
              imageSrc={participate2img.src}
              title="Monter en compétences concrètement"
              description="Workshops business & carrière, coaching personnalisé (The Clinic), mentoring 1:1 : repartez avec des outils immédiatement actionnables."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              }
            />
            <WhyParticipateCard
              imageSrc={participate3img.src}
              title="Gagner en visibilité là où tout se joue"
              description="Studio Pro 360, Power Hub, Investment Showroom : des espaces conçus pour vous montrer, pitcher et exister dans les sphères d’influence."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              }
            />
            <WhyParticipateCard
              imageSrc={participate4img.src}
              title="Contribuer à la transformation de l’Afrique"
              description="La vision Next Africa 2035 ne se fera pas sans vous. En participant, vous devenez actrice du changement et du leadership féminin sur le continent."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              }
            />
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-6 mt-6 w-full max-w-5xl mx-auto justify-items-center">
          {/* Stat 1 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Users Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11a4 4 0 100-8 4 4 0 000 8zm-6.5-1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-5.5 8c-3.59 0-10 1.8-10 5.4V21h20v-2.6c0-3.6-6.41-5.4-10-5.4z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[2.5rem] leading-none text-[#333] mb-1 ">600</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Participantes</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Presenter/Speaker Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 8h18v-2c0-2.66-5.33-4-9-4s-9 1.34-9 4v2z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[2.5rem] leading-none text-[#333] mb-1">30</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Intervenantes</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Calendar Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zM7 12h5v5H7v-5z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[2.5rem] leading-none text-[#333] mb-1">3</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Jours</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Globe Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[2.5rem] leading-none text-[#333] mb-1">1</div>
              <div className="text-[0.6rem] font-medium text-gray-500 tracking-wider uppercase mb-1 whitespace-nowrap">écosystème<br />stratégique</div>
            </div>
          </div>
        </div>
      </Container>


      <div className="w-full grid grid-cols-2 mb-6 p-2 gap-2 md:gap-1 md:grid-cols-4 rounded-sm overflow-hidden">
        {/* Block 1 */}
        <div className="col-span-1 md:col-span-1 flex-[1.2] bg-gradient-to-r from-[#2998e3] to-[#147ec1] flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity py-16 md:py-24 rounded-lg border border-transparent sm:border-gray-300">
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Identifier</span>
        </div>

        {/* Block 2 */}
        <div className="col-span-1 md:col-span-1 flex-1 bg-[#0f172a] flex items-center justify-center cursor-pointer hover:bg-[#1e293b] transition-colors py-16 md:py-24 rounded-lg border border-transparent sm:border-gray-300">
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Former</span>
        </div>

        {/* Block 3 */}
        <div className="col-span-1 md:col-span-1 flex-1 bg-[#2998e3] flex items-center justify-center cursor-pointer hover:bg-[#3ba2e8] transition-colors py-16 md:py-24 rounded-lg border border-transparent sm:border-gray-300">
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Connecter</span>
        </div>

        {/* Block 4 */}
        <div className="col-span-1 md:col-span-1 flex-1 bg-[#010617] flex items-center justify-center cursor-pointer hover:bg-[#061122] transition-colors py-16 md:py-24 rounded-lg border border-transparent sm:border-gray-300">
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Projeter</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <button
          onClick={() => window.open("https://billeterie.f-union.org/", "_blank")}
          className="px-12 py-5 rounded-full font-bold text-[15px] bg-[#111827] text-white hover:bg-[#1f2937] border-none shadow-lg tracking-wide uppercase"
        >
          Reserver ma place
        </button>
      </div>
    </section>
  );
};
