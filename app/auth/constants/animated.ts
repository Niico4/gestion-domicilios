export const getAnimatedGradient = (form: 'sign-in' | 'sign-up') => ({
  hidden: {
    opacity: 0,
    x: form === 'sign-in' ? '-100%' : '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.1 },
      x: { duration: 1, ease: 'easeInOut' },
    },
  },
  exit: {
    opacity: 0,
    x: form === 'sign-in' ? '100%' : '-100%',
    transition: {
      opacity: { duration: 0.5 },
      x: { duration: 1, ease: 'easeInOut' },
    },
  },
});

export const animatedText = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 1,
    y: 0,
  },
};

export const animatedForm = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 1.05 },
};
