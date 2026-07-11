"use client";

import Link from "next/link";
import Image from "next/image";
import WaveSyncLogo from "./Logo";

interface Props {
  active: "resonator-info" | "resonator-setting";
  userResonatorId: number;
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

export default function MobileSidebar({ active, userResonatorId }: Props) {
  return (
    <aside className="mb-5 lg:hidden">
      {/* 로고 */}
      <WaveSyncLogo textSize="text-2xl" fontSize="font-normal" direction="row" imageSize={100} />

      {/* 메뉴 */}
      <nav className="flex gap-3 px-3">
        {navigationItems.map((item) => {
          const isActive = item.id === active;

          return (
            <Link
              key={item.id}
              href={`/resonators/${userResonatorId}${item.href}`}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex flex-col items-center gap-1.5 rounded-2xl p-3 ${isActive ? "bg-[#d6b15c12]" : ""} `}
            >
              <Image
                src={isActive ? item.icon.active : item.icon.inactive}
                alt=""
                aria-hidden
                width={24}
                height={24}
              />

              <span
                className={`text-xs font-medium ${isActive ? "text-[#d6b15c]" : "text-[#4e4f5c]"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
