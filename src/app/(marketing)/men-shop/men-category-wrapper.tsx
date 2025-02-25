import { fetchMenCategory } from "@/src/lib/data";
import { CategoryCard } from "@/src/ui/cards/card";

async function MenCategoryWrapper() {

    const categorymenImage = await fetchMenCategory()

    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 md:w-[75%] md:mx-auto">
            {
                categorymenImage.map((el, index) =>
                    <CategoryCard key={index} data={el} />
                )
            }
        </div>
    );
}

export default MenCategoryWrapper;