import { fetchWomenCategory } from "@/src/lib/data";
import { CategoryCard } from "@/src/ui/cards/card";

async function WomenCategoryWrapper() {

    const categoryWomenImage = await fetchWomenCategory()

    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:w-[75%] md:mx-auto">
            {
                categoryWomenImage.map((el, index) =>
                    <CategoryCard key={index} data={el} />
                )
            }
        </div>
    );
}

export default WomenCategoryWrapper;