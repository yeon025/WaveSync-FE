import Image from "next/image";

interface Props {
  icon: string;
  alt: string;
  size: number;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ icon, alt, size, onClick, className = "" }: Props) {
  return (
    <button
      type="button"
      aria-label={alt}
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center ${className}`}
    >
      <Image src={icon} alt={alt} width={size} height={size} />
    </button>
  );
}
