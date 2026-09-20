interface Props {
  label: string;
  value: string | number;
  textClassName?: string;
}

export default function StatBox({
  label,
  value,
  textClassName = "text-[clamp(14px,1.2vw,18px)]",
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border-2 border-[#848484] px-6 py-1">
      <span className={textClassName}>{label}</span>

      <span className={textClassName}>{value}</span>
    </div>
  );
}
