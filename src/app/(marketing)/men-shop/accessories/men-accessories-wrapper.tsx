import { fetchMenAccessoriesInfo } from "@/src/lib/data";
import { ProductCard } from "@/src/ui/cards/card";

async function MenAccessoriesWrapper() {
  const menAcessoriesInfo = await fetchMenAccessoriesInfo();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-14 mt-8 mb-10 md:text-[1rem] text-[.8rem]">
      {menAcessoriesInfo.map((el, index) => (
        <ProductCard data={el} key={index} />
      ))}
    </div>
  );
}

export default MenAccessoriesWrapper;
