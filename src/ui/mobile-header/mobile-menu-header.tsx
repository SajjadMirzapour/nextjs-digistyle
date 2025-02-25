'use client'

import Image from "next/image";
import Link from "next/link";

function MobileMenuHeader({ setShow, menu, digiIcon, basket, search }) {

    const handleShowOptionHeader = () => {
        setShow(true)
    }

    return (
        <div className="w-[92%] mx-auto relative z-30">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <button className="ml-4" onClick={handleShowOptionHeader}>
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
                <Image className="absolute right-[1%] w-[24px] h-[24px]" width={50} height={50} src={search.src} alt={search.alt} />
                <input className="w-full p-2 pr-8 rounded-md bg-[#f5f5f5] text-[#7b7b7b] sm:text-[1rem] text-[.8rem]" type="text" placeholder="اینجا استایل‌گردی کنید..." />
            </div>
        </div>
    );
}

export default MobileMenuHeader;