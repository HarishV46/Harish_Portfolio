import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import gradientBg from "@/assets/gradient-bg.png";

const CTA = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={gradientBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-background/70" />
    </div>
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="container mx-auto max-w-2xl text-center relative z-10 px-4"
    >
      <Sparkles className="mx-auto text-primary mb-4" size={32} />
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
        Let's Work <span className="gradient-text">Together!</span>
      </h2>
      <p className="text-muted-foreground mb-6">I'm open for opportunities. Let's build something amazing.</p>
      <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary">
        Get In Touch
      </a>
    </motion.div>
  </section>
);

export default CTA;
