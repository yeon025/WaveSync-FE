import { statLabels } from "@/utils/stat";

interface Props {
  type: EchoStatType;
  value: number;
}

export default function EchoStat({ type, value }: Props) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span>{statLabels[type] ?? type}</span>

      <span>{type === "attack" || type === "hp" || type === "defense" ? value : `${value}%`}</span>
    </div>
  );
}
