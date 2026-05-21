"use client";

import { useState } from "react";
import { HeroSectionJour2 } from "../components/HeroSectionJour2";
import { ProgrammeView } from "../components/ProgrammeView";
import { SpeakerModal } from "@/features/speakers/components/SpeakerModal";
import { SPEAKER_PROFILES } from "@/features/speakers/constants/speakers";
import { SpeakerProfile } from "@/features/speakers/types";
import { JOUR_2_SESSIONS } from "../constants";

export const Jour2Screen = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<SpeakerProfile | null>(null);

  return (
    <>
      <HeroSectionJour2 />
      <ProgrammeView
        sessions={JOUR_2_SESSIONS}
        googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSfWC-pNHOnMojImIEF6qOnM66-d1p7z9M0bVGBgwBpcHDSzQQ/viewform?embedded=true"
        speakerProfiles={SPEAKER_PROFILES}
        onSpeakerClick={setActiveSpeaker}
        showSpeakers={true}
        dayIndex={1}
      />
      <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
    </>
  );
};
