"use client";
import { Container } from "@/core/components/Container";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/core/components/Button";
import heroImage from "@/core/assets/day2.jpeg";

export const HeroSectionJour2 = () => {
  const router = useRouter();
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(2026, 4, 28, 0, 0, 0);

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <section className="relative min-h-[70vh] flex flex-col pb-16 bg-summit-dark overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={heroImage.src}
          alt="heroImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <Container className="relative z-20 flex-1 flex flex-col justify-center w-full pt-32 pb-0">
        <div className="text-white max-w-4xl">
          <h2
            style={{ color: "#B150C5" }}
            className="font-black uppercase text-xl md:text-2xl mb-4 leading-tight"
          >
            #NextAfrica2035
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-black leading-[1.1] md:leading-[1.05] tracking-tight">
            Summit Day
          </h1>

          <p
            style={{ color: "#ffffffff" }}
            className="text-xl mt-4 pt-4 pb-4 mb-4  md:text-2xl font-medium  max-w-lg leading-snug"
          >
            Panels, keynotes, ateliers et networking autour du leadership, de
            l’entrepreneuriat, de l’innovation et de la transformation
            économique en Afrique.
          </p>

          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 mt-10 max-w-lg leading-snug">
            Construire l&apos;Afrique de 2035 en amplifiant le leadership{" "}
            <span style={{ color: "#B150C5" }} className="font-bold">
              féminin.
            </span>
          </p>
        </div>
      </Container>

      <Container className="relative w-full z-20 mt-0">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4 px-4 md:px-12 lg:px-20 text-white">
          {/* Time elements container - stays on the left */}
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Days */}
            <div className="flex items-center flex-col gap-1">
              <div className="flex items-center justify-center shrink-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {String(countdown.days).padStart(2, "0")}
                </h3>
              </div>
              <div className="font-bold text-sm md:text-base lg:text-lg leading-tight">
                jours
              </div>
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-light">:</div>

            {/* Hours */}
            <div className="flex items-center flex-col gap-1">
              <div className="flex items-center justify-center shrink-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {pad(countdown.hours)}
                </h3>
              </div>
              <div className="font-bold text-sm md:text-base lg:text-lg leading-tight">
                Heures
              </div>
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-light">:</div>

            {/* Minutes */}
            <div className="flex items-center flex-col gap-1">
              <div className="flex items-center justify-center shrink-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {pad(countdown.minutes)}
                </h3>
              </div>
              <div className="font-bold text-sm md:text-base lg:text-lg leading-tight">
                Minutes
              </div>
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-light">:</div>

            {/* Seconds */}
            <div className="flex items-center flex-col gap-1">
              <div className="flex items-center justify-center shrink-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {pad(countdown.seconds)}
                </h3>
              </div>
              <div className="font-bold text-sm md:text-base lg:text-lg leading-tight">
                Secondes
              </div>
            </div>
          </div>

          {/* Button - stays on the right, moves below on mobile */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <button
              onClick={() =>
                window.open(
                  "https://billeterie.f-union.org/",
                  "_blank"
                )
              }
              style={{ backgroundColor: "#ffffff", color: "#B150C5" }}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base shadow-md hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap w-full md:w-auto"
            >
              Réserver ma place
            </button>
          </div>
        </div>
      </Container>

      {/* Navigation Arrows (Left/Right) - Absolutely positioned */}
      <button
        style={{ backgroundColor: isRightHovered ? "#B150C5" : "transparent" }}
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}
        onClick={() => router.push("/programme/jour3")}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all z-30 cursor-pointer hover:border-white/40 active:scale-90 hover:scale-105"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
};
