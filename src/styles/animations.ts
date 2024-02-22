export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transitionEnd: { display: "none" },
  },
};
