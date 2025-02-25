"use client";

import { useState } from "react";
import MobileOption from "./mobile-option";
import MobileShadowFade from "./mobile-shadow-fade";
import MobileMenuHeader from "./mobile-menu-header";

function MobileHeaderWrapper({
  optionImages,
  close,
  menu,
  digiIcon,
  basket,
  search,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="md:hidden">
      <MobileMenuHeader
        setShow={setShow}
        menu={menu}
        digiIcon={digiIcon}
        basket={basket}
        search={search}
      />
      <MobileOption
        show={show}
        setShow={setShow}
        close={close}
        optionImages={optionImages}
        search={search}
      />
      <MobileShadowFade show={show} />
    </div>
  );
}

export default MobileHeaderWrapper;
