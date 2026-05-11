import { Session } from "../types";
import intervenant1 from "@/core/assets/intervenant1.png";
import intervenant2 from "@/core/assets/intervenant2.png";
import intervenant3 from "@/core/assets/intervenant3.png";
import intervenant4 from "@/core/assets/intervenant4.png";
import intervenant5 from "@/core/assets/intervenant5.png";
import intervenant6 from "@/core/assets/intervenant6.png";
import intervenant7 from "@/core/assets/intervenant7.png";
import intervenant8 from "@/core/assets/intervenant8.png";
import AurelieChazai from "@/core/assets/aurelie-chazai.png";
import ThierryNtamack from "@/core/assets/thierry-ntamack.jpg";
import EditheNkenHOT from "@/core/assets/edithe-nken-hot.jpg";
import GaelleNgue from "@/core/assets/me-gaelle-ngue.jpg";
import AurelieGuifo from "@/core/assets/aurelie-guifo.jpg";
import ManuelaKAMADJOU from "@/core/assets/manuela-kamadjou.jpg";
import LindaNganko from "@/core/assets/linda-nganko.jpeg";
import AnabelleKOUNG from "@/core/assets/anabelle-koung.jpeg";
import ErikaWilson from "@/core/assets/erika-wilson.jpg";
import HonoreNkouel from "@/core/assets/honore-nkouel.jpeg";
import ChristianTchoupe from "@/core/assets/christian-tchoupe.png";
import PechensDOUMBE from "@/core/assets/pechens-doumbe.jpg";
import PriscaHeuya from "@/core/assets/prisca-heuya.png";
import JocelyneNgassam from "@/core/assets/jocelyne-ngassam.jpg";
import RoseDika from "@/core/assets/rose_dika.png";
import WilfriedDjopa from "@core/assets/wilfried_djopa.jpg";
import CarineDIkambi from "@/core/assets/Carine-DIkambi.jpg";
import LydieNgoNogol from "@/core/assets/Lydie-Ngo-Nogol.jpg";
import AimeeCatherineMoukouri from "@/core/assets/Aimée-Catherine-Moukouri.jpg";

export const JOUR_1_SESSIONS: Session[] = [
  {
    id: "s1",
    title: "Cérémonie d'ouverture",
    hall: "Salle 2",
    startTime: "08:30",
    endTime: "09:30",
    speakers: [
      {
        id: "sp1",
        name: "Ursule Wonje",
        role: "Feminie",
        imageUrl: intervenant1.src
      },
      {
        id: "sp2",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant2.src
      }
    ]
  },
  {
    id: "s2",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 1",
    startTime: "09:30",
    endTime: "10:30",
    speakers: [
      {
        id: "sp3",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant3.src
      },
      {
        id: "sp4",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src
      },
      {
        id: "sp5",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src
      },
      {
        id: "sp6",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant6.src
      }
    ]
  },
  {
    id: "s3",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 1",
    startTime: "10:45",
    endTime: "11:45",
    speakers: [
      {
        id: "sp7",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant7.src
      },
      {
        id: "sp8",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant8.src
      },
      {
        id: "sp9",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant1.src
      }
    ]
  },
  {
    id: "s4",
    title: "Quels sont les premiers étapes pour travailler sa visibilite",
    hall: "Salle 2",
    startTime: "12:00",
    endTime: "13:00",
    speakers: [
      {
        id: "sp10",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant2.src
      },
      {
        id: "sp11",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant3.src
      },
      {
        id: "sp12",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src
      },
      {
        id: "sp13",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src
      }
    ]
  }
];

