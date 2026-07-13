import { getResonatorDetail } from "@/api/resonator.api";
import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";
import MobileResonanceChain from "@/components/resonator-detail/MobileResonanceChain";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

interface Props {
  params: Promise<{ userResonatorId: number }>;
}

export default async function Page({ params }: Props) {
  const { userResonatorId } = await params;
  const resonatorDetail = await getResonatorDetail(userResonatorId);

  return (
    <main className="relative min-h-screen">
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-info" userResonatorId={userResonatorId} />

      {/* 데스크탑 Sidebar */}
      <DesktopSidebar active="resonator-info" userResonatorId={userResonatorId} />

      {/* 캐릭터 이미지 */}
      <div className="relative flex justify-center lg:pointer-events-none lg:absolute lg:left-1/2 lg:z-0 lg:-translate-x-1/2">
        <img
          src={resonatorDetail.standingImageUrl}
          alt={resonatorDetail.resonatorName}
          width={718}
          height={1026}
          className="h-auto w-[100vw] object-contain lg:h-[clamp(500px,80vh,1026px)] lg:w-auto"
        />
      </div>

      {/* 좌우 레이아웃 */}
      <div className="mx-[5vw] grid grid-cols-1 gap-[4vh] lg:ml-[10vw] lg:grid-cols-[clamp(250px,22vw,400px)_1fr_clamp(350px,20vw,400px)] lg:gap-0 lg:pt-[8vh]">
        {/* 좌측 정보 */}
        <div className="order-2 lg:order-1">
          <ResonatorInfo resonator={resonatorDetail} />
        </div>

        {/* 중앙 빈 영역 - 이미지 자리 */}
        <div className="hidden lg:order-2 lg:block" />

        {/* 우측 정보 */}
        <div className="order-3 flex flex-col gap-8 lg:w-full">
          <WeaponCard weapon={resonatorDetail.weapon} />

          <ResonanceChain level={resonatorDetail.resonanceChainLevel} />
        </div>
      </div>

      {/* 모바일 */}
      <div className="flex flex-col gap-8 px-5">
        <MobileResonanceChain level={resonatorDetail.resonanceChainLevel} />
      </div>
    </main>
  );
}
