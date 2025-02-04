import MenuHeader from "./menuHeader";
import TopHeader from "./topHeader";

function Header() {
    return (
        <header className="md:absolute block md:p-6 py-3 z-10 w-[92%] mx-auto">
            <TopHeader />
            <MenuHeader />
        </header>
    );
}

export default Header;