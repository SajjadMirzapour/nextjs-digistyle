import BeautyAndHealth from "@/src/ui/beauty-health";
import SliderImageBackground from "@/src/ui/swiper-image-background/index";
import Guaranty from "../../ui/guaranty-delivery/index";
import { Suspense } from "react";
import { BackgroundImageSkeleton } from "@/src/ui/skeletons/skeletons";

export default function Home() {
  return (
    <main className="mx-auto mb-10">
      <Suspense fallback={<BackgroundImageSkeleton />}>
        <SliderImageBackground />
      </Suspense>
      <div className="xl:w-[88%] w-[92%] mx-auto my-5">
        <Suspense fallback={<BackgroundImageSkeleton />}>
          <BeautyAndHealth />
          <Guaranty />
        </Suspense>
      </div>
    </main>
  );
}
