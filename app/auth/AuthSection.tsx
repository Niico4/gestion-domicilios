'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import FormAnimated from './components/FormAnimated';
import GradientBgAnimated from './components/GradientBgAnimated';

const SectionPage = () => {
  const [form, setForm] = useState<'sign-in' | 'sign-up'>('sign-in');

  const toggleForm = () => {
    setForm((prevForm) => (prevForm === 'sign-in' ? 'sign-up' : 'sign-in'));
  };

  return (
    <section>
      <AnimatePresence mode="sync">
        {form === 'sign-in' && (
          <GradientBgAnimated key="gradient-sign-in" form="sign-in" />
        )}
        {form === 'sign-up' && (
          <GradientBgAnimated key="gradient-sign-up" form="sign-up" />
        )}
        <FormAnimated
          key={`form-${form}`}
          form={form}
          toggleForm={toggleForm}
        />
      </AnimatePresence>
    </section>
  );
};

export default SectionPage;
