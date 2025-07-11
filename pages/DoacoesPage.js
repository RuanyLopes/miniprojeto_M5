import DoacoesSection from "../components/DoacoesSection";
import { locaisDeDoacao } from "../miniprojetom4/data/doacoes";

export default function DoacoesPage() {
  return (
    <div>
      <DoacoesSection doacoes={locaisDeDoacao} />
    </div>
  );
}
