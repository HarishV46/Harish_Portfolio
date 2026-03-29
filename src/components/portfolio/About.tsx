import { motion } from "framer-motion";
import { Code, Database, Palette } from "lucide-react";

const highlights = [
  { icon: Code, label: "Frontend", desc: "HTML, CSS, JS, React" },
  { icon: Database, label: "Backend", desc: "Java, MySQL, Django" },
  { icon: Palette, label: "UI/UX", desc: "Responsive Design" },
];

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-10" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="glass p-6 md:p-10 rounded-2xl mb-10">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I am an enthusiastic Java Full Stack Developer with a strong interest in building modern and scalable web applications. I have hands-on experience in frontend development using HTML, CSS, and JavaScript to create responsive and user-friendly interfaces. On the backend, I work with Java to develop efficient server-side logic and integrate applications with databases like MySQL.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
          I enjoy solving real-world problems through clean code, structured development, and continuous learning. My goal is to build high-quality software solutions that provide great user experiences and efficient performance. I am always eager to explore new tools, frameworks, and best practices in modern web development to grow as a professional developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * i }}
            className="glass hover-glow p-6 rounded-2xl text-center group cursor-default"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <h.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-1">{h.label}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
