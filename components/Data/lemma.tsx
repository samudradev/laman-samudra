import { useId } from "react";
import { LemmaData } from "utils/lemma";
import Konsep from "./Konsep";

interface LemmaProps {
  lemma: LemmaData;
}

const Lemma: React.FC<LemmaProps> = ({ lemma }) => {
  const compId = useId();
  return (
    <div id={`lemma-${compId}`}>
      <div>lemma = {lemma.nama}</div>
      {lemma.konsep.map((kons) => (
        <Konsep konsep={kons} key={`konsep-${kons.id}`} />
      ))}
    </div>
  );
};

export default Lemma;
