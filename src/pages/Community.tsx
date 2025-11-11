import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Users, Calendar, BookOpen, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: 5000, label: "Members", suffix: "+" },
  { value: 25, label: "Events", suffix: "+" },
  { value: 4, label: "Years", suffix: "" },
];

const features = [
  {
    icon: Users,
    title: "Mentoring",
    description: "1-on-1 guidance and career advice for aspiring developers",
  },
  {
    icon: Calendar,
    title: "Opportunities",
    description: "Connecting talented individuals with exciting projects",
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    description: "Curated learning materials and tutorials for all skill levels",
  },
  {
    icon: Heart,
    title: "Help & Reviews",
    description: "Code reviews, feedback, and technical support from the community",
  },
];

const CounterAnimation = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-5xl sm:text-6xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function Community() {
  return (
    <PageTransition variant="slide-right">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-lg sm:text-display font-bold mb-4">
              Building a Tech Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating a space where developers and designers can learn, grow, and collaborate.
              Our mission is to make technology education accessible to everyone and foster
              meaningful connections in the tech industry.
            </p>
          </motion.div>

          {/* Stats Counter */}
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300"
              >
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
                <p className="text-xl font-semibold text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl px-8 py-6 border border-primary/20">
              <p className="text-lg font-medium max-w-2xl">
                Join us in building a supportive, inclusive community where everyone can thrive
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
