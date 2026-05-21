export interface Speaker {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  gender?: 'Feminie' | 'Masculin'; // Based on the design "Feminie" (French for Feminine)
  visible?: boolean;
}

export interface Session {
  id: string;
  title: string;
  hall: string; // e.g., "Salle 1", "Salle 2"
  startTime: string; // e.g., "09:00"
  endTime: string; // e.g., "10:30"
  cible?: string;
  speakers: Speaker[];
}
