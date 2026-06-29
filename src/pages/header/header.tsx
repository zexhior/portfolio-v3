import Me from "@/assets/me.png";
import { motion } from "framer-motion";
import { animationFadeIn, animationFadeInRight } from "@/lib/style";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import type { Header } from "@/lib/type";
import { icons } from "@/lib/icons";

interface PropsHeader {
  header?: Header;
}

const HeaderComponent: React.FC<PropsHeader> = ({ header }) => {
  const handleDownload = () => {
    // 1. Specify the URL and the desired filename
    const fileUrl = "/CV_Herizo_Dev_Fullstack.pdf";
    const fileName = "CV_Herizo_Dev_Fullstack.pdf";

    // 2. Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName); // Forces download instead of opening

    // 3. Append to body, trigger click, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoToContact = () => {
    // 1. Specify the URL and the desired filename
    const idContact = "#contacts";

    // 2. Create a temporary anchor element
    const link = document.createElement("a");
    link.href = idContact;

    // 3. Append to body, trigger click, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const size = 50;

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center w-full relative h-auto my-20 md:m-0 md:h-screen"
    >
      <motion.div {...animationFadeIn} className="w-full md:w-1/2">
        <motion.h3 {...animationFadeInRight} className="text-5xl text-slate-400 text-oswald mb-3">
          {header?.intro}
        </motion.h3>
        <BlurText
          text={header?.service}
          delay={200}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8 text-slate-300"
        />
        <div className="flex gap-5 w-full mt-2">
          {header?.social.map((socialNetwork) => {
            return (
              <a
                key={socialNetwork.link}
                href={socialNetwork.link}
                className=" text-slate-100 hover:text-slate-500"
              >
                {icons[socialNetwork.icon.toLocaleLowerCase()](size)}
              </a>
            );
          })}
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            className="rounded-md bg-transparent border-2 border-slate-100"
            onClick={handleDownload}
          >
            {header?.getCV}
          </Button>
          <Button
            className="rounded-md bg-transparent border-2 border-slate-100"
            onClick={handleGoToContact}
          >
            {header?.goToContact}
          </Button>
        </div>
      </motion.div>
      <motion.div
        {...animationFadeIn}
        className="w-1/2 hidden md:flex md:justify-center md:items-center"
      >
        <div className="bg-primary/50 backdrop-blur-2xl rounded-s-[10%] rounded-e-[50%] overflow-hidden shadow-[0_0_10px] shadow-secondary">
          <img src={Me} className="h-100" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderComponent;
