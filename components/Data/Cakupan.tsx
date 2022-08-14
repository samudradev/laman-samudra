import { useId } from "react";
import { CakupanData } from "utils/lemma";

export interface CakupanProp {
  cakupan: CakupanData;
}

const Cakupan: React.FC<CakupanProp> = ({ cakupan }) => {
  const compId = useId();
  return (
    <div id={`cakupan-${compId}`}>
      <div>konsep.cakupan: {cakupan.cakupan.nama}</div>
      {cakupan.cakupan.keterangan && (
        <div>konsep.cakupan.keterangan: {cakupan.cakupan.keterangan}</div>
      )}
    </div>
  );
};

export default Cakupan;
