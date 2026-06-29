import GlareHover from "@/components/GlareHover";
import Title from "@/components/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { animationFadeIn } from "@/lib/style";
import type { Degrees } from "@/lib/type";
import { motion } from "framer-motion";

interface PropsDegrees {
  degrees?: Degrees;
}

const Degrees: React.FC<PropsDegrees> = ({ degrees }) => {
  return (
    <div id="degrees" className="py-5">
      <Title title={degrees?.title ?? ""} subtitle={degrees?.subtitle ?? ""} />
      <motion.div {...animationFadeIn} className="flex flex-col md:flex-row gap-5 max-h-fit">
        {degrees?.degree.map((degree) => {
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
