import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { platform } from "os";
import Skills from "./Skills";
import { link } from "fs";

const certs = [
  { name: "Industrial Based Android Application Development with IoT", platform: "NISC Technical Services Centre", date: "February 2023", skills: "IoT, Android App Development", link: "https://drive.google.com/file/d/1Xx4E8tLkuyLQPouDM5KO1x56EbJjj5IS/view?usp=drive_link" },
  { name: "Data Science", platform: "IBM SkillsBuild", date: "June 2023", skills: "Data Science", link: "https://drive.google.com/file/d/1-qxVxiZ-IWj1BvQJO4aypORSf8k-QD2j/view?usp=drive_link" },
  { name: "Data Analysis and Machine Learning", platform: "Institution Innovation Council", date: "October 2023", skills: "DS, ML", link: "https://drive.google.com/file/d/1ZucZsmBqo53Zs3gec7WomTj56lQHDUOt/view?usp=drive_link" },
  { name: "Python With SQL & AI-ML", platform: "Diyan Tech Solutions Pvt Ltd", date: "March 2024", skills: "SQL, AI-ML", link: "https://drive.google.com/file/d/19oWpbu1odQ8oeif6HQGBHYP1aVYWDS1x/view?usp=drive_link" },
  { name: "MERN Full Stack", platform: "Pixalive Technology Services", date: "June 2025", skills: "MongoDB, Express, React, Node.js", link: "https://drive.google.com/file/d/10nho56SGl7vfloC9_i2eUsendXVr6R0z/view?usp=drive_link" },
  { name: "Interview Skill & Placement Skill Training", platform: "Hero VIRED", date: "September 2025", skills: "Placement Skills", link: "https://drive.google.com/file/d/1DlI-tbFBp9ZIzhwSMT3kyYxCv-CzAftS/view?usp=drive_link" },
  { name: "Data Science & Analytics", platform: "HP Life & Foundation", date: "December 2025", skills: "DSA", link: "https://drive.google.com/file/d/1OTctF--RXt6SRJfHZTmLfVQnXkn0itGf/view?usp=drive_link" },
  { name: "Internship Common Aptitude Test", platform: "ICAT", date: "December 2025", skills:"Aptitude", link:"https://drive.google.com/file/d/1vZTo6TEH3tgDa0Dvu1xB48oCtNYv3ByY/view?usp=drive_link"}
];

const Certifications = () => (
  <section id="certifications" className="section-padding relative">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-10" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 * i }}
            className="glass hover-glow p-5 rounded-2xl flex gap-4 group"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Award className="text-primary" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-sm mb-0.5 truncate">{cert.name}</h3>
              <p className="text-primary text-xs mb-1">{cert.platform}</p>
              <p className="text-muted-foreground text-xs">{cert.date} · {cert.skills}</p>
            </div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors self-center">
              <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
