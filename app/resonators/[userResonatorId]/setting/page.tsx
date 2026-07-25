"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ResonatorSetting from "@/components/resonator-setting/ResonatorSetting";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";

import { getResonatorSetting } from "@/api/resonator.api";

export default function Page() {
  const { userResonatorId } = useParams<{ userResonatorId: string }>();
  const [resonatorSetting, setResonatorSetting] = useState<ResonatorSettingResponse>();

  useEffect(() => {
    getResonatorSetting(userResonatorId).then(setResonatorSetting);
  }, [userResonatorId]);

  if (!resonatorSetting) return;

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
