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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

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
          <div className="flex justify-start">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40 bg-white">
                <DropdownMenuItem onClick={() => scrollToSection("hero")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("principles")}>
                  Principles
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("programs")}>
                  Programs
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("results")}>
                  Results
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("news")}>
                  News
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("pricing")}>
                  Pricing
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("mentors")}>
                  Mentors
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("staff")}>
                  Staff
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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