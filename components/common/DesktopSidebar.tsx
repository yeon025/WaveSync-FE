import Image from "next/image";

interface SidebarProps {
  active: "resonator-info" | "resonator-setting";
}

const navigationItems = [
  {
    id: "resonator-info",
    label: "공명자 정보",
    icon: {
      active: "/resonator-info-active.svg",
      inactive: "/resonator-info-deactive.svg",
    },
  },
  {
    id: "resonator-setting",
    label: "공명자 설정",
    icon: {
      active: "/resonator-setting-active.svg",
      inactive: "/resonator-setting-deactive.svg",
    },
  },
] as const;

export default function DesktopSidebar({ active }: SidebarProps) {
  return (
    <aside
      aria-label="사이드바 내비게이션"
      className="
        sticky
        top-0
        flex
        h-screen
        w-24
        shrink-0
        flex-col
        border-r
        border-white/15
      "
    >
      {/* 로고 */}
      <div className="flex justify-center pt-6">
        <div className="flex flex-col items-center">
          <Image
            src="/images/wavesync-logo.png"
            alt="WaveSync 로고"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />

          <div className="mt-2 flex text-sm font-semibold tracking-[0.22px]">
            <span className="text-white">Wave</span>
            <span className="bg-gradient-to-r from-[#5b7cff] to-[#69e3ff] bg-clip-text text-transparent">
              Sync
            </span>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="px-3 py-4">
        <div className="h-px w-full bg-white/5" />
      </div>

      {/* 메뉴 */}
      <nav
        aria-label="주요 메뉴"
        className="flex flex-1 flex-col gap-3 px-2"
      >
        {navigationItems.map((item) => {
          const isActive = item.id === active;

          return (
            <button
              key={item.id}
              type="button"
              aria-current={isActive ? "page" : undefined}
              className={`
                relative
                flex
                flex-col
                items-center
                gap-1.5
                rounded-2xl
                px-1
                py-3.5
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

              {isActive && (
                <div
                  className="
                    absolute
                    left-0
                    top-[18px]
                    h-10
                    w-[3px]
                    rounded-r-full
                    bg-[#d6b15c]
                  "
                />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}