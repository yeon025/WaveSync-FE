import ResonatorCard from "./ResonatorCard";

interface Props {
  resonators: ResonatorSummary[];
};

export default function ResonatorGrid({ resonators }: Props) {
  return (
    <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-10">
      {resonators.map((item) => (
        <ResonatorCard key={item.resonatorName} resonator={item} />
      ))}
    </section>
  );
}