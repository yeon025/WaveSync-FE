import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className = "", ...props }: Props) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-full border-2 border-[#848484] px-8 py-2 transition-colors hover:bg-[#3a3c44] ${className} `}
      {...props}
    >
      <span className="text-base">{children}</span>
    </button>
  );
}
