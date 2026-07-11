"use client";

import { useEffect, useRef, useState } from "react";
import { statLabels } from "@/utils/stat";
import { getParticle } from "@/utils/text";

interface Props {
  nodes: ResonanceNode[];
  onChange: (nodes: ResonanceNode[]) => void;
}

const branchOrder = ["left_outer", "left_inner", "center", "right_inner", "right_outer"] as const;

export default function ResonanceNodeEditor({ nodes, onChange }: Props) {
  const [selectedNode, setSelectedNode] = useState<ResonanceNode | null>(null);

  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    setPoints(Array.from({ length: 5 }, (_, i) => path.getPointAtLength((totalLength * i) / 4)));
  }, []);

  // 부모 상태가 변경되면 selectedNode도 최신 상태로 유지
  useEffect(() => {
    if (!selectedNode) return;

    const updated = nodes.find(
      (node) =>
        node.branchPosition === selectedNode.branchPosition &&
        node.nodePosition === selectedNode.nodePosition,
    );

    setSelectedNode(updated ?? null);
  }, [nodes]);

  const handleToggleNode = () => {
    if (!selectedNode) return;

    const updatedNodes = nodes.map((node) =>
      node.branchPosition === selectedNode.branchPosition &&
      node.nodePosition === selectedNode.nodePosition
        ? { ...node, active: !node.active }
        : node,
    );

    onChange(updatedNodes);
  };

  return (
    <section className="flex flex-col lg:w-[470px]">
      <h1 className="text-2xl lg:text-3xl">공명 노드</h1>

      <div className="mt-3 rounded-[10px] border border-[#848484] pb-8">
        <svg viewBox="-40 130 600 430" className="lg:100 w-auto origin-top">
          {/* 연결선 */}
          <path
            ref={pathRef}
            d="
              M 70 500
              C 70 480, 150 430, 265 430
              C 380 430, 460 480, 460 500
            "
            stroke="#E6E6E6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* 노드와 직선 */}
          {points.map((point, index) => {
            const branchPosition = branchOrder[index];

            const rowNodes = nodes
              .filter((node) => node.branchPosition === branchPosition)
              .sort((a, b) => {
                const order = { middle: 0, top: 1 };
                return order[a.nodePosition] - order[b.nodePosition];
              });

            return (
              <g key={branchPosition}>
                {/* 직선 */}
                <line
                  x1={point.x}
                  y1={point.y}
                  x2={point.x}
                  y2={point.y - 230}
                  stroke="#E6E6E6"
                  strokeWidth={3}
                  strokeLinecap="round"
                />

                {/* 메인 노드 */}
                <image
                  href="/star-node-active.svg"
                  x={point.x - 40}
                  y={point.y - 40}
                  width="80"
                  height="80"
                />

                {/* 서브 노드 */}
                {rowNodes.map((node, i) => (
                  <image
                    key={`${node.branchPosition}-${node.nodePosition}`}
                    href={node.active ? "/star-node-active.svg" : "/star-node-deactive.svg"}
                    x={point.x - 40}
                    y={point.y - 150 - i * 110}
                    width="80"
                    height="80"
                    className="cursor-pointer"
                    onClick={() => setSelectedNode(node)}
                  />
                ))}
              </g>
            );
          })}
        </svg>

        {selectedNode && (
          <div className="flex items-center justify-center gap-4">
            <button onClick={handleToggleNode} className="flex cursor-pointer items-center gap-2">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                  selectedNode.active ? "border-yellow-400" : "border-gray-400"
                }`}
              >
                {selectedNode.active && <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />}
              </span>
            </button>

            {selectedNode.stat && (
              <p className="text-base md:text-xl">
                {statLabels[selectedNode.stat.type] ?? selectedNode.stat.type}
                {getParticle(statLabels[selectedNode.stat.type] ?? selectedNode.stat.type)}{" "}
                {selectedNode.stat.value}% 증가된다.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
