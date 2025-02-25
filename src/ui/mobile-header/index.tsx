import { fetchHeaderIcons, fetchOptionImages } from "@/src/lib/data";
import MobileHeaderWrapper from "./mobile-header-wrapper";

async function MobileHeader() {
  const optionImages = await fetchOptionImages();
  const headerIcons = await fetchHeaderIcons();
  const menu = headerIcons.find((el) => el.name === "menu");
  const digiIcon = headerIcons.find((el) => el.name === "digi-icon");
  const basket = headerIcons.find((el) => el.name === "basket");
  const search = headerIcons.find((el) => el.name === "search");
  const close = headerIcons.find((el) => el.name === "close");

  return (
    <MobileHeaderWrapper
      optionImages={optionImages}
      close={close}
      menu={menu}
      digiIcon={digiIcon}
      basket={basket}
      search={search}
    />
  );
}

export default MobileHeader;
