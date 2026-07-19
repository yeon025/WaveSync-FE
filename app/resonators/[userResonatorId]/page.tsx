import { getResonatorDetail } from "@/api/resonator.api";
import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";
import MobileResonanceChain from "@/components/resonator-detail/MobileResonanceChain";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

interface Props {
  params: Promise<{ userResonatorId: string }>;
}

export default async function Page({ params }: Props) {
  const { userResonatorId } = await params;
  const resonatorDetail = await getResonatorDetail(userResonatorId);

  return (
    <main className="relative min-h-screen">
      <div className="absolute top-0 bottom-0 left-[clamp(95px,6vw,120px)] hidden w-px bg-white/15 lg:block" />
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-info" userResonatorId={userResonatorId} />

      {/* 데스크탑 Sidebar */}
      <DesktopSidebar active="resonator-info" userResonatorId={userResonatorId} />

      {/* 캐릭터 이미지 */}
      <div className="relative left-1/2 z-0 flex -translate-x-1/2 justify-center lg:absolute lg:mt-10">
        <img
          src={resonatorDetail.standingImageUrl}
          alt={resonatorDetail.resonatorName}
          width={718}
          height={1026}
          className="h-auto w-[100vw] object-contain lg:h-[clamp(500px,80vh,1026px)] lg:w-auto"
        />
      </div>

      {/* 좌우 정보 */}
      <div className="relative z-10 mx-[5vw] grid grid-cols-1 gap-[4vh] lg:mx-[10vw] lg:flex lg:justify-between lg:pt-[8vh]">
        <div className="lg:w-[clamp(250px,22vw,400px)]">
          <ResonatorInfo resonator={resonatorDetail} />
        </div>

        <div className="lg:w-[clamp(350px,20vw,400px)]">
          <WeaponCard weapon={resonatorDetail.weapon} />

          <div className="mt-8">
            <ResonanceChain level={resonatorDetail.resonanceChainLevel} />
          </div>
        </div>
      </div>

      {/* 모바일 */}
      <div className="flex flex-col gap-8 px-5">
        <MobileResonanceChain level={resonatorDetail.resonanceChainLevel} />
      </div>
    </main>
  );
}
