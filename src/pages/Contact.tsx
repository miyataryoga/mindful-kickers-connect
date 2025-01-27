import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Join Our Academy</h1>
            <p className="text-muted-foreground">
              Take the first step towards excellence in football and education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary w-5 h-5" />
                <p>info@mindfulkickers.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary w-5 h-5" />
                <p>+49 123 456 789</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary w-5 h-5" />
                <p>Düsseldorf, Germany</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input placeholder="Phone Number" />
              <Textarea
                placeholder="Tell us about your child (age, experience level, etc.)"
                className="min-h-[120px]"
                required
              />
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;