import NavComponent from "@/components/nav";
import HeaderComponent from "@/pages/header/header";
import SkillsComponent from "@/pages/skills/skills";
import DegreesComponent from "@/pages/degrees/degrees";
import ExperiencesComponent from "@/pages/experiences/experiences";
import ProjectsComponent from "@/pages/projects/projects";
import ContactsComponent from "@/pages/contacts/contacts";
import Footer from "@/pages/footer/footer";
import Aurora from "@/components/animation/aurora";
import { Toaster } from "sonner";
import Loader from "@/components/animation/loading";
import { useEffect, useState } from "react";
import { useGetData } from "@/hooks/data";

const Home = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [isLoadingExtra, setIsLoadingExtra] = useState<boolean>(true);
  const { data, isLoading } = useGetData(lang);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingExtra(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [lang]);

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
            <NavComponent lang={lang} setLang={setLang} nav={data?.nav} />
            <HeaderComponent header={data?.header} />
            <SkillsComponent skills={data?.skills} />
            <DegreesComponent degrees={data?.degrees} />
            <ProjectsComponent projects={data?.projects} />
            <ExperiencesComponent experiences={data?.experiences} />
            <ContactsComponent contacts={data?.contacts} />
            <Footer footer={data?.footer} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
