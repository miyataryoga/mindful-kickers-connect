import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Newspaper, Trophy, Bell } from "lucide-react";

const newsItems = [
  {
    title: "Summer Training Camp Registration Open",
    date: "2024-03-15",
    category: "Event",
    content: "Join our intensive summer training camp. Early bird registration now available!",
    icon: Bell
  },
  {
    title: "U12 Team Wins Regional Championship",
    date: "2024-03-10",
    category: "Achievement",
    content: "Congratulations to our U12 team for their outstanding performance in the regional finals.",
    icon: Trophy
  },
  {
    title: "New English Program Launch",
    date: "2024-03-05",
    category: "Program",
    content: "Introducing our new integrated English language program for all academy members.",
    icon: Newspaper
  }
];

const News = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Academy News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;