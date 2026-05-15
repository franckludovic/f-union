"use client";

import { useState } from "react";
import { HeroSectionJour3 } from "../components/HeroSectionJour3";
import { ProgrammeView } from "../components/ProgrammeView";
import { SpeakerModal } from "@/features/speakers/components/SpeakerModal";
import { SPEAKER_PROFILES } from "@/features/speakers/constants/speakers";
import { SpeakerProfile } from "@/features/speakers/types";
import { JOUR_3_SESSIONS } from "../constants";

export const Jour3Screen = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<SpeakerProfile | null>(null);

  return (
    <>
      <HeroSectionJour3 />
      <ProgrammeView
        sessions={JOUR_3_SESSIONS}
        googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSdyaZmTc2lu4TO4dhqxQtycLUT4JaMHVvDWzmwfyKWWMst0AA/viewform?embedded=true"
        speakerProfiles={SPEAKER_PROFILES}
        onSpeakerClick={setActiveSpeaker}
        pdfUrl="/pdfs/programme-jour3.pdf"
        pdfFileName="Programme-F-UNION-Jour-3.pdf"
        showSpeakers={false}
      />
      <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
    </>
  );
};
