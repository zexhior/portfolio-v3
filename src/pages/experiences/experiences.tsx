import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/title";
import { motion } from "framer-motion";
import { animationFadeInRight } from "@/lib/style";
import Generis from "@/assets/logo/Generis-removebg.png";
import Vatilab from "@/assets/logo/Vatilab-removebg.png";
import Haikintana from "@/assets/logo/Haikintana-removebg.png";
import Logo from "@/assets/h-logo-dark.png";
import type { Experiences } from "@/lib/type";
import { icons } from "@/lib/icons";

interface PropsExperiences {
  experiences?: Experiences;
}

const ExperiencesComponent: React.FC<PropsExperiences> = ({ experiences }) => {
  const logoFirm = [Generis, Logo, Vatilab, Haikintana];

  return (
    <div id="experiences">
      <Title title={experiences?.title ?? ""} subtitle={experiences?.subtitle ?? ""} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-h-fit relative">
          <div className="sticky top-30 w-full h-75 overflow-visible grid grid-cols-2 grid-rows-2 mt-0 md:mt-20">
            {logoFirm?.map((firm) => {
              return (
                <div key={firm} className="w-ful h-full p-2">
                  <img
                    src={firm}
                    alt={firm}
                    className="h-full w-full object-contain  bg-slate-100 backdrop-blur-3xl rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {experiences?.experience?.map((experience) => {
            return (
              <motion.div {...animationFadeInRight} className="w-full" key={experience.duration}>
                <Card className="bg-transparent text-slate-200 border-0">
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
                    <p>{experience?.description}</p>
                    <div className="flex flex-wrap gap-5 my-4">
                      {experience?.tech?.map((tech) => {
                        return (
                          <div
                            key={`${experience.duration}-${tech.tools}`}
                            className="flex items-center gap-2 p-2 bg-primary rounded-md text-xs"
                          >
                            {icons[tech.icon.toLocaleLowerCase()]
                              ? icons[tech.icon.toLocaleLowerCase()](15)
                              : ""}
                            {tech.tools}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
