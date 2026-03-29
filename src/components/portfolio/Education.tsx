import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech - Information Technology",
    institute: "Er.Perumal Manimegalai College of Engineering, Hosur",
    location: "Hosur, Tamil Nadu",
    status: "Expected 2026",
    description: "CGPA - 8.2. Coursework includes Data Structures, OOP, and Database Management Systems. Passionate Java Full Stack Developer building responsive web applications.",
  },
  {
    degree: "Higher Secondary",
    institute: "Govt Higher Secondary School",
    location: "Hosur, Tamil Nadu",
    status: "Completed 2022",
    description: "Result: 67%. Built a solid academic foundation in problem-solving, analytical thinking, and computer-related subjects.",
  },
];

const Education = () => (
  <section id="education" className="section-padding relative">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-10" />
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent" />

        {education.map((edu, i) => (
          <motion.div key={edu.degree} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 * i }}
            className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary border-2 border-background z-10 mt-6" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass hover-glow p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2 justify-start">
                  <GraduationCap size={18} className="text-primary" />
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{edu.status}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm mb-1">{edu.institute}</p>
                <p className="text-muted-foreground text-xs mb-3">{edu.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
