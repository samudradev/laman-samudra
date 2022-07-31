export type CakupanData = {
  nama: string;
  keterangan?: string;
};

export type KataAsingData = {
  nama: string;
  bahasa: string;
};

export type KonsepData = {
  id: number;
  golongan: string;
  keterangan: string;
  tertib: number;
  cakupan?: CakupanData[];
  kata_asing?: KataAsingData[];
};

export type LemmaData = {
  id: number;
  nama: string;
  konsep: KonsepData[];
};
