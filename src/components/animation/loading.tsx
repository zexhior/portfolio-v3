import Logo from "@/assets/h-logo-light.png";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full backdrop-blur-3xl absolute top-0 left-0 z-100 bg-secondary">
      <motion.img
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        transition={{
          delay: 0.5,
          rotate: { type: "spring", bounce: 0.5, repeat: Infinity, duration: 1 },
        }}
        src={Logo}
        alt="loader"
        width={150}
        height={150}
        className="border-x-8 border-y-slate-500/10 border-x-slate-100 border-y-8 rounded-full p-4"
      />
    </div>
  );
};

export default Loader;
