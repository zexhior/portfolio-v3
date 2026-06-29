import GlareHover from "@/components/GlareHover";
import Title from "@/components/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { animationFadeIn } from "@/lib/style";
import { motion } from "framer-motion";

interface IDegrees {
  title: string;
  description: string;
}

const Degrees = () => {
  const degrees: IDegrees[] = [
    {
      title: "Master en Informatique de Gestion, Génie Logiciel et Intelligence Artificielle",
      description:
        "Cette formation de Master à l'Institut Supérieur Polytechnique de Madagascar m'a permis d'approfondir mes compétences en développement logiciel, en gestion de projets informatiques et en intelligence artificielle. Elle m'a également préparé au monde professionnel en me familiarisant avec les méthodes de travail, les bonnes pratiques du génie logiciel et les enjeux des projets informatiques complexes.",
    },
    {
      title: "Licence en Informatique de Gestion, Génie Logiciel et Intelligence Artificielle",
      description:
        "Cette formation de Licence à l'Institut Supérieur Polytechnique de Madagascar m'a permis d'acquérir de solides bases en programmation, en génie logiciel et en gestion de bases de données. Les projets académiques réalisés au cours de ce cursus ont contribué à développer mes compétences techniques et à construire les fondations nécessaires pour évoluer dans un environnement professionnel.",
    },
  ];

  return (
    <div id="degrees" className="py-5">
      <Title
        title="
        Parcours"
        subtitle="
        Voici les diplômes academique que j'ai reçu lors de mes études."
      />
      <motion.div {...animationFadeIn} className="flex flex-col md:flex-row gap-5 max-h-fit">
        {degrees.map((degree) => {
          return (
            <div key={degree.title} className="w-full max-h-fit">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background="#000719"
                height="auto"
                borderRadius="25px"
                width="100%"
              >
                <Card className="bg-transparent text-slate-200 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-oswald">
                      <p className="text-slate-500">{degree.title}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{degree.description}</p>
                  </CardContent>
                </Card>
              </GlareHover>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Degrees;
