import Nav from "@/components/nav";
import Header from "../header/header";
import Skills from "../skills/skills";
import Degrees from "../degrees/degrees";
import Experiences from "../experiences/experiences";
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-5 md:px-0 mx-auto w-full md:max-w-4/5">
      <Nav />
      <Header />
      <Skills />
      <Degrees />
      <Projects />
      <Experiences />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
