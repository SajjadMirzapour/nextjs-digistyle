import MobileHeader from "../mobile-header";
import MenuHeader from "./menu-header";
import TopHeader from "./top-header";

function Header() {
  return (
    <header className="md:absolute block w-full z-10">
      <div className="md:p-0 md:w-full py-3 w-[92%] mx-auto">
        <TopHeader />
        <MenuHeader />
      </div>
      <MobileHeader />
    </header>
  );
}

export default Header;
