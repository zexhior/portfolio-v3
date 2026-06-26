import { FaReact, FaGitAlt, FaDocker, FaTrello } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      photo: ["", ""],
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
    },
  ];

  return (
    <div>
      <h2 className="text-6xl text-slate-500 font-semibold text-oswald">Projets</h2>
      <p className="text-3xl mt-4 mb-10">Voici les projets que j'ai réalisé :</p>
      <div className="flex flex-col md:flex-row flex-wrap">
        {projects.map((project, index) => {
          return (
            <div
              key={`${index}${project.name}`}
              className="flex flex-col p-2 w-full md:w-1/3 h-full"
            >
              <Card className="bg-primary border border-slate-400 text-slate-200 h-full flex-auto">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="text-oswald text-3xl">{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      return (
                        <div
                          className="flex items-center gap-2 p-2 bg-secondary rounded-md"
                          key={`${project.name}-${tech.tools}`}
                        >
                          {tech.icon}
                          {tech.tools}
                        </div>
                      );
                    })}
                    <Button>Demo Live</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
