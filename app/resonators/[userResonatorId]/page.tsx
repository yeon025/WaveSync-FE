import Image from "next/image";
import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";
import MobileResonanceChain from "@/components/resonator-detail/MobileResonanceChain";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

const resonatorDetail: ResonatorDetailResponse = {
  userResonatorId: 4,
  resonatorName: "갈브레나",
  element: "fusion",
  standingImageUrl: "/images/standings/갈브레나-standing.png",
  resonanceChainLevel: 4,
  weapon: {
    name: "푸른 의지",
    attackValue: 587,
    main: {
      type: "critical_rate",
      value: 24.3,
    },
    refineLevel: 1,
    imageUrl: "/images/weapons/푸른 의지.png",
  },
  stat: {
    hp: 12354,
    attack: 154,
    defense: 124,
    energyRegen: 110,
    criticalRate: 70,
    criticalDamage: 305,
    resonanceSkillDamageBonus: 50,
    basicAttackDamageBonus: 12,
    heavyAttackDamageBonus: 10,
    resonanceLiberationDamageBonus: 10,
    glacioDamageBonus: 70,
    fusionDamageBonus: 0,
    conductoDamageBonus: 0,
    aeroDamageBonus: 0,
    spectraDamageBonus: 0,
    havocDamageBonus: 0,
    healingBonus: 0,
  },
};

interface Props {
  params: Promise<{ userResonatorId: string }>;
}

export default async function Page({ params }: Props) {
  const { userResonatorId } = await params;

  return (
    <main className="relative min-h-screen overflow-x-hidden lg:overflow-hidden">
      <div className="min-h-screen max-w-[1920px] lg:h-screen lg:overflow-hidden">
        {/* 모바일 Sidebar */}
        <MobileSidebar active="resonator-info" userResonatorId={userResonatorId} />

        <div
          className="relative grid grid-cols-1
            lg:h-full lg:grid-cols-[96px_minmax(350px,390px)_max-content_470px]
            2xl:grid-cols-[96px_minmax(390px,420px)_minmax(850px,max-content)_470px]"
        >
          {/* 데스크탑 Sidebar */}
          <DesktopSidebar active="resonator-info" userResonatorId={userResonatorId} />

          {/* 좌측 정보 */}
          <div
            className="order-2 min-w-0 flex justify-center px-4 pt-8
              lg:pl-8 lg:pt-16"
          >
            <ResonatorInfo resonator={resonatorDetail} />
          </div>

          {/* 중앙 캐릭터 */}
          <div
            className="relative order-1 flex justify-center
              lg:order-2 lg:-translate-y-10"
          >
            <Image
              src={resonatorDetail.standingImageUrl}
              alt={resonatorDetail.resonatorName}
              width={718}
              height={1026}
              priority
              className="pointer-events-none h-[60vh] w-auto select-none
                sm:h-[70vh] lg:h-[90vh] lg:translate-y-14 lg:translate-x-2"
            />
          </div>

          {/* 우측 */}
          <div
            className="order-3 flex flex-col gap-8 px-8 pt-16
              lg:pl-0 lg:pr-16"
          >
            <WeaponCard weapon={resonatorDetail.weapon} />

            <ResonanceChain level={resonatorDetail.resonanceChainLevel} />

            <MobileResonanceChain level={resonatorDetail.resonanceChainLevel} />
          </div>
        </div>
      </div>
    </main>
  );
}
