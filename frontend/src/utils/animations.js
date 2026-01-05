// Reusable Framer Motion Animation Variants
// Import this file in any component to use predefined animations

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.6 }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { type: "spring", duration: 0.5 }
};

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100, damping: 15 }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const hoverLift = {
  whileHover: { y: -10, scale: 1.02 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const rotateOnHover = {
  whileHover: { rotate: 5, scale: 1.1 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Container variants for staggered children animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Viewport animation variants
export const viewportFadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

export const viewportSlideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const viewportSlideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Modal/Overlay animations
export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const modalContent = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { type: "spring", duration: 0.3 }
};

// Navbar/Header animations
export const navbarSlideDown = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 }
};

// Button animations
export const buttonTap = {
  whileHover: { scale: 0.95 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

// Card animations
export const cardHover = {
  whileHover: { 
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 }
  }
};

// Text animations
export const typewriterCursor = {
  animate: {
    opacity: [1, 0],
  },
  transition: {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse"
  }
};

// Usage Example:
/*
import { fadeInUp, hoverScale } from '@/utils/animations';

<motion.div {...fadeInUp}>
  Content here
</motion.div>

<motion.button {...hoverScale}>
  Click me
</motion.button>
*/

export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideUp,
  hoverScale,
  hoverLift,
  rotateOnHover,
  pulseAnimation,
  containerVariants,
  itemVariants,
  viewportFadeIn,
  viewportSlideInLeft,
  viewportSlideInRight,
  modalBackdrop,
  modalContent,
  navbarSlideDown,
  buttonTap,
  cardHover,
  typewriterCursor
};
