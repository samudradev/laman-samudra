const Header = () => (
  <footer className="bg-white px-[32px] py-[16px] flex justify-center items-center gap-4">
    <a
      href="https://github.com/Thaza-Kun/samudra"
      rel="noopener noreferrer"
      target="_blank"
    >
      Samudra
    </a>
    <hr className="h-4 w-px bg-slate-300" />
    <p>{new Date().getFullYear()}</p>
  </footer>
);

export default Header;
