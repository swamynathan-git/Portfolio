import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram ,Phone } from "lucide-react";

// const socialLinks = [
//   { icon: Github, label: "GitHub", url: "#", color: "hover:text-[#333]" },
//   { icon: Linkedin, label: "LinkedIn", url: "www.linkedin.com/in/swamy-nathan81146", color: "hover:text-[#0077B5]" },
//   { icon: Mail, label: "Email", url: "mailto:your-swamynathan167@gmail.com", color: "hover:text-primary" },
// ];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/swamynathan-git", color: "hover:text-[#333]" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/swamy-nathan81146", color: "hover:text-[#0077B5]" },
  { icon: Mail, label: "Email", url: "mailto:swamynathan167@gmail.com", color: "hover:text-primary" },
  { icon: Phone, label: "Phone", url:  "tel:+916382034890", color: "hover:text-primary" },
];


export default function Contact() {
  return (
    <PageTransition variant="scale">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-heading-lg sm:text-display-lg font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Let's create your next big idea
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                Available for work
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-12 py-8 text-2xl font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-7 h-7" />
                  Contact Me
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-6 pt-12"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 bg-card border-2 border-border rounded-2xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary ${social.color} hover:shadow-lg group`}
                    aria-label={social.label}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-20 text-sm text-muted-foreground"
            >
              <p>© 2024 Portfolio. Designed & Built with passion.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
