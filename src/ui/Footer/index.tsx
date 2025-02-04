import AboutFooter from "./aboutFooter";
import MenuFooter from "./menuFooter";

function Footer() {
    return (
        <footer className="xl:w-[88%] w-[92%] mx-auto">
            <MenuFooter />
            <AboutFooter />
        </footer>
    );
}

export default Footer;