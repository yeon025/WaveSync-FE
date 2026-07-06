"use client";

import { useEffect, useRef, useState } from "react";



interface Props {
  nodes: ResonanceNode[];
}

export default function ResonanceNodeEditor({ nodes }: Props) {
  const activeNodes = nodes.filter((n) => n.active);

  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    setPoints(
      Array.from({ length: 5 }, (_, i) =>
        path.getPointAtLength((totalLength * i) / 4)
      )
    );
  }, []);

  return (
  <section className="flex w-[550px] flex-col">
    <h1 className="text-3xl font-bold text-white">
      공명 노드
    </h1>

    <div className="relative mt-6 h-[738px] w-[550px] rounded-[10px] border border-[#848484]">
        <svg
          viewBox="-40 -40 250 600"
          className="w-auto h-[450px] 2xl:h-[600px]"
        >
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
              href={"/star-node-active.svg"}
              x={point.x - 40}
              y={point.y - 40}
              width="80"
              height="80"
            />
          ))}
        </svg>
    </div>
  </section>
  );
}