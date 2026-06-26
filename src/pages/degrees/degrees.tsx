import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="py-5">
      <h2 className="text-6xl text-slate-500 font-semibold text-oswald">Parcours</h2>
      <p className="text-3xl mt-4 mb-10">
        Voici les diplômes academique que j'ai reçu lors de mes études.
      </p>
      <div className="flex flex-col md:flex-row gap-5">
        {degrees.map((degree) => {
          return (
            <Card
              key={degree.title}
              className="border border-slate-500 bg-secondary text-white p-4 md:p-10"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-oswald">
                  <p className="text-slate-500">{degree.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{degree.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Degrees;
