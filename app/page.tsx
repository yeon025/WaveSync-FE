import ResonatorGrid from "@/components/resonator-summary/ResonatorGrid";
import { Resonator } from "@/components/resonator-summary/ResonatorCard";

const resonators: Resonator[] = [
  {
    userResonatorId: 1,
    resonatorName: "양양",
    rarity: 4,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#9d6bb9",
  },
  {
    userResonatorId: 2,
    resonatorName: "연무",
    rarity: 4,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#9d6bb9",
  },
  {
    userResonatorId: 3,
    resonatorName: "수수",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: 4,
    resonatorName: "구원",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: 5,
    resonatorName: "갈브레나",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: 6,
    resonatorName: "카카루",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: 7,
    resonatorName: "방랑자",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: 8,
    resonatorName: "감심",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
  {
    userResonatorId: null,
    resonatorName: "설지",
    rarity: 4,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#9d6bb9",
  },
  {
    userResonatorId: 10,
    resonatorName: "유노",
    rarity: 5,
		releaseVersion: 101,
    thumbnailImageUrl: "/images/thumbnails/설지.png",
    borderColor: "#FFF691",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#2a2c32] px-4 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-white">
            WaveSync
          </h1>
        </header>

        {/* 카드 그리드 */}
        <ResonatorGrid resonators={resonators} />
      </div>
    </main>
  );
}