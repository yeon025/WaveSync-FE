import ResonanceNodeEditor from "@/components/resonator-setting/ResonanceNodeEditor";
import WeaponEditor from "@/components/resonator-setting/WeaponEditor";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

// 예시 (나중엔 fetch로 교체)
const data: ResonatorSettingResponse = {
  nodes: [
    {
      branchPosition: "left_outer",
      nodePosition: "middle",
      active: false,
      stat: {
        type: "critical_rate",
        value: 1.6,
      },
    },
    {
      branchPosition: "left_outer",
      nodePosition: "top",
      active: true,
      stat: {
        type: "critical_rate",
        value: 2.4,
      },
    },
    {
      branchPosition: "left_inner",
      nodePosition: "middle",
      active: false,
      stat: {
        type: "attack_percent",
        value: 3.6,
      },
    },
    {
      branchPosition: "left_inner",
      nodePosition: "top",
      active: true,
      stat: {
        type: "attack_percent",
        value: 6.4,
      },
    },
    {
      branchPosition: "center",
      nodePosition: "middle",
      active: true,
      stat: null,
    },
    {
      branchPosition: "center",
      nodePosition: "top",
      active: true,
      stat: null,
    },
    {
      branchPosition: "right_inner",
      nodePosition: "middle",
      active: true,
      stat: {
        type: "attack_percent",
        value: 3.6,
      },
    },
    {
      branchPosition: "right_inner",
      nodePosition: "top",
      active: true,
      stat: {
        type: "attack_percent",
        value: 6.4,
      },
    },
    {
      branchPosition: "right_outer",
      nodePosition: "middle",
      active: true,
      stat: {
        type: "critical_rate",
        value: 1.6,
      },
    },
    {
      branchPosition: "right_outer",
      nodePosition: "top",
      active: false,
      stat: {
        type: "critical_rate",
        value: 2.4,
      },
    },
  ],
  weapon: {
    refineLevel: 1,
    refineType: "critical_damage",
    refine1Value: 1,
    refine2Value: 5,
    refine3Value: 10,
    refine4Value: 15,
    refine5Value: 20,
    imageUrl: "/images/weapons/푸른 의지.png",
  },
};

interface Props {
  params: Promise<{ userResonatorId: string }>;
}

export default async function Page({ params }: Props) {
  const { userResonatorId } = await params;

  return (
    <main className="relative">
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-setting" userResonatorId={userResonatorId} />

      <div className="flex">
        {/* 데스크탑 Sidebar */}
        <DesktopSidebar active="resonator-setting" userResonatorId={userResonatorId} />

        <div className="flex w-full flex-col items-center justify-center gap-10 py-10 lg:flex-row lg:py-20">
          <ResonanceNodeEditor nodes={data.nodes} />
          <WeaponEditor weapon={data.weapon} />
        </div>
      </div>
    </main>
  );
}
