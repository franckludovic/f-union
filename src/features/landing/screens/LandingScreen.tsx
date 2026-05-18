import { HeroSection } from "@/features/landing/components/HeroSection";
import { WhySection } from "@/features/landing/components/WhySection";
import { MissionSection } from "@/features/landing/components/MissionSection";
import { ProgrammeSection } from "@/features/landing/components/ProgrammeSection";
import { OffersSection } from "@/features/landing/components/OffersSection";
import { SpeakersSection } from "@/features/landing/components/SpeakersSection";
import { PartnersSection } from "@/features/landing/components/PartnersSection";

export const LandingScreen = () => {
  const articles = [
    {
      text: "F-Union Africa Summit : le grand rendez-vous de l'innovation et de l'entrepreneuriat à Dakar en Mars 2026",
      date: "12 Octobre 2025"
    },
    {
      text: "Startups africaines : comment lever des fonds et développer son entreprise sur le continent ?",
      date: "05 Novembre 2025"
    },
    {
      text: "Le boom de la tech en Afrique de l'Ouest : focus sur le Sénégal, la Côte d'Ivoire et le Bénin",
      date: "22 Décembre 2025"
    }
  ];

  return (
    <main>
      <HeroSection />
      <WhySection />
      <MissionSection />
      <ProgrammeSection />
      <SpeakersSection />
      <PartnersSection />
      <OffersSection />

    </main>
  );
};
