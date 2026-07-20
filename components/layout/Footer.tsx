export default async function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#121212] px-4 py-8 text-gray-400">
      <div className="mx-auto max-w-6xl space-y-4">
        {/* 서비스명 및 연락처 */}
        <div>
          <h3 className="text-lg font-bold text-white">ResoCollector</h3>
          <p className="mt-1 text-sm">
            Contact:{" "}
            <a
              href="mailto:soyeon6527@gmail.com"
              className="transition-colors hover:text-gray-300 hover:underline"
            >
              soyeon6527@gmail.com
            </a>
          </p>
        </div>

        <div className="h-px bg-gray-800" />

        {/* 면책 조항 및 저작권 */}
        <div className="space-y-2 text-sm leading-relaxed text-gray-500">
          <p>
            ResoCollector는 <strong>명조: 워더링 웨이브(Wuthering Waves)</strong>의 비공식 팬
            사이트이며, <strong>Kuro Games</strong>와 제휴, 후원 또는 공식적인 관련이 없습니다.
          </p>

          <p>
            본 서비스에서 사용되는 게임 관련 이미지, 캐릭터, 명칭 및 기타 지식재산권은 모두 해당
            권리자(Kuro Games)에 귀속됩니다. 본 사이트는 팬 프로젝트이며, 권리자의 권리를
            존중합니다.
          </p>

          <p>저작권자의 요청이 있을 경우 관련 콘텐츠는 검토 후 즉시 수정 또는 삭제하겠습니다.</p>

          <p className="pt-2 text-gray-400">© 2026 박소연. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
