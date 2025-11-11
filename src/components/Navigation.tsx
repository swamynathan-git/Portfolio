import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Layers, Award, Users, Mail } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/process", icon: Layers, label: "Projects" },
  { path: "/awards", icon: Award, label: "Intern" },
  // { path: "/community", icon: Users, label: "Community" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold ">
            .DEVHUB
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative p-2"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-primary' : ''}`} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
