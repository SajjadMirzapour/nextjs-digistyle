import { Suspense } from "react";
import MenCategoryWrapper from "./men-category-wrapper";
import { CategoryCardSkeleton } from "@/src/ui/skeletons/skeletons";


async function MenCategory() {

    return (
        <div className="my-8">
            <h1 className="text-center text-[2rem] font-bold my-2"> دسته بندی ها</h1>
            <Suspense fallback={<CategoryCardSkeleton />}>
                <MenCategoryWrapper />
            </Suspense>
        </div>
    );
}

export default MenCategory;