interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

export default function LoadingModal({
  isOpen,
  message = "공명자를 등록하는 중입니다...",
}: LoadingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex w-[320px] flex-col items-center rounded-xl bg-[#1E1E1E] px-8 py-8 shadow-xl">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-500 border-t-blue-500" />

        <p className="mt-2 text-center text-sm text-gray-300">{message}</p>
      </div>
    </div>
  );
}
