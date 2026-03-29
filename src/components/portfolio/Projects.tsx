import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Circle } from "lucide-react";

const projects = [
  {
    title: "E_Commerce_Shop",
    status: "Completed",
    category: "Website",
    description: "A modern full-stack e-commerce web application that enables users to browse products, add items to the cart, and securely complete purchases.",
    tech: ["React", "Next.js", "TypeScript", "Vercel"],
    demo: "https://e-commerce-shop-neon.vercel.app",
    github: "https://github.com/HarishV46/E_Commerce_Shop",
  },
  {
    title: "Fly_Without_Fear",
    status: "Completed",
    category: "Website",
    description: "A modern web application that helps users overcome the fear of flying by providing educational content and supportive guidance.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
    demo: "https://fly-without-fear.vercel.app",
    github: "https://github.com/HarishV46/Fly_Without_Fear",
  },
  {
    title: "Smart City Vision",
    status: "In Progress",
    category: "Website",
    description: "An interactive dashboard to explore city infrastructure, public services, and smart urban initiatives.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    demo: "https://smartcity-vision.vercel.app",
    github: "https://github.com/HarishV46/smartcity-vision",
  },
  {
    title: "Car Gaming",
    status: "Completed",
    category: "Website",
    description: "An interactive browser-based racing game where players control a car using keyboard arrow keys and avoid collisions.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://harishv46.github.io/Car_Gaming/",
    github: "https://github.com/HarishV46/Car_Gaming",
  },
  {
    title: "Gym Website",
    status: "Completed",
    category: "Website",
    description: "A responsive fitness website that allows users to view gym programs, trainers, and contact information.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    demo: "https://harishv46.github.io/Gym_Website/",
    github: "https://github.com/HarishV46/Gym_Website",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === cat ? "bg-primary text-primary-foreground glow-primary" : "glass text-muted-foreground hover:text-foreground"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass hover-glow rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${project.status === "Completed" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                      <Circle size={6} fill="currentColor" /> {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                      <ExternalLink size={14} /> Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
