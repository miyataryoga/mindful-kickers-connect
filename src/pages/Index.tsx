import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Players from "../components/Players";
import TeamResults from "../components/TeamResults";
import PricingPlans from "../components/PricingPlans";
import News from "../components/News";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="hero" onClick={() => scrollToSection("hero")}>
                Home
              </TabsTrigger>
              <TabsTrigger value="programs" onClick={() => scrollToSection("programs")}>
                Programs
              </TabsTrigger>
              <TabsTrigger value="results" onClick={() => scrollToSection("results")}>
                Results
              </TabsTrigger>
              <TabsTrigger value="news" onClick={() => scrollToSection("news")}>
                News
              </TabsTrigger>
              <TabsTrigger value="pricing" onClick={() => scrollToSection("pricing")}>
                Pricing
              </TabsTrigger>
              <TabsTrigger value="mentors" onClick={() => scrollToSection("mentors")}>
                Mentors
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div id="hero">
        <Hero />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="results">
        <TeamResults />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="pricing">
        <PricingPlans />
      </div>
      <div id="mentors">
        <Players />
      </div>
    </motion.div>
  );
};

export default Index;