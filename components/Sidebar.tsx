// Sidebar.tsx
import { GiTie } from "react-icons/gi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-500 p-4">
      <img
        src="/images/Ozan.jpeg"
        alt="avatar"
        className="mx-auto border rounded-full"
        width={128}
        height={128}
        loading="eager"
        decoding="async"
      />
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Software Developer
      </p>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center mb-4">
        <a
          href="/assets/Ozan_Ozayranci_Resume.pdf"
          download="Ozan_Ozayranci_Resume.pdf"
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        >
          <GiTie className="w-6 h-6" />
          <span>Download Resume</span>
        </a>

        <div className="flex justify-around w-9/12 my-5 text-gray-200 md:w-full">
          <a href="https://www.linkedin.com/in/oozan/" target="_blank">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="https://github.com/oozan" target="_blank">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </div>

        {/* Email Button */}
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray-100 to-black hover:scale-105 focus:outline-none mb-2"
          onClick={() => window.open("mailto:oozayranci@gmail.com")}
        >
          <FaRegEnvelope className="mr-2" />
          Email me
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
