import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/Python.png",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Intermediate,
        icon: "/skills/C++.png",
      },
      {
        title: "C",
        level: SkillLevel.Intermediate,
        icon: "/skills/C.png",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/skills/Django.png",
      },
      {
        title: "Node.Js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.Js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      }
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.Js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.svg",
      },
      {
        title: "React",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Vue",
        level: SkillLevel.Expert,
        icon: "/skills/Vue.png",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "Tailwind",
        level: SkillLevel.Intermediate,
        icon: "/skills/Tailwind.png",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "React Native",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Capacitor.Js",
        level: SkillLevel.Expert,
        icon: "/skills/Capacitor.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "Version Control Systems",
    items: [
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "BitBucket",
        level: SkillLevel.Expert,
        icon: "/skills/Bitbucket.png",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Celery",
        level: SkillLevel.Expert,
        icon: "/skills/Celery.png",
      },
      {
        title: "Redis",
        level: SkillLevel.Expert,
        icon: "/skills/redis.png",
      },
      {
        title: "Kafka",
        level: SkillLevel.Expert,
        icon: "/skills/Kafka.png",
      },
      {
        title: "Redux",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
