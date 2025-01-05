import type { NextPage } from "next";
import Profile from "../components/Profile";
import Applications from "../components/Applications";
import Articles from "../components/Articles";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <main className="w-full max-w-4xl">
        {/* Profile Section */}
        <Profile />

        {/* Applications Section */}
        <Applications />

        {/* Articles Section */}
        <Articles />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
