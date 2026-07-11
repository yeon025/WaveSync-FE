"use client";

import { statLabels } from "@/utils/stat";
import { getParticle } from "@/utils/text";

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
  onChange: (weapon: ResonatorSettingResponse["weapon"]) => void;
}

export default function WeaponEditor({ weapon, onChange }: Props) {
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

  const increase = () => {
    const nextLevel = Math.min(weapon.refineLevel + 1, 5);

    onChange({
      ...weapon,
      refineLevel: nextLevel,
    });
  };

  const decrease = () => {
    const nextLevel = Math.max(weapon.refineLevel - 1, 1);

    onChange({
      ...weapon,
      refineLevel: nextLevel,
    });
  };

  const value = getRefineValue(weapon.refineLevel);

  return (
    <section className="flex flex-col lg:w-[470px]">
      <h1 className="text-2xl lg:text-3xl">무기 재련</h1>

      <div className="relative mt-3 rounded-[10px] border border-[#848484] px-4 py-8">
        {/* 무기 이미지 */}
        <div className="flex justify-center">
          <img src={weapon.imageUrl} alt="weapon" width={160} height={160} />
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
              <img
                key={index}
                src={
                  index < weapon.refineLevel ? "/star-node-active.svg" : "/star-node-deactive.svg"
                }
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
        <p className="mt-8 text-center text-base md:text-xl lg:mt-12">
          {statLabels[weapon.refineType] ?? weapon.refineType}
          {getParticle(statLabels[weapon.refineType] ?? weapon.refineType)} {value}% 증가된다.
        </p>
      </div>
    </section>
  );
}
