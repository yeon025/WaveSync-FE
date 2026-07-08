interface Props {
  label: string;
  value: string | number;
  className?: string;
}

export default function StatBox({ label, value, className = "" }: Props) {
  return (
    <div
      className={`flex h-9 w-full items-center justify-between rounded-xl border-2 border-[#848484] px-6 ${className} `}
    >
      <span className="text-base 2xl:text-lg">{label}</span>

      <span className="text-base 2xl:text-lg">{value}</span>
    </div>
  );
}
