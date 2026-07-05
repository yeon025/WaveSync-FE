import Image from "next/image";

const navigationItems = [
  {
    id: "resonator-info",
    label: "공명자 정보",
    active: true,
    icon: {
      active: "/resonator-info-active.svg",
      inactive: "/resonator-info-deactive.svg",
    },
  },
  {
    id: "resonator-setting",
    label: "공명자 설정",
    active: false,
    icon: {
      active: "/resonator-setting-active.svg",
      inactive: "/resonator-setting-deactive.svg",
    },
  },
];

export default function SidebarNavigationSection() {
  return (
    <aside
      aria-label="사이드바 내비게이션"
      className="absolute inset-y-0 left-0 flex flex-col border-r border-white/15"
    >
      {/* 로고 */}
      <div className="flex justify-center pt-6">
        <div className="flex flex-col items-center">
          <Image
            src="/images/wavesync-logo.png"
            alt="WaveSync 로고"
            width={100}
            height={100}
          />

          <div className="flex text-base font-semibold tracking-[0.22px]">
            <span className="text-white">Wave</span>
            <span className="bg-gradient-to-r from-[#5b7cff] to-[#69e3ff] bg-clip-text text-transparent">
              Sync
            </span>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="px-3 py-4">
        <div className="h-px w-full bg-[#ffffff0d]" />
      </div>

      {/* 메뉴 */}
      <nav
        aria-label="주요 메뉴"
        className="flex flex-1 flex-col gap-3 px-2"
      >
      {navigationItems.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-current={item.active ? "page" : undefined}
          className={`relative flex flex-col items-center gap-1.5 rounded-2xl px-4 py-3.5 ${
            item.active ? "bg-[#d6b15c12]" : ""
          }`}
        >
          <div className="relative h-[25px] w-[25px]">
            <Image
              src={item.active ? item.icon.active : item.icon.inactive}
              alt=""
              aria-hidden
              fill
              className="object-contain"
            />
          </div>

          <span
            className={`text-center text-xs font-medium mt-1 ${
              item.active ? "text-[#d6b15c]" : "text-[#4e4f5c]"
            }`}
          >
            {item.label}
          </span>

          {item.active && (
            <div className="absolute left-0 top-[18px] h-10 w-[3px] rounded-r-full bg-[#d6b15c]" />
          )}
        </button>
      ))}
      </nav>

    </aside>
  );
}