"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Container } from "@/core/components/Container";
import dotMap from "@/core/assets/Dot Map.png";
import day1 from "@/core/assets/day1.jpeg";
import day2 from "@/core/assets/day2.jpeg";
import day3 from "@/core/assets/day 3.jpeg";

type FlipCardProps = {
  frontImage: string;
  frontTitle: string;
  dayNumber: string;
  backTitle: ReactNode;
  backDescription: string;
  isDetailFront?: boolean;
  innerSpace?: string;
  href: string;
  showbutton?: boolean;
};

const FlipCard = ({
  frontImage,
  frontTitle,
  dayNumber,
  backTitle,
  innerSpace,
  backDescription,
  href,
  showbutton = true,
  isDetailFront = false,
}: FlipCardProps) => {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped((prev) => !prev);
  };

  const FrontDetail = () => (
    <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-[#1c1c1c] flex flex-col [backface-visibility:hidden]">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src={frontImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10 pt-10">
        <div className="mb-4">
          <h4 className="text-white font-black text-2xl tracking-tight">
            {dayNumber}
          </h4>
        </div>
        <h3 className="text-[#C22323] font-black text-4xl leading-[1.1] tracking-tighter mb-8 mt-2 drop-shadow-lg">
          {backTitle}
        </h3>
        <p className="text-white/90 font-medium text-[30px] leading-relaxed text-center mt-4">
          {backDescription}
        </p>
        {showbutton == true ? <div className="mt-auto pt-6 flex justify-center">
          <Link href={href} onClick={(e) => e.stopPropagation()}>
            <button className="bg-[#4d0c0c] hover:bg-[#6b1313] text-white font-bold py-3 px-6 rounded-full text-sm transition-colors border-2 border-[#2b0505]/30 shadow-xl">
              Voir le programme complet
            </button>
          </Link>
        </div>
          :
          <></>
        }
      </div>
    </div>
  );

  const FrontImage = () => (
    <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white [backface-visibility:hidden]">
      <img
        src={frontImage}
        alt={frontTitle}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-8 pt-12">
        <h3 className="text-white text-3xl md:text-[2rem] font-black tracking-tight leading-none">
          {frontTitle}
        </h3>
      </div>
    </div>
  );

  const BackSide = () => (
    <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-[#1c1c1c] flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src={frontImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Darker background on back as requested */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 z-0 pointer-events-none`} />
      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10 pt-10">
        <div className="mb-4">
          <h4 className="text-white font-black text-2xl tracking-tight">
            {dayNumber}
          </h4>
        </div>
        <h3 className={`text-[#C22323] font-black text-4xl leading-[1.1] tracking-tighter mb-${innerSpace} mt-2 drop-shadow-lg`}>
          {backTitle}
        </h3>
        <p className="text-white/90 font-medium text-[20px] leading-relaxed text-center mt-4 text-balance">
          {backDescription}
        </p>
        {
          showbutton ? <div className="mt-auto pt-6 flex justify-center">
            <Link href={href} onClick={(e) => e.stopPropagation()}>
              <button className="bg-[#4d0c0c] hover:bg-[#6b1313] text-white font-bold py-3 px-6 rounded-full text-sm transition-colors border-2 border-[#2b0505]/30 shadow-xl">
                Voir le programme complet
              </button>
            </Link>
          </div>
            :
            <></>
        }
      </div>
    </div>
  );

  return (
    <div
      className="relative h-[480px] lg:h-[550px] w-full group [perspective:2000px] mt-12 md:mt-0 cursor-pointer"
      onClick={handleTap}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ${tapped ? "[transform:rotateY(180deg)] lg:[transform:none]" : ""
          }`}
      >
        {isDetailFront ? <FrontDetail /> : <FrontImage />}
        <BackSide />
      </div>
    </div>
  );
};

export const ProgrammeSection = () => {
  return (
    <section id="programme" className="bg-white">
      {/* Top Red Header Block */}
      <div className="bg-[#da291c] text-white py-20 relative overflow-hidden bg-gradient-to-b from-[#da291c] to-[#a61c12]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={dotMap.src}
            alt=""
            className="w-full h-full object-cover md:object-contain object-center scale-150 md:scale-100 mix-blend-overlay"
          />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] tracking-tight mb-6">
            Programme
          </h2>
          <p className="text-xl md:text-2xl lg:text-[1.35rem] font-bold text-white max-w-4xl px-4 leading-snug">
            Trois jours de conversations, d’inspiration et de connexions
            <br className="hidden md:block" /> stratégiques.
          </p>
        </Container>
      </div>

      {/* Cards Grid Block */}
      <div className="relative mt-10 z-20 pb-20">
        <Container className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <FlipCard
              showbutton={false}
              frontImage={day1.src}
              frontTitle="Le rendez-vous du Soft Power"
              dayNumber="28 Mai"
              innerSpace="8"
              href=""
              backTitle={
                <>
                  Le rendez-vous du Soft Power<br />
                  <span className="ml-[2px] text-white">Sur invitation</span>
                </>
              }
              backDescription="Dialogue de haut niveau pour des décideuses engagés."
            />

            <FlipCard
              frontImage={day2.src}
              frontTitle="Summit Day"
              dayNumber="Jour 2"
              innerSpace="2"
              href="/programme/jour2"
              backTitle={
                <>
                  SummitDay<br />
                </>
              }
              backDescription="Panels, keynotes, ateliers et networking autour du leadership, de l’entrepreneuriat, de l’innovation et de la transformation économique en Afrique."
            />

            <FlipCard
              frontImage={day3.src}
              frontTitle="Expériences & Connexions"
              dayNumber="Jour 3"
              innerSpace="8"
              href="/programme/jour3"
              backTitle={
                <>
                  Expériences &<br />
                  <span className="ml-[2px]">opportunités</span>
                </>
              }
              backDescription="Rejoignez-nous pour la clôture spectaculaire de l'événement et découvrez toutes les opportunités qui s'offrent à vous."
              isDetailFront={false}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
