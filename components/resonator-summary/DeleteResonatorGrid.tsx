"use client";

import ResonatorCard from "./ResonatorCard";
import { resonatorGridClass } from "@/utils/resonator-grid";

interface Props {
  resonators: ResonatorSummaryResponse[];
  selectedIds: number[];
  onSelect: (id: number) => void;
}

export default function DeleteResonatorGrid({ resonators, selectedIds, onSelect }: Props) {
  return (
    <section className={`grid justify-center gap-10 ${resonatorGridClass}`}>
      {resonators.map((resonator) => (
        <ResonatorCard
          key={resonator.resonatorName}
          resonator={resonator}
          mode="delete"
          selected={
            resonator.userResonatorId !== null && selectedIds.includes(resonator.userResonatorId)
          }
          onClick={() => resonator.userResonatorId && onSelect(resonator.userResonatorId)}
        />
      ))}
    </section>
  );
}
