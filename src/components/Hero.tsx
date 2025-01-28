import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          alt="Football academy"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/lovable-uploads/cf52f81a-7fde-4825-872c-8ceb3e3a633d.png"
              alt="Samurai Academy Logo"
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>
          <span className="inline-block px-4 py-1 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
            U6-12 Football Academy in Düsseldorf
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Samurai Academy
            <br /> 
            <span className="text-primary">Excellence Through Discipline</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our unique academy combining Japanese football excellence with English education
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            Join Our Academy
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;