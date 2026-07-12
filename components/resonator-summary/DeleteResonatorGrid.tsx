"use client";

import ResonatorCard from "./ResonatorCard";
import { useState } from "react";

interface Props {
  resonators: ResonatorSummaryResponse[];
  selectedIds: number[];
  onSelect: (id: number) => void;
}

const resonatorGridClass = `
  [--card:90px]
  [grid-template-columns:repeat(3,var(--card))]
  md:[--card:100px]
  md:[grid-template-columns:repeat(5,var(--card))]
  lg:[--card:110px]
  lg:[grid-template-columns:repeat(7,var(--card))]
  2xl:[--card:117px]
  2xl:[grid-template-columns:repeat(8,var(--card))]
`;

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
