import EchoStat from "@/components/resonator-echo/EchoStat";

interface Props {
  echo: ResonatorEcho;
}

const gradeColors: Record<EchoGrade, string> = {
  SS: "text-red-400",
  S: "text-purple-400",
  A: "text-blue-400",
  B: "text-green-400",
  C: "text-gray-400",
  D: "text-gray-500",
};

export function Echo({ echo }: Props) {
  return (
    <div className="flex flex-col rounded-xl border-2 border-[#848484] p-3">
      <div className="flex items-center justify-between gap-2">
        <span className={`font-bold ${gradeColors[echo.grade]}`}>{echo.grade}</span>

        <span className="text-sm text-white/70">
          {echo.scorePercent?.toFixed(2) ?? "-"}점
        </span>
      </div>

      <div className="mt-2 flex items-center justify-center">
        <img
          src={echo.imageUrl}
          alt={echo.name}
          width={120}
          height={120}
          className="rounded-full object-contain"
        />
      </div>

      <h3 className="mt-2 text-center text-base lg:text-lg">{echo.name}</h3>

      <div className="mx-5 mt-4 flex flex-col gap-1">
        <EchoStat type={echo.main.type} value={echo.main.value} />

        <EchoStat type={echo.secondary.type} value={echo.secondary.value} />
      </div>

      <div className="my-[1vh] border-t-2 border-[#848484]" />

      <div className="mx-5 flex flex-col gap-1">
        {echo.subs.map((sub, subIndex) => (
          <EchoStat key={subIndex} type={sub.type} value={sub.value} />
        ))}
      </div>
    </div>
  );
}
