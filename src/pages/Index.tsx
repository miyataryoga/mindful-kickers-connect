import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Players from "../components/Players";
import TeamResults from "../components/TeamResults";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Programs />
      <TeamResults />
      <Players />
    </motion.div>
  );
};

export default Index;