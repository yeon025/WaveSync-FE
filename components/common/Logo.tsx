import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSize: number;
  textSize: string;
  fontSize: string;
  direction: "row" | "column";
}

export default function WaveSyncLogo({ imageSize, textSize, fontSize, direction }: Props) {
  const isColumn = direction === "column";

  return (
    <Link
      href="/"
      className={`flex ${isColumn ? "flex-col items-center" : "items-center justify-center gap-3"}`}
    >
      <Image
        src="/images/wavesync-logo.png"
        alt="WaveSync 로고"
        width={imageSize}
        height={imageSize}
        priority
      />

      <div className={`flex tracking-[0.22px] ${textSize} ${fontSize}`}>
        <span>Wave</span>
        <span className="bg-gradient-to-r from-[#5b7cff] to-[#69e3ff] bg-clip-text text-transparent">
          Sync
        </span>
      </div>
    </Link>
  );
}
