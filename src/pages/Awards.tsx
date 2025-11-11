import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Award } from "lucide-react";

const awards = [
  {
    title: "About the Internship :",
    description: "Currently engaged in a Full Stack Development internship at Edureka, where I am gaining practical experience by working on real-world web applications and learning end-to-end software development.",
  },
  {
    title: "Key Responsibilities:",
    description: `${"Developing frontend interfaces using React.js to create dynamic, responsive user experiences.Building backend APIs with Node.js and Express, integrating databases using MongoDB.Implementing RESTful services to connect frontend and backend components.Collaborating with mentors and peers in agile workflows to ensure quality code and continuous learning."}`,
  },
  {
    title: "Skills Acquired:",
    description: "Proficient in JavaScript, React, Node.js, MongoDB, and API integration , problem solving and debugging.",
  },
  {
    title: "Projects & Contributions:",
    description: "Worked on projects like Zomato Clone App, where I developed real-time restaurant listing, filtering, and user review features, improving user interaction and performance. Gained hands-on experience handling the full project lifecycle from design, frontend and backend development, API integration, to deployment.",
  }
];

export default function Awards() {
  return (
    <PageTransition variant="zoom-out">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-heading-lg sm:text-display-lg font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Full Stack Developer Intern @ Edureka
            </h1><br /> <br />
            <p className="text-xl text-muted-foreground max-w-1xl mx-auto">
              Gained hands-on full stack development experience by building real-world projects and mastering frontend and backend technologies during my Edureka internship.
            </p>
          </motion.div>

          <div className="space-y-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.3)"
                }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                      >
                        <Award className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {award.title}
                        </h3>
                        <p className="text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 sm:text-right">
                    <span className="inline-block px-4 py-2 bg-muted rounded-xl text-sm font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {award.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: awards.length * 0.1 + 0.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl px-8 py-6 border border-primary/20">
              <p className="text-lg font-medium">
                Continuously learning and growing through every challenge
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
