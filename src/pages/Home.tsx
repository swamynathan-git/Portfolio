import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const techStack = [
  "React",
  "Node.js",
  "JavaScript",
  "Express.js",
  "MongoDB",
  "Css",
  "HTML5",
  "Bootstrap",
  "python"
];

export default function Home() {
  return (
    <PageTransition variant="fade-up">
      <div className="min-h-screen pt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-dashed border-primary rounded-full opacity-40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-primary/20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    Let's Talk
                  </div>
                </motion.div>
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-border bg-muted shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl font-bold text-primary">
                    <img src="/resume _pic.jpg" alt="not Found" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-heading-lg sm:text-display-lg font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Architect of digital innovation.
                  </h1>

                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground max-w-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Building intelligent, scalable, and beautiful web applications with a full-stack mindset.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.span
                      className="relative z-10 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FileText className="w-5 h-5" />
                      SnapDoc
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                      }}
                      className="px-4 py-2 bg-muted rounded-xl text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="pt-4"
              >
                <Link
                  to="/about"
                  className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 group"
                >
                  Explore my work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
