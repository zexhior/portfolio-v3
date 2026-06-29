import { Card, CardContent } from "@/components/ui/card";
import { FaTools, FaMobileAlt } from "react-icons/fa";
import { BsDatabase, BsWindowStack } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";
import { motion } from "framer-motion";
import { animationFadeIn } from "@/lib/style";
import Title from "@/components/title";
import SpotlightCard from "@/components/SpotlightCard";
import type { Skills } from "@/lib/type";
import { icons } from "@/lib/icons";

const SkillComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      id="skills"
      {...animationFadeIn}
      whileHover={{ scale: 1.05 }}
      className="w-full md:w-1/3 flex p-2"
    >
      <Card className="h-full text-slate-200 w-full p-0 bg-blue-950/10 backdrop-blur-4xl overflow-visible">
        <CardContent className="h-full w-full p-0">
          <SpotlightCard
            className="flex flex-col gap-4 h-full w-full p-0 m-0 bg-transparent border border-slate-500"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {children}
          </SpotlightCard>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface PropsSkill {
  skills?: Skills;
}

interface Skill {
  title: string;
  icon: string;
}

const size = 15;

const SkillContent = ({ skills }: { skills?: Skill[] }) => {
  return (
    <div className="flex flex-wrap gap-2 ps-2">
      {skills?.map((tech) => {
        return (
          <div
            key={tech?.title}
            className="flex gap-2 items-center bg-primary p-2 rounded-md hover:bg-blue-950 transition ease-in-out duration-200 cursor-pointer"
          >
            {icons[tech.icon.toLowerCase()](size)}
            <p className="text-xs">{tech?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

const SkillsComponent: React.FC<PropsSkill> = ({ skills }) => {
  const titleSize = 25;

  return (
    <div>
      <Title title={skills?.title ?? ""} subtitle={skills?.subtitle ?? ""} />
      <div className="flex flex-wrap">
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsWindowStack size={titleSize} className="text-slate-300" />
            </div>
            <h2>{skills?.frontend?.title}</h2>
          </div>
          <h3 className="flex gap-2 items-center text-lg">
            <MdWebAsset />
            Web
          </h3>
          <SkillContent skills={skills?.frontend?.web} />
          <h3 className="flex gap-2 items-center text-lg">
            <FaMobileAlt />
            Mobile
          </h3>
          <SkillContent skills={skills?.frontend?.mobile} />
        </SkillComponent>
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsWindowStack size={titleSize} className="text-slate-300" />
            </div>
            <h2>{skills?.backend?.title}</h2>
          </div>
          <SkillContent skills={skills?.backend?.tech} />
          <div className="flex gap-2 text-slate-500 items-center text-xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <BsDatabase size={titleSize} className="text-slate-300" />
            </div>
            <h2>{skills?.db?.title}</h2>
          </div>
          <SkillContent skills={skills?.db?.tech} />
        </SkillComponent>
        <SkillComponent>
          <div className="flex gap-2 text-slate-500 items-center text-xl font-semibold">
            <div className="bg-violet-950 p-2 rounded-md">
              <FaTools size={titleSize} className="text-slate-300" />
            </div>
            <h2>{skills?.tools?.title}</h2>
          </div>
          <SkillContent skills={skills?.tools?.tech} />
        </SkillComponent>
      </div>
    </div>
  );
};

export default SkillsComponent;
