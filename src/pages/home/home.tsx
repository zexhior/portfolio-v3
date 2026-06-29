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
import { useGetData } from "@/hooks/data";

const Home = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [isLoadingExtra, setIsLoadingExtra] = useState<boolean>(true);
  const { data, isLoading } = useGetData();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingExtra(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading || isLoadingExtra ? (
        <Loader />
      ) : (
        <div
          className={`${
            isLoading && isLoadingExtra ? "h-screen overflow-hidden" : "overflow-visible"
          }`}
        >
          <Toaster />
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          ></Aurora>
          <div className="flex flex-col gap-10 px-5 md:px-0 mx-auto w-full md:max-w-4/5 overflow-x-clip md:overflow-x-visible">
            <Nav nav={data ? data[lang]?.nav : undefined} />
            <Header header={data ? data[lang]?.header : undefined} />
            <Skills skills={data ? data[lang]?.skills : undefined} />
            <Degrees degrees={data ? data[lang]?.degrees : undefined} />
            <Projects />
            <Experiences experiences={data ? data[lang].experiences : undefined} />
            <Contacts contacts={data ? data[lang].contacts : undefined} />
            <Footer footer={data ? data[lang].footer : undefined} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
