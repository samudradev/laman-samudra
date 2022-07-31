import type { NextPage } from "next";
import AturanLalai from "layouts/AturanLalai";
import Lottie from "lottie-react";
import Input from "components/Borang/Input";
import { useFormik } from "formik";

import communityAnimation from "lottie/community.json";
import { array } from "yup";

const Halaman: NextPage = ({data}) => {
  const borangCarian = useFormik({
    initialValues: {
      carian: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <AturanLalai>
      <div className="w-full max-w-screen-xl py-4 flex flex-col">
        <div className="px-8 py-8 rounded-md flex flex-row gap-8 justify-between">
          <div className="flex-1 max-w-lg">
            <p className="font-bold text-xl">Selamat datang ke</p>
            <h1>Laman Samudra</h1>
            <p>
              Sebuah platform untuk pencarian pengistilahan dan perkongsian,
              yang menggunakan enjin Samudra.
            </p>

            <form onSubmit={borangCarian.handleSubmit} className="my-4">
              <Input
                label="Carian"
                name="carian"
                value={borangCarian.values.carian}
                onChange={borangCarian.handleChange}
              />
            </form>
            {/* TODO: Extract each Object to its own rendering method */}
            {/* Returns all lemma */}
            {data.map((data) => 
              {return <div><div>{data.id}</div>
                {data.konsep.map((konsep) => {return <div>{konsep.keterangan}</div>})}
              </div>}
            )}
            <div className="bg-amaran text-amaran-tulisan px-4 py-2 rounded border border-amaran-tulisan">
              <p>
                Halaman ini masih dalam pembangunan dan di peringkat alfa, maka
                beberapa fungsi tidak dapat digunakan buat masa ini. Terima
                kasih kerana memahami.
              </p>
            </div>
          </div>
          <div>
            <Lottie
              animationData={communityAnimation}
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </div>
    </AturanLalai>
  );
};

export async function getServerSideProps() {
  // Load initial data
  const res = await fetch(`http:/localhost:8000/lemma/?limit=10`)
  const data: Array<Object> = await res.json()

  return {props: {data}}
}

export default Halaman;
