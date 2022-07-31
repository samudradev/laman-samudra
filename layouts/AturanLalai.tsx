/**
 * @description Komponen ini (sahaja) tidak boleh memproses `className` Tailwind
 * kerana komponen ini dirender sebelum penghasilan kelas Tailwind 😅.
 * Maka, perlu guna CSS-in-JS
 */

import Header from "components/Asas/Header";
import Footer from "components/Asas/Footer";
import Meta from "components/Meta";

interface Props {
  children: React.ReactNode;
  tajuk?: string;
  huraian?: string;
}

const AturanLalai: React.FC<Props> = ({ children, tajuk, huraian }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Meta
      tajuk={tajuk || "Laman Samudra"}
      huraian={huraian || "Sebuah sesawang pengistilahan dan pengongsian."}
    />
    <Header />

    <main
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </main>

    <Footer />
  </div>
);

export default AturanLalai;
