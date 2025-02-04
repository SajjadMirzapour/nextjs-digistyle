import { fetchFooterIcons } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function MenuFooter() {

    const icons = await fetchFooterIcons()
    const digiIcon = icons.find((el => el.name === "digi-icon"))
    const twitterIcon = icons.find((el => el.name === "twitter"))
    const telegramIcon = icons.find((el => el.name === "telegram"))
    const instagramIcon = icons.find((el => el.name === "instagram"))

    return (
        <div className="my-3">
            <div className="flex items-center mb-4">
                <Image className="my-3 ml-2" src={digiIcon.src} alt={digiIcon.alt} width={200} height={150} />
                <span className="flex w-full h-1 border-b-[1px] border-solid"></span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-8 text-[#81858b]">
                <div className="mb-3">
                    <ul>
                        <h3 className="mb-2 text-black font-semibold">خرید</h3>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                زنانه
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                مردانه
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                بچگانه
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                زیبایی و سلامت
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                ورزش و سفر
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                کارت هدیه
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-3">
                    <ul>
                        <h3 className="mb-2 text-black font-semibold">خدمات مشتریان</h3>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                پاسخ به پرسش‌های متداول
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                رویه‌های بازگرداندن کالا
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                شرایط استفاده
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                حریم خصوصی
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-3">
                    <ul>
                        <h3 className="mb-2 text-black font-semibold">اطلاعات دیجی‌ استایل</h3>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                درباره دیجی‌استایل
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                تماس با دیجی‌استایل
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link rel="stylesheet" href={'/'} >
                                همکاری با دیجی‌استایل
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-3">
                    <ul>
                        <h3 className="mb-8 text-black font-semibold">
                            تلفن پشتیبانی : ۶۱۹۳۰۳۰۰-۰۲۱
                        </h3>
                        <li className="mb-8">
                            <div className="flex items-center justify-between">
                                <Link rel="stylesheet" href={twitterIcon.link} >
                                    <Image src={twitterIcon.src} alt={twitterIcon.alt} width={20} height={20} />
                                </Link>
                                <Link rel="stylesheet" href={instagramIcon.link} >
                                    <Image src={instagramIcon.src} alt={instagramIcon.alt} width={20} height={20} />
                                </Link>
                                <Link rel="stylesheet" href={telegramIcon.link} >
                                    <Image src={telegramIcon.src} alt={telegramIcon.alt} width={20} height={20} />
                                </Link>
                            </div>
                        </li>
                        <li className="mb-4 text-black font-semibold">ثبت‌نام در خبرنامه دیجی‌استایل</li>
                        <li className="mb-4">
                            <form className="flex items-center" action="">
                                <input className="w-[250px] h-[40px] p-2 border-[1px] border-[#d9d9d] text-[.8rem] outline-none" type="text" name="" id="" placeholder="ایمیل خود را وارد کنید" />
                                <button className="h-[40px] p-2 border-[1px] border-[#d9d9d9] bg-[#d9d9d9]" type="submit">click</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default MenuFooter;