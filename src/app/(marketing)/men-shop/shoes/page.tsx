import Breadcrumbs from "@/src/ui/breadcrumbs/breadcrumbs";
import { Suspense } from "react";
import MenShoesWrapper from "./men-shoes-wrapper";
import { ProductCardSkeleton } from "@/src/ui/skeletons/skeletons";

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
                        label: 'کفش مردانه',
                        href: '/men-shop/shoes',
                        active: true,
                    },
                ]}
            />
            <h1 className="my-4">
                کفش مردانه
            </h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <MenShoesWrapper />
            </Suspense>

        </div>);
}

export default MenShoes;