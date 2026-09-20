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

export default function MobileSidebar({ active, userResonatorId }: Props) {
  return (
    <aside className="mb-5 lg:hidden">
      {/* 로고 */}
      <Logo textSize="text-2xl" fontSize="font-normal" direction="row" imageSize={100} />

      {/* 메뉴 */}
      <nav className="flex gap-3 px-3">
        {navigationItems.map((item) => {
          const isActive = item.id === active;
          const iconColor = isActive ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR;

          return (
            <Link
              key={item.id}
              href={`/resonators/${userResonatorId}${item.href}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center gap-1.5 rounded-2xl p-3 ${isActive ? "bg-[#d6b15c12]" : ""} `}
            >
              <item.Icon className={`h-6 w-6 ${iconColor}`} />

              <span className={`text-xs font-medium ${iconColor}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
