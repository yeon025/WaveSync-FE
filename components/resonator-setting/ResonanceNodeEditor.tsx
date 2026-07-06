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
          viewBox="-40 -40 600 600"
          className="w-auto h-[450px] 2xl:h-[550px]"
        >
          <g transform="rotate(-90 0 0) translate(-520 0)">
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

            {/* 노드와 직선 */}
            {points.map((point, index) => {
              // 해당 줄의 노드 3개
              const rowNodes = nodes.slice(index * 2, index * 2 + 2);

              return (
                <g key={index}>
                  {/* 직선 */}
                  <line
                    x1={point.x + 20}
                    y1={point.y-1}
                    x2={point.x + 230}
                    y2={point.y-1}
                    stroke="#E6E6E6"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />

                  {/* 메인 노드 (항상 활성) */}
                  <image
                    href="/star-node-active.svg"
                    x={point.x - 40}
                    y={point.y - 40}
                    width="80"
                    height="80"
                  />

                  {/* 서브 노드 2개 */}
                  {rowNodes.map((node, i) => (
                    <image
                      key={i}
                      href={
                        node.active
                          ? "/star-node-active.svg"
                          : "/star-node-deactive.svg"
                      }
                      x={point.x + 80 + i * 110}
                      y={point.y - 40}
                      width="80"
                      height="80"
                    />
                  ))}
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}