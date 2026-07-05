import Image from "next/image";

import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";
import MobileResonanceChain from "@/components/resonator-detail/MobileResonanceChain";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

const resonator = {
  userResonatorId: 4,
  resonatorName: "구원",
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

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden lg:overflow-hidden">
      <div className="mx-auto min-h-screen max-w-[1920px] lg:h-screen lg:overflow-hidden">

        {/* 모바일 Sidebar */}
        <div className="lg:hidden">
          <MobileSidebar active="resonator-info" />
        </div>

        <div
          className="
            relative
            grid
            min-h-screen
            grid-cols-1
            lg:h-full
            lg:grid-cols-[96px_400px_minmax(320px,1fr)_480px]
          "
        >
          {/* 데스크탑 Sidebar */}
          <div className="hidden lg:block">
            <DesktopSidebar active="resonator-info" />
          </div>

          {/* 좌측 정보 */}
          <div className="
            order-2
            flex
            justify-center
            px-4
            pt-8
            lg:justify-start
            lg:pl-8
            lg:pt-16
          ">
            <ResonatorInfo resonator={resonator} />
          </div>

          {/* 중앙 캐릭터 */}
          <div className="
            relative
            order-1
            flex
            justify-center
            lg:order-2
            lg:-translate-y-10
          ">
            <Image
              src={resonator.standingImageUrl}
              alt={resonator.resonatorName}
              width={718}
              height={1026}
              priority
              className="
                pointer-events-none
                h-[60vh]
                w-auto
                select-none
                sm:h-[70vh]
                lg:h-[1026px]
              "
            />
          </div>

          {/* 우측 */}
          <div className="
            order-3
            flex
            flex-col
            gap-8
            px-8
            lg:pl-0
            lg:pr-16
            pt-16
          ">
            <WeaponCard weapon={resonator.weapon} />

            <div className="hidden lg:block">
              <ResonanceChain level={resonator.resonanceChainLevel} />
            </div>

            <div className="py-6 lg:hidden">
              <MobileResonanceChain level={resonator.resonanceChainLevel} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}