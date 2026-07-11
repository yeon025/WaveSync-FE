"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/common/Modal";

interface Props {
  resonator: ResonatorSummaryResponse;
}

export default function ResonatorCard({ resonator }: Props) {
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (resonator.userResonatorId === null) {
      event.preventDefault();

      setModal({
        isOpen: true,
        title: "공명자 미등록",
        message: "아직 등록되지 않은 공명자입니다.\n공명자 이미지를 업로드한 후 다시 이용해주세요.",
      });

      return;
    }
  };

  return (
    <>
      <Link href={`/resonators/${resonator.userResonatorId}`} onClick={handleClick}>
        <article className="mx-auto w-[var(--card)] w-full max-w-[117px] cursor-pointer transition-transform duration-100 hover:scale-105">
          <img
            src={resonator.thumbnailImageUrl}
            alt={resonator.resonatorName}
            width={117}
            height={117}
            className={
              "object-contain " + (resonator.userResonatorId === null ? "opacity-60 grayscale" : "")
            }
          />

          <div
            className="mt-1 flex justify-center border"
            style={{
              borderColor: resonator.rarity === 4 ? "#9d6bb9" : "#FFF691",
            }}
          >
            <span className="truncate text-sm xl:text-base">{resonator.resonatorName}</span>
          </div>
        </article>
      </Link>

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
    </>
  );
}
