"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteResonator } from "@/api/resonator.api";
import WaveSyncLogo from "@/components/common/Logo";
import DeleteResonatorGrid from "@/components/resonator-summary/DeleteResonatorGrid";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import Link from "next/link";
import IconButton from "@/components/common/IconButton";

interface Props {
  resonators: ResonatorSummaryResponse[];
}

export default function DeleteResonatorContainer({ resonators }: Props) {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  const handleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleDelete = async () => {
    // 공명자가 선택되지 않은 경우
    if (!selectedIds) {
      setModal({
        isOpen: true,
        title: "알림",
        message: "공명자를 선택해주세요.",
      });
      return;
    }

    console.log(selectedIds);

    // 삭제 API 호출
    const result = await deleteResonator({ userResonatorIds: selectedIds });

    if (result.code != "OK") {
      setModal({
        isOpen: true,
        title: "삭제 실패",
        message: result.message,
      });
      return;
    }

    setModal({
      isOpen: true,
      title: "삭제 완료",
      message: `공명자가 삭제되었습니다.`,
    });

    router.push("/");
  };

  return (
    <main className="mx-auto px-6 py-10 lg:px-8">
      {/* 로고 */}
      <WaveSyncLogo imageSize={100} direction="row" textSize="text-4xl" fontSize="font-normal" />

      <div className="my-8 flex items-center justify-end gap-8">
        {/* 삭제 버튼 */}
        <IconButton icon="/trash-bin.svg" alt="삭제" size={38} onClick={handleDelete} />

        {/* 메인 페이지로 이동 버튼 */}
        <Link href="/">
          <Button>취소</Button>
        </Link>
      </div>

      {/* 카드 그리드 */}
      <DeleteResonatorGrid
        resonators={resonators}
        selectedIds={selectedIds}
        onSelect={handleSelect}
      />

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
    </main>
  );
}
