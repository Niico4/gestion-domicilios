import { Grandstander } from 'next/font/google';
import React, { forwardRef } from 'react';

const grandstander = Grandstander({
  subsets: ['latin'],
  display: 'swap',
});

type LogoTypes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Logo = forwardRef<HTMLHeadingElement, LogoTypes>((props, ref) => {
  return (
    <h1
      {...props}
      ref={ref}
      className={`text-8xl font-bold bg-text-gradient bg-clip-text text-transparent text-center ${grandstander.className} ${props.className}`}
      style={{
        WebkitTextStroke: '2.5px #c176fe',
        ...props.style,
      }}
    >
      DomiSys
    </h1>
  );
});

Logo.displayName = 'Logo';

export default Logo;
