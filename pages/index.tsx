import type { NextPage } from "next";
import AturanLalai from "layouts/AturanLalai";
import Lottie from "lottie-react";
import Input from "components/Borang/Input";
import { useFormik } from "formik";

import communityAnimation from "lottie/community.json";
import Amaran from "components/Selingan/Amaran";

const Halaman: NextPage = () => {
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

            <Amaran>
                Halaman ini masih dalam pembangunan dan di peringkat alfa, maka
                beberapa fungsi tidak dapat digunakan buat masa ini. Terima
                kasih kerana memahami.
            </Amaran>
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

export default Halaman;
