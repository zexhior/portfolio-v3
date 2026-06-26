import {
  FaReact,
  FaGitAlt,
  FaDocker,
  FaTrello,
  FaPython,
  FaAngular,
  FaFigma,
  FaJs,
} from "react-icons/fa";
import { FaFlutter, FaGitlab } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiAdonisjs, SiMysql, SiPostgresql, SiStrapi } from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";
import { BsTypescript } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experiences = () => {
  const experiences = [
    {
      duration: "Août 2025 - Février 2026",
      poste: "Développeur web fullstack",
      firm: "Generis - Lab",
      tech: [
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { tools: "AdonisJS", icon: <SiAdonisjs /> },
        { tools: "Postgresql", icon: <SiPostgresql /> },
        { tools: "Docker", icon: <FaDocker /> },
        { tools: "Trello", icon: <FaTrello /> },
        { tools: "Git", icon: <FaGitAlt /> },
      ],
      description:
        "Maintenance et conception de features d'une application de quotation pour l'exportation et l'importation de marchandise d'un pays à un autre",
      photo: ["", ""],
    },
    {
      duration: "Février 2025 - Mai 2025",
      poste: "Développeur web fullstack",
      firm: "Freelance",
      tech: [
        { tools: "Javascript", icon: <FaJs /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "Django", icon: <DiDjango /> },
        { tools: "Python", icon: <FaPython /> },
        { tools: "Mysql", icon: <SiMysql /> },
        { tools: "Gitlab", icon: <FaGitlab /> },
      ],
      description:
        "Conception d'une application web pour la gestion des commandes, des stocks et des matériels d'un réstaurant et d'un hôtel",
      photo: ["", ""],
    },
    {
      duration: "Août 2024 - Février 2025",
      poste: "Développeur frontend",
      firm: "Vatilab",
      tech: [
        { tools: "Javascript", icon: <FaJs /> },
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "React", icon: <FaReact /> },
        { tools: "Angular", icon: <FaAngular /> },
        { tools: "Flutter", icon: <FaFlutter /> },
        { tools: "Strapi", icon: <SiStrapi /> },
        { tools: "Figma", icon: <FaFigma /> },
        { tools: "Trello", icon: <FaTrello /> },
        { tools: "Gitlab", icon: <FaGitlab /> },
      ],
      description:
        "Intégrer les maquettes fournis par les experts design avec les téchnologies React, Angular et Flutter et assurer la consommation d'API réaliser par les développeurs backend",
      photo: ["", ""],
    },
    {
      duration: "Février 2024 - Juillet 2024",
      poste: "Stagiaire développeur frontend",
      firm: "Vatilab",
      tech: [
        { tools: "React", icon: <FaReact /> },
        { tools: "Ionic", icon: <IoLogoIonic /> },
        { tools: "Figma", icon: <FaFigma /> },
        { tools: "Trello", icon: <FaTrello /> },
        { tools: "Gitlab", icon: <FaGitlab /> },
      ],
      description:
        "Maintenance et conception de nouvelles fonctionnalité pour l'application B2B mybeedoo et assurer la bonne relation entre le frontend et le backend.",
      photo: ["", ""],
    },
    {
      duration: "Avril 2021 - Septembre 2021",
      poste: "Stagiaire développeur fullstack",
      firm: "Association Haikintana",
      tech: [
        { tools: "Typescript", icon: <BsTypescript /> },
        { tools: "Angular", icon: <FaAngular /> },
        { tools: "Django", icon: <DiDjango /> },
        { tools: "Mysql", icon: <SiMysql /> },
        { tools: "Git", icon: <FaGitAlt /> },
      ],
      description:
        "Conception d'un application de gestion des membres de l'association ainsi que les évènements avec une génération de badge pour chaque membre et le scan du CodeQR pour le pointage.",
      photo: ["", ""],
    },
  ];

  return (
    <div>
      <h2 className="text-6xl text-slate-500 font-semibold text-oswald">Expériences</h2>
      <p className="text-3xl mt-4 mb-10">Voici les postes que j'ai déja occupé dans le passé :</p>
      <div>
        {experiences.map((experience) => {
          return (
            <Card key={experience.duration} className="bg-transparent text-slate-200 border-0">
              <CardHeader>
                <CardTitle>
                  <span className="text-xl text-oswald">{experience.poste}</span>{" "}
                  <span>{`(${experience.firm})`}</span>
                </CardTitle>
                <CardDescription>
                  <span>{experience.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-100">
                <p>{experience.description}</p>
                <div className="flex flex-wrap gap-5 my-4">
                  {experience.tech.map((tech) => {
                    return (
                      <div className="flex items-center gap-2 p-2 bg-primary rounded-md">
                        {tech.icon}
                        {tech.tools}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
