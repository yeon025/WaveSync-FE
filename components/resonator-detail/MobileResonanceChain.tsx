import Image from "next/image";

interface Props {
  level: number;
}

export default function MobileResonanceChain({
  level,
}: Props) {
  return (
    <section
      aria-labelledby="mobile-resonance-chain-title"
      className="w-full"
    >
      <h2
        id="mobile-resonance-chain-title"
        className="mb-4 text-center text-xl font-medium"
      >
        공명 체인
      </h2>

      <div className="flex justify-center gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Image
            key={index}
            src="/images/star-node.png"
            alt={`공명 체인 ${index + 1}`}
            width={56}
            height={56}
            className={
              index < level
                ? ""
                : "grayscale brightness-60"
            }
          />
        ))}
      </div>
    </section>
  );
}