import ResonanceNodeEditor from "@/components/resonator-setting/ResonanceNodeEditor";
import WeaponEditor from "@/components/resonator-setting/WeaponEditor";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";
import { getResonatorSetting } from "@/api/resonator.api";

interface Props {
  params: Promise<{ userResonatorId: number }>;
}

export default async function Page({ params }: Props) {
  const { userResonatorId } = await params;
  const resonatorSetting = await getResonatorSetting(userResonatorId);

  return (
    <main className="relative">
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-setting" userResonatorId={userResonatorId} />

      <div className="flex">
        {/* 데스크탑 Sidebar */}
        <DesktopSidebar active="resonator-setting" userResonatorId={userResonatorId} />

        <div className="flex w-full flex-col items-center justify-center gap-10 py-10 lg:my-20 lg:ml-25 lg:flex-row">
          <ResonanceNodeEditor nodes={resonatorSetting.nodes} />
          <WeaponEditor weapon={resonatorSetting.weapon} />
        </div>
      </div>
    </main>
  );
}
