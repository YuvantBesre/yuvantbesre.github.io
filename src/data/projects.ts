import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "APIdrug.com",
    description:
      "World's first online marketplace for active pharmaceutical ingredients. | APIdrug Platform",
    icon: "https://apidrug.com/Logo.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://apidrug.com/",
    tags: ["Python", "Django", "Next.JS", "Celery", "AWS", "ElasticSearch"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "e-commerce-app-mern",
    title: "Medikabazaar MarketPlace Middle East (UAE)",
    description:
      "Medical Equipment Supplier in UAE | Healthcare Products Online - Medikabazaar",
    icon: "/Experience/3.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://www.medikabazaar.ae/shop",
    tags: ["Python", "Django", "Next.Js", "Celery", "AWS", "ElasticSearch", "Redis", "Kafka", "Node.Js", "Express.Js"],
  },
  {
    id: "e-commerce-app-mern",
    title: "Medikabazaar MarketPlace Middle East Mobile App (UAE)",
    description:
      "Medical Equipment Supplier in UAE | Healthcare Products Online - Medikabazaar",
    icon: "/Experience/3.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://apps.apple.com/in/app/medikabazaar-uae/id6469529354",
    tags: ["Python", "Django", "Next.Js", "Capacitor.Js", "Android", "iOS", "Celery", "AWS", "ElasticSearch", "Redis", "Kafka", "Node.Js", "Express.Js"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Krishify Business",
    description:
      "Bridging the gap between brands & Indian farmers Connect directly with the vast audience of 10 million+ farmers across crops, geographies and varied interests on Krishify!",
    icon: "https://business.krishify.com/img/logo.d6dc6e45.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://business.krishify.com/home",
    tags: ["Python", "Django", "Celery", "AWS", "Vue.Js"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Business Card Maker & Business Forum | Vahak",
    description:
      "Vahak users get access to largest transport community. Users can connect with over 20 Lakh transporters pan India and find suitable load transport service provider basis their needs.",
    icon: "/Experience/4.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Python", "Django", "Next.Js", "AWS"],
    url : "https://www.vahak.in/business-cards"
  },
  {
    id: "social-media-api-nodejs",
    title: "AY8 | Luxurious lifestyle products",
    description:
      "AY8 is an online marketplace for Luxurious lifestyle products",
    icon: "/Experience/5.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/YuvantBesre/ay8_frontend",
    tags: ["Python", "Django", "Next.Js", "AWS"],
    url : ""
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "RED Real Estate",
    description:
      "Online Market place for your dream project, house, and plots",
    icon: "/Experience/6.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["Python", "Django", "Celery", "AWS", "Vue.Js"],
  }
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
