import ResonatorSetting from "@/components/resonator-setting/ResonatorSetting";
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
      <div className="absolute top-0 bottom-0 left-[clamp(95px,6vw,120px)] hidden w-px bg-white/15 lg:block" />
      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-setting" userResonatorId={userResonatorId} />

      {/* 데스크톱 Sidebar */}
      <DesktopSidebar active="resonator-setting" userResonatorId={userResonatorId} />

      <div className="flex min-h-screen justify-center lg:items-center">
        <ResonatorSetting userResonatorId={userResonatorId} resonatorSetting={resonatorSetting} />
      </div>
    </main>
  );
}
