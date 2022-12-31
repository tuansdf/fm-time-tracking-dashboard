import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export default function Option({
  children,
  isActive = false,
  ...props
}: IProps) {
  return (
    <button
      className={clsx({ "text-white": isActive }, "px-2 hover:text-white")}
      {...props}
    >
      {children}
    </button>
  );
}
