const MAX_IMAGE_SIZE = 500 * 1024;

export function validateImage(file: File): string | null {
  if (file.size > MAX_IMAGE_SIZE) {
    return "이미지 크기는 500KB 이하만 업로드할 수 있습니다.\n 다른 이미지를 선택해주세요.";
  }

  if (!file.type.startsWith("image/")) {
    return "이미지 파일만 업로드할 수 있습니다.";
  }

  return null;
}
