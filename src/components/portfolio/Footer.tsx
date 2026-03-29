import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/Harish278/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
        <a href="https://github.com/HarishV46" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="mailto:innocentharish2007@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="font-semibold text-foreground">HARISH V</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
