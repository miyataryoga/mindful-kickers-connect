import { motion } from "framer-motion";
import { Ball, GraduationCap, Users } from "lucide-react";

const programs = [
  {
    icon: Ball,
    title: "Football Excellence",
    description: "Professional training following Japanese football methodology",
  },
  {
    icon: GraduationCap,
    title: "English Education",
    description: "Integrated English learning through sports and activities",
  },
  {
    icon: Users,
    title: "Lasting Friendships",
    description: "Building strong bonds through teamwork and shared experiences",
  },
];

const Programs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Three Pillars of Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-muted hover:shadow-lg transition-all duration-300"
            >
              <program.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-secondary">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;