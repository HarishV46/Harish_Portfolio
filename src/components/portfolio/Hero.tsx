import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import gradientBg from "@/assets/gradient-bg.png";
import PROFILE_PIC from "@/assets/profile_pic.png";


  

const Hero = () => {
  const typedText = useTypingAnimation(["DEVELOPER", "SOFTWARE ENGINEER"], 120, 80, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient image - fixed for all sections */}
      <div className="absolute inset-0 z-0">
        <img src={gradientBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-24 pb-12">
        {/* Text - left aligned on desktop */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 text-foreground">
            HARISH <span className="gradient-text">V</span>
          </h1>
          <div className="text-xl md:text-2xl font-display text-muted-foreground mb-2 h-9">
            <span>{typedText}</span>
            <span className="border-r-2 border-primary ml-1 animate-typing-cursor">&nbsp;</span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mt-4 mb-6 max-w-lg mx-auto lg:mx-0">
            Full Stack Developer | Turning Ideas into Web Solutions
          </p>

          <div className="flex items-center gap-3 justify-center lg:justify-start text-sm text-muted-foreground mb-6">
            <MapPin size={16} className="text-primary" /> Hosur, Tamil Nadu, India
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/Harish278/" target="_blank" rel="noopener noreferrer" className="p-3 glass hover-glow rounded-xl text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/HarishV46" target="_blank" rel="noopener noreferrer" className="p-3 glass hover-glow rounded-xl text-muted-foreground hover:text-primary">
              <Github size={20} />
            </a>
            <a href="mailto:innocentharish2007@gmail.com" className="p-3 glass hover-glow rounded-xl text-muted-foreground hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Profile picture - right side on desktop */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-60 animate-pulse-glow" />
            <img
              src={PROFILE_PIC}
              alt="Harish V"
              className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
