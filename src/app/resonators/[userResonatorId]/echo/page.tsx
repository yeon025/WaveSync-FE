"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getResonatorEcho } from "@/api/resonator.api";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";
import { Echo } from "@/components/resonator-echo/Echo";
import EchoAnalysis from "@/components/resonator-echo/EchoAnalysis";

export default function Page() {
  const { userResonatorId } = useParams<{ userResonatorId: string }>();
  const [echoData, setEchoData] = useState<EchoListData>();

  useEffect(() => {
    getResonatorEcho(userResonatorId).then(setEchoData);
  }, [userResonatorId]);

  if (!echoData) return;

  const { echoes, echoAnalysis } = echoData;

  return (
    <main className="relative min-h-screen">
      <div className="absolute top-0 bottom-0 left-[clamp(95px,6vw,120px)] hidden w-px bg-white/15 lg:block" />

      {/* 모바일 Sidebar */}
      <MobileSidebar active="resonator-echo" userResonatorId={userResonatorId} />

      {/* 데스크탑 Sidebar */}
      <DesktopSidebar active="resonator-echo" userResonatorId={userResonatorId} />

      <div className="mx-[5vw] flex flex-col gap-[3vh] pb-[5vh] lg:ml-[10vw] lg:pt-[8vh]">
        <div className="grid grid-cols-1 gap-[3vh] lg:grid-cols-5">
          {echoes.map((echo, index) => (
            <Echo key={index} echo={echo} />
          ))}
        </div>

        {echoAnalysis && <EchoAnalysis analysis={echoAnalysis} />}
      </div>
    </main>
  );
}
