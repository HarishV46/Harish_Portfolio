import { useState, useEffect, useCallback } from "react";

export const useTypingAnimation = (roles: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      setText(currentRole.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      setText(currentRole.substring(0, text.length + 1));
      if (text.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    }
  }, [text, roleIndex, isDeleting, roles, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
};
