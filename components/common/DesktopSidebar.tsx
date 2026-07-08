"use client";

import Link from "next/link";
import Image from "next/image";
import WaveSyncLogo from "./Logo";

interface Props {
  active: "resonator-info" | "resonator-setting";
  userResonatorId: string;
}

const navigationItems = [
  {
    id: "resonator-info",
    label: "공명자 정보",
    href: "",
    icon: {
      active: "/resonator-info-active.svg",
      inactive: "/resonator-info-deactive.svg",
    },
  },
  {
    id: "resonator-setting",
    label: "공명자 설정",
    href: "/setting",
    icon: {
      active: "/resonator-setting-active.svg",
      inactive: "/resonator-setting-deactive.svg",
    },
  },
] as const;

export default function DesktopSidebar({ active, userResonatorId }: Props) {
  return (
    <aside
      aria-label="데스크톱 사이드바 내비게이션"
      className="sticky top-0 hidden h-screen w-24 shrink-0 flex-col border-r border-white/15 lg:flex"
    >
      {/* 로고 */}
      <WaveSyncLogo
        textSizeClass="text-base"
        fontSizeClass="font-normal"
        direction="column"
        imageSize={20}
      />

      {/* 구분선 */}
      <div className="px-3 py-4">
        <div className="h-px w-full bg-white/5" />
      </div>

      {/* 메뉴 */}
      <nav aria-label="주요 메뉴" className="flex flex-1 flex-col gap-3 px-1">
        {navigationItems.map((item) => {
          const isActive = item.id === active;

          return (
            <Link
              key={item.id}
              href={`/resonators/${userResonatorId}${item.href}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center gap-1.5 rounded-2xl px-1 py-3.5 ${isActive ? "bg-[#d6b15c12]" : ""} `}
            >
              <div className="relative h-6 w-6">
                <Image
                  src={isActive ? item.icon.active : item.icon.inactive}
                  alt=""
                  aria-hidden
                  fill
                  className="object-contain"
                />
              </div>

              <span
                className={`text-center text-xs font-medium ${
                  isActive ? "text-[#d6b15c]" : "text-[#4e4f5c]"
                }`}
              >
                {item.label}
              </span>

              {isActive && (
                <div className="absolute top-[18px] left-0 h-10 w-[3px] rounded-r-full bg-[#d6b15c]" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
