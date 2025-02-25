import Breadcrumbs from "@/src/ui/breadcrumbs/breadcrumbs";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/src/ui/skeletons/skeletons";
import WomenAccesoriesWrapper from "./women-accessories-wrapper";

async function WomenAceesories() {


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
                        label: 'اکسسوری زنانه',
                        href: '/women-shop/accessories',
                        active: true,
                    },
                ]}
            />
            <h1 className="my-4">
                اکسسوری زنانه
            </h1>
            <Suspense fallback={<ProductCardSkeleton />}>
                <WomenAccesoriesWrapper />
            </Suspense>

        </div>);
}

export default WomenAceesories;