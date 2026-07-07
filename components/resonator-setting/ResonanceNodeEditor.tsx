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
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        node.stat &&
                        setSelectedNode({
                          type: node.stat.type,
                          value: node.stat.value,
                        })
                      }
                    />
                  ))}
                </g>
              );
            })}
          </g>
        </svg>

        {selectedNode && (
          <p className="mt-12 text-center text-2xl">
            {statLabels[selectedNode.type] ?? selectedNode.type}
            {getParticle(statLabels[selectedNode.type] ?? selectedNode.type)}
            &nbsp;{selectedNode.value}% 증가된다.
          </p>
        )}
      </div>
    </section>
  );
}