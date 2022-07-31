import { useId } from "react";
import { KonsepData } from "utils/lemma";
import Cakupan from "./Cakupan";
import KataAsing from "./KataAsing";

export interface KonsepProp {
  konsep: KonsepData;
}

const Konsep: React.FC<KonsepProp> = ({ konsep }) => {
  const compId = useId();
  return (
    <div id={`konsep-${compId}`}>
      <div>golongan = {konsep.golongan}</div>
      <div>konsep = {konsep.keterangan}</div>
      {konsep.cakupan &&
        konsep.cakupan.map((cakup) => (
          <Cakupan cakupan={cakup} key={`cakupan-${cakup.nama}`} />
        ))}
      {konsep.kata_asing &&
        konsep.kata_asing.map((kata) => (
          <KataAsing kataAsing={kata} key={`kataAsing-${kata.nama}`} />
        ))}
    </div>
  );
};

export default Konsep;
