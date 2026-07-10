"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  weapon: {
    refineLevel: number;
    refineType: string;
    refine1Value: number;
    refine2Value: number;
    refine3Value: number;
    refine4Value: number;
    refine5Value: number;
    imageUrl: string;
  };
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

export default function WeaponEditor({ weapon }: Props) {
  const getRefineValue = (level: number) => {
    const values = [
      weapon.refine1Value,
      weapon.refine2Value,
      weapon.refine3Value,
      weapon.refine4Value,
      weapon.refine5Value,
    ];

    return values[level - 1];
  };

  const [level, setLevel] = useState(weapon.refineLevel);
  const maxLevel = 5;
  const [value, setValue] = useState(getRefineValue(weapon.refineLevel));

  const increase = () => {
    const nextLevel = Math.min(level + 1, maxLevel);

    setLevel(nextLevel);
    setValue(getRefineValue(nextLevel));
  };

  const decrease = () => {
    const nextLevel = Math.max(level - 1, 1);

    setLevel(nextLevel);
    setValue(getRefineValue(nextLevel));
  };

  return (
    <section className="flex w-full flex-col px-4 lg:w-[550px] lg:px-10">
      <h1 className="text-2xl font-bold text-white lg:text-3xl">무기 재련</h1>

      <div className="relative mt-6 w-full rounded-[10px] border border-[#848484] px-4 py-8">
        {/* 무기 이미지 */}
        <div className="flex justify-center">
          <Image src={weapon.imageUrl} alt="weapon" width={160} height={160} />
        </div>

        {/* 재련 단계 */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={decrease}
            className="cursor-pointer text-3xl font-bold transition-colors hover:text-yellow-400 lg:text-4xl"
          >
            −
          </button>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={index < level ? "/star-node-active.svg" : "/star-node-deactive.svg"}
                alt={`무기 재련 ${index + 1}`}
                width={40}
                height={40}
                className="lg:h-[56px] lg:w-[56px]"
              />
            ))}
          </div>

          <button
            onClick={increase}
            className="cursor-pointer text-3xl font-bold transition-colors hover:text-yellow-400 lg:text-4xl"
          >
            ＋
          </button>
        </div>

        {/* 효과 */}
        <p className="mt-8 text-center text-lg lg:mt-12 lg:text-2xl">
          {statLabels[weapon.refineType] ?? weapon.refineType}
          {getParticle(statLabels[weapon.refineType] ?? weapon.refineType)}
          &nbsp;
          {value}% 증가된다.
        </p>
      </div>
    </section>
  );
}
