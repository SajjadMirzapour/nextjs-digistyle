import { fetchMenDiscuntImages } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function MeenDiscunt() {

    const discountMenImages = await fetchMenDiscuntImages()

    return (
        <div className="grid grid-cols-2 gap-3">
            {discountMenImages.map((el, index) =>
                <Link key={index} href={el.link}>
                    <Image width={700} height={400} src={el.src} alt={el.alt} />
                </Link>
            )}
        </div>
    );
}

export default MeenDiscunt;