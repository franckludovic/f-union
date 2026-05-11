import { SpeakerProfile } from "../types";
import AurelieChazai from "@/core/assets/aurelie-chazai.png";
import ChristianTchoupe from "@/core/assets/christian-tchoupe.png";
import ErikaWilson from "@/core/assets/erika-wilson.jpg";
import HonoreNkouel from "@/core/assets/honore-nkouel.jpeg";
import JocelyneNgassam from "@/core/assets/jocelyne-ngassam.jpg";
import ManuelaKAMADJOU from "@/core/assets/manuela-kamadjou.jpg";
import MeGaelleNGUE from "@/core/assets/me-gaelle-ngue.jpg";
import PechensDOUMBE from "@/core/assets/pechens-doumbe.jpg";
import PriscaHeuya from "@/core/assets/prisca-heuya.png";
import ThierryNtamack from "@/core/assets/thierry-ntamack.jpg";
import AnabelleKOUNG from "@/core/assets/anabelle-koung.jpeg";
import AurelieGuifo from "@/core/assets/aurelie-guifo.jpg";
import EdithNkenHOT from "@/core/assets/edithe-nken-hot.jpg";
import LindaNganko from "@/core/assets/linda-nganko.jpeg";
import RoseDika from "@/core/assets/rose_dika.png";
import WilfriedDjopa from "@/core/assets/wilfried_djopa.jpg";
import JessicaMambo from "@/core/assets/jessica-mambo.jpeg";
import PatriciaMebara from "@/core/assets/Patricia-Mebara.jpg.jpeg";
import BelindaNgono from "@/core/assets/belinda-ngono.jpeg";
import SerangeEbala from "@/core/assets/Serange-Ebala.jpeg";
import EvaYoumbi from "@/core/assets/Eva-Youmbi.jpeg";
import DianeAudreyNgako from "@/core/assets/Diane-Audrey-Ngako.jpeg";
import PaolaYoko from "@/core/assets/Paola-Yoko.jpeg";
import RodolphaBwanga from "@/core/assets/Rodolpha-Bwanga.jpeg";
import ChantalEdie from "@/core/assets/Chantal-Edie.jpeg";
import CarineDIkambi from "@/core/assets/Carine-DIkambi.jpg";
import LydieNgoNogol from "@/core/assets/Lydie-Ngo-Nogol.jpg";
import AimeeCatherineMoukouri from "@/core/assets/Aimée-Catherine-Moukouri.jpg";

