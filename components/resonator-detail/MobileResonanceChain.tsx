import Image from "next/image";

interface Props {
  level: number;
}

export default function MobileResonanceChain({ level }: Props) {
  return (
    <section aria-labelledby="mobile-resonance-chain-title" className="w-full py-6 lg:hidden">
      <h2 className="my-4 text-center text-xl font-medium">공명 체인</h2>

      <div className="flex justify-center gap-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <Image
            key={index}
            src={index < level ? "/star-node-active.svg" : "/star-node-deactive.svg"}
            alt={`공명 체인 ${index + 1}`}
            width={56}
            height={56}
          />
        ))}
      </div>
    </section>
  );
}
