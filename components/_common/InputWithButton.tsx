import { FC } from "react";

interface Props {
  placeholder?: string;
  buttonLabel?: string;
}

export const InputWithButton: FC<Props> = (props) => {
  const { placeholder, buttonLabel } = props || {};
  return (
    <span className="flex">
      <input
        type="text"
        placeholder={placeholder}
        className="p-4 rounded-l-lg w-full bg-sky-900 border-[1px] border-sky-800 outline-none"
      />
      <button className="p-4 bg-blue-400 text-white outline-none rounded-r-lg">
        {buttonLabel}
      </button>
    </span>
  );
};
