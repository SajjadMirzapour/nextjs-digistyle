import { fetchDigiIcon, fetchHeaderIcons } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function TopHeader() {

    const headerIcons = await fetchHeaderIcons()
    const menu = headerIcons.find((el => el.name === "menu"))
    const digiIcon = headerIcons.find((el => el.name === "digi-icon"))
    const basket = headerIcons.find((el => el.name === "basket"))
    const search = headerIcons.find((el => el.name === "search"))

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between hidden mx-8 mb-5">
                <Link className="w-[200px]" href='/login'>وارد شوید</Link>
                <h1 className="w-[200px] text-[36px] font-bold text-center">DIGI STYLE</h1>
                <div className="w-[230px] before:content-['\f109'] before:text-[1rem] after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:opacity-50">
                    <input className="w-4/5 bg-transparent text-[.8rem] font-bold text-black p-1 pr-5 border-none outline-none" type="text" placeholder="جستجوی محصولات از ۲۳۵۰ برند" />
                </div>
            </div>
            <div className="md:hidden">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <button className="ml-4">
                            <Image className="w-[24px] h-[24px]" width={50} height={50} src={menu.src} alt={menu.alt} />
                        </button>
                        <Link href={digiIcon.link}>
                            <Image className="w-[150px] h-[40px]" width={50} height={50} src={digiIcon.src} alt={digiIcon.alt} />
                        </Link>
                    </div>
                    <button>
                        <Image className="w-[24px] h-[24px]" width={50} height={50} src={basket.src} alt={basket.alt} />
                    </button>
                </div>
                <div className="flex items-center">
                    <Image className="absolute right-[5%] w-[24px] h-[24px]" width={50} height={50} src={search.src} alt={search.alt} />
                    <input className="w-full p-2 pr-10 rounded-md bg-[#f5f5f5] text-[#7b7b7b] sm:text-[1rem] text-[.8rem]" type="search" placeholder="اینجا استایل‌گردی کنید..." />
                </div>
            </div>
        </div>

    );
}

export default TopHeader;