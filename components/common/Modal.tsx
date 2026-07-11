"use client";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function Modal({ isOpen, title, message, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
        <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>

        <p className="mb-6 text-sm whitespace-pre-line text-gray-300">{message}</p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
