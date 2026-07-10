import Image from "next/image";
import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";
import MobileResonanceChain from "@/components/resonator-detail/MobileResonanceChain";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

const resonatorDetail: ResonatorDetailResponse = {
  userResonatorId: 4,
  resonatorName: "기염",
  element: "aero",
  standingImageUrl: "/images/standings/기염-standing.png",
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

      <div className="mx-[5vw] grid grid-cols-1 gap-[4vh] lg:mt-[8vh] lg:ml-[7vw] lg:grid-cols-[clamp(310px,22vw,400px)_minmax(700px,max-content)_clamp(310px,22vw,470px)] lg:gap-0">
        {/* 좌측 정보 */}
        <div className="order-2 lg:order-1">
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
            className="h-[60vh] w-auto lg:h-[clamp(700px,90vh,1026px)] lg:-translate-y-[9vh]"
          />
        </div>

        {/* 우측 */}
        <div className="order-3 flex flex-col gap-8 lg:mr-[3vw] lg:w-[100%] lg:justify-self-end">
          <WeaponCard weapon={resonatorDetail.weapon} />

          <ResonanceChain level={resonatorDetail.resonanceChainLevel} />

          <MobileResonanceChain level={resonatorDetail.resonanceChainLevel} />
        </div>
      </div>
    </main>
  );
}
