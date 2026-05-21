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
import LindaMballa from "@/core/assets/Linda-Mballa.jpg";
import LindaNganko from "@/core/assets/linda-nganko.jpeg";
import AnabelleKOUNG from "@/core/assets/anabelle-koung.jpeg";
import ErikaWilson from "@/core/assets/erika-wilson.jpg";
import HonoreNkouel from "@/core/assets/honore-nkouel.jpeg";
import ChristianTchoupe from "@/core/assets/christian-tchoupe.png";
import VanessaKame from "@/core/assets/Vanessa-Kame.png";
import PechensDOUMBE from "@/core/assets/pechens-doumbe.jpg";
import PriscaHeuya from "@/core/assets/prisca-heuya.png";
import JocelyneNgassam from "@/core/assets/jocelyne-ngassam.jpg";
import RoseDika from "@/core/assets/rose_dika.png";
import WilfriedDjopa from "@/core/assets/wilfried_djopa.jpg";
import CarineDIkambi from "@/core/assets/Carine-DIkambi.jpg";
import LydieNgoNogol from "@/core/assets/Lydie-Ngo-Nogol.jpg";
import AimeeCatherineMoukouri from "@/core/assets/Aimée-Catherine-Moukouri.jpg";
import EkokaSidikiPatrice from "@/core/assets/Ekoka-sidiki-patrice.jpg";

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
        imageUrl: intervenant1.src,
        visible: false
      },
      {
        id: "sp2",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant2.src,
        visible: false
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
        imageUrl: intervenant3.src,
        visible: false
      },
      {
        id: "sp4",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src,
        visible: false
      },
      {
        id: "sp5",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src,
        visible: false
      },
      {
        id: "sp6",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant6.src,
        visible: false
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
        imageUrl: intervenant7.src,
        visible: false
      },
      {
        id: "sp8",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant8.src,
        visible: false
      },
      {
        id: "sp9",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant1.src,
        visible: false
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
        imageUrl: intervenant2.src,
        visible: false
      },
      {
        id: "sp11",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant3.src,
        visible: false
      },
      {
        id: "sp12",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant4.src,
        visible: false
      },
      {
        id: "sp13",
        name: "Jane Doe",
        role: "Feminie",
        imageUrl: intervenant5.src,
        visible: false
      }
    ]
  }
];

