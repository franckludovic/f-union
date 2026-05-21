"use client";

import { Session, Speaker } from "../types";
import { SpeakerProfile } from "@/features/speakers/types";
import { SPEAKER_PROFILE_MAP } from "@/features/speakers/constants/speakers";

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: '#0F2E4C', flexShrink: 0 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: '#0F2E4C', flexShrink: 0 }}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
  </svg>
);

interface SpeakerInfoProps {
  speaker: Speaker;
}

const SpeakerItem = ({ speaker }: SpeakerInfoProps) => (
  <div className="flex flex-col items-center text-center gap-3 min-w-[72px]">
    <div
      style={{
        width: '72px',
        height: '72px',
        borderRadius: '16px',
        overflow: 'hidden',
        flexShrink: 0,
        backgroundColor: '#F0F2F5',
        border: '1px solid #F0F2F5'
      }}
      className="shadow-sm group-hover:shadow-md transition-shadow duration-300"
    >
      <img
        src={speaker.imageUrl || "https://via.placeholder.com/150"}
        alt={speaker.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="flex flex-col">
      <span style={{ fontWeight: 800, color: '#0F2E4C', fontSize: '13px', lineHeight: '1.2' }} className="md:text-sm">
        {speaker.name}
      </span>
      <span style={{ color: '#5E7184', fontSize: '11px', fontWeight: 500 }} className="md:text-xs">
        {speaker.gender || speaker.role}
      </span>
    </div>
  </div>
);

interface SessionCardProps {
  session: Session;
  speakerProfiles?: SpeakerProfile[];
  onSpeakerClick?: (speaker: SpeakerProfile) => void;
  showSpeakers?: boolean;
}

export const SessionCard = ({ session, speakerProfiles = [], onSpeakerClick, showSpeakers = true }: SessionCardProps) => {
  return (
    <div id={session.id} className="py-10 md:py-16" style={{
      borderBottom: '1.5px solid #F0F0F0',
    }}>
      {/* Main Layout Flex Container: Responsive stack on mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-5 w-full">

        {/* LEFT: Session Info (Title + Details) */}
        <div className="w-full md:max-w-[55%] flex flex-col">
          <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-black mb-10 leading-[1.1] md:leading-[1.05] tracking-tight" style={{
            color: '#B0571F',
            letterSpacing: '-0.03em',
            margin: '0 0 40px 0',
            fontFamily: 'inherit'
          }}>
            {session.title}
          </h3>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-auto">
            <div className="flex items-center gap-3">
              <LocationIcon />
              <span style={{ color: '#0F2E4C', fontWeight: 700, fontSize: '16px' }} className="md:text-[1.1rem]">{session.hall}</span>
            </div>

            <div className="flex items-center gap-3">
              <ClockIcon />
              <span style={{ color: '#0F2E4C', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase' }} className="md:text-[1.1rem]">
                {session.startTime} - {session.endTime}
              </span>
            </div>

            {session.cible && (
              <div className="rounded-full bg-[#F4F5F7] px-3 py-2 border border-[#E6E9EE]">
                <span style={{ color: '#0F2E4C', fontWeight: 700, fontSize: '14px' }} className="uppercase tracking-[0.06em]">
                  Cible : {session.cible}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Speakers Section - Grid Layout */}
        {showSpeakers && (
          <div className="w-full md:w-auto flex flex-col pt-10 md:pt-0">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-x-0 gap-y-10 items-start">
              {session.speakers
                .filter((speaker) => speaker.visible !== false)
                .map((speaker) => {
                  const profile = SPEAKER_PROFILE_MAP[speaker.name.toLowerCase()] || speakerProfiles.find((item) => item.name.toLowerCase() === speaker.name.toLowerCase());
                  const clickAction = profile ? () => onSpeakerClick?.(profile) : undefined;

                  return (
                  <div
                    key={speaker.id}
                    className={`flex flex-col items-center text-center gap-3 min-w-[72px] ${profile ? 'cursor-pointer group' : 'opacity-70'}`}
                    onClick={clickAction}
                    role={profile ? 'button' : undefined}
                    tabIndex={profile ? 0 : undefined}
                    onKeyDown={profile ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        clickAction?.();
                      }
                    } : undefined}
                  >
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        backgroundColor: '#F0F2F5',
                        border: '1px solid #F0F2F5'
                      }}
                      className={`shadow-sm transition-shadow duration-300 ${profile ? 'group-hover:shadow-md' : ''}`}
                    >
                      <img
                        src={profile?.imageUrl || speaker.imageUrl || "https://via.placeholder.com/150"}
                        alt={speaker.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className={`transition-transform duration-500 ${profile ? 'group-hover:scale-110' : ''}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span style={{ fontWeight: 800, color: '#0F2E4C', fontSize: '13px', lineHeight: '1.2' }} className="md:text-sm">
                        {speaker.name}
                      </span>
                      <span style={{ color: '#5E7184', fontSize: '11px', fontWeight: 500 }} className="md:text-xs">
                        {speaker.gender || speaker.role}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
