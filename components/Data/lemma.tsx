import Konsep, {KonsepProp} from './konsep' 

export interface LemmaProp {
    id: number;
    nama: string;
    konsep: Array<KonsepProp>;
}


export default function Lemma(props: {data: Array<LemmaProp>}) {
    return (
        <>
            {props.data.map((lemma) => {
                return (
                    <>
                    <div>lemma = {lemma.nama}</div>
                    <Konsep data={lemma.konsep}/>
                    </>
                )
            })}
        </>
    )
}