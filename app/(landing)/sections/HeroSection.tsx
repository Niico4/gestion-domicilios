'use client';

import { Card, Button } from '@nextui-org/react';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import img from '@/app/public/hero.webp';

import { textVariants, imageVariants } from '../constants/animations';

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" w-full h-screen flex flex-1 flex-col items-center justify-center gap-6 "
    >
      <div className="grid grid-cols-[50%_1fr] items-center justify-center mx-auto gap-10">
        <motion.article
          className="flex flex-col bg-transparent w-full p-6 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={textVariants}
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-6xl font-semibold text-slate-200 text-center">
                ¡Bienvenido a{' '}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  DomiSys
                </span>
                !
              </h1>
              <h3 className="text-slate-400 text-lg font-medium text-center">
                Gestiona tus domicilios de manera rápida, eficiente y segura.
              </h3>
            </div>
            <p className="text-slate-300 text-base tracking-wider">
              Con nuestro software de gestión de domicilios, transformarás la
              manera en que manejas las entregas. Ya no tendrás que preocuparte
              por perder el control de los pedidos ni de los tiempos de entrega.
              Nuestro sistema te ofrece una solución todo-en-uno para mejorar la
              eficiencia de tu negocio.
            </p>
          </div>
          <div className="flex items-center">
            <Button
              as={Link}
              color="primary"
              className="bg-primary-gradient text-xl text-slate-700 font-semibold"
              href="/auth/"
              endContent={<IconCircleArrowRightFilled />}
              size="lg"
            >
              Comenzar
            </Button>
          </div>
        </motion.article>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={imageVariants}
        >
          <Card className="bg-black/0" isBlurred>
            <Image
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              alt="Imágenes de las analíticas"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
