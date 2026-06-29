import { FaReact, FaGitAlt, FaDocker, FaTrello } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { animationFadeInCustom, animationFadeInHover } from "@/lib/style";
import CodeNameLogin from "@/assets/code-name/code-name-login.png";
import CodeNameRoom from "@/assets/code-name/code-name-room.png";
import ForageLogin from "@/assets/forage/forage-login.png";
import ForageMap from "@/assets/forage/forage-map.png";
import Fabric from "@/assets/fabric/fabric.png";
import Title from "@/components/title";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { type ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const Modal = ({
  project,
  children,
}: {
  project: {
    name: string;
    tech: { tools: string; icon: ReactNode }[];
    description: string;
    photo: string[];
  };
  children: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-1/2 h-100" asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[80vw] h-[80vh] bg-secondary shadow-[0_0_10px] shadow-slate-200 transition-transform duration-500 ease-in-out"
        showCloseButton={false}
      >
        <div className="flex h-full">
          <div className="w-2/3 h-[80dvh] px-5">
            <Carousel className="h-full w-full" plugins={[Fade(), Autoplay({ delay: 6000 })]}>
              <CarouselContent className="h-[70dvh]">
                {project.photo.map((photo) => {
                  return (
                    <CarouselItem className=" w-full h-full bg-primary">
                      <img
                        src={photo}
                        alt={photo}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-1/3 flex flex-col gap-4 text-slate-200 text-outfit">
            <h3 className="text-4xl text-slate-500 text-oswald">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => {
                return (
                  <div
                    key={`${project.name}-${tech.tools}`}
                    className="flex items-center gap-2 bg-blue-950 text-xs rounded p-1"
                  >
                    {tech.icon}
                    {tech.tools}
                  </div>
                );
              })}
            </div>
            <Button>Demo Live</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Gestion de rapport de projet génie civile de forage",
      tech: [
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { tools: "Django", icon: <DiDjango /> },
        { tools: "Postgresql", icon: <SiPostgresql /> },
        { tools: "Docker", icon: <FaDocker /> },
        { tools: "Trello", icon: <FaTrello /> },
        { tools: "Git", icon: <FaGitAlt /> },
      ],
      description:
        "Appication web se basant sur une carte de Madagascar pour trouver les coordonnées des travaux et d'écrire les rapports surs la gestion des matériels, l'état d'avancement du projet et les dépenses lors de la réalisation du projet",
      photo: [ForageLogin, ForageMap],
    },
    {
      name: "Clone du jeu video CodeName",
      tech: [
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { tools: "Django", icon: <DiDjango /> },
        { tools: "Postgresql", icon: <SiPostgresql /> },
        { tools: "Docker", icon: <FaDocker /> },
        { tools: "Git", icon: <FaGitAlt /> },
      ],
      description: "Une clone du jeu vide CodeName qui peut être jouer en multijoueur",
      photo: [CodeNameLogin, CodeNameRoom],
    },
    {
      name: "Siteweb d'E-commerce de vente de T-Shirt personnalisé",
      tech: [
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { tools: "Django", icon: <DiDjango /> },
        { tools: "Postgresql", icon: <SiPostgresql /> },
        { tools: "Docker", icon: <FaDocker /> },
        { tools: "Git", icon: <FaGitAlt /> },
      ],
      description:
        "Une application web qui permet de faire des commandes de t-shirt personnalisés en fournissant les motifs ou textes à mettre sur le t-shirt dôté d'une fonctionnalité de démonstration pour permettre au client de voir son image sur le t-shirt",
      photo: [Fabric],
    },
  ];
  return (
    <div id="projects" className="h-full">
      <Title title="Projets" subtitle="Voici les projets que j'ai réalisé :" />
      <div className="flex flex-col md:flex-row flex-wrap">
        {projects.map((project, index) => {
          return (
            <div key={`${index}${project.name}`}>
              <Modal project={project}>
                <motion.div
                  {...animationFadeInCustom({ amount: 0.3 })}
                  className={`flex flex-col p-2 h-full`}
                >
                  <div
                    className={`rounded-xl overflow-hidden shadow-[0_0_8px] shadow-slate-300/50 border border-slate-600 h-full aspect-video relative`}
                  >
                    <img
                      src={project.photo[0]}
                      alt={project.name}
                      className="h-full w-full absolute inset-0 object-cover z-0"
                    />
                    <motion.div
                      {...animationFadeInHover}
                      className="flex flex-col justify-end items-start text-white z-10 relative h-full w-full p-10 bg-linear-to-b from-10% to-40% from-transparent to-slate-950/80"
                    >
                      <h3 className="text-oswald text-2xl text-slate-100">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 my-2">
                        {project.tech.map((tech) => {
                          return (
                            <div
                              className="flex items-center gap-2 p-2 text-xs bg-primary rounded-md"
                              key={`${project.name}-${tech.tools}`}
                            >
                              {tech.icon}
                              {tech.tools}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
