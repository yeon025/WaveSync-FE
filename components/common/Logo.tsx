import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSize: number;
  textSizeClass: string;
  fontSizeClass: string;
  direction: "row" | "column";
}

export default function WaveSyncLogo({
  imageSize,
  textSizeClass,
  fontSizeClass,
  direction,
}: Props) {
  const isColumn = direction === "column";

  return (
    <Link href="/" className={`flex ${isColumn ? "flex-col items-center" : "items-center gap-3"}`}>
      <Image
        src="/images/wavesync-logo.png"
        alt="WaveSync 로고"
        width={100}
        height={100}
        priority
        className={`h-${imageSize} w-${imageSize} object-contain`}
      />

      <div className={`flex tracking-[0.22px] ${textSizeClass} ${fontSizeClass}`}>
        <span>Wave</span>
        <span className="bg-gradient-to-r from-[#5b7cff] to-[#69e3ff] bg-clip-text text-transparent">
          Sync
        </span>
      </div>
    </Link>
  );
}
