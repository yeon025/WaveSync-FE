import { getResonators } from "@/api/resonator.api";
import DeleteResonatorContainer from "@/components/resonator-summary/DeleteResonatorContainer";

export default async function Page() {
  const resonators = await getResonators();

  return <DeleteResonatorContainer resonators={resonators} />;
}
