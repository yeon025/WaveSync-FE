import Image from "next/image";

interface Props {
  resonator: ResonatorSummaryResponse;
  className?: string;
  onClick?: () => void;
}

export default function ResonatorCard({ resonator, className = "", onClick }: Props) {
  return (
    <article
      onClick={onClick}
      className={
        "w-full cursor-pointer transition-transform duration-200 select-none hover:scale-105 " +
        className
      }
    >
      {/* 이미지 */}
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={resonator.thumbnailImageUrl}
          alt={resonator.resonatorName}
          fill
          className={
            "object-cover " + (resonator.userResonatorId === null ? "opacity-60 grayscale" : "")
          }
        />
      </div>

      {/* 이름 */}
      <div
        className="mt-1 flex items-center justify-center border-1"
        style={{ borderColor: resonator.rarity == 4 ? "#9d6bb9" : "#FFF691" }}
      >
        <span className="truncate text-sm lg:text-base">{resonator.resonatorName}</span>
      </div>
    </article>
  );
}
