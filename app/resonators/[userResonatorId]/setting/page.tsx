"use client";

import ResonanceNodeEditor from "@/components/resonator-setting/ResonanceNodeEditor";
import WeaponEditor from "@/components/resonator-setting/WeaponEditor";
import MobileSidebar from "@/components/common/MobileSidebar";
import DesktopSidebar from "@/components/common/DesktopSidebar";


// 예시 (나중엔 fetch로 교체)
const data: ResonatorSettingResponse = {
  "nodes": [
    {
        "branchPosition": "left_outer",
        "nodePosition": "top",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "left_outer",
        "nodePosition": "middle",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "left_inner",
        "nodePosition": "top",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "left_inner",
        "nodePosition": "middle",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "center",
        "nodePosition": "top",
        "active": true,
        "stat": null
    },
    {
        "branchPosition": "center",
        "nodePosition": "middle",
        "active": true,
        "stat": null
    },
    {
        "branchPosition": "right_inner",
        "nodePosition": "top",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "right_inner",
        "nodePosition": "middle",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "right_outer",
        "nodePosition": "top",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    },
    {
        "branchPosition": "right_outer",
        "nodePosition": "middle",
        "active": true,
        "stat": {
            "type": "critical_damage",
            "value": 48
        }
    }
  ],
  "weapon": {
    "refineLevel": 1,
    "refineType": "critical_damage",
    "refine1Value": 1,
    "refine2Value": 5,
    "refine3Value": 10,
    "refine4Value": 15,
    "refine5Value": 20,
    "imageUrl": "/images/weapons/푸른 의지.png"
  }
		
};

export default function Page() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      {/* 모바일 Sidebar */}
      <div className="lg:hidden">
        <MobileSidebar active="resonator-setting" />
      </div>

      <div className="flex">
        <div className="hidden lg:block">
          <DesktopSidebar active="resonator-setting" />
        </div>

        <div className="flex w-full justify-center items-start gap-30 py-20">
          <ResonanceNodeEditor nodes={data.nodes} />
          <WeaponEditor weapon={data.weapon} />
        </div>
      </div>
    </main>
  );
}