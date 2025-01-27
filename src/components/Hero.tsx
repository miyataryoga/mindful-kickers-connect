import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Football academy"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in">
            U6-12 Football Academy in Düsseldorf
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Where Football Meets
            <br /> Education & Friendship
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join our unique academy combining Japanese football excellence with English education
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Academy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;