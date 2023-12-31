// Sidebar.tsx
import { GiTie } from "react-icons/gi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-500 p-4">
      <img
        src="/images/ozan.jpeg"
        alt="avatar"
        className="mx-auto border rounded-full"
        width={128}
        height={128}
        loading="eager"
        decoding="async"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider text-gray-500">
        Ozan Özayranci
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Senior Software Developer
      </p>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center mb-4">
        <a
          href="/assets/OzanOzayranciResume.pdf"
          download="OzanOzayranciResume.pdf"
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        >
          <GiTie className="w-6 h-6" />
          <span>Download Resume</span>
        </a>

        <a
          href="/assets/AdditionalFiles.zip"
          download="AdditionalFiles.zip"
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        >
          <span>+ Additional Files</span>
        </a>

        <div className="flex justify-around w-9/12 my-5 text-gray-200 md:w-full">
          <a href="https://www.linkedin.com/in/oozan/" target="_blank">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="https://github.com/oozan" target="_blank">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </div>

        <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500 text-center">
          <div className="flex items-center justify-center">
            <GoLocation className="mr-2" /> <span>Helsinki, Finland </span>
          </div>
          <p className="my-2">oozayranci@gmail.com </p>
          <p className="my-2">+358 41 488 9262 </p>
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
