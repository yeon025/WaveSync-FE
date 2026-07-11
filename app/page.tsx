import { getResonators } from "@/api/resonator.api";
import WaveSyncLogo from "@/components/common/Logo";
import ResonatorGrid from "@/components/resonator-summary/ResonatorGrid";
import Button from "@/components/common/Button";
import Link from "next/link";
import IconButton from "@/components/common/IconButton";

export default async function Page() {
  const resonators = await getResonators();

  return (
    <main className="mx-auto px-6 py-10 lg:px-8">
      {/* 로고 */}
      <WaveSyncLogo imageSize={100} direction="row" textSize="text-4xl" fontSize="font-normal" />

      <div className="my-8 flex items-center justify-end gap-8">
        {/* 삭제 버튼 */}
        <IconButton
          icon="/trash-bin.svg"
          alt="삭제"
          size={38}
          // onClick={handleDelete}
        />

        {/* 업로드 페이지로 이동 버튼 */}
        <Link href="/upload">
          <Button>공명자 정보 가져오기</Button>
        </Link>
      </div>

      {/* 카드 그리드 */}
      <ResonatorGrid resonators={resonators} />
    </main>
  );
}
