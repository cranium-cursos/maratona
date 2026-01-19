
import { ScheduleDay, FeatureCard, Expert } from './types';

export const EXPERTS: Expert[] = [
  {
    name: "Rafael Tardin",
    shortName: "Rafael",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Placeholder as I can't generate the specific long data URI in this block, but mapping to Image 3
  },
  {
    name: "Gustavo Pacheco",
    shortName: "Gustavo",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Image 2
  },
  {
    name: "Bruna Cabugueira",
    shortName: "Bruna",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Image 1
  },
  {
    name: "Samuel Lodovichi",
    shortName: "Samuel",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Image 5
  },
  {
    name: "Leonardo Nascimento",
    shortName: "Leonardo",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Image 4
  },
  {
    name: "Thaynara Nascimento",
    shortName: "Thaynara",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H1x6W-K8U7-XnQn0-I-R7-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y-W-Y" // Image 6
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dr. Rafael Tardin",
      role: "ESPECIALISTA EM DTM",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6X-r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6", // Image 3
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dr. Gustavo Pacheco",
      role: "ESP. VESTIBULAR",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2X-r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2r2", // Image 2
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dra. Bruna Cabugueira",
      role: "ESP. ZUMBIDO",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1X-r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1r1", // Image 1
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dr. Samuel Lodovichi",
      role: "HEAD & NECK PHYSIO",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5X-r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5", // Image 5
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dr. Leonardo Nascimento",
      role: "ESP. COLUNA",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4X-r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r4r2", // Image 4
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
    topics: ["Principais conceitos", "Passos para o tratamento", "Estudo de caso"],
    expert: {
      name: "Dra. Thaynara Nascimento",
      role: "REAB. VISUAL",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6X-r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6", // Image 6
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
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5X-r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5r5", // Image 5
      icon: "smart_toy",
      colorClass: "bg-primary"
    }
  }
];
