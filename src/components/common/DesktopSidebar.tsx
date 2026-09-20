"use client";

import Link from "next/link";
import Logo from "./Logo";
import { EchoIcon, ResonatorInfoIcon, ResonatorSettingIcon } from "./Icons";

interface Props {
  active: "resonator-info" | "resonator-setting" | "resonator-echo";
  userResonatorId: string;
}

const ACTIVE_ICON_COLOR = "text-[#d6b15c]";
const INACTIVE_ICON_COLOR = "text-[#4e4f5c]";

const navigationItems = [
  {
    id: "resonator-info",
    label: "공명자 정보",
    href: "",
    Icon: ResonatorInfoIcon,
  },
  {
    id: "resonator-echo",
    label: "공명자 에코",
    href: "/echo",
    Icon: EchoIcon,
  },
  {
    id: "resonator-setting",
    label: "공명자 설정",
    href: "/setting",
    Icon: ResonatorSettingIcon,
  },
] as const;

export default function DesktopSidebar({ active, userResonatorId }: Props) {
  return (
    <aside className="fixed hidden h-screen w-[clamp(95px,6vw,120px)] shrink-0 flex-col lg:flex">
      {/* 로고 */}
      <Logo
        textSize="text-[clamp(12px,0.8vw,16px)]"
        fontSize="font-normal"
        direction="column"
        imageSize={100}
      />

      {/* 구분선 */}
      <div className="my-[2vh] h-px bg-white/5" />

      {/* 메뉴 */}
      <nav aria-label="주요 메뉴" className="flex flex-1 flex-col gap-[1.5vh] px-[0.3vw]">
        {navigationItems.map((item) => {
          const isActive = item.id === active;
          const iconColor = isActive ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR;

          return (
            <Link
              key={item.id}
              href={`/resonators/${userResonatorId}${item.href}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center gap-[0.8vh] rounded-[clamp(12px,1vw,20px)] py-[clamp(10px,1.5vh,20px)] ${
                isActive ? "bg-[#d6b15c12]" : ""
              } `}
            >
              <div className="relative h-[clamp(20px,1.5vw,32px)] w-[clamp(20px,1.5vw,32px)]">
                <item.Icon className={`h-full w-full ${iconColor}`} />
              </div>

              <span
                className={`text-center text-[clamp(10px,0.7vw,14px)] font-medium ${iconColor} `}
              >
                {item.label}
              </span>

              {isActive && (
                <div className="absolute top-[2vh] left-0 h-[clamp(24px,4vh,42px)] w-[clamp(2px,0.15vw,4px)] rounded-r-full bg-[#d6b15c]" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
