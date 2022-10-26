import { FC, ReactNode } from "react";
import BlueWaveBottom from "./BlueWaveBottom";
import { BlueWaveTop } from "./BlueWaveTop";

interface Props {
  children: ReactNode;
}

export const BlueFullWidthContainer: FC<Props> = (props: Props) => {
  const { children } = props || {};
  return (
    <div>
      <BlueWaveTop />
      <div className="bg-blue-50 flex flex-col gap-20">{children}</div>
      <BlueWaveBottom />
    </div>
  );
};
