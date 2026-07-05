interface StatBoxProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function StatBox({
  label,
  value,
  className = "",
}: StatBoxProps) {
  return (
    <div
      className={`
        flex
        h-9
        w-full
        items-center
        justify-between
        rounded-xl
        border-2
        border-[#848484]
        px-6
        shadow-[0_6px_18px_#00000033]

        sm:px-5
        lg:px-6

        ${className}
      `}
    >
      <span className="text-sm sm:text-base 2xl:text-lg">
        {label}
      </span>

      <span className="text-sm sm:text-base 2xl:text-lg">
        {value}
      </span>
    </div>
  );
}