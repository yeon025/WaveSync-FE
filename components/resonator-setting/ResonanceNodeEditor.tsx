"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  nodes: ResonanceNode[];
}

const statLabels: Record<string, string> = {
  hp_percent: "HP",
  attack_percent: "공격력",
  defense_percent: "방어력",
  energy_regen: "공명 효율",
  critical_rate: "크리티컬",
  critical_damage: "크리티컬 피해",
  resonance_skill_damage_bonus: "공명 스킬 피해 보너스",
  basic_attack_damage_bonus: "기본 공격 피해 보너스",
  heavy_attack_damage_bonus: "강공격 피해 보너스",
  resonance_liberation_damage_bonus: "공명 해방 피해 보너스",
  glacio_damage_bonus: "응결 피해 보너스",
  fusion_damage_bonus: "융융 피해 보너스",
  conducto_damage_bonus: "전도 피해 보너스",
  aero_damage_bonus: "기류 피해 보너스",
  spectra_damage_bonus: "회절 피해 보너스",
  havoc_damage_bonus: "인멸 피해 보너스",
  healing_bonus: "치료 효과 보너스",
};

const getParticle = (word: string) => {
  if (!word) return "";

  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0);

  // 한글 범위가 아닐 경우 기본 "가"
  if (code < 0xac00 || code > 0xd7a3) return "가";

  // 한글 종성 여부 계산
  const hasBatchim = (code - 0xac00) % 28 !== 0;

  return hasBatchim ? "이" : "가";
};

export default function ResonanceNodeEditor({ nodes }: Props) {
  const [selectedNode, setSelectedNode] = useState<{
    type: string;
    value: number;
  } | null>(null);

  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    setPoints(Array.from({ length: 5 }, (_, i) => path.getPointAtLength((totalLength * i) / 4)));
  }, []);

  return (
    <section className="flex w-full flex-col px-4 lg:w-[550px] lg:px-10">
      <h1 className="text-2xl lg:text-3xl">공명 노드</h1>

      <div className="mt-6 rounded-[10px] border border-[#848484] pb-8">
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
            const rowNodes = nodes.slice(index * 2, index * 2 + 2);

            return (
              <g key={index}>
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
                    key={i}
                    href={node.active ? "/star-node-active.svg" : "/star-node-deactive.svg"}
                    x={point.x - 40}
                    y={point.y - 150 - i * 110}
                    width="80"
                    height="80"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setSelectedNode(
                        node.stat ? { type: node.stat.type, value: node.stat.value } : null,
                      )
                    }
                  />
                ))}
              </g>
            );
          })}
        </svg>

        {selectedNode && (
          <p className="text-center text-base md:text-xl">
            {statLabels[selectedNode.type] ?? selectedNode.type}
            {getParticle(statLabels[selectedNode.type] ?? selectedNode.type)}
            &nbsp;
            {selectedNode.value}% 증가된다.
          </p>
        )}
      </div>
    </section>
  );
}
