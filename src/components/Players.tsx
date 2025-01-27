import { motion } from "framer-motion";

const players = [
  {
    name: "Takashi Inui",
    position: "Professional Mentor",
    image: "/placeholder.svg",
  },
  {
    name: "Shinji Kagawa",
    position: "Guest Coach",
    image: "/placeholder.svg",
  },
  {
    name: "Makoto Hasebe",
    position: "Technical Advisor",
    image: "/placeholder.svg",
  },
];

const Players = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Mentors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Learn from the Best
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-bold">{player.name}</h3>
                <p className="text-sm opacity-90">{player.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;