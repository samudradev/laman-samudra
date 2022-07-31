interface CakupanChildren {
    nama: string;
    keterangan?: string;
}

export interface CakupanProp {
    // Interface sebegini adalah disebabkan oleh cara API belah Python disusun. Kalau dapat selesaikan ini, nanti kita ubah.
    // {cakupan} merangkumi senarai {cakupan}
    /*
        {cakupan: 
            [
                {
                    cakupan: {
                        nama: str
                        keterangan: str
                    }
                }
            ]
        }
    */
    cakupan: CakupanChildren
}

export default function Cakupan(props: {data: Array<CakupanProp>}) {
    return (
        <>
            {props.data.map((cakupan) => {
                const data = cakupan.cakupan
                return (
                    <>
                    <div>konsep.cakupan:    {data.nama}</div>
                    {data.keterangan && <div>konsep.cakupan.keterangan: {data.keterangan}</div>}
                    </>
                )
            })}
        </>
    )
}