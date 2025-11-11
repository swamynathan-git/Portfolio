import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
// import { Lightbulb, Layout, Palette, Code } from "lucide-react";
import { IoLogoAmazon } from "react-icons/io5";
import { SiZomato } from "react-icons/si";

const processSteps = [
  {
    icon: IoLogoAmazon,
    title: "Amazon ",
    description: "Developed a full-featured Amazon clone using MERN stack with product browsing, searching, and filtering for a seamless shopping experience. Implemented user authentication and secure payment integration for safe transactions. Built dynamic product pages with real-time cart updates, enhancing user engagement. Designed an admin panel and integrated backend APIs with MongoDB for efficient product and order management.",
  },
  {
    icon: SiZomato,
    title: "Zomato ( progress )",
    description: "Developed a Zomato clone using MERN stack focused on restaurant discovery and food ordering. Implemented live table booking, order tracking, and location-based restaurant recommendations using geolocation APIs. Integrated user-generated reviews and photos for an interactive community experience. Designed a responsive, mobile-friendly UI for seamless on-the-go access",
  },
];

export default function Process() {
  return (
    <PageTransition variant="fade-up">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-heading-lg sm:text-display font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-heading-lg sm:text-display-lg font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Development Highlights
            </h1>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of real-world clones that bring design and development together
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.2)"
                  }}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-primary rounded-full mt-6 origin-left"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-muted rounded-2xl px-8 py-4 border border-border">
              <p className="text-lg">
                <span className="font-semibold text-primary">Each step</span> is collaborative,
                ensuring your vision comes to life
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
