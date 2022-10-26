import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: String;
}

export const MediumHeading: React.FC<Props> = (props: Props) => {
  const { children, className } = props || {};
  return (
    <p
      className={`text-zinc-800 text-xl md:text-4xl font-semibold ${className}`}
    >
      {children}
    </p>
  );
};
