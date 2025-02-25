import Image from "next/image";
import Link from "next/link";

export function ProductCard({ data }) {
    return (
        <Link href={data.link} className="rounded-sm hover:border-black delay-100">
            <div className="bg-[#F7F7F7] md:px-4 md:py-10 px-2 py-5 mb-3">
                <Image className="mb-2" width={300} height={300} src={data.src} alt={data.alt} />
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="">{data.name}</h2>
                    <div className="flex items-center">
                        <span>{data.rate}</span>
                        <Image width={25} height={25} src='/icons/star-golden.png' alt="rate" />
                    </div>
                </div>
                <div>
                    <span>{data.price} تومان</span>
                    <span></span>
                </div>
            </div>
        </Link>
    );
}

export function CategoryCard({ data }) {
    return (
        <Link className="md:border-[1px] md:rounded-sm md:border-[#F5F5F5]  md:p-2 my-4 hover:border-black hover:bg-[rgb(245,245,245)] duration-100" href={data.link}>
            <Image className="md:block hidden mx-auto" width={200} height={200} src={data.src} alt={data.alt} />
            <div className="bg-[#F2FBFB] p-1">
                <Image className="md:hidden rounded-full mx-auto" width={130} height={130} src={data.mobile_src} alt={data.alt} />
            </div>
            <span className="flex justify-center mt-2 xl:text-[1.2rem] md:text-[1rem] text-[.8rem]">{data?.comment}</span>
        </Link>
    );
}
