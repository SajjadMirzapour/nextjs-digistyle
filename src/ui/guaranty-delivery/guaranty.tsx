import { fetchGuarantyIcons } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function GuarantyIcons() {

    const icons = await fetchGuarantyIcons()

    return (
        <section className="md:flex grid grid-cols-1 items-center justify-between my-10">
            {icons.map((el, index) =>
                <Link className="md:text-center border-[#e5e7eb] border-[1px] p-2 mb-2" key={index} href={el.link}>
                    <Image className="w-[200px] h-[200px] mb-3 mx-auto" src={el.src} alt={el.alt} width={0} height={0} />
                    <span className="flex justify-center">{el.comment}</span>
                </Link>
            )}
        </section>);
}

export default GuarantyIcons;