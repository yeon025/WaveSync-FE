interface Props {
  analysis: string;
}

export default function EchoAnalysis({ analysis }: Props) {
  return (
    <section className="rounded-xl border-2 border-[#848484] p-5">
      <h2 className="text-[clamp(16px,1.5vw,20px)] font-bold">에코 종합 분석</h2>

      <p className="mt-3 text-[clamp(13px,1.1vw,16px)] leading-7 break-keep whitespace-pre-line text-white/80">
        {analysis}
      </p>
    </section>
  );
}
