// Home.tsx
import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch">
      {/* Sidebar */}
      <Sidebar />

      {/* Gap */}
      <div className="w-4 lg:w-8" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white shadow-custom-light dark:shadow-custom-dark rounded-md mt-4 lg:mt-0 lg:ml-4 sm:ml-2">
        {/* Services Section */}
        <div className="grid gap-5 my-4 md:grid-cols-1">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Gap */}
      <div className="w-4 lg:w-8" />
    </div>
  );
};

export default Home;
