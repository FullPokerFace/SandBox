import React, { FC } from "react";

interface Props {
  children: React.ReactNode | string;
}

export const BlueBadge: FC<Props> = (props: Props) => {
  const { children } = props || {};
  return (
    <div>
      <span
        className={`flex w-[48px] h-[48px] bg-blue-100 text-sky-500 font-semibold rounded-full items-center justify-center`}
      >
        {children}
      </span>
    </div>
  );
};
