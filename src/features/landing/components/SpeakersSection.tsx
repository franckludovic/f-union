import Link from "next/link";
import { Container } from "@/core/components/Container";
import { SpeakerProfileCard } from "@/features/speakers/components/SpeakerProfileCard";
import { SPEAKER_PROFILES } from "@/features/speakers/constants/speakers";
import dotMap from "@/core/assets/Dot Map.png";

export const SpeakersSection = () => {
  return (
    <section id="speakers" className="bg-[#f9fafb]">

        <div className="bg-[#1b0a3d] text-white py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={dotMap.src} alt="" className="w-full h-full object-cover object-center scale-125 md:scale-100 mix-blend-overlay" />
          </div>
          <Container className="relative z-10 text-center flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tight drop-shadow-md">
              ILS ONT LA PAROLE
            </h2>
            <p className="text-xl md:text-2xl lg:text-[1.35rem] font-bold text-white max-w-4xl px-4 leading-snug">
              Rencontres, sessions d’échanges et expériences conçues pour prolonger les discussions et transformer les idées en collaborations concrètes.
            </p>
          </Container>
        </div>


      <Container className="pt-16 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {SPEAKER_PROFILES.slice(0, 6).map((speaker) => (
            <SpeakerProfileCard
              key={speaker.id}
              speaker={speaker}
            />
          ))}
        </div>

        <div className="mt-15 flex justify-center">
          <Link href="/speakers" prefetch={false}>
            <span className="bg-[#1b0a3d] text-white px-10 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-[#2b165d] transition-colors mt-8 inline-flex items-center justify-center">
              Voir Plus
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};
