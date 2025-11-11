import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Secondary Education",
    company: "GOVT ( B ) HR SEC SCHOOL",
    period: "2018 – 2019",
    description: "Completed in 2019 with 50% marks",
  },
  {
    role: "Higher Secondary Education",
    company: "Veda Nikethan Matric Higher Secondary School",
    period: "2020 – 2021",
    description: "Completed in 2021 with 65% marks",
  },
  {
    role: "BCA ( Computer Application )",
    company: "DLR Arts and Science College ",
    period: " 2021 –  2024",
    description: "Completed in 2024 with 70% ( First Class )",
  },
  {
    role: "Full Stack (MERN - Internship)",
    company: "Edureka",
    period: "Aug 2024 – present ",
    description: "Presently engaged in an internship",
  },
];

const additionalExperiences = [
  // {
  //   role: "Frontend Developer",
  //   company: "TechCorp",
  //   period: "Jun 2021 – Jul 2022",
  //   description: "Developed responsive web applications using modern frameworks",
  // },
  // {
  //   role: "Design Intern",
  //   company: "Creative Studio",
  //   period: "Jan 2021 – May 2021",
  //   description: "Assisted in creating brand identities and digital design assets",
  // },
];

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <PageTransition variant="slide-left">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-lg sm:text-display-lg font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Acedemic Credentials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "Pursued academic excellence through consistent learning and practical applications, preparing for a career in software development. I am a passionate web developer dedicated to building efficient and user-friendly applications."
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Main experiences */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                  <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0"
                    >
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-muted-foreground font-medium mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Additional experiences (collapsible) */}
              <motion.div
                initial={false}
                animate={{ height: showMore ? "auto" : 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-12 pt-12">
                  {additionalExperiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={{ opacity: showMore ? 1 : 0, x: showMore ? 0 : (index % 2 === 0 ? 50 : -50) }}
                      transition={{ duration: 0.6, delay: showMore ? index * 0.15 : 0 }}
                      className={`relative grid md:grid-cols-2 gap-8 ${(experiences.length + index) % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                      <div
                        className={
                          (experiences.length + index) % 2 === 0
                            ? "md:col-start-1"
                            : "md:col-start-2"
                        }
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0"
                        >
                          <span className="text-sm font-medium text-primary">{exp.period}</span>
                          <h3 className="text-2xl font-bold mt-2 mb-1">{exp.role}</h3>
                          <h4 className="text-lg text-muted-foreground font-medium mb-3">
                            {exp.company}
                          </h4>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Show More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: experiences.length * 0.15 + 0.2 }}
              className="flex justify-center mt-12"
            >
              {/* <Button
                onClick={() => setShowMore(!showMore)}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                {showMore ? "Show Less" : "Show More"}
                <motion.div
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-2 w-5 h-5" />
                </motion.div>
              </Button> */}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
