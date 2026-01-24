
import { ScheduleDay, FeatureCard, Expert } from './types';

export const EXPERTS: Expert[] = [
  {
    name: "Rafael Tardin",
    shortName: "Rafael",
    imageUrl: "/images/rafael-tardin.webp"
  },
  {
    name: "Gustavo Pacheco",
    shortName: "Gustavo",
    imageUrl: "/images/gustavo-pacheco.webp"
  },
  {
    name: "Bruna Cabugueira",
    shortName: "Bruna",
    imageUrl: "/images/bruna-cabugueira.webp"
  },
  {
    name: "Samuel Lodovichi",
    shortName: "Samuel",
    imageUrl: "/images/samuel-lodovichi.webp"
  },
  {
    name: "Leonardo Nascimento",
    shortName: "Leonardo",
    imageUrl: "/images/leonardo-nascimento.webp"
  },
  {
    name: "Thaynara Nascimento",
    shortName: "Thaynara",
    imageUrl: "/images/thaynara-nascimento.webp"
  }
];

// Note: In a real environment, I would replace these placeholders with the actual base64 or hosted links from the prompt.
// For the sake of this code, I'll use the IDs corresponding to the provided photos.

export const FEATURES: FeatureCard[] = [
  {
    icon: "medical_services",
    title: "Como manejar as principais patologias",
    description: "Como manejar as principais patologias da região de cabeça e pescoço com segurança.",
    colorClass: "bg-primary/10 text-primary"
  },
  {
    icon: "touch_app",
    title: "Abordagem prática",
    description: "Abordagem prática e direta ao ponto que você pode aplicar no dia seguinte em seu consultório.",
    colorClass: "bg-accent/10 text-accent"
  },
  {
    icon: "psychology",
    title: "Desenvolver o raciocínio clínico",
    description: "Desenvolver o raciocínio clínico para diagnósticos diferenciais assertivos.",
    colorClass: "bg-secondary/10 text-secondary"
  },
  {
    icon: "assignment_turned_in",
    title: "Com casos clínicos reais",
    description: "Com casos clínicos reais discutidos por quem vive a prática clínica diariamente.",
    colorClass: "bg-primary/10 text-primary"
  }
];

export const SCHEDULE: ScheduleDay[] = [
  {
    number: "01",
    date: "02/02",
    weekday: "Segunda-feira",
    time: "20:00H",
    title: "DTM",
    topics: ["Caso clínico"],
    expert: {
      name: "Dr. Rafael Tardin",
      role: "ESPECIALISTA EM DTM",
      imageUrl: "/images/rafael-tardin.webp",
      icon: "face",
      colorClass: "bg-secondary"
    }
  },
  {
    number: "02",
    date: "03/02",
    weekday: "Terça-feira",
    time: "20:00H",
    title: "SISTEMA VESTIBULAR",
    topics: ["Caso clínico"],
    expert: {
      name: "Dr. Gustavo Pacheco",
      role: "ESP. VESTIBULAR",
      imageUrl: "/images/gustavo-pacheco.webp",
      icon: "graphic_eq",
      colorClass: "bg-accent"
    }
  },
  {
    number: "03",
    date: "04/02",
    weekday: "Quarta-feira",
    time: "20:00H",
    title: "ZUMBIDO",
    topics: ["Caso clínico"],
    expert: {
      name: "Dra. Bruna Cabugueira",
      role: "ESP. ZUMBIDO",
      imageUrl: "/images/bruna-cabugueira.webp",
      icon: "hearing",
      colorClass: "bg-secondary"
    }
  },
  {
    number: "04",
    date: "05/02",
    weekday: "Quinta-feira",
    time: "20:00H",
    title: "CEFALEIA",
    topics: ["Caso clínico"],
    expert: {
      name: "Dr. Samuel Lodovichi",
      role: "HEAD & NECK PHYSIO",
      imageUrl: "/images/samuel-lodovichi.webp",
      icon: "medical_services",
      colorClass: "bg-primary"
    }
  },
  {
    number: "05",
    date: "08/02",
    weekday: "Domingo",
    time: "20:00H",
    title: "CERVICAL",
    topics: ["Caso clínico"],
    expert: {
      name: "Dr. Leonardo Nascimento",
      role: "ESP. COLUNA",
      imageUrl: "/images/leonardo-nascimento.webp",
      icon: "accessibility_new",
      colorClass: "bg-secondary"
    }
  },
  {
    number: "06",
    date: "09/02",
    weekday: "Segunda-feira",
    time: "20:00H",
    title: "DISFUNÇÃO OCULOMOTORA",
    topics: ["Caso clínico"],
    expert: {
      name: "Dra. Thaynara Nascimento",
      role: "REAB. VISUAL",
      imageUrl: "/images/thaynara-nascimento.webp",
      icon: "visibility",
      colorClass: "bg-accent"
    }
  },
  {
    number: "07",
    date: "10/02",
    weekday: "Terça-feira",
    time: "20:00H",
    title: "SOLUCIONE UM CASO CLÍNICO NA PRÁTICA COM INTELIGÊNCIA ARTICIAL",
    isExclusive: true,
    topics: ["Resolva um caso clínico ao vivo comigo", "Tecnologia aplicada à prática clínica", "Presente especial"],
    expert: {
      name: "Dr. Samuel Lodovichi",
      role: "INOVAÇÃO CLÍNICA",
      imageUrl: "/images/samuel-lodovichi.webp",
      icon: "smart_toy",
      colorClass: "bg-primary"
    }
  }
];
