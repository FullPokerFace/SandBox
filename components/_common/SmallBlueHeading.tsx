import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: String;
}

export const SmallBlueHeading: React.FC<Props> = (props: Props) => {
  const { children, className } = props || {};
  return <p className={`text-sky-600 mb-4 ${className}`}>{children}</p>;
};
