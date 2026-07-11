import Link from "next/link";

interface Props {
  resonator: ResonatorSummaryResponse;
}

export default function ResonatorCard({ resonator }: Props) {
  return (
    <Link href={`/resonators/${resonator.userResonatorId}`}>
      <article className="mx-auto w-[var(--card)] w-full max-w-[117px] cursor-pointer transition-transform duration-100 hover:scale-105">
        <img
          src={resonator.thumbnailImageUrl}
          alt={resonator.resonatorName}
          width={117}
          height={117}
          className={
            "object-contain " + (resonator.userResonatorId === null ? "opacity-60 grayscale" : "")
          }
        />

        <div
          className="mt-1 flex justify-center border"
          style={{
            borderColor: resonator.rarity === 4 ? "#9d6bb9" : "#FFF691",
          }}
        >
          <span className="truncate text-sm xl:text-base">{resonator.resonatorName}</span>
        </div>
      </article>
    </Link>
  );
}