export const SPEAKER_PROFILES: SpeakerProfile[] = [
  {
    id: "aurelie-chazai",
    name: "Aurélie Chazai",
    role: "Avocate & Managing Partner",
    description: "Fondatrice de Chazai Wamba, spécialisée en droit financier, droit des affaires et fiscalité.",
    imageUrl: AurelieChazai.src,
    bio: "Aurélie Chazai est une avocate camerounaise inscrite aux Barreaux du Cameroun et de Paris. Elle est titulaire d’un master 2 recherche en droit financier et d’un master 2 professionnel en droit des affaires et fiscalité, obtenus à l’Université de Paris 1 Panthéon-Sorbonne. En novembre 2017, après avoir exercé au sein de plusieurs cabinets d’avocats internationaux de premier plan à Paris, elle fonde le cabinet d’avocats Chazai & Partners, devenu Chazai Wamba, dont elle est aujourd’hui Managing Partner.",
    sessions: [
      {
        id: "j2_s5",
        title: "Workshop : Scale Up Room",
        href: "/programme/jour2#j2_s5"
      }
    ]
  },
  {
    id: "thierry-ntamack",
    name: "Thierry Ntamack",
    role: "Acteur, réalisateur & coach en prise de parole",
    description: "Acteur et réalisateur camerounais engagé dans la préparation média des dirigeants.",
    imageUrl: ThierryNtamack.src,
    bio: "Thierry Ntamack est un acteur, réalisateur, scénariste et producteur de cinéma camerounais, reconnu pour ses rôles dans des films comme Le Blanc d’Eyenga et La Patrie d’Abord. Formé aux arts du spectacle à l’Université de Yaoundé puis au Cours Florent, il accompagne aujourd’hui les dirigeants dans leur prise de parole en public.",
    sessions: [
      {
        id: "j2_s7",
        title: "Workshop préparation média",
        href: "/programme/jour2#j2_s7"
      }
    ]
  },
  {
    id: "edith-nken-hot",
    name: "Edithe Nken Hot",
    role: "Consultante en stratégie commerciale",
    description: "Consultante spécialisée en croissance commerciale et développement humain des entreprises.",
    imageUrl: EdithNkenHOT.src,
    bio: "Edithe Nken Hot est consultante spécialisée en croissance commerciale et développement humain des entreprises; directrice générale Univers Internes. Elle inspire, outille et accompagne les dirigeants et professionnels à transformer leurs objectifs en résultats concrets.",
    sessions: [
      {
        id: "j2_s8",
        title: "ATELIER VIP : Leadership Styling",
        href: "/programme/jour2#j2_s8"
      }
    ]
  },
  {
    id: "gaelle-ngue",
    name: "Gaëlle Ngue",
    role: "Avocate associée",
    description: "Avocate spécialiste du droit des affaires, de la gouvernance et de la conformité réglementaire.",
    imageUrl: MeGaelleNGUE.src,
    bio: "Gaëlle Ngue est avocate, membre du Barreau du Cameroun et du Barreau du Québec. Elle est l’associée gérante du cabinet Ngue & Associés, basé au Cameroun, dont la pratique est axée sur le droit des affaires, la gouvernance d’entreprise, le droit OHADA et la conformité réglementaire.",
    sessions: [
      {
        id: "j2_s8",
        title: "ATELIER VIP : Leadership Styling",
        href: "/programme/jour2#j2_s8"
      }
    ]
  },
  {
    id: "rose-dika",
    name: "Rose Dika",
    role: "PMO F-Union Africa Summit 2",
    description: "PMO F-Union Africa Summit 2",
    imageUrl: RoseDika.src,
    bio: "",
    sessions: [
      {
        id: "j2_s8",
        title: "ATELIER VIP : Leadership Styling",
        href: "/programme/jour2#j2_s8"
      }
    ]
  },
  {
    id: "linda-nganko",
    name: "Linda Loretta Nganko",
    role: "Experte RH",
    description: "Experte RH reconnue, fondatrice de 2LN Expertise et promotrice du leadership humain.",
    imageUrl: LindaNganko.src,
    bio: "Linda est une experte RH reconnue à l'échelle africaine, avec plus de 20 ans d'expérience RH, notamment au sein de MTN Cameroon et du Groupe Activa. Elle a fondé 2LN Expertise, un laboratoire RH proposant des outils et conseils pour les experts RH.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "aurelie-guifo",
    name: "Aurélie Guifo",
    role: "Juriste & banquière",
    description: "Juriste de formation doublée d’une expérience bancaire, engagée dans l’accompagnement des jeunes femmes africaines.",
    imageUrl: AurelieGuifo.src,
    bio: "Juriste de formation et banquière avec plus de quinze ans d'expérience, Aurélie Guifo est passionnée d'afrochic et animée par la recherche du beau, de l'authentique et de l'harmonie. Elle met un accent particulier sur le mentorat et le développement des soft skills.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "manuela-kamadjou",
    name: "Manuela Kamadjou",
    role: "Managing Director & lifestyle expert",
    description: "Managing Director de KEBE Group, consultante business et expert lifestyle.",
    imageUrl: ManuelaKAMADJOU.src,
    bio: "Manuela Kamadjou est Managing Director du groupe KEBE, consultante business et lifestyle industry expert.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  
  {
    id: "anabelle-koung",
    name: "Anabelle KOUNG",
    role: "Modératrice",
    description: "Responsable de l'innovation et de la stratégie, experte de la transformation des organisations.",
    imageUrl: AnabelleKOUNG.src,
    bio: "Anabelle Koung est une professionnelle de l’innovation et de la stratégie, évoluant au croisement de l’assurance, du développement de produits et de la transformation des organisations.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "erika-wilson",
    name: "Erika Wilson",
    role: "Experte RSE",
    description: "Experte en responsabilité sociétale des entreprises, certifiée AFNOR et EDHEC.",
    imageUrl: ErikaWilson.src,
    bio: "Erika Wilson est experte en Responsabilité Sociétale des Entreprises, certifiée AFNOR et EDHEC Business School. Elle pilote des projets RSE et de communication institutionnelle à fort impact.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "honore-nkouel",
    name: "Honoré Nkouel",
    role: "Directeur RH Central Africa",
    description: "Expert RH et leader de la transformation des ressources humaines en Afrique centrale.",
    imageUrl: HonoreNkouel.src,
    bio: "Honoré NKOUEL est Expert RH et Directeur des Ressources Humaines pour l’Afrique centrale chez CFAO INFRASTRUCTURE. Fort de plus de 16 ans d’expérience, il incarne une nouvelle génération de DRH pragmatique et visionnaire.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "christian-tchoupe",
    name: "Christian Tchoupe",
    role: "Account Manager",
    description: "Expert en transformation digitale des institutions financières en Afrique centrale.",
    imageUrl: ChristianTchoupe.src,
    bio: "Christian Tchoupe est Account Manager chez SBS Software, où il accompagne des institutions financières majeures dans leurs projets de transformation digitale en Afrique centrale.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "pechens-pokossy-doumbe",
    name: "Pechens Pokossy Doumbe",
    role: "Pharmacienne & entrepreneure",
    description: "Docteure en pharmacie et créatrice de contenu santé, fondatrice d’AfrikMed.",
    imageUrl: PechensDOUMBE.src,
    bio: "Dr Pechens POKOSSY DOUMBE est pharmacienne, entrepreneure et créatrice de contenu. Elle est propriétaire de la Pharmacie du Centre à Douala et membre de la cohorte 2025 Enovation Factory.",
    sessions: [
      {
        id: "j3_s1",
        title: "1:1 MENTORAT",
        href: "/programme/jour3#j3_s1"
      }
    ]
  },
  {
    id: "prisca-heuya",
    name: "Prisca Heuya",
    role: "Fondatrice",
    company: "KEM Care",
    description: "Entrepreneure engagée dans la transformation des matières premières africaines en marques puissantes.",
    imageUrl: PriscaHeuya.src,
    bio: "Prisca HEUYA est entrepreneure camerounaise engagée dans la transformation des matières premières africaines en marques à forte valeur ajoutée. Fondatrice de Kem Care, elle développe des produits capillaires naturels à partir d'ingrédients locaux.",
    sessions: [
      {
        id: "j3_s9",
        title: "AFTER DARK CLOTURE : FLASH TALK",
        href: "/programme/jour3#j3_s9"
      }
    ]
  },
  {
    id: "wilfried-djopa",
    name: "Wilfried Djopa",
    role: "Founder & CEO de Genuka",
    company: "Genuka",
    description: " ",
    imageUrl: WilfriedDjopa.src,
    bio: " ",
    sessions: [
      {
        id: "j2_s5",
        title: "Workshop : Scale Up Room – 5 entrepreneurs, 5 défis stratégiques, face à un panel d’experts",
        href: "/programme/jour2#j2_s5"
      }
    ]  },
  {
    id: "jessica-mambo",
    name: "Jessica Mambo",
    role: "Évangéliste de l'emploi & Spécialiste RH",
    description: "Accompagnement des talents et spécialiste de l'insertion professionnelle en Afrique.",
    imageUrl: JessicaMambo.src,
    bio: "Évangéliste de l'emploi et spécialiste de l'insertion professionnelle, Jessica accompagne le développement des talents et l'employabilité. Experte en ressources humaines dédiée aux TPE/PME africaines, elle met son savoir-faire au service de la performance organisationnelle. Fondatrice d'« Égalité Pour Tous », elle œuvre pour une inclusion professionnelle plus juste et équitable.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd'hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "patricia-mebara",
    name: "Patricia MEBARA",
    role: "Présidente de CIT",
    description: "Leader dans le secteur technologique et du développement des carrières.",
    imageUrl: PatriciaMebara.src,
    bio: "",
    sessions: [
      {
        id: "j2_s4",
        title: "Table Ronde : Faire carrière dans la Tech",
        href: "/programme/jour2#j2_s4"
      }
    ]
  },
  {
    id: "belinda-ngono",
    name: "Belinda Ngono",
    role: "Regional Business Development Lead",
    description: "Directrice du développement commercial pour l'Afrique francophone.",
    imageUrl: BelindaNgono.src,
    bio: "",
    sessions: [
      {
        id: "j2_s4",
        title: "Table Ronde : Faire carrière dans la Tech",
        href: "/programme/jour2#j2_s4"
      }
    ]
  },
  {
    id: "serange-ebala",
    name: "Serange Clélia Ebela Abena",
    role: "Ingénieure en Télécommunications & Fondatrice",
    company: "InspireTech SARL",
    description: "Ingénieure et femme entrepreneur dédiée à la vulgarisation technologique en Afrique.",
    imageUrl: SerangeEbala.src,
    bio: "Née à Bafoussam, Serange est une ingénieure en télécommunications, femme entrepreneur et mère de deux enfants. Elle consacre son énergie à vulgariser la technologie pour faciliter la vie des Camerounais. Fondatrice d'InspireTech SARL spécialisée en déploiement d'infrastructures réseau et intégration IT, elle bâtit un écosystème numérique camerounais plus inclusif et résolument tourné vers l'avenir.",
    sessions: [
      {
        id: "j3_s1",
        title: "1:1 MENTORAT",
        href: "/programme/jour3#j3_s1"
      }
    ]
  },
  {
    id: "eva-youmbi",
    name: "Eva Youmbi",
    role: "Directrice des Marchés de Capitaux",
    company: "FedhEn Capital",
    description: "Experte en finances, marchés de capitaux et inclusion financière en Afrique.",
    imageUrl: EvaYoumbi.src,
    bio: "Eva Youmbi est Directrice des marchés de capitaux chez FedhEn Capital, où elle accompagne des États et des entreprises stratégiques dans leurs opérations de financement. Diplômée de ESCP Business School et certifiée en inclusion financière par le FMI, elle s'intéresse au développement des marchés financiers africains et à l'accès au financement pour les PME et les jeunes entrepreneurs.",
    sessions: [
      {
        id: "j2_s10",
        title: "Investment Corner Powered by WIN",
        href: "/programme/jour2#j2_s10"
      }
    ]
  },
  {
    id: "diane-audrey-ngako",
    name: "Diane Audrey Ngako",
    role: "Experte Marketing & Entrepreneuriat",
    description: "Entrepreneur et experte en stratégies commerciales et marketing.",
    imageUrl: DianeAudreyNgako.src,
    bio: "",
    sessions: [
      {
        id: "j2_s5",
        title: "Workshop : Scale Up Room – 5 entrepreneurs, 5 défis stratégiques, face à un panel d'experts",
        href: "/programme/jour2#j2_s5"
      }
    ]
  },
  {
    id: "paola-yoko",
    name: "Paola Yoko",
    role: "Productrice, Manageuse & Entrepreneure",
    description: "Leader dans les industries culturelles et créatives en Afrique.",
    imageUrl: PaolaYoko.src,
    bio: "Paola Yoko est une productrice et manageuse engagée dans le développement des industries culturelles et des dynamiques d'insertion professionnelle en Afrique. Fondatrice du label LVL UP CORP, elle accompagne le développement de carrières artistiques et la structuration de projets musicaux. Cofondatrice et Secrétaire Générale de l'ADCC, elle développe une approche transversale connectant industries culturelles, formation professionnelle et opportunités économiques.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]
  },
  {
    id: "rodolpha-bwanga",
    name: "Rodolpha Bwanga",
    role: "Directrice Générale",
    company: "Trace Cameroun",
    description: "Leader dans les industries culturelles et créatives, spécialisée dans la promotion de la musique africaine.",
    imageUrl: RodolphaBwanga.src,
    bio: "Rodolpha Bwanga est Directrice Générale de Trace Cameroun, filiale du groupe TRACE. Depuis près de dix ans, elle contribue au développement de projets valorisant la musique, les talents et les expressions culturelles africaines. Engagée pour la promotion de l'entrepreneuriat et de la créativité, elle s'intéresse au rôle des industries culturelles comme levier économique pour l'Afrique.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]
  },
  {
    id: "chantal-edie-ntube",
    name: "Chantal Edie Ntube",
    role: "Photographe, Écrivaine & Curatrice",
    description: "Artiste camerounaise engagée pour l'art comme outil de changement social.",
    imageUrl: ChantalEdie.src,
    bio: "Chantal Edie Ntube est une photographe, écrivaine et curatrice camerounaise engagée pour l'art comme outil de changement social. Co-fondatrice de The Forest Creative Loft, elle travaille artistiquement avec son partenaire en photographie performative sur les enjeux socio-politiques. Fondatrice de 'African Woman in Photography', elle crée des plateformes de dialogue, de transformation et d'inclusion dans les industries créatives.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]  
  },
  {
    id: "carine-dikambi",
    name: "Carine Dikambi",
    role: "Intervenante",
    description: "Travaille pour le CIT.",
    imageUrl: CarineDIkambi.src,
    bio: "---.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]  
  },
  {
    id: "lydie-ngo-nogol",
    name: "Lydie Ngo Nogol",
    role: "Intervenante",
    description: "Travaille pour le CIT.",
    imageUrl: LydieNgoNogol.src,
    bio: "--.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]  
  },
  {
    id: "aimee-catherine-moukouri",
    name: "Aimée Catherine Moukouri",
    role: "Modératrice",
    description: "--.",
    imageUrl: AimeeCatherineMoukouri.src,
    bio: "--.",
    sessions: [
      {
        id: "j2_s6",
        title: "Table Ronde : Leadership féminin dans l'industrie créative",
        href: "/programme/jour2#j2_s6"
      }
    ]  
  }
];

export const SPEAKER_PROFILE_MAP = SPEAKER_PROFILES.reduce<Record<string, SpeakerProfile>>((map, speaker) => {
  map[speaker.name.toLowerCase()] = speaker;
  return map;
}, {} as Record<string, SpeakerProfile>);
