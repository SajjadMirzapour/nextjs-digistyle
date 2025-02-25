import AboutFooter from "./about-footer";
import MenuFooter from "./menu-footer";

function Footer() {
  return (
    <footer className="xl:w-[88%] w-[92%] mx-auto bg-white relative z-50">
      <MenuFooter />
      <AboutFooter />
    </footer>
  );
}

export default Footer;
