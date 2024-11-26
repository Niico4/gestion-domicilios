'use client';

import React from 'react';
import Image from 'next/image';
import {
  IconAccessible,
  IconBrandDatabricks,
  IconReport,
} from '@tabler/icons-react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { motion } from 'framer-motion';

import img from '@/app/public/feature.webp';

import { cardsVariants, featureImageVariants } from '../constants/animations';

const cardContent = [
  {
    icon: IconReport,
    title: 'Gestión en tiempo real',
    content:
      'Visualiza el estado de cada pedido, desde que se recibe hasta que se entrega',
  },
  {
    icon: IconAccessible,
    title: 'Fácil de usar',
    content:
      'Con una interfaz sencilla, tu equipo aprenderá rápidamente a gestionar pedidos',
  },
  {
    icon: IconBrandDatabricks,
    title: 'Escalable',
    content: 'Desde pequeños negocios hasta grandes cadenas de entrega',
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="h-screen">
      <motion.article
        className="w-4/5 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={featureImageVariants}
      >
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          alt="Imagen de el Software"
        />
      </motion.article>

      <div className="flex flex-col items-center">
        <h2 className="text-6xl text-slate-200 font-semibold mb-10">
          Nuestro sistema
        </h2>
        <article className="flex items-center justify-center gap-6">
          {cardContent.map(({ icon: Icon, title, content }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              variants={cardsVariants}
            >
              <Card className="bg-card-features-gradient border border-purple-400 flex-1 p-6">
                <CardHeader>
                  {<Icon size={80} stroke={1.5} color="#3bb3fe" />}
                </CardHeader>
                <CardBody className="gap-3">
                  <h3 className="text-pink-300 text-3xl tracking-wider">
                    {title}
                  </h3>
                  <p className="text-slate-200 text-lg font-light">{content}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default FeatureSection;
