import { Container } from "@/core/components/Container";
import dotMap from "@/core/assets/Dot Map.png";
import adekeLogo from "@/core/assets/ADEKE group.jpeg";
import genukaLogo from "@/core/assets/genuka.png";
import kenyaLogo from "@/core/assets/Kenya Airways@72x.png";
import gozemLogo from "@/core/assets/gozem.jpg";
import studelyLogo from "@/core/assets/studely.jpg";
import mandaLogo from "@/core/assets/Manda .jpeg";
import minjecLogo from "@/core/assets/minjec.jpg";
import minefopLogo from "@/core/assets/minefop.jpg";
import minpmeesaLogo from "@/core/assets/Logo MINPMEESA.jpeg";
import winLogo from "@/core/assets/WIN PNG.png";
import citLogo from "@/core/assets/CIT logo L.jpg.jpeg";
import feminineLogo from "@/core/assets/feminine.jpg";
import essecLogo from "@/core/assets/ESSEC.jpg";
import cameroonCeoLogo from "@/core/assets/cameroun-ceo.png";
import { Button } from "@/core/components/Button";


const categories = [
  {
    title: "Partenaires Institutionnels",
    logos: [minjecLogo.src, minefopLogo.src, minpmeesaLogo.src],
  },
  {
    title: "Partenaires Corporate",
    logos: [adekeLogo.src, genukaLogo.src, mandaLogo.src, kenyaLogo.src, gozemLogo.src, studelyLogo.src],
  },
  {
    title: "Partenaires Associations",
    logos: [winLogo.src, citLogo.src, feminineLogo.src],
  },
  {
    title: "Partenaires Académiques",
    logos: [essecLogo.src],
  },
  {
    title: "Partenaires Media",
    logos: [cameroonCeoLogo.src],
  },
];


const LogoCard = ({ src }: { src: string }) => (
  <div
    className="
      shrink-0
      bg-white border border-gray-100
      shadow-[0_2px_8px_rgba(0,0,0,0.04)]
      w-[160px] h-[68px]
      flex items-center justify-center
      px-5
      hover:shadow-md
      transition-all duration-300
      hover:scale-105
      cursor-pointer
      mx-3
    "
  >
    <img
      src={src}
      alt="Partner Logo"
      className="opacity-90 max-w-full max-h-full object-contain pointer-events-none"
    />
  </div>
);


type RowProps = {
  title: string;
  logos: string[];
  direction: "left" | "right";
};

const CarouselRow = ({ title, logos, direction }: RowProps) => {
  const isStatic = logos.length < 3;
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* Category label */}
      <h3 className="text-[1.35rem] md:text-[1.5rem] font-bold text-[#126DB1] text-center">
        {title}
      </h3>

      {/* Scrolling track — overflow hidden, pause animation on hover */}
      <div className="carousel-track w-full overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {isStatic ? (
          <div className="flex justify-center gap-6 py-4 px-4">
            {logos.map((src, idx) => (
              <LogoCard key={idx} src={src} />
            ))}
          </div>
        ) : (
          <div
            className={`flex w-max py-2 ${direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
              }`}>
            {loopedLogos.map((src, idx) => (
              <LogoCard key={idx} src={src} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const PartnersSection = () => {
  return (
    <section id="partenaires" className="bg-white">
      {/* Top Blue Header Block */}
      <div className="bg-[#126DB1] text-white py-20 relative overflow-hidden bg-gradient-to-b from-[#2998e3] to-[#126DB1]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={dotMap.src}
            alt=""
            className="w-full h-full object-cover md:object-contain object-center scale-150 md:scale-100 mix-blend-overlay"
          />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase text-white leading-[1.1] tracking-tight mb-4">
            PARTENAIRES
          </h2>
          <p className="text-xl md:text-[1.75rem] font-medium text-white max-w-4xl px-4 leading-snug">
            Des organisations engagées aux
            <br className="hidden md:block" /> côtés de{" "}
            <span className="font-extrabold">F-UNION</span>
          </p>
        </Container>
      </div>

      {/* Carousel rows */}
      <div className="py-20 bg-white">
        <Container className="flex flex-col items-center max-w-7xl mx-auto px-4">
          <div className="w-full flex flex-col gap-14 mb-20">
            {categories.map((category, index) => (
              <CarouselRow
                key={index}
                title={category.title}
                logos={category.logos}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button
              variant="blue"
              className="px-10 py-3 rounded-full font-semibold text-[15px] bg-gradient-to-l from-[#195277] to-[#2E99DD] text-white hover:bg-[#126DB1] border-none shadow-md tracking-wide"
            >
              Reserver ma place
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};
