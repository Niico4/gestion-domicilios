import React, { FC } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';
import { motion } from 'framer-motion';

import { animatedForm } from '../constants/animated';

import FormSignIn from './sign-in/FormSignIn';
import FormSignUp from './sign-up/FormSignUp';

const FORM_CONTENT = {
  'sign-in': {
    title: 'Inicia Sesión en tu Cuenta',
    description: 'Gestiona tu inventario y ventas fácilmente.',
    linkText: '¿Primera vez aquí?',
    linkAction: 'Regístrate',
  },
  'sign-up': {
    title: 'Crea tu Cuenta',
    description:
      'Únete y comienza a gestionar tu inventario de manera eficiente.',
    linkText: '¿Ya tienes una cuenta?',
    linkAction: 'Inicia sesión',
  },
};

const FormAnimated: FC<{
  form: 'sign-in' | 'sign-up';
  toggleForm: () => void;
}> = ({ form, toggleForm }) => {
  const { title, description, linkText, linkAction } = FORM_CONTENT[form];

  return (
    <motion.section
      className={`absolute top-0 ${form === 'sign-in' ? 'left-0' : 'right-0'} w-1/2 h-full flex items-center justify-center`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animatedForm}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.8 }}
    >
      <Card className="w-[60%] p-8 bg-slate-200" isBlurred>
        <CardHeader className="flex-col items-start gap-1">
          <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
          <h3 className="text-lg mt-2 text-slate-600">{description}</h3>
        </CardHeader>

        <CardBody>
          {form === 'sign-in' ? <FormSignIn /> : <FormSignUp />}
        </CardBody>
        <CardFooter className="justify-center mt-2">
          <p className="text-center text-lg text-slate-500">
            {linkText}{' '}
            <Link
              className="text-blue-500 underline text-lg cursor-pointer"
              onClick={toggleForm}
            >
              {linkAction}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </motion.section>
  );
};

export default FormAnimated;
