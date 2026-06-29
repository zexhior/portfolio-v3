import Nav from "@/components/nav";
import Header from "../header/header";
import Skills from "../skills/skills";
import Degrees from "../degrees/degrees";
import Experiences from "../experiences/experiences";
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";
import Aurora from "@/components/animation/aurora";
import { Toaster } from "sonner";
import Loader from "@/components/animation/loading";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${isLoading ? "h-screen overflow-hidden" : "overflow-visible"}`}>
          <Toaster />
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          ></Aurora>
          <div className="flex flex-col gap-10 px-5 md:px-0 mx-auto w-full md:max-w-4/5 overflow-x-clip md:overflow-x-visible">
            <Nav />
            <Header />
            <Skills />
            <Degrees />
            <Projects />
            <Experiences />
            <Contacts />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
