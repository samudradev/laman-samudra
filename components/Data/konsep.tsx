import Cakupan, {CakupanProp} from "./cakupan";
import KataAsing, {KataAsingProp} from "./kata_asing";


export interface KonsepProp {
    id: number;
    golongan: string;
    keterangan: string;
    tertib: number;
    cakupan?: Array<CakupanProp>;
    kata_asing?: Array<KataAsingProp>;
}

export default function Konsep(props: {data: Array<KonsepProp>}) {
    return (
    <>
        {props.data.map((konsep) => {
            return (
                <>
                <div>golongan   = {konsep.golongan}</div>
                <div>konsep     = {konsep.keterangan}</div>
                {konsep.cakupan && <Cakupan data={konsep.cakupan}/>}
                {konsep.kata_asing && <KataAsing data={konsep.kata_asing}/>}
                </>
            )
        })}
    </>
    )
}