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
      className={`flex h-9 items-center justify-between rounded-xl border-2 border-[#848484] px-6 shadow-[0_6px_18px_#00000033] ${className}`}
    >
      <span className="text-lg">{label}</span>

      <span className="text-lg">{value}</span>
    </div>
  );
}