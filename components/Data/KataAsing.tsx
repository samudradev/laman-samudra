import { useId } from "react";
import { KataAsingData } from "utils/lemma";

export interface KataAsingProp {
  kataAsing: KataAsingData;
}

const KataAsing: React.FC<KataAsingProp> = ({ kataAsing }) => {
  const compId = useId();
  return (
    <div id={`kataAsing-${compId}`}>
      <div>konsep.kata_asing.bahasa: {kataAsing.kata_asing.bahasa}</div>
      <div>konsep.kata_asing.nama: {kataAsing.kata_asing.nama}</div>
    </div>
  );
};

export default KataAsing;
