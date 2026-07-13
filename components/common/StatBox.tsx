interface Props {
  label: string;
  value: string | number;
  className?: string;
}

export default function StatBox({ label, value, className = "" }: Props) {
  return (
    <div
      className={`flex h-[clamp(30px,5vw,36px)] items-center justify-between rounded-xl border-2 border-[#848484] px-6 ${className} `}
    >
      <span className="text-[clamp(14px,1.5vw,18px)]">{label}</span>

      <span className="text-[clamp(14px,1.5vw,18px)]">{value}</span>
    </div>
  );
}
