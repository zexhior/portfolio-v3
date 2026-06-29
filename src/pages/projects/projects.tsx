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
import type { Projects } from "@/lib/type";
import { icons } from "@/lib/icons";

interface IModal extends React.AllHTMLAttributes<HTMLDivElement> {
  project: {
    name: string;
    tech: { tools: string; icon: string }[];
    description: string;
    photo: string[];
  };
  children: ReactNode;
}

const photos: Record<string, string> = {
  ForageLogin,
  ForageMap,
  CodeNameLogin,
  CodeNameRoom,
  Fabric,
};

const Modal: React.FC<IModal> = ({ project, children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogTrigger className="w-full md:w-1/2 h-100" asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[80vw] h-[80vh] bg-secondary shadow-[0_0_10px] shadow-slate-200 transition-transform duration-500 ease-in-out px-5"
        showCloseButton={false}
      >
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          <div className="w-full md:w-2/3 h-[40dvh] md:h-[70dvh] md:px-2">
            <Carousel className="h-full w-full" plugins={[Fade(), Autoplay({ delay: 6000 })]}>
              <CarouselContent className="h-[30dvh] md:h-[70dvh]">
                {project?.photo?.map((photo) => {
                  return photos[photo] ? (
                    <CarouselItem key={photo} className=" w-full h-full bg-primary">
                      <img
                        src={photos[photo]}
                        alt={photo}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </CarouselItem>
                  ) : (
                    <></>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4 text-slate-200 text-outfit h-[40dvh] md:h-[70dvh] overflow-y-scroll scrollbar-thumb-blue-950">
            <h3 className="text-4xl text-slate-500 text-oswald">{project?.name}</h3>
            <p>{project?.description}</p>
            <div className="flex flex-wrap gap-2">
              {project?.tech?.map((tech) => {
                return (
                  <div
                    key={`${project.name}-${tech.tools}`}
                    className="flex items-center gap-2 bg-blue-950 text-xs rounded p-1"
                  >
                    {icons[tech.icon.toLocaleLowerCase()]
                      ? icons[tech.icon.toLocaleLowerCase()](15)
                      : ""}
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

interface PropsProjects {
  projects?: Projects;
}

const ProjectsComponent: React.FC<PropsProjects> = ({ projects }) => {
  return (
    <div id="projects" className="h-full">
      <Title title={projects?.title ?? ""} subtitle={projects?.subtitle ?? ""} />
      <div className="flex flex-col md:flex-row flex-wrap">
        {projects?.project?.map((project, index) => {
          return (
            <Modal key={`${index}-${project.name}`} project={project}>
              <motion.div
                {...animationFadeInCustom({ amount: 0.3 })}
                className={`flex flex-col p-2 h-full`}
              >
                <div
                  className={`rounded-xl overflow-hidden shadow-[0_0_8px] shadow-slate-300/50 border border-slate-600 h-full aspect-video relative`}
                >
                  <img
                    src={photos[project.photo[0]]}
                    alt={project.name}
                    className="h-full w-full absolute inset-0 object-cover z-0"
                  />
                  <motion.div
                    {...animationFadeInHover}
                    className="flex flex-col justify-end items-start text-white z-10 relative h-full w-full p-10 bg-linear-to-b from-10% to-40% from-transparent to-slate-950/80"
                  >
                    <h3 className="text-oswald text-2xl text-slate-100">{project?.name}</h3>
                    <div className="flex flex-wrap gap-2 my-2">
                      {project?.tech?.map((tech) => {
                        return (
                          <div
                            className="flex items-center gap-2 p-2 text-xs bg-primary rounded-md"
                            key={`${project?.name}-${tech?.tools}`}
                          >
                            {icons[tech?.icon.toLocaleLowerCase()]
                              ? icons[tech?.icon.toLocaleLowerCase()](15)
                              : ""}
                            {tech?.tools}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Modal>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
