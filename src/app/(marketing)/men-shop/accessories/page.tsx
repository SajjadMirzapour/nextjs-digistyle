import Breadcrumbs from "@/src/ui/breadcrumbs/breadcrumbs";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/src/ui/skeletons/skeletons";
import MenAccessoriesWrapper from "./men-accessories-wrapper";

const BREADCRUMB = [
  {
    label: "خانه",
    href: "/",
    active: false,
  },
  {
    label: "مردانه",
    href: "/men-shop",
    active: false,
  },
  {
    label: "اکسسوری مردانه",
    href: "/men-shop/accessories",
    active: true,
  },
];

async function MenAcessories() {
  return (
    <div className="xl:w-[88%] w-[92%] mx-auto md:pt-40 pt-16">
      <Breadcrumbs breadcrumbs={BREADCRUMB} />
      <h1 className="my-4">اکسسوری مردانه</h1>
      <Suspense fallback={<ProductCardSkeleton />}>
        <MenAccessoriesWrapper />
      </Suspense>
    </div>
  );
}

export default MenAcessories;
