import Head from "next/head";

interface Props {
  tajuk?: string;
  huraian?: string;
  urlGambar?: string;
}

const tajukLalai = "";
const huraianLalai = "";
const namaLaman = "Laman Samudra";

const Meta: React.FC<Props> = ({
  tajuk = tajukLalai,
  huraian = huraianLalai,
  urlGambar = "",
}) => (
  <Head>
    {/* Tetapan Asas */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />

    {/* Informasi Asas */}
    <title>{tajuk}</title>
    <meta name="description" content={huraian} />

    {/* Open Graph */}
    <meta property="og:title" content={tajuk} />
    <meta property="og:description" content={huraian} />
    <meta property="og:image" content={urlGambar} />
    <meta property="og:site_name" content={namaLaman} />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" key="twcard" />
    <meta property="twitter:title" content={tajuk} />
    <meta property="twitter:description" content={huraian} />
    <meta property="twitter:image" content={urlGambar} />
    <meta property="twitter:site" content="@MakmalThaza" />
    <meta property="twitter:creator" content="@MakmalThaza" key="twhandle" />
  </Head>
);

export default Meta;
