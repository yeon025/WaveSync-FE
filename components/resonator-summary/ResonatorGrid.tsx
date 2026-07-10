import ResonatorCard from "./ResonatorCard";

interface Props {
  resonators: ResonatorSummaryResponse[];
}

const resonatorGridClass = `
  [--card:90px]
  [grid-template-columns:repeat(3,var(--card))]
  md:[--card:100px]
  md:[grid-template-columns:repeat(5,var(--card))]
  lg:[--card:110px]
  lg:[grid-template-columns:repeat(7,var(--card))]
  2xl:[--card:117px]
  2xl:[grid-template-columns:repeat(8,var(--card))]
`;

export default function ResonatorGrid({ resonators }: Props) {
  return (
    <section className={`grid justify-center gap-10 ${resonatorGridClass}`}>
      {resonators.map((item) => (
        <ResonatorCard key={item.resonatorName} resonator={item} />
      ))}
    </section>
  );
}
