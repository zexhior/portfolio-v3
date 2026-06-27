import { FaReact, FaGitAlt, FaDocker, FaTrello } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { animationFadeInCustom, animationFadeInHover, animationFadeInRight } from "@/lib/style";
import CodeNameLogin from "@/assets/code-name/code-name-login.png";
import CodeNameRoom from "@/assets/code-name/code-name-room.png";
import ForageLogin from "@/assets/forage/forage-login.png";
import ForageMap from "@/assets/forage/forage-map.png";
import Fabric from "@/assets/fabric/fabric.png";

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
    <div className="h-full">
      <motion.h2
        {...animationFadeInRight}
        className="text-4xl text-slate-500 font-semibold text-oswald"
      >
        Projets
      </motion.h2>
      <motion.p {...animationFadeInRight} className="text-2xl mt-4 mb-10">
        Voici les projets que j'ai réalisé :
      </motion.p>
      <div className="flex flex-col md:flex-row flex-wrap">
        {projects.map((project, index) => {
          return (
            <motion.div
              {...animationFadeInCustom({ amount: 0.3 })}
              key={`${index}${project.name}`}
              className={`flex flex-col p-2 w-full md:w-1/2 h-100`}
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
                  <Button className="bg-blue-900 w-fit">Demo Live</Button>
                </motion.div>
              </div>
              {/* <Card className="flex flex-col bg-primary border border-slate-400 text-slate-200 h-full">
                {" "}
                <img
                  src={project.photo[0]}
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover"
                />
                <CardHeader className="flex flex-auto">
                  <h3 className="text-oswald text-2xl">{project.name}</h3>
                </CardHeader>
                <CardFooter className="flex flex-col gap-4 h-full">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      return (
                        <div
                          className="flex items-center gap-2 p-2 text-xs bg-secondary rounded-md"
                          key={`${project.name}-${tech.tools}`}
                        >
                          {tech.icon}
                          {tech.tools}
                        </div>
                      );
                    })}
                  </div>
                  <Button className="bg-blue-900 w-fit">Demo Live</Button>
                </CardFooter>
              </Card> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
