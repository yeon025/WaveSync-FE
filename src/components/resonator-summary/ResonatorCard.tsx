"use client";

interface Props {
  resonator: ResonatorSummaryResponse;
  mode: "view" | "delete";
  selected?: boolean;
  onClick?: () => void;
}

export default function ResonatorCard({ resonator, mode, selected, onClick }: Props) {
  const rarityColor = resonator.rarity === 4 ? "#9d6bb9" : "#FFF691";

  return (
    <article
      className="mx-auto w-[var(--card)] cursor-pointer transition-transform duration-100 hover:scale-105"
      onClick={mode === "delete" ? onClick : undefined}
    >
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
        className="mt-1 flex justify-center border transition-colors"
        style={{
          borderColor: rarityColor,
          backgroundColor: mode === "delete" && selected ? rarityColor : "transparent",
          color: mode === "delete" && selected ? "#000000" : "inherit",
        }}
      >
        <span className="truncate text-sm xl:text-base">{resonator.resonatorName}</span>
      </div>
    </article>
  );
}
