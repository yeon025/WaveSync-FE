"use client";

import WaveSyncLogo from "@/components/common/Logo";
import ResonatorGrid from "@/components/resonator-summary/ResonatorGrid";
import Button from "@/components/common/Button";
import Link from "next/link";
import IconButton from "@/components/common/IconButton";

const resonators: ResonatorSummaryResponse[] = [
  {
    userResonatorId: null,
    resonatorName: "양양",
    rarity: 4,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/양양-thumbnail.png",
  },
  {
    userResonatorId: 2,
    resonatorName: "복링",
    rarity: 4,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/복링-thumbnail.png",
  },
  {
    userResonatorId: 3,
    resonatorName: "린네",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/린네-thumbnail.png",
  },
  {
    userResonatorId: 4,
    resonatorName: "구원",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/구원-thumbnail.png",
  },
  {
    userResonatorId: 5,
    resonatorName: "갈브레나",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/갈브레나-thumbnail.png",
  },
  {
    userResonatorId: 6,
    resonatorName: "카카루",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/카카루-thumbnail.png",
  },
  {
    userResonatorId: 7,
    resonatorName: "방랑자",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/방랑자-thumbnail.png",
  },
  {
    userResonatorId: null,
    resonatorName: "감심",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/감심-thumbnail.png",
  },
  {
    userResonatorId: null,
    resonatorName: "설지",
    rarity: 4,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지-thumbnail.png",
  },
  {
    userResonatorId: 10,
    resonatorName: "유노",
    rarity: 5,
    releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/유노-thumbnail.png",
  },
];

export default function Page() {
  return (
    <main className="mx-auto px-6 py-10 lg:px-8">
      {/* 로고 */}
      <WaveSyncLogo imageSize={100} direction="row" textSize="text-4xl" fontSize="font-normal" />

      <div className="my-8 flex items-center justify-end gap-8">
        {/* 삭제 버튼 */}
        <IconButton
          icon="/trash-bin.svg"
          alt="삭제"
          size={38}
          // onClick={handleDelete}
        />

        {/* 업로드 페이지로 이동 버튼 */}
        <Link href="/upload">
          <Button>공명자 정보 가져오기</Button>
        </Link>
      </div>

      {/* 카드 그리드 */}
      <ResonatorGrid resonators={resonators} />
    </main>
  );
}
