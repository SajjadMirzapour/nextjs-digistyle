import Breadcrumbs from "@/src/ui/breadcrumbs/breadcrumbs";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/src/ui/skeletons/skeletons";
import MenClothesWrapper from "./men-clothes-wrapper";

async function MenShoes() {


    return (
        <div className="xl:w-[88%] w-[92%] mx-auto md:pt-40 pt-16">
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'خانه',
                        href: '/',
                        active: false,
                    },
                    {
                        label: 'مردانه',
                        href: '/men-shop',
                        active: false,
                    },
                    {
                        label: 'لباس مردانه',
                        href: '/men-shop/shoes',
                        active: true,
                    },
                ]}
            />
            <h1 className="my-4">
                لباس مردانه
            </h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <MenClothesWrapper />
            </Suspense>

        </div>);
}

export default MenShoes;