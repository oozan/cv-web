import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Front End",
    about:
      "As a frontend developer, I focus on building user-friendly and visually appealing interfaces. I enjoy turning design concepts into functional code using HTML, CSS, and JavaScript and Typescript. React was the first library I worked with, and I’ve also used Next.js in professional environments to develop responsive, interactive web applications that work well across different devices",
  },
  {
    Icon: AiOutlineApi,
    title: "UI/UX",
    about:
      "I have experience working closely with UI/UX designers to create user interfaces that are both functional and visually appealing. My focus is on transforming design concepts into responsive, user-friendly web applications that meet user needs and align with the intended design vision. I collaborate closely with designers using tools like Figma to explore and implement practical frontend workarounds, ensuring that solutions enhance the overall user experience while maintaining consistency and cohesion in the design",
  },
  {
    Icon: FaServer,
    title: "Back End",
    about:
      "I also understand how crucial it is to work closely with back-end systems. I ensure efficient integration with APIs and collaborate effectively with backend teams to create smooth, scalable, and secure web applications. From fine-tuning front-end performance to ensuring flawless client-server communication, I’m your reliable partner in delivering top-tier, user-centric web solutions",
  },

  {
    Icon: AiOutlineAntDesign,
    title: "Collaborative Team Player",
    about:
      "I work well in collaborative environments and enjoy being part of a team. I communicate regularly with designers, product managers, and developers to ensure that ideas are shared and incorporated into the final product. This helps create a smooth and cohesive development process",
  },
  {
    Icon: RiComputerLine,
    title: "Passion for Learning",
    about:
      "I enjoy keeping up with the fast-changing world of technology and staying informed about the latest trends. I’m always open to learning new programming languages, exploring emerging frameworks, and trying out new tools to improve my skills and stay current with industry best practices",
  },
];
