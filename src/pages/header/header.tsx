import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Me from "@/assets/me.png";
import { motion } from "framer-motion";
import { animationFadeIn } from "@/lib/style";

const Header = () => {
  const headerText = [
    {
      title: "Bonjour, je suis Herizo.",
      description:
        "Développeur Web Fullstack passionné, je crée des applications modernes, performantes et centrées sur l'expérience utilisateur.",
    },
    {
      title: "Développement Fullstack",
      description: "Je crée des applications web complètes avec React, Django et Node.js.",
    },
    {
      title: "Interfaces Modernes et Responsives",
      description:
        "Je conçois des applications avec des interfaces rapides, responsives et intuitives adaptées à tous les écrans.",
    },
    {
      title: "APIs et Architecture Backend",
      description:
        "Je conçois des APIs REST sécurisées et optimisées, capables de supporter des applications à fort trafic.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full relative h-screen">
      <motion.div {...animationFadeIn} className="w-full md:w-1/2">
        <Carousel
          plugins={[
            Autoplay({
              delay: 8000,
            }),
          ]}
        >
          <CarouselContent>
            {headerText.map((text) => {
              return (
                <CarouselItem
                  key={text.title}
                  className="flex flex-col justify-center items-start space-y-5"
                >
                  <h2 className="text-slate-400 text-2xl md:text-4xl text-start">{text.title}</h2>
                  <p className="text-slate-200 text-lg md:text-xl text-start break-after-all md:break-after-avoid">
                    {text.description}
                  </p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <motion.div
        {...animationFadeIn}
        className="w-1/2 hidden md:flex md:justify-center md:items-center"
      >
        <div className="bg-primary rounded-s-[10%] rounded-e-[50%] overflow-hidden shadow-[0_0_10px] shadow-secondary">
          <img src={Me} className="h-100" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
