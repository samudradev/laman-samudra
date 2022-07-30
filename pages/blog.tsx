import type { NextPage } from "next";
import AturanLalai from "layouts/AturanLalai";

const Blog: NextPage = () => {
  return (
    <AturanLalai>
      <div className="w-full max-w-screen-xl py-4 flex flex-col">
        <div className="px-8 py-8 rounded-md flex flex-col gap-8 items-center justify-center text-center leading-[8px]">
          <h4>Blog</h4>
          <h1>Samudra</h1>
        </div>
      </div>
    </AturanLalai>
  );
};

export default Blog;
