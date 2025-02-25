"use client";

import Image from "next/image";
import Link from "next/link";
// import MobileOptionList from "@/src/ui/mobile-header/mobile-option-list";

function MobileOption({ show, setShow, close, optionImages, search }) {
  const handleHideOptionHeader = () => {
    setShow(false);
  };

  return (
    <div
      className={`${
        show ? "translate-x-0" : "translate-x-[100%]"
      } duration-500 ease-in-out fixed top-0 z-50 overflow-y-scroll scroll-smooth bg-white w-[85%] h-screen py-2 px-4 text-[.8rem]`}
    >
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleHideOptionHeader}>
          <Image src={close.src} alt={close.alt} width={25} height={25} />
        </button>
        <Link className="border border-black rounded-sm p-2" href="/login">
          ورود و ثبت‌ نام
        </Link>
      </div>
      <div className="flex items-center w-full border-black border-b-2 py-2 mb-4">
        <input
          className="w-[calc(100%-30px)]"
          type="search"
          placeholder="جستجو در دسته‌بندی‌ها"
        />
        <Image width={25} height={25} src={search.src} alt={search.alt} />
      </div>
      <ul>
        {optionImages.map((el, index) => (
          <li
            className="flex items-center justify-between mb-4 pr-4"
            style={{ backgroundColor: el.color }}
            key={index}
          >
            <span>{el.name}</span>
            <Image
              className=" w-[170px] h-[100px]"
              src={el.src}
              sizes="100vw"
              width={0}
              height={0}
              alt={el.alt}
            />
          </li>
        ))}
        <li className="mb-4 border-b py-4">
          <span>ورزش و سفر</span>
          <div></div>
        </li>
        <li className="mb-4 border-b py-4">
          <span>حراج استایل</span>
          <div></div>
        </li>
        <li className="mb-4 border-b py-4">
          <span>خانه ساعت</span>
          <div></div>
        </li>
        <li className="mb-4 border-b py-4">
          <span>خانه طلا</span>
          <div></div>
        </li>
      </ul>
    </div>
  );
}

export default MobileOption;
