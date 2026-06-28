import { animationFadeInRight } from "@/lib/style";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col">
      <motion.h2 {...animationFadeInRight} className="w-fit">
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          animationSpeed={8}
          showBorder={false}
          className="text-oswald rounded-0 overflow-visible text-4xl text-slate-500 font-semibold text-oswald"
        >
          {title}
        </GradientText>
      </motion.h2>
      <motion.p {...animationFadeInRight} className="text-2xl mt-4 mb-10">
        {subtitle}
      </motion.p>
    </div>
  );
};

export default Title;
