export const animationFadeIn = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: {
    duration: 0.1,
    opacity: { type: "spring", bounce: 0.5 },
    y: { type: "spring", bounce: 0.5 },
  },
};

export const animationFadeInRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: {
    duration: 0.1,
    opacity: { type: "spring", bounce: 0.5 },
    x: { type: "spring", bounce: 0.5 },
  },
};

export const animationFadeInHover = {
  initial: { opacity: 0, y: 10 },
  whileHover: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: {
    duration: 0.1,
    opacity: { type: "spring", bounce: 0.5 },
    y: { type: "spring", bounce: 0.5 },
  },
};

export const animationFadeInCustom = ({ amount = 0.5, bounce = 0.5, type = "spring" }) => {
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: {
      duration: 0.1,
      opacity: { type, bounce },
      y: { type, bounce },
    },
  };
};
