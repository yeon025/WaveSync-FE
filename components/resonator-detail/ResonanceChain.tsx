"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  level: number;
}

export default function ResonanceChain({ level }: Props) {
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    setPoints(Array.from({ length: 6 }, (_, i) => path.getPointAtLength((totalLength * i) / 5)));
  }, []);

  return (
    <section className="hidden w-full lg:block">
      <svg viewBox="-40 -40 250 600" className="h-[clamp(400px,50vh,650px)] w-auto">
        {/* 연결선 */}
        <path
          ref={pathRef}
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

        {/* 노드 */}
        {points.map((point, index) => (
          <image
            key={index}
            href={index < level ? "/star-node-active.svg" : "/star-node-deactive.svg"}
            x={point.x - 40}
            y={point.y - 40}
            width="80"
            height="80"
          />
        ))}

        {/* 가운데 텍스트 */}
        <text
          x="85"
          y="260"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="25"
          fontWeight="400"
        >
          공명 체인
        </text>
      </svg>
    </section>
  );
}
