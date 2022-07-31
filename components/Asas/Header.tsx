import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Navigasi = {
  id: string;
  label: string;
  pautan: string;
  ikon?: React.ReactNode;
};

const navigasi: Navigasi[] = [
  {
    id: "halaman",
    label: "Halaman",
    pautan: "/",
  },
  {
    id: "tentang-kami",
    label: "Tentang Kami",
    pautan: "/tentang-kami",
  },
  {
    id: "blog",
    label: "Blog",
    pautan: "/blog",
  },
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <header className="bg-white px-[32px] py-[32px] flex justify-center">
      <nav className="w-full flex flex-row gap-8 items-center justify-center max-w-screen-xl">
        <Link href="/">
          <a>
            <Image
              src="/logo/logo-samudra.webp"
              alt="Logo Samudra"
              width={120}
              height={40}
            />
          </a>
        </Link>
        <div className="flex-1 flex flex-row gap-8 justify-end">
          {navigasi.map((nav) => (
            <Link href={nav.pautan} key={nav.id}>
              <a
                className={`p-2 font-bold border-b-4 transition-colors rounded-b
                  hover:text-primer-hover hover:border-primer-hover
                  focus:text-primer-hover focus:border-primer-hover
                  ${
                    currentRoute === nav.pautan
                      ? "border-primer"
                      : "border-transparent text-primer"
                  }
                `}
              >
                {nav.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
