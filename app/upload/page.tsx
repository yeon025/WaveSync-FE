"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import UploadForm from "@/components/upload/UploadForm";

export default function Upload() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-6 md:px-8">
      {/* 닫기 버튼 */}
      <button
        type="button"
        aria-label="닫기"
        onClick={() => router.push("/")}
        className="absolute right-6 top-6 flex h-6 w-6 cursor-pointer items-center justify-center md:right-8 md:top-8"
      >
        <Image src="/close.svg" alt="닫기" width={24} height={24} />
      </button>

      {/* 가운데 정렬되는 콘텐츠 */}
      <div className="w-full max-w-3xl">
        {/* 제목 */}
        <h1 className="text-center text-base leading-relaxed md:text-lg lg:text-xl">
          Wuthering Waves Official 디스코드 서버의
          <br />
          #wuwa-bot-command 채널에서 /create를 사용해
          <br />
          생성된 공명자 프로필을 업로드해주세요.
        </h1>

        {/* 예시 이미지 */}
        <section
          aria-label="프로필 예시 이미지"
          className="relative mx-auto mt-6 aspect-[819/461] w-full max-w-2xl"
        >
          <Image
            src="/images/example/profile.png"
            alt="프로필 예시"
            fill
            priority
            className="rounded-lg object-contain"
          />
        </section>

        <UploadForm />
      </div>
    </main>
  );
}