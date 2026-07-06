"use client";

import { useRouter } from "next/navigation";
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

export default function MobileSidebar({ active, userResonatorId }: Props) {
  const router = useRouter();

  return (
    <aside
      aria-label="사이드바 내비게이션"
      className="
        w-full
        border-b
        border-white/15
      "
    >
      {/* 로고 */}
      <div className="flex justify-center pt-6">
        <WaveSyncLogo
          textSizeClass="text-2xl"
          direction="row"
          imageSize={20}
        />
      </div>

      {/* 메뉴 */}
      <nav
        aria-label="주요 메뉴"
        className="flex gap-2 overflow-x-auto px-3 py-3"
      >
        {navigationItems.map((item) => {
          const isActive = item.id === active;

          return (
            <button
              key={item.id}
              type="button"
              aria-current={isActive ? "page" : undefined}
              onClick={() => router.push(`/resonators/${userResonatorId}${item.href}`)}
              className={`
                relative
                flex
                shrink-0
                flex-col
                items-center
                gap-1.5
                rounded-2xl
                px-1
                py-3.5
                cursor-pointer
                ${isActive ? "bg-[#d6b15c12]" : ""}
              `}
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
            </button>
          );
        })}
      </nav>
    </aside>
  );
}