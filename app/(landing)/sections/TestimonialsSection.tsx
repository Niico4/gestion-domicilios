import { Card, CardHeader, Avatar, CardBody } from '@nextui-org/react';
import React from 'react';

import { testimonialMock } from '@/app/mock/testimonialsMock';

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="h-screen flex flex-col gap-4 justify-center items-center"
    >
      <h2 className="text-6xl text-slate-200 font-semibold mb-10">
        Testimonios
      </h2>
      <article className="flex justify-center flex-wrap gap-6">
        {testimonialMock.map(
          ({ name, image, occupation, testimonial }, index) => (
            <Card className="w-1/4 p-2" key={index}>
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
          ),
        )}
      </article>
    </section>
  );
};

export default TestimonialsSection;
