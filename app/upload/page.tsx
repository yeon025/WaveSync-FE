"use client";

import Link from "next/link";
import Image from "next/image";
import UploadForm from "@/components/upload/UploadForm";
import IconButton from "@/components/common/IconButton";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {/* 닫기 버튼 */}
      <Link href="/" className="absolute top-6 right-6" aria-label="닫기">
        <IconButton icon="/close.svg" alt="닫기" size={26} />
      </Link>

      {/* 가운데 정렬되는 콘텐츠 */}
      <div className="w-full">
        {/* 제목 */}
        <h1 className="text-center text-base leading-relaxed md:text-xl">
          Wuthering Waves Official 디스코드 서버의
          <br />
          #wuwa-bot-command 채널에서 /create를 사용해
          <br />
          생성된 공명자 프로필을 업로드해주세요.
        </h1>

        {/* 예시 이미지 */}
        <section className="mx-6 mt-6">
          <Image
            src="/images/profile.png"
            alt="프로필 예시"
            width={1638}
            height={922}
            priority
            className="mx-auto h-auto w-full max-w-2xl rounded-lg"
          />
        </section>

        <UploadForm />
      </div>
    </main>
  );
}
