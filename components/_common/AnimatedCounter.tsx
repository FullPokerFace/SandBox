import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  from: number;
  to: number;
  step?: number;
}

export const AnimatedCounter: FC<Props> = (props: Props) => {
  const { from, to, step } = props || {};
  const [count, setCount] = useState(from || 0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  useEffect(() => {
    if (count >= to || !inView) return;
    const timeout = setTimeout(() => {
      const newCount = count + (step || Number(to / 10));
      if (newCount > to) {
        setCount(to);
      } else {
        setCount(newCount);
      }
      return () => {
        clearTimeout(timeout);
      };
    }, 100);
  }, [to, count, step, inView]);
  return <span ref={ref}>{count}</span>;
};
