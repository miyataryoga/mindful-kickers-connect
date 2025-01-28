import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const plans = [
  {
    name: "Elite Academy Program",
    price: "80€",
    period: "/month",
    features: [
      "Full access to all training sessions",
      "Weekend matches and tournaments",
      "Performance tracking",
      "Personal development plan",
    ],
    description: "Full-time training program",
  },
  {
    name: "Weekday Warriors",
    price: "50€",
    period: "/month",
    features: [
      "Weekday training sessions",
      "Basic skill development",
      "Team practice sessions",
      "Regular feedback",
    ],
    description: "Weekday-only training program",
  },
  {
    name: "English Plus",
    price: "30€",
    period: "/lesson",
    features: [
      "One-on-one English lessons",
      "Sports-focused vocabulary",
      "Conversation practice",
      "Progress assessment",
    ],
    description: "Individual English lessons",
  },
];

const PricingPlans = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Choose Your Path to Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;