'use client';

import { Card, CardHeader, Avatar, CardBody } from '@nextui-org/react';
import React from 'react';
import { motion } from 'framer-motion';

import { testimonialMock } from '@/app/mock/testimonialsMock';

import { cardsVariants } from '../constants/animations';

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="h-screen flex flex-col gap-4 justify-center items-center"
    >
      <h2 className="text-6xl text-slate-200 font-semibold mb-10">
        Testimonios
      </h2>
      <article className="flex justify-center flex-wrap gap-6 w-full">
        {testimonialMock.map(
          ({ name, image, occupation, testimonial }, index) => (
            <motion.div
              key={index}
              className="w-1/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              variants={cardsVariants}
            >
              <Card className="p-2">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={image} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        {name}
                      </h4>
                      <h5 className="text-small tracking-tight text-purple-400">
                        {occupation}
                      </h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-slate-600">
                  <p>{testimonial}</p>
                </CardBody>
              </Card>
            </motion.div>
          ),
        )}
      </article>
    </section>
  );
};

export default TestimonialsSection;
