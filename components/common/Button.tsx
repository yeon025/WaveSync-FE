import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`
        flex items-center justify-center
        rounded-full border-2 border-[#848484]
        bg-[#2a2c32]
        px-8 py-2
        shadow-[0px_6px_18px_#00000033]
        transition-colors
        cursor-pointer
        hover:bg-[#3a3c44]
        ${className}
      `}
      {...props}
    >
      <span className="text-base">
        {children}
      </span>
    </button>
  );
}