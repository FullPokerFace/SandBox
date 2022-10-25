import React from "react";

interface Props {
  label: string;
}

export const Button: React.FC<Props> = (props) => {
  const { label } = props || {};
  return (
    <button className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all text-base">
      {label}
    </button>
  );
};
