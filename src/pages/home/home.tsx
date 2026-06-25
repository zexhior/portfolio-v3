import Nav from "@/components/nav";
import Header from "../header/header";
import Skills from "../skills/skills";

const Home = () => {
  return (
    <div className="px-5 md:px-0 mx-auto w-full lg:w-290.5">
      <Nav />
      <Header />
      <Skills />
    </div>
  );
};

export default Home;
