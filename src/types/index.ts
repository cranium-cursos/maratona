export interface ScheduleDay {
  number: string;
  date: string;
  weekday: string;
  time: string;
  title: string;
  topics: string[];
  expert: {
    name: string;
    role: string;
    imageUrl: string;
    icon: string;
    colorClass: string;
  };
  isExclusive?: boolean;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface Expert {
  name: string;
  shortName: string;
  imageUrl: string;
}
