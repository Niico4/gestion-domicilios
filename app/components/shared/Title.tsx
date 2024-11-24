import { Grandstander } from 'next/font/google';
import React, { FC } from 'react';

const grandstander = Grandstander({
  subsets: ['latin'],
  display: 'swap',
});

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <h2
      className={`text-5xl font-semibold text-slate-600 ${grandstander.className}`}
    >
      {title}
    </h2>
  );
};

export default Title;
