'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function MenuHeader() {

    const pathName = usePathname()

    return (
        <div className="lg:w-[60%] w-4/5 mx-auto">
            <ul className="md:flex md:items-center md:justify-between text-[.8rem] hidden">
                <li className="font-semibold">
                    <Link className={pathName === "/women-shop" ? "text-[red]" : ""} href="/women-shop">
                        زنانه
                    </Link>
                </li>
                <li className="font-semibold">
                    <Link className={pathName === "/men-shop" ? "text-[red]" : ""} href="/men-shop">
                        مردانه
                    </Link>
                </li>
                <li className="font-semibold">بچگانه</li>
                <li className="font-semibold">زیبایی و سلامت</li>
                <li className="font-semibold">ورزش و سفر</li>
                <li className="font-semibold">
                    <Link className={pathName === "/" ? "text-[red]" : ""} href="/">
                        حراج استایل
                    </Link>
                </li>
                <li className="font-semibold">خانه ساعت</li>
                <li className="font-semibold">خانه طلا</li>
                <li className="font-semibold">برند ها</li>
                <li className="font-semibold">کارت هدیه</li>
            </ul>
        </div >);
}

export default MenuHeader;