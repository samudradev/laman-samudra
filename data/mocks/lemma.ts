import { LemmaData } from "utils/lemma";

// Ini adalah senarai data olok-olok untuk bantu percepatkan pembangunan laman
// secara bebas dari pembangunan aplikasi teras samudra.

// Data olokan ini ditulis supaya mencermin beberapa ciri:
// 1. Ada nilai yang wujud dan ada yang tak wujud untuk nilai jenis `?`
// 2. Setiap nilai `[]` mempunyai panjang masing-masing dan tak terikat sesama sendiri
// 3. Ada lemma yang berkongsi cakupan yang sama
// 4. Ada lemma yang berkongsi kata_asing yang sama

const SenaraiLemma: Array<LemmaData> = [
    {
        id: 1,
        nama: "samudera",
        konsep: [{
            id: 1,
            golongan: "NAMA",
            keterangan: "Lautan yang luas",
            kata_asing: [
                {
                    kata_asing : {
                        nama: "sea",
                        bahasa: "en"
                    }
                },
                {
                    kata_asing : {
                        nama: "ocean",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "sastera",
                    }
                }
            ]
        }]
    },
    {
        id: 2,
        nama: "papan kekunci",
        konsep: [{
            id: 2,
            golongan: "NAMA",
            keterangan: "Alat yang digunakan untuk memasukkan aksara ke dalam komputer",
            kata_asing: [
                {
                    kata_asing : {
                        nama: "keyboard",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "teknologi maklumat",
                    }
                }
            ]
        }]
    },
    {
        id: 3,
        nama: "sakit",
        konsep: [{
            id: 3,
            golongan: "SIFAT",
            keterangan: "Keadaan yang tidak sihat",
            tertib: 1,
            kata_asing: [
                {
                    kata_asing : {
                        nama: "ill",
                        bahasa: "en"
                    }
                },
                {
                    kata_asing : {
                        nama: "sick",
                        bahasa: "en"
                    }
                },
                {
                    kata_asing : {
                        nama: "sore",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "kesihatan umum",
                        keterangan: "Yang berkait dengan penyakit dan rawatan"
                    }
                },
                {
                    cakupan : {
                        nama: "fisiologi",
                    }
                }
            ]
        },
        {
            id: 4,
            golongan: "SIFAT",
            keterangan: "Sejenis stimulus yang tidak menyenangkan",
            tertib: 2,
            kata_asing: [
                {
                    kata_asing : {
                        nama: "pain",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "fisiologi",
                    }
                }
            ]}
        ]
    },
    {
        id: 4,
        nama: "komputer",
        konsep: [{
            id: 5,
            golongan: "NAMA",
            keterangan: "Alat yang boleh mengira dengan sangat pantas sehinggakan ia boleh lakukan pelbagai tugas",
            kata_asing: [
                {
                    kata_asing : {
                        nama: "computer",
                        bahasa: "en"
                    }
                },
                {
                    kata_asing : {
                        nama: "laptop",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "teknologi maklumat",
                    }
                }
            ]
            } 
        ]
    },
    {
        id: 5,
        nama: "komputer riba",
        konsep: [{
            id: 5,
            golongan: "NAMA",
            keterangan: "Komputer mudah alih",
            kata_asing: [
                {
                    kata_asing : {
                        nama: "laptop",
                        bahasa: "en"
                    }
                }
            ],
            cakupan: [
                {
                    cakupan : {
                        nama: "teknologi maklumat",
                    }
                }
            ]
            } 
        ]
    }
]

export default SenaraiLemma