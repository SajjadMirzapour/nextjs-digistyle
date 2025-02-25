import { fetchImageBeauty } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function BeautyAndHealth() {

    const beautyImages = await fetchImageBeauty()
    return (
        <div className="grid  lg:grid-cols-4 grid-cols-2 gap-6">
            {beautyImages.map((el, index) =>
                <Link key={index} href={el.src}>
                    <Image className="w-full" src={el.src} alt={el.alt} width={350} height={600} />
                </Link>
            )}
        </div>
    );
}

export default BeautyAndHealth;