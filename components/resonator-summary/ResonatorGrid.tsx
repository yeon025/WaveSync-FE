import ResonatorCard from "./ResonatorCard";

interface Props {
  resonators: ResonatorSummaryResponse[];
}

export default function ResonatorGrid({ resonators }: Props) {
  return (
    <section className="grid grid-cols-3 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
      {resonators.map((item) => (
        <ResonatorCard key={item.resonatorName} resonator={item} />
      ))}
    </section>
  );
}
