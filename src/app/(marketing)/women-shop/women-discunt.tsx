import { fetchWomenDiscuntImages } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function WomenDiscunt() {

    const discountImages = await fetchWomenDiscuntImages()

    return (
        <div className="grid grid-cols-2 gap-3">
            {discountImages.map((el, index) =>
                <Link key={index} href={el.link}>
                    <Image width={700} height={400} src={el.src} alt={el.alt} />
                </Link>
            )}
        </div>
    );
}

export default WomenDiscunt;