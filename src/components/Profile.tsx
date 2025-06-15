import Image from "next/image";

const Profile = () => {
  return (
    <section className="relative bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Left Column (Name, Title, Photo) */}
        <div className="">
          {/* Name and Title */}
          <h2>Ozan Özayranci</h2>
          <p className="text-lg text-gray-400 mb-6 w-[16rem]">
            Software Engineer 
            +358414889262 
            oozayranci@gmail.com 
            Helsinki
          </p>
          {/* Profile Image */}
          <div className="w-40 h-40 relative overflow-hidden shadow-md border-4 border-gray-700">
            <Image
              src="/Ozan.jpeg"
              alt="Profile Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column (Description and Links) */}
        <div className="mt-[8rem]">
          {/* Links */}
          <div className="flex space-x-4 mb-4 text-gray-400">
            <a
              href="https://github.com/oozan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/oozan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="/Ozan_Ozayranci_Resume.pdf"
              download="Ozan_Ozayranci_Resume.pdf"
              className="hover:text-white"
            >
              <span>Resume</span>
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300">
            I am a software developer who loves building modern web apps. I
            enjoy solving complex problems, creating easy-to-use interfaces and
            making solutions that work well and can grow over time.
          </p>
          <a href="mailto:oozayranci@gmail.com" className="hover:text-white">
            Hire me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
