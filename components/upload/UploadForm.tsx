import { useId, useRef, useState } from "react";
import { createResonator } from "@/api/resonator.api";
import { validateImage } from "@/utils/validation";
import { getParticle } from "@/utils/text";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";

export default function UploadForm() {
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  // 파일 input과 연결할 고유 id 생성
  const inputId = useId();

  // 숨겨진 파일 input을 제어하기 위한 ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 사용자가 선택한 이미지 파일
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 파일 선택 창 열기
  const handleSelectImage = () => {
    fileInputRef.current?.click();
  };

  // 선택한 이미지 파일 저장
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  // 선택한 이미지 삭제
  const handleRemoveFile = () => {
    setSelectedFile(null);

    // 같은 파일을 다시 선택할 수 있도록 input 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 이미지 업로드
  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    // form 기본 제출(새로고침) 방지
    event.preventDefault();

    // 이미지가 선택되지 않은 경우
    if (!selectedFile) {
      setModal({
        isOpen: true,
        title: "알림",
        message: "이미지를 선택해주세요.",
      });
      return;
    }

    // 이미지 크기 검증
    const message = validateImage(selectedFile);
    if (message) {
      setModal({
        isOpen: true,
        title: "알림",
        message,
      });
      return;
    }

    // 업로드 API 호출
    const result = await createResonator(selectedFile);

    if (result.data == null) {
      setModal({
        isOpen: true,
        title: "등록 실패",
        message: result.message,
      });
      return;
    }

    setModal({
      isOpen: true,
      title: "등록 완료",
      message: `${result.data.resonatorName}${getParticle(result.data.resonatorName)} 등록되었습니다.`,
    });
  };

  return (
    <>
      <form onSubmit={handleUpload} className="mx-auto mt-8 max-w-xl">
        <input
          id={inputId}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />

        {/* 가운데 버튼 */}
        {!selectedFile && (
          <Button type="button" onClick={handleSelectImage} className="mx-auto">
            이미지 선택
          </Button>
        )}

        {/* 선택된 파일 */}
        {selectedFile && (
          <div className="mx-6 flex justify-between rounded-md border border-[#666] bg-[#3a3c44] px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              {/* 파일 아이콘 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                />
              </svg>

              <span className="truncate text-sm text-white">{selectedFile.name}</span>
            </div>

            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-xl font-bold text-red-400 transition-colors hover:text-red-300"
            >
              ×
            </button>
          </div>
        )}

        {/* 업로드 버튼 */}
        <Button type="submit" className="mx-auto mt-8">
          업로드
        </Button>
      </form>

      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
      />
    </>
  );
}
