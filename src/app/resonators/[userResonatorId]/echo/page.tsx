"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getResonatorEcho } from "@/api/resonator.api";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";
import { Echo } from "@/components/resonator-echo/Echo";

export default function Page() {
  const { userResonatorId } = useParams<{ userResonatorId: string }>();
  const [echoes, setEchoes] = useState<ResonatorEcho[]>();

  useEffect(() => {
    getResonatorEcho(userResonatorId).then(setEchoes);
  }, [userResonatorId]);

  if (!echoes) return;

  return (
    <main className="relative min-h-screen">
      <div className="absolute top-0 bottom-0 left-[clamp(95px,6vw,120px)] hidden w-px bg-white/15 lg:block" />

      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-echo" userResonatorId={userResonatorId} />

      {/* 데스크탑 Sidebar */}
      <DesktopSidebar active="resonator-echo" userResonatorId={userResonatorId} />

      <div className="mx-[5vw] grid grid-cols-1 gap-[3vh] pb-[5vh] lg:ml-[10vw] lg:grid-cols-5 lg:pt-[8vh]">
        {echoes.map((echo, index) => (
          <Echo key={index} echo={echo} />
        ))}
      </div>
    </main>
  );
}