export const JOUR_2_SESSIONS: Session[] = [
  {
    id: "j2_s1",
    title: "Accueil & Installation",
    hall: "Conference Hall 1",
    startTime: "08:30",
    endTime: "09:30",
    cible: "All",
    speakers: []
  },
  {
    id: "j2_s2",
    title: "Plénière d’ouverture",
    hall: "Conference Hall 1",
    startTime: "09:30",
    endTime: "11:30",
    cible: "All",
    speakers: [
      { id: "sp_j2_2_1", name: "Henriette Ekwe", role: "Journaliste", imageUrl: intervenant1.src },
      { id: "sp_j2_2_2", name: "Kah Walla", role: "CEO at STRATEGIES", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j2_s3",
    title: "Table Ronde : Leadership féminin, talents et performance économique : quels enjeux réels pour le Cameroun ?",
    hall: "Conference Hall 1",
    startTime: "11:30",
    endTime: "13:00",
    cible: "All",
    speakers: [
      { id: "sp_j2_3_1", name: "Stella Onana Oyono", role: "Modératrice | Strategic Advisor", imageUrl: intervenant3.src },
      { id: "sp_j2_3_2", name: "Pr Viviane Ondoua", role: "Directrice du programme GPE-Cameroun", imageUrl: intervenant4.src },
      { id: "sp_j2_3_3", name: "Gwendoline Abunaw", role: "MD Cameroon & CEMAC Cluster Head", imageUrl: intervenant5.src },
      { id: "sp_j2_3_4", name: "Hermine Dolores Boum", role: "Administratrice indépendante", imageUrl: intervenant6.src },
      { id: "sp_j2_3_5", name: "Paola Audrey", role: "Intervenante", imageUrl: intervenant7.src },
      { id: "sp_j2_3_6", name: "Ange Kouassi", role: "IFC", imageUrl: intervenant8.src }
    ]
  },
  {
    id: "j2_s4",
    title: "PANEL 1 : Faire carrière dans la tech et briser les plafonds de verre",
    hall: "Conference Hall 1",
    startTime: "14:00",
    endTime: "15:00",
    cible: "Next Gen",
    speakers: [
      { id: "sp_j2_4_2", name: "Lydie Ngo Nogol", role: "Intervenante", imageUrl: LydieNgoNogol.src },
      { id: "sp_j2_4_3", name: "Carine Dikambi", role: "Intervenante", imageUrl: CarineDIkambi.src },
      { id: "sp_j2_4_4", name: "Belinda NGONO", role: "Regional Business Development West & Central Francophone Africa", imageUrl: intervenant5.src },
      { id: "sp_j2_4_5", name: "Gozem representative", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_4_6", name: "Carine Dikambi", role: "----", imageUrl: CarineDIkambi.src },
      { id: "sp_j2_4_7", name: "Lydie Ngo Nogol", role: "----", imageUrl: LydieNgoNogol.src }

    ]
  },
  {
    id: "j2_s5",
    title: "Workshop : Scale Up Room – 5 entrepreneurs, 5 défis stratégiques, face à un panel d’experts",
    hall: "Conference Hall 1",
    startTime: "14:00",
    endTime: "15:00",
    cible: "Startups",
    speakers: [
      { id: "sp_j2_5_1", name: "Aurélie Chazai", role: "Expert Droit", imageUrl: AurelieChazai.src },
      { id: "sp_j2_5_2", name: "CCA representative", role: "Finance & Fiscalité", imageUrl: intervenant8.src },
      { id: "sp_j2_5_3", name: "QHSE TBC", role: "Expert QHSE", imageUrl: intervenant1.src },
      { id: "sp_j2_5_4", name: "Diane Audrey Ngako", role: "Marketing et Pub", imageUrl: intervenant2.src },
      { id: "sp_j2_5_5", name: "Genuka representative", role: "Digital Expert", imageUrl: intervenant3.src },
      { id: "sp_j2_5_6", name: "Wilfried Djopa", role: "Founder & CEO de Genuka", imageUrl: WilfriedDjopa.src },
    ]
  },
  {
    id: "j2_s6",
    title: "PANEL 2 : Leadership féminin dans les industries créatives : créer, influencer, engager",
    hall: "Conference Hall 1",
    startTime: "15:00",
    endTime: "16:00",
    cible: "All",
    speakers: [
      { id: "sp_j2_6_1", name: "Aimée Catherine Moukouri", role: "Modératrice", imageUrl: AimeeCatherineMoukouri.src },
      { id: "sp_j2_6_2", name: "Syndy Emade", role: "Award-winning Actress & Producer", imageUrl: intervenant5.src },
      { id: "sp_j2_6_3", name: "Sandrine Nanga", role: "Artiste", imageUrl: intervenant6.src },
      { id: "sp_j2_6_4", name: "Kameni", role: "Artiste", imageUrl: intervenant7.src },
      { id: "sp_j2_6_5", name: "Chantal Edie", role: "Documentarian & Curator", imageUrl: intervenant8.src },
      { id: "sp_j2_6_6", name: "Rodolpha Bwanga", role: "Deputy Managing Director | Commercial Strategy", imageUrl: intervenant1.src },
      { id: "sp_j2_6_7", name: "Comfort", role: "Kissy wears", imageUrl: intervenant2.src },
      { id: "sp_j2_6_8", name: "MOFEAC representative", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j2_6_9", name: "Aimée Catherine Moukouri ", role: "Modératrice ", imageUrl: AimeeCatherineMoukouri.src },


    ]
  },
  {
    id: "j2_s7",
    title: "Workshop : Un atelier pratique sur la préparation média avec Thierry Ntamack",
    hall: "Conference Hall 2",
    startTime: "15:00",
    endTime: "16:30",
    cible: "VIP",
    speakers: [
      { id: "sp_j2_7_1", name: "Thierry Ntamack", role: "Acteur, réalisateur & coach prise de parole", imageUrl: ThierryNtamack.src }
    ]
  },
  {
    id: "j2_s8",
    title: "ATELIER VIP : WorkShop sur le Leadership Styling : construire une image professionnelle claire, crédible et cohérente",
    hall: "Conference Hall 1",
    startTime: "16:00",
    endTime: "17:00",
    cible: "All",
    speakers: [
      { id: "sp_j2_8_1", name: "Rose Dika", role: "Modératrice", imageUrl: RoseDika.src },
      { id: "sp_j2_8_2", name: "Scensoria representative", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_8_3", name: "Edithe Nken Hot", role: "Founder and CEO | Strategic Marketing", imageUrl: EditheNkenHOT.src },
      { id: "sp_j2_8_4", name: "Gaelle Ngue", role: "Avocate Gérante", imageUrl: GaelleNgue.src },
      { id: "sp_j2_8_5", name: "Rose Dika", role: "PMO F-Union Africa Summit 2", imageUrl: RoseDika.src },
    ]
  },
  {
    id: "j2_s9",
    title: "F-UNION LOUNGE TALK : La solitude du Pouvoir",
    hall: "Conference Hall 2",
    startTime: "17:00",
    endTime: "18:00",
    cible: "VIP",
    speakers: [
      { id: "sp_j2_9_1", name: "Vanesse KAME", role: "Modératrice", imageUrl: intervenant1.src },
      { id: "sp_j2_9_2", name: "Esther Tiako", role: "Ex-DG et PCA CCA BANK", imageUrl: intervenant2.src },
      { id: "sp_j2_9_3", name: "Kate Fotso", role: "Speaker", imageUrl: intervenant3.src }
    ]
  },
  {
    id: "j2_s10",
    title: "F-UNION LOUNGE AFTERWORK",
    hall: "Terrasse",
    startTime: "18:00",
    endTime: "20:00",
    cible: "VIP",
    speakers: []
  }
];

export const JOUR_3_SESSIONS: Session[] = [
  {
    id: "j3_s1",
    title: "1:1 MENTORAT - Échanger, s’orienter et accélérer sa trajectoire professionnelle",
    hall: "Conference Hall 1",
    startTime: "08:00",
    endTime: "12:00",
    cible: "All",
    speakers: [
      { id: "sp_j3_1_1", name: "Pechens Pokossy Doumbe", role: "Pharmacienne & Fondatrice", imageUrl: PechensDOUMBE.src },
      { id: "sp_j3_1_2", name: "Hariett Muchu", role: "Mentor", imageUrl: intervenant2.src },
      { id: "sp_j3_1_3", name: "Camerounaises in Tech", role: "Mentor", imageUrl: intervenant3.src },
      { id: "sp_j3_1_4", name: "Jocelyne Ngassam", role: "Management & Commercial Expert", imageUrl: JocelyneNgassam.src },
      { id: "sp_j3_1_5", name: "Fadimatou Noutchemo", role: "Country Manager Cameroon & Nigeria", imageUrl: intervenant5.src },
      { id: "sp_j3_1_6", name: "Karen Naira Ngon", role: "Mentor", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s2",
    title: "F-Union Talents Africa 2035 Challenge – Pitch your future. Build Africa",
    hall: "conference Hall 3",
    startTime: "08:00",
    endTime: "11:30",
    cible: "Talent-Next Gen",
    speakers: []
  },
  {
    id: "j3_s3",
    title: "INVESTMENT CORNER POWERED BY WIN",
    hall: "Conference Hall 2",
    startTime: "10:30",
    endTime: "11:30",
    cible: "Startup",
    speakers: [
      { id: "sp_j3_3_1", name: "TBC", role: "Modératrice / Intervenante", imageUrl: intervenant7.src }
    ]
  },
  {
    id: "j3_s4",
    title: "Réinventer sa carrière : clés, défis et opportunités pour une transition professionnelle réussie",
    hall: "Conference Hall 2",
    startTime: "11:30",
    endTime: "12:30",
    cible: "Talent-Startup",
    speakers: [
      { id: "sp_j3_4_1", name: "Anabelle KOUNG", role: "Modératrice", imageUrl: AnabelleKOUNG.src },
      { id: "sp_j3_4_2", name: "Aurélie Guifo", role: "Directrice des Affaires Juridiques & Réglementaires", imageUrl: AurelieGuifo.src },
      { id: "sp_j3_4_3", name: "Manuela Kamadjou", role: "Managing Director | Wellbeing Entrepreneur", imageUrl: ManuelaKAMADJOU.src },
      { id: "sp_j3_4_4", name: "Linda Loretta Nganko", role: "Executive Group Human Capital Director", imageUrl: LindaNganko.src }
    ]
  },
  {
    id: "j3_s5",
    title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
    hall: "conference Hall 3",
    startTime: "14:00",
    endTime: "15:30",
    cible: "Talent-Next Gen",
    speakers: [
      { id: "sp_j3_5_1", name: "Jessica Mambo", role: "Modératrice", imageUrl: intervenant4.src },
      { id: "sp_j3_5_2", name: "Erika Wilson", role: "CSR & Impact Communications Leader", imageUrl: ErikaWilson.src },
      { id: "sp_j3_5_3", name: "Honoré Nkouel", role: "HR Director Central Africa", imageUrl: HonoreNkouel.src },
      { id: "sp_j3_5_4", name: "Laetissia Enonga", role: "CSR & Impact Leader", imageUrl: intervenant7.src },
      { id: "sp_j3_5_5", name: "Christian Tchoupe", role: "Account & Area Manager", imageUrl: ChristianTchoupe.src }
    ]
  },
  {
    id: "j3_s6",
    title: "ATELIER TRUE",
    hall: "Conference Hall 2",
    startTime: "14:00",
    endTime: "15:30",
    cible: "VIP",
    speakers: []
  },
  {
    id: "j3_s7",
    title: "PANEL : L’Écosystème Transgénérationnel : Réparer et bâtir l’économie de demain",
    hall: "Conference Hall 2",
    startTime: "15:30",
    endTime: "16:30",
    cible: "VIP",
    speakers: [
      { id: "sp_j3_7_1", name: "TBC", role: "Modératrice", imageUrl: intervenant1.src },
      { id: "sp_j3_7_2", name: "Marie Andre bembong sohaing", role: "IFC Investment Project Lead", imageUrl: intervenant2.src },
      { id: "sp_j3_7_3", name: "Henriette Noutchougouin", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j3_7_4", name: "Yelena N", role: "Digital Marketing & Operations Manager", imageUrl: intervenant4.src },
      { id: "sp_j3_7_5", name: "Patrice-Adèle Ekoka", role: "Directeur Régional", imageUrl: intervenant5.src },
      { id: "sp_j3_7_6", name: "Claudine Simo Mam", role: "Expert Comptable Diplomé", imageUrl: intervenant6.src }
    ]
  },
  {
    id: "j3_s8",
    title: "Le Grand Procès : Inclusion & ESG : ambitions, contraintes et réalités africaines",
    hall: "Conference Hall 1",
    startTime: "15:30",
    endTime: "16:30",
    cible: "All",
    speakers: [
      { id: "sp_j3_8_1", name: "Amandine Bonny", role: "Modératrice / Journaliste", imageUrl: intervenant7.src }
    ]
  },
  {
    id: "j3_s9",
    title: "AFTER DARK CLOTURE : FLASH TALK",
    hall: "Conference Hall 1",
    startTime: "17:30",
    endTime: "19:00",
    cible: "All",
    speakers: [
      { id: "sp_j3_9_1", name: "Siliki Nsangue", role: "Stratégie de communication & RSE", imageUrl: intervenant8.src },
      { id: "sp_j3_9_2", name: "Michaella Notche", role: "CEO Founder EHIA Consulting", imageUrl: intervenant1.src },
      { id: "sp_j3_9_3", name: "Prisca Heuya", role: "Fondatrice KEM Care", imageUrl: PriscaHeuya.src },
      { id: "sp_j3_9_4", name: "Caroline Ekeh", role: "General Counsel | Speaker", imageUrl: intervenant3.src },
      { id: "sp_j3_9_5", name: "Yolande Bodiong", role: "Chef d'entreprise | MARABOO & SUN+TV", imageUrl: intervenant4.src },
      { id: "sp_j3_9_6", name: "Jocelyne Ngassam", role: "Management & Commercial Expert", imageUrl: JocelyneNgassam.src }
    ]
  }
];


