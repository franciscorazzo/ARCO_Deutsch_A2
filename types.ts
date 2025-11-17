export interface Task {
  id: string;
  label: string;
  xp: number;
  categoryKey: string;
}

export interface LessonSection {
  title: string;
  tasks: Task[];
}

export interface LessonData {
  id: number;
  title: string;
  sections: LessonSection[];
  conviverTask: Task | null;
}

export interface UsefulLink {
  id: string;
  title: string;
  url: string;
}

export interface ProgressState {
  name: string;
  completedTasks: Set<string>;
  moduleGrades: { [key: string]: number };
  usefulLinks: UsefulLink[];
}

export interface DailyMission {
  id: string;
  type: 'LESEN' | 'SCHREIBEN' | 'SPRECHEN' | 'GRAMMATIK' | 'WORTSCHATZ';
  prompt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}