export const JOUR_2_SESSIONS: Session[] = [
  {
    id: "j2_s1",
    title: "Accueil des invités, délégations et autorités",
    hall: "Conference Hall 1",
    startTime: "09:30",
    endTime: "10:30",
    cible: "Tous",
    speakers: []
  },
  {
    id: "j2_s2",
    title: "Cérémonie d'ouverture officielle",
    hall: "Conference Hall 1",
    startTime: "10:30",
    endTime: "11:30",
    cible: "Tous",
    speakers: []
  },
  {
    id: "j2_s3",
    title: "TABLE RONDE 1 : Leadership féminin, talents et performance économique",
    hall: "Conference Hall 1",
    startTime: "11:30",
    endTime: "12:30",
    cible: "Tous",
    speakers: [
      { id: "sp_j2_3_1", name: "Hermines-Dolorès Boum", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_3_2", name: "Léonie Ngane", role: "Intervenante", imageUrl: intervenant7.src, visible: false },
      { id: "sp_j2_3_3", name: "Ange Kouassi", role: "Intervenante", imageUrl: intervenant8.src, visible: false },
      { id: "sp_j2_3_4", name: "Blanche Ntone", role: "Modératrice", imageUrl: intervenant3.src, visible: false }
    ]
  },
  {
    id: "j2_s4",
    title: "PAUSE DÉJEUNER + NETWORKING",
    hall: "Conference Hall 1",
    startTime: "12:30",
    endTime: "13:30",
    cible: "Tous",
    speakers: []
  },
  {
    id: "j2_s5",
    title: "Career Lab : Faire carrière dans la tech",
    hall: "Conference Hall 1",
    startTime: "13:30",
    endTime: "14:30",
    cible: "Pass Talent / Next Gen",
    speakers: [
      { id: "sp_j2_5_1", name: "Linda Mballa", role: "Intervenante", imageUrl: LindaMballa.src },
      { id: "sp_j2_5_2", name: "Carine Dikambi", role: "Intervenante", imageUrl: CarineDIkambi.src },
      { id: "sp_j2_5_3", name: "Belinda Ngono", role: "Intervenante", imageUrl: intervenant5.src },
      { id: "sp_j2_5_4", name: "Patricia MEBARA", role: "Modératrice", imageUrl: intervenant2.src }
    ]
  },
  {
    id: "j2_s6",
    title: "TABLE RONDE 2 : Leadership féminin dans les industries créatives",
    hall: "Conference Hall 2",
    startTime: "13:30",
    endTime: "14:30",
    cible: "Tous",
    speakers: [
      { id: "sp_j2_6_1", name: "Chantal Edie", role: "Intervenante", imageUrl: intervenant8.src },
      { id: "sp_j2_6_2", name: "Paola Yoko", role: "Intervenante", imageUrl: intervenant1.src },
      { id: "sp_j2_6_3", name: "Conforte Mahouvi", role: "Intervenante", imageUrl: intervenant2.src, visible: false },
      { id: "sp_j2_6_4", name: "Aimée Catherine Moukouri", role: "Modératrice", imageUrl: AimeeCatherineMoukouri.src },
      { id: "sp_j2_6_5", name: "Linda Mballa", role: "Intervenante", imageUrl: LindaMballa.src }
    ]
  },
  {
    id: "j2_s7",
    title: "WORKSHOP : Face aux Experts — des solutions concrètes pour faire avancer ton business",
    hall: "Conference Hall 3",
    startTime: "14:30",
    endTime: "15:30",
    cible: "Pass Talent",
    speakers: [
      { id: "sp_j2_7_1", name: "Aurélie Chazai", role: "Intervenante", imageUrl: AurelieChazai.src },
      { id: "sp_j2_7_2", name: "Diane Audrey Ngako", role: "Intervenante", imageUrl: intervenant2.src },
      { id: "sp_j2_7_3", name: "Nelly Elang", role: "Intervenante", imageUrl: intervenant4.src, visible: false },
      { id: "sp_j2_7_4", name: "Wilfried Djopa", role: "Intervenant", imageUrl: WilfriedDjopa.src }
    ]
  },
  {
    id: "j2_s8",
    title: "ATELIER VIP : Préparation média & prise de parole en public",
    hall: "Conference Hall 2",
    startTime: "14:00",
    endTime: "16:00",
    cible: "Pass VIP",
    speakers: [
      { id: "sp_j2_8_1", name: "Thierry Ntamack", role: "Intervenant", imageUrl: ThierryNtamack.src }
    ]
  },
  {
    id: "j2_s9",
    title: "ATELIER : Leadership Styling — Image, présence et posture professionnelle",
    hall: "Conference Hall 1",
    startTime: "15:30",
    endTime: "16:30",
    cible: "Tous",
    speakers: [
      { id: "sp_j2_9_1", name: "Gaelle Ngue", role: "Intervenante", imageUrl: GaelleNgue.src },
      { id: "sp_j2_9_2", name: "Edith Nken", role: "Intervenante", imageUrl: EditheNkenHOT.src },
      { id: "sp_j2_9_3", name: "Sandra Gagneur", role: "Intervenante", imageUrl: intervenant3.src },
      { id: "sp_j2_9_4", name: "Rose Dika", role: "Modératrice", imageUrl: RoseDika.src }
    ]
  },
  {
    id: "j2_s10",
    title: "MASTERCLASS EXCLUSIVE",
    hall: "Conference Hall 1",
    startTime: "16:30",
    endTime: "17:30",
    cible: "Tous",
    speakers: [
      { id: "sp_j2_10_1", name: "Paola Audrey", role: "Intervenante", imageUrl: intervenant7.src, visible: false }
    ]
  },
  {
    id: "j2_s11",
    title: "F-UNION LOUNGE TALK — Causerie ENTRE NOUS avec Hermines Dolorès Boum & Vanessa Kamé-Domguia",
    hall: "Conference Hall 2",
    startTime: "17:30",
    endTime: "19:00",
    cible: "Pass VIP",
    speakers: [
      { id: "sp_j2_11_1", name: "Hermines-Dolorès Boum", role: "Intervenante", imageUrl: intervenant6.src },
      { id: "sp_j2_11_2", name: "Vanessa Kamé-Domguia", role: "Modératrice", imageUrl: VanessaKame.src }
    ]
  }
];

export const JOUR_3_SESSIONS: Session[] = [
  {
    id: "j3_s1",
    title: "Accueil des participantes Bootcamp — Enregistrement, badges, installation",
    hall: "Conference Hall 1",
    startTime: "08:00",
    endTime: "09:00",
    cible: "Pass Next Gen",
    speakers: []
  },
  {
    id: "j3_s2",
    title: "MENTORING 1:1 — Sessions individuelles en continu",
    hall: "Conference Hall 1",
    startTime: "08:30",
    endTime: "12:00",
    cible: "Tous",
    speakers: [
      { id: "sp_j3_2_1", name: "Pechens Pokossy Doumbe", role: "Mentor", imageUrl: PechensDOUMBE.src },
      { id: "sp_j3_2_2", name: "Jocelyne Ngassam", role: "Mentor", imageUrl: JocelyneNgassam.src }
    ]
  },
  {
    id: "j3_s3",
    title: "WOMEN INVESTMENT CORNER — Collaboration Women in Investment",
    hall: "Conference Hall 2",
    startTime: "09:00",
    endTime: "10:00",
    cible: "Tous",
    speakers: [
      { id: "sp_j3_3_1", name: "Eva Youmbi", role: "Intervenante", imageUrl: intervenant1.src }
    ]
  },
  {
    id: "j3_s4",
    title: "FINALE — PITCH YOUR FUTURE",
    hall: "Conference Hall 3",
    startTime: "09:30",
    endTime: "11:30",
    cible: "Tous / Next Gen",
    speakers: []
  },
  {
    id: "j3_s5",
    title: "VIP INVESTMENT SHOWROOM",
    hall: "Conference Hall 2",
    startTime: "09:00",
    endTime: "14:00",
    cible: "Pass VIP",
    speakers: []
  },
  {
    id: "j3_s6",
    title: "Career Lab : Ce que les entreprises attendent des jeunes talents",
    hall: "Conference Hall 2",
    startTime: "11:30",
    endTime: "12:30",
    cible: "Pass Next Gen",
    speakers: [
      { id: "sp_j3_6_1", name: "Laetissia ENONGA DISSAKE", role: "Intervenante", imageUrl: intervenant4.src, visible: false },
      { id: "sp_j3_6_2", name: "Christian TCHOUPE", role: "Intervenant", imageUrl: ChristianTchoupe.src },
      { id: "sp_j3_6_3", name: "Erika WILSON", role: "Intervenante", imageUrl: ErikaWilson.src },
      { id: "sp_j3_6_4", name: "Honoré NKOUEL", role: "Intervenant", imageUrl: HonoreNkouel.src },
      { id: "sp_j3_6_5", name: "Jessica Mambo", role: "Modératrice", imageUrl: AnabelleKOUNG.src }
    ]
  },
  {
    id: "j3_s7",
    title: "PAUSE DÉJEUNER + NETWORKING",
    hall: "Conference Hall 1",
    startTime: "12:00",
    endTime: "13:30",
    cible: "Tous",
    speakers: []
  },
  {
    id: "j3_s8",
    title: "Career Lab : Réinventer sa carrière — clés et opportunités pour une transition réussie",
    hall: "Conference Hall 2",
    startTime: "13:00",
    endTime: "14:00",
    cible: "Pass Next Gen",
    speakers: [
      { id: "sp_j3_8_1", name: "Linda Loretta Nganko", role: "Intervenante", imageUrl: LindaNganko.src },
      { id: "sp_j3_8_2", name: "Manuela KAMADJOU", role: "Intervenante", imageUrl: ManuelaKAMADJOU.src },
      { id: "sp_j3_8_3", name: "Anabelle KOUNG", role: "Modératrice", imageUrl: AnabelleKOUNG.src }
    ]
  },
  {
    id: "j3_s9",
    title: "Table ronde : L'Écosystème Transgénérationnel — construire la prochaine génération de femmes leaders",
    hall: "Conference Hall 1",
    startTime: "14:00",
    endTime: "15:00",
    cible: "Tous",
    speakers: [
      {
        id: "sp_j3_9_1",
        name: "Mme Ekoka née Sidiki Patrice Adèle",
        role: "Ex-Directeur Régional",
        imageUrl: EkokaSidikiPatrice.src
      }
    ]
  },
  {
    id: "j3_s10",
    title: "MASTERCLASS — «Arrête d'attendre les opportunités, crée-les»",
    hall: "Conference Hall 2",
    startTime: "15:00",
    endTime: "16:00",
    cible: "Tous",
    speakers: [
      { id: "sp_j3_10_1", name: "Al-Nita Mouen", role: "Intervenante", imageUrl: intervenant5.src, visible: false }
    ]
  },
  {
    id: "j3_s11",
    title: "CÉRÉMONIE DE CLÔTURE + F-UNION FLASH TALKS",
    hall: "Conference Hall 1",
    startTime: "16:00",
    endTime: "18:00",
    cible: "Tous",
    speakers: []
  }
];


