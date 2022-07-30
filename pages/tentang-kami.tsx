import type { NextPage } from "next";
import AturanLalai from "layouts/AturanLalai";
import Lottie from "lottie-react";

import projectAnimation from "lottie/project.json";

const TentangKami: NextPage = () => {
  return (
    <AturanLalai>
      <div className="w-full max-w-screen-xl py-4 flex flex-col">
        <div className="px-8 py-8 rounded-md flex flex-col gap-8 items-center justify-center text-center leading-[8px]">
          <Lottie
            animationData={projectAnimation}
            style={{ width: 200, height: 200 }}
          />
          <h4>Projek</h4>
          <h1>Samudra</h1>
          <p className=" leading-6 mt-4 max-w-2xl">
            Projek ini adalah sebuah usahasama untuk memudahkan pencatatan
            istilah serta pengongsiannya sesama rakan sekerja atau orang awam.
            Dengan memudahkan proses ini, kita dapat menambah jumlah rujukan
            bahasa Melayu dalam talian sekali gus mempercepatkan perkembangannya
            dari segi penggunaan, penyelidikan serta pembelajarannya.
          </p>
        </div>
      </div>
    </AturanLalai>
  );
};

export default TentangKami;
