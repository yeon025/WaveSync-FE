import EchoStat from "@/components/resonator-echo/EchoStat";

interface Props {
  echo: ResonatorEcho;
}

export function Echo({ echo }: Props) {
  return (
    <div className="flex flex-col rounded-xl border-2 border-[#848484] p-3">
      <div className="mr-2 flex items-center justify-between gap-2">
        <img
          src={echo.imageUrl}
          alt={echo.name}
          width={120}
          height={120}
          className="rounded-full object-contain"
        />

        <h3 className="text-base lg:text-lg">{echo.name}</h3>
      </div>

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
