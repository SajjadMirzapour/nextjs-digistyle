import { fetchwomenBackgroundImages } from "@/src/lib/data";
import WomenBackgroundImages from "./women-background-images";
import WomenCategory from "./women-category";
import WomenDiscunt from "./women-discunt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "زنانه",
};

async function WomenShop() {
  const WomenImages = await fetchwomenBackgroundImages();

  return (
    <div>
      <WomenBackgroundImages data={WomenImages} />
      <div className="xl:w-[88%] w-[92%] mx-auto my-5">
        <WomenCategory />
        <WomenDiscunt />
      </div>
    </div>
  );
}

export default WomenShop;
