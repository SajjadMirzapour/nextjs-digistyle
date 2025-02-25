import { Suspense } from "react";
import WomenCategoryWrapper from "./women-category-wrapper";
import { CategoryCardSkeleton } from "@/src/ui/skeletons/skeletons";


async function WomenCategory() {


    return (
        <div className="my-8">
            <h1 className="text-center text-[2rem] font-bold my-2"> دسته بندی ها</h1>
            <Suspense fallback={<CategoryCardSkeleton />}>
                <WomenCategoryWrapper />
            </Suspense>
        </div>
    );
}

export default WomenCategory;