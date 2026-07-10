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
    <main>
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-info" userResonatorId={userResonatorId} />

      {/* 데스크탑 Sidebar */}
      <DesktopSidebar active="resonator-info" userResonatorId={userResonatorId} />

      <div className="grid grid-cols-1 lg:ml-35 lg:grid-cols-[minmax(310px,370px)_max-content_minmax(310px,400px)] xl:grid-cols-[minmax(370px,400px)_minmax(800px,max-content)_minmax(400px,470px)]">
        {/* 좌측 정보 */}
        <div className="order-2 mx-5 pt-8 lg:order-1 lg:pt-16">
          <ResonatorInfo resonator={resonatorDetail} />
        </div>

        {/* 중앙 캐릭터 */}
        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src={resonatorDetail.standingImageUrl}
            alt={resonatorDetail.resonatorName}
            width={718}
            height={1026}
            priority
            className="h-[60vh] w-auto lg:h-[100vh] lg:translate-x-2 lg:translate-y-4 2xl:h-[90vh]"
          />
        </div>

        {/* 우측 */}
        <div className="order-3 mx-4 my-16 flex flex-col gap-8">
          <WeaponCard weapon={resonatorDetail.weapon} />

          <ResonanceChain level={resonatorDetail.resonanceChainLevel} />

          <MobileResonanceChain level={resonatorDetail.resonanceChainLevel} />
        </div>
      </div>
    </main>
  );
}
