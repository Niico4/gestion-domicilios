import React, { FC } from 'react';
import { motion } from 'framer-motion';

import Logo from '@/app/components/shared/Logo';

import { animatedText, getAnimatedGradient } from '../constants/animated';

const GradientBgAnimated: FC<{
  form: 'sign-in' | 'sign-up';
}> = ({ form }) => {
  const textSelected =
    form === 'sign-in'
      ? 'Accede a tu portal de gestión y lleva el control en tus manos.'
      : 'Empieza a controlar tu inventario con eficiencia, regístrate hoy mismo.';

  const MotionLogo = motion(Logo);

  return (
    <motion.section
      className={`absolute top-0 ${form === 'sign-in' ? 'right-0' : 'left-0'} w-1/2 h-full flex items-center justify-center auth-screen-gradient shadow-md shadow-black/60`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={getAnimatedGradient(form)}
      transition={{ duration: 1, ease: 'linear' }}
    >
      <article className="w-[70%] flex flex-col justify-center">
        <MotionLogo
          variants={animatedText}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.8 }}
          className="mb-20"
        >
          DomiSys
        </MotionLogo>

        <motion.h2
          variants={animatedText}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.8 }}
          className="text-4xl font-bold text-neutral-100"
        >
          {textSelected}
        </motion.h2>
      </article>
    </motion.section>
  );
};

export default GradientBgAnimated;
