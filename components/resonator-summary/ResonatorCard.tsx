import Image from "next/image";


interface Props {
  resonator: ResonatorSummary;
  className?: string;
  onClick?: () => void;
};

export default function ResonatorCard({resonator, className = "", onClick,}: Props) {
  return (
    <article
      onClick={onClick}
      className={
        "w-full cursor-pointer select-none transition-transform duration-200 hover:scale-105 " +
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
            "object-cover " +
            (resonator.userResonatorId === null
              ? "grayscale opacity-60"
              : "")
          }
        />
      </div>

      {/* 이름 */}
      <div
        className="mt-1 flex items-center justify-center border-1 py-0.5"
        style={{ borderColor: resonator.rarity == 4 ? "#9d6bb9" : "#FFF691" }}
      >
        <span className="text-sm sm:text-base font-semibold truncate">
          {resonator.resonatorName}
        </span>
      </div>
    </article>
  );
}