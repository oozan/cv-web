import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Front End Wizardry",
    about:
      "As a front-end developer, I specialize in creating visually engaging user interfaces. I have a knack for translating design concepts into code using HTML, CSS, and JavaScript. My expertise extends to developing responsive web designs that adapt to various devices. Proficient in popular frameworks such as React, Angular, and Vue.js, I am your go-to person for building dynamic and interactive web applications that ensure an exceptional user experience ",
  },
  {
    Icon: FaServer,
    title: "Back End  Master",
    about:
      "I bring a well-rounded skill set that goes beyond front-end development; I thrive in the back-end realm, where I architect and develop the robust server-side logic powering web applications. My toolkit includes mastery of server-side programming languages such as Node.js, Nest.js, and Golang. I specialize in crafting resilient APIs, fine-tuning database performance and implementing measures to ensure the security and scalability of web applications. Whether it's optimizing queries, enhancing data retrieval efficiency, or ensuring seamless server-client communication, I'm your reliable partner for building robust and high-performance web solutions",
  },
  {
    Icon: AiOutlineApi,
    title: "I am also a database guru",
    about:
      "I recognize the pivotal role databases play in data-driven applications and I possess a strong command of both SQL and NoSQL databases. My expertise extends to managing databases like MySQL, PostgreSQL, and MongoDB, ensuring optimal performance and efficient data handling for applications ",
  },
  {
    Icon: MdDeveloperMode,
    title: "DevOps Enthusiast",
    about:
      "To ensure smooth deployments and continuous integration, I embrace DevOps practices. I'm experienced with containerization technologies like Docker and orchestration tools like Kubernetes. I'm no stranger to setting up CI/CD pipelines with Jenkins, Travis CI, or CircleCI to automate testing and deployment processes ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Collaborative Team Player",
    about:
      "In an agile and collaborative environment, I thrive as a team player. I communicate effectively with designers, product managers, and fellow developers, ensuring that everyone's ideas are heard and thoughtfully integrated into the final product, fostering a cohesive and innovative development process",
  },
  {
    Icon: RiComputerLine,
    title: "Passion for Learning",
    about:
      "I have a passion for staying abreast of the ever-evolving landscape of technology. Embracing the dynamism, I actively pursue the latest trends and adopt best practices. Whether delving into new programming languages, mastering emerging frameworks, or experimenting with cutting-edge tools, my commitment to continuous learning remains unwavering",
  },
];
