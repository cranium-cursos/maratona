import { ScheduleDay, FeatureCard, Expert } from '../types';

export const FEATURES: FeatureCard[] = [
  {
    icon: "psychology",
    title: "Raciocínio clínico a partir de casos reais",
    description: "Cada encontro discute um caso da região de cabeça e pescoço, conectando teoria e prática clínica.",
    colorClass: "bg-primary/10 text-primary"
  },
  {
    icon: "medical_services",
    title: "Diferentes recortes da mesma região",
    description: "Quatro eixos clínicos distintos discutidos por quem aplica na clínica todos os dias.",
    colorClass: "bg-accent/10 text-accent"
  },
  {
    icon: "touch_app",
    title: "Prática, não teoria isolada",
    description: "Conteúdo direto ao ponto, pensado para o chão da clínica, de clínico para clínico.",
    colorClass: "bg-secondary/10 text-secondary"
  },
  {
    icon: "assignment_turned_in",
    title: "Continuidade no Portal Cranium",
    description: "A discussão da Maratona é o início; o estudo continua no Portal Cranium.",
    colorClass: "bg-primary/10 text-primary"
  }
];

export const EXPERTS: Expert[] = [
  {
    name: "Marianne Trajano",
    shortName: "Marianne",
    imageUrl: "/images/marianne-trajano.jpg"
  },
  {
    name: "Rafael Tardin",
    shortName: "Rafael",
    imageUrl: "/images/rafael-tardin-2026.jpg"
  },
  {
    name: "Samuel Lodovichi",
    shortName: "Samuel",
    imageUrl: "/images/samuel-lodovichi-2026.jpg"
  }
];

export const SCHEDULE: ScheduleDay[] = [
  {
    number: "01",
    date: "05/10",
    weekday: "Segunda-feira",
    time: "[horário em confirmação]",
    title: "SISTEMA VESTIBULAR",
    topics: ["Caso clínico — recorte em confirmação"],
    expert: {
      name: "Marianne Trajano",
      role: "SISTEMA VESTIBULAR",
      imageUrl: "/images/marianne-trajano.jpg",
      icon: "graphic_eq",
      colorClass: "bg-accent"
    }
  },
  {
    number: "02",
    date: "06/10",
    weekday: "Terça-feira",
    time: "[horário em confirmação]",
    title: "[EIXO EM CONFIRMAÇÃO]",
    topics: ["Convidado(a) e recorte em confirmação"],
    expert: {
      name: "[convidado(a) em confirmação]",
      role: "PAUTA EM CONFIRMAÇÃO",
      imageUrl: "/images/portal-cranium-logo.webp",
      icon: "help_outline",
      colorClass: "bg-secondary"
    }
  },
  {
    number: "03",
    date: "07/10",
    weekday: "Quarta-feira",
    time: "[horário em confirmação]",
    title: "DTM",
    topics: ["Caso clínico — recorte em confirmação"],
    expert: {
      name: "Rafael Tardin",
      role: "DTM",
      imageUrl: "/images/rafael-tardin-2026.jpg",
      icon: "face",
      colorClass: "bg-secondary"
    }
  },
  {
    number: "04",
    date: "08/10",
    weekday: "Quinta-feira",
    time: "[horário em confirmação]",
    title: "[EIXO EM CONFIRMAÇÃO]",
    topics: ["Recorte em confirmação"],
    expert: {
      name: "Samuel Lodovichi",
      role: "PAUTA EM CONFIRMAÇÃO",
      imageUrl: "/images/samuel-lodovichi-2026.jpg",
      icon: "medical_services",
      colorClass: "bg-primary"
    }
  }
];
