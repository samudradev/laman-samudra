import { useId } from "react";
import { CakupanData } from "utils/lemma";

export interface CakupanProp {
  cakupan: CakupanData;
}

const Cakupan: React.FC<CakupanProp> = ({ cakupan }) => {
  const compId = useId();
  return (
    <div id={`cakupan-${compId}`}>
      <div>konsep.cakupan: {cakupan.nama}</div>
      {cakupan.keterangan && (
        <div>konsep.cakupan.keterangan: {cakupan.keterangan}</div>
      )}
    </div>
  );
};

export default Cakupan;
