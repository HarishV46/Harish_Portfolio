import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const duration = 3000;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const progressTimer = setInterval(() => {
      step++;
      // Eased progress curve
      const t = step / steps;
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.min(eased * 100, 100));

      if (step >= steps) {
        clearInterval(progressTimer);
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 800);
        }, 400);
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(145deg, #0a0a0a 0%, #111118 50%, #0d0d15 100%)" }}
        >
          {/* Subtle ambient glow */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{
              background: "radial-gradient(circle, hsl(270 80% 60%) 0%, transparent 70%)",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{
              background: "radial-gradient(circle, hsl(290 80% 55%) 0%, transparent 70%)",
              bottom: "20%",
              right: "30%",
            }}
          />

          {/* Fine grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-display font-bold tracking-tight text-white"
            >
              Harish
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-sm md:text-base tracking-[0.3em] uppercase font-body font-light"
              style={{
                background: "linear-gradient(90deg, hsl(270 80% 70%), hsl(290 80% 65%), hsl(270 80% 70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Java Full Stack Developer
            </motion.p>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 w-16 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
            />

            {/* Loading message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 text-xs md:text-sm tracking-[0.15em] text-white font-body font-light"
            >
              Initializing Portfolio Experience…
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 w-48 md:w-56"
            >
              <div className="relative h-[2px] rounded-full overflow-hidden bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, hsl(270 80% 60%), hsl(290 80% 55%))",
                    boxShadow: "0 0 12px hsl(270 80% 60% / 0.4)",
                  }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ delay: 1.6 }}
                className="mt-3 text-[10px] tracking-[0.2em] text-white text-center font-body tabular-nums"
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom minimal branding */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-8 text-[10px] tracking-[0.25em] text-white font-body uppercase"
          >
            Portfolio &copy; 2025
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
