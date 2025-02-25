import Breadcrumbs from "@/src/ui/breadcrumbs/breadcrumbs";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/src/ui/skeletons/skeletons";
import WomenShoesWrapper from "./women-shoes-wrapper";

async function WomenShoes() {

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
                        label: 'زنانه',
                        href: '/women-shop',
                        active: false,
                    },
                    {
                        label: 'کفش زنانه',
                        href: '/women-shop/shoes',
                        active: true,
                    },
                ]}
            />
            <h1 className="my-4">
                کفش زنانه
            </h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <WomenShoesWrapper />
            </Suspense>
        </div>);
}

export default WomenShoes;