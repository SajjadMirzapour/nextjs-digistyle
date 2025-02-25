import { fetchFooterIcons } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";

async function AboutFooter() {

    const icons = await fetchFooterIcons()
    const googleplay = icons.find((el => el.name === "googleplay"))
    const bazar = icons.find((el => el.name === "bazar"))
    const myket = icons.find((el => el.name === "myket"))
    const sibapp = icons.find((el => el.name === "sibapp"))
    const enamad = icons.find((el => el.name === "e-namad"))
    const Enamd = icons.find((el => el.name === "e-namad2"))
    const majazi = icons.find((el => el.name === "majazi"))

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  mb-4 border-b-[#d9d9d9] border-b-[1px] pb-2">
                <Link className="lg:col-span-2 col-span-1 font-semibold ms:mb-0 mb-4" rel="stylesheet" href="/download" >
                    دانلود اپلیکیشن دیجی‌استایل
                </Link>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-2 gap-4 w-full">
                    <Link rel="stylesheet" href={googleplay.link} >
                        <Image src={googleplay.src} alt={googleplay.alt} width={150} height={100} />
                    </Link>
                    <Link rel="stylesheet" href={bazar.link} >
                        <Image src={bazar.src} alt={bazar.alt} width={150} height={100} />
                    </Link>
                    <Link rel="stylesheet" href={myket.link} >
                        <Image src={myket.src} alt={myket.alt} width={150} height={100} />
                    </Link>
                    <Link rel="stylesheet" href={sibapp.link} >
                        <Image src={sibapp.src} alt={sibapp.alt} width={150} height={100} />
                    </Link>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-8 gap-16 mb-3 pb-2 border-b border-[#d9d9d9]">
                <div className="lg:col-span-2" >
                    <h2 className=" font-semibold mb-2">فروشگاه اینترنتی مد و لباس دیجی‌استایل</h2>
                    <p className="text-[#81858b]">
                        دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <Link className="p-1" rel="stylesheet" href={enamad.link} >
                        <Image className="p-2 w-[110px] h-[110px] border-[#d9d9d9] border-[1px]" src={enamad.src} alt={enamad.alt} sizes="100vw" width={0} height={0} />
                    </Link>
                    <Link className="p-1" rel="stylesheet" href={Enamd.link} >
                        <Image className="p-2 w-[110px] h-[110px] border-[#d9d9d9] border-[1px]" src={Enamd.src} alt={Enamd.alt} sizes="100vw" width={0} height={0} />
                    </Link>
                    <Link className="p-1" rel="stylesheet" href={majazi.link} >
                        <Image className="p-2 w-[110px] h-[110px] border-[#d9d9d9] border-[1px]" src={majazi.src} alt={majazi.alt} sizes="100vw" width={0} height={0} />
                    </Link>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between mb-3 text-[#81858b]">
                <p className="lg:mb-0 mb-4">
                    کليه حقوق اين سايت متعلق به شرکت نوآوران فن آوازه (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.
                </p>
                <p>
                    digistyle.com - 2025 © Copyright
                </p>
            </div>
        </div>
    );
}

export default AboutFooter;