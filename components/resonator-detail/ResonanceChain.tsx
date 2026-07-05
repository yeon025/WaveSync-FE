import Image from "next/image";

interface ResonanceChainProps {
  level: number;
}

const positions = [
  { left: "35%", top: "9%" },
  { left: "75%", top: "21%" },
  { left: "94%", top: "42%" },
  { left: "94%", top: "65%" },
  { left: "75%", top: "84%" },
  { left: "35%", top: "95%" },
];

export default function ResonanceChain({
  level,
}: ResonanceChainProps) {
  return (
    <section
      aria-labelledby="resonance-chain-title"
      className="absolute left-[1300px] top-[300px]"
    >
      <div className="relative h-[560px] w-[240px]">
        {/* 연결선 */}
        <svg
          width="200"
          height="520"
          viewBox="0 0 170 520"
          className="absolute left-10 top-8"
        >
          <path
            d="
              M 30 20
              C 150 60, 175 165, 175 260
              C 175 355, 150 460, 30 500
            "
            stroke="#E6E6E6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* 공명 체인 노드 */}
        {positions.map((position, index) => (
          <Image
            key={index}
            src="/images/star-node.png"
            alt={`공명 체인 ${index + 1}`}
            width={80}
            height={80}
            style={{
              left: position.left,
              top: position.top,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute ${
              index < level ? "" : "grayscale brightness-60"
            }`}
          />
        ))}

        <h2
          id="resonance-chain-title"
          className="absolute left-15 top-65 text-2xl"
        >
          공명 체인
        </h2>
      </div>
    </section>
  );
}