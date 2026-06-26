import { Card, CardContent } from "@/components/ui/card";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaTrello,
  FaTools,
  FaMobileAlt,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiAdonisjs, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { BsDatabase, BsTypescript, BsWindowStack } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";

interface Skill {
  title: string;
  icon: React.ReactNode;
}

const SkillComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-1/3 flex p-4">
      <Card className="w-full bg-secondary-800/80 backdrop-blur-xl hover:scale-105 border text-slate-300 transition-all">
        <CardContent className="flex flex-col gap-4 ">{children}</CardContent>
      </Card>
    </div>
  );
};

const SkillContent = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="flex flex-wrap gap-2 ps-2">
      {skills.map((tech) => {
        return (
          <div
            key={tech.title}
            className="flex gap-2 items-center text-md bg-primary p-2 rounded-md"
          >
            {tech.icon}
            <p className="text-md font-semibold">{tech.title}</p>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const size = 25;
  const frontend = {
    web: [
      {
        title: "Javascript",
        icon: <IoLogoJavascript size={size} />,
      },
      {
        title: "Typescript",
        icon: <BsTypescript size={size} />,
      },
      {
        title: "HTML5",
        icon: <FaHtml5 size={size} />,
      },
      {
        title: "CSS3",
        icon: <FaCss3 size={size} />,
      },
      {
        title: "Tailwind",
        icon: <RiTailwindCssFill size={size} />,
      },
      {
        title: "React",
        icon: <FaReact size={size} />,
      },
      {
        title: "Next",
        icon: <RiNextjsFill size={size} />,
      },
    ],
    mobile: [
      {
        title: "Flutter",
        icon: <FaFlutter size={size} />,
      },
    ],
  };

  const backend = [
    {
      title: "Python",
      icon: <FaPython size={size} />,
    },
    {
      title: "Django",
      icon: <DiDjango size={size} />,
    },
    {
      title: "Adonis",
      icon: <SiAdonisjs size={size} />,
    },
    {
      title: "Node",
      icon: <FaNode size={size} />,
    },
  ];

  const db = [
    {
      title: "Postgresql",
      icon: <SiPostgresql size={size} />,
    },
    {
      title: "MySQL",
      icon: <SiMysql size={size} />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb size={size} />,
    },
  ];

  const tools = [
    {
      title: "Git",
      icon: <FaGitAlt size={size} />,
    },
    {
      title: "Docker",
      icon: <FaDocker size={size} />,
    },
    {
      title: "Trello",
      icon: <FaTrello size={size} />,
    },
  ];

  return (
    <div>
      <h2 className="text-6xl text-slate-500 font-semibold text-oswald">Compétences</h2>
      <p className="text-3xl mt-4 mb-10">
        Voici les langages, les frameworks et outils que j'utilise pour mon travail
      </p>
      <div className="flex flex-wrap">
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-2xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsWindowStack size={35} className="text-slate-300" />
            </div>
            <h2>Frontend</h2>
          </div>
          <h3 className="flex gap-2 items-center text-xl">
            <MdWebAsset />
            Web
          </h3>
          <SkillContent skills={frontend.web} />
          <h3 className="flex gap-2 items-center text-xl">
            <FaMobileAlt />
            Mobile
          </h3>
          <SkillContent skills={frontend.mobile} />
        </SkillComponent>
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-2xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsWindowStack size={35} className="text-slate-300" />
            </div>
            <h2>Backend</h2>
          </div>
          <SkillContent skills={backend} />

          <div className="flex gap-2 text-slate-500 items-center text-2xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsDatabase size={35} className="text-slate-300" />
            </div>
            <h2>Base de données</h2>
          </div>
          <SkillContent skills={db} />
        </SkillComponent>
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-2xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <FaTools size={35} className="text-slate-300" />
            </div>
            <h2>Outils</h2>
          </div>
          <SkillContent skills={tools} />
        </SkillComponent>
      </div>
    </div>
  );
};

export default Skills;
