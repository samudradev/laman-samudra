
interface KataAsingChildren {    
    nama: string;
    bahasa: string;
}

export interface KataAsingProp {
    // (Sama macam `CakupanProp`)
    // Interface sebegini adalah disebabkan oleh cara API belah Python disusun. Kalau dapat selesaikan ini, nanti kita ubah.
    // {kata_asing} merangkumi senarai {kata_asing}
    /*
        {kata_asing: 
            [
                {
                    kata_asing: {
                        nama: str
                        bahasa: str
                    }
                }
            ]
        }
    */
    kata_asing: KataAsingChildren
}

export default function KataAsing(prop: {data: Array<KataAsingProp>}) {
    return (
        <>
            {prop.data.map((kata_asing)=> {
                const data = kata_asing.kata_asing
                return (
                    <>
                        <div>konsep.kata_asing.bahasa:  {data.bahasa}</div>
                        <div>konsep.kata_asing.nama:    {data.nama}</div>
                    </>
                )
            })}
        </>
    )
}