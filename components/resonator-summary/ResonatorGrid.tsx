"use client";

import ResonatorCard from "./ResonatorCard";
import Modal from "@/components/common/Modal";
import Link from "next/link";
import { useState } from "react";

interface Props {
  resonators: ResonatorSummaryResponse[];
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

export default function ResonatorGrid({ resonators }: Props) {
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    resonator: ResonatorSummaryResponse,
  ) => {
    if (resonator.userResonatorId === null) {
      event.preventDefault();

      setModal({
        isOpen: true,
        title: "공명자 미등록",
        message: "아직 등록되지 않은 공명자입니다.\n공명자 이미지를 업로드한 후 다시 이용해주세요.",
      });
    }
  };

  return (
    <section className={`grid justify-center gap-10 ${resonatorGridClass}`}>
      {resonators.map((resonator) => (
        <Link
          key={resonator.resonatorName}
          href={`/resonators/${resonator.userResonatorId}`}
          onClick={(event) => handleClick(event, resonator)}
        >
          <ResonatorCard resonator={resonator} mode="view" />
        </Link>
      ))}

      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
      />
    </section>
  );
}
