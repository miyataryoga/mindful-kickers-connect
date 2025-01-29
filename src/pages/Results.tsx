import { useEffect } from "react";
import { motion } from "framer-motion";
import TeamResults from "../components/TeamResults";

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TeamResults showAllResults={true} />
    </motion.div>
  );
};

export default Results;