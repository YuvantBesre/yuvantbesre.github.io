import {
  faMobileButton,
  faLaptopCode,
  faServer,
  faCloud,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    title: "Backend Development",
    icon: faServer,
    shortDescription:
      "Crafting robust and scalable server-side solutions.",
    description:
      "I specialize in developing powerful backend systems that ensure your applications run smoothly and efficiently. By leveraging technologies like Python, Django, and Node.js, I build scalable and secure server-side solutions that handle your data and business logic with precision. With expertise in backend development, I create efficient database structures, develop APIs, and configure servers to ensure optimal performance, security, and scalability. My solutions empower your applications to seamlessly handle high traffic and complex data management.",
  },
  {
    title: "Frontend Development",
    icon: faLaptopCode,
    shortDescription:
      "Designing responsive and engaging user interfaces.",
    description:
      "Creating visually appealing and user-friendly interfaces is my forte. Using modern frameworks like React.js, Next.js, and Vue.js, I design responsive websites that provide an engaging user experience across all devices. My focus is on delivering intuitive and aesthetically pleasing interfaces that enhance user interaction.",
  },
  {
    title: "Mobile App Development",
    icon: faMobileButton,
    shortDescription:
      "Creating seamless and intuitive mobile experiences.",
    description:
      "In the realm of mobile app development, I transform ideas into functional and elegant mobile applications. Whether it’s for iOS or Android, I utilize tools like React Native and Capacitor.Js to develop apps that offer seamless performance and intuitive user experiences, ensuring your app stands out in the competitive mobile landscape.",
  },
  {
    title: "Product and Architecture Strategy",
    icon: faBrain,
    shortDescription:
      "I collaborate with you to define clear goals, target audiences, and a roadmap for success.",
    description:
      "I collaborate with you to define clear goals, target audiences, and a roadmap for success. My expertise in product ideation and market analysis ensures that your product not only meets user needs but also aligns with your business strategy for long-term growth and full potential of your digital products with effective product strategy.",
  },
  {
    title: "Cloud Services",
    icon: faCloud,
    shortDescription:
      "Implementing secure and efficient cloud infrastructure.",
    description:
      "Harnessing the power of cloud computing, I offer comprehensive cloud services that optimize your infrastructure for performance and security. From deploying applications on AWS to managing databases and scaling services, I ensure your cloud setup is efficient, reliable, and ready to meet your business needs.",
  },
];

export default services;
