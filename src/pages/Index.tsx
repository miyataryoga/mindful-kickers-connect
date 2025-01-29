import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Players from "../components/Players";
import SimpleTeamResults from "../components/SimpleTeamResults";
import PricingPlans from "../components/PricingPlans";
import News from "../components/News";
import Principles from "../components/Principles";
import Staff from "../components/Staff";
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
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-end">
            <Tabs defaultValue="hero" className="w-auto">
              <TabsList className="grid grid-cols-8 gap-1">
                <TabsTrigger value="hero" onClick={() => scrollToSection("hero")} className="px-2 py-1 text-sm">
                  Home
                </TabsTrigger>
                <TabsTrigger value="principles" onClick={() => scrollToSection("principles")} className="px-2 py-1 text-sm">
                  Principles
                </TabsTrigger>
                <TabsTrigger value="programs" onClick={() => scrollToSection("programs")} className="px-2 py-1 text-sm">
                  Programs
                </TabsTrigger>
                <TabsTrigger value="results" onClick={() => scrollToSection("results")} className="px-2 py-1 text-sm">
                  Results
                </TabsTrigger>
                <TabsTrigger value="news" onClick={() => scrollToSection("news")} className="px-2 py-1 text-sm">
                  News
                </TabsTrigger>
                <TabsTrigger value="pricing" onClick={() => scrollToSection("pricing")} className="px-2 py-1 text-sm">
                  Pricing
                </TabsTrigger>
                <TabsTrigger value="mentors" onClick={() => scrollToSection("mentors")} className="px-2 py-1 text-sm">
                  Mentors
                </TabsTrigger>
                <TabsTrigger value="staff" onClick={() => scrollToSection("staff")} className="px-2 py-1 text-sm">
                  Staff
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div id="hero">
        <Hero />
      </div>
      <div id="principles">
        <Principles />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="results">
        <SimpleTeamResults />
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
      <div id="staff">
        <Staff />
      </div>
    </motion.div>
  );
};

export default Index;