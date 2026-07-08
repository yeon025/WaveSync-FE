import { useId, useRef, useState } from "react";
import Button from "@/components/common/Button";

export default function UploadForm() {
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
  const handleUpload = (event: React.FormEvent<HTMLFormElement>) => {
    // form 기본 제출(새로고침) 방지
    event.preventDefault();

    // 이미지가 선택되지 않은 경우
    if (!selectedFile) {
      alert("이미지를 선택해주세요.");
      return;
    }

    // 업로드 API 호출
    console.log(selectedFile);
  };

  return (
    <form onSubmit={handleUpload} className="mx-auto mt-8 w-full max-w-5xl">
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
        <div className="flex justify-center">
          <Button type="button" onClick={handleSelectImage}>
            이미지 선택
          </Button>
        </div>
      )}

      {/* 선택된 파일 */}
      {selectedFile && (
        <div className="mx-auto mt-8 max-w-xl">
          <div className="flex items-center justify-between rounded-md border border-[#666] bg-[#3a3c44] px-4 py-3">
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
              className="ml-4 text-xl font-bold text-red-400 transition-colors hover:text-red-300"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 업로드 버튼 */}
      <Button type="submit" className="mx-auto mt-8 max-w-md">
        업로드
      </Button>
    </form>
  );
}
