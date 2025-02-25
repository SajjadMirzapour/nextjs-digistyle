import { fetchMenBackgroundImages } from "@/src/lib/data";
import MenBackgroundImages from "./men-background-images";
import MenCategory from "./men-category";
import MeenDiscunt from "./men-discunt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مردانه",
};

async function MeenShop() {
  const MenImages = await fetchMenBackgroundImages();

  return (
    <div>
      <MenBackgroundImages data={MenImages} />
      <div className="xl:w-[88%] w-[92%] mx-auto my-5">
        <MenCategory />
        <MeenDiscunt />
      </div>
    </div>
  );
}

export default MeenShop;
