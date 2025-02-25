"use client";

import { addToUserBasket } from "@/src/lib/action";
import Image from "next/image";
import { useActionState } from "react";

export default function DetailProduct({ userProduct, username, basketItems }) {
  // console.log("basket0", basketItems);

  const [isPending, formAction, errorMessage] = useActionState(
    () =>
      addToUserBasket({ username, basket: basketItems.concat(userProduct.id) }),
    undefined
  );

  return (
    <div className="flex mb-6">
      <Image
        width={600}
        height={600}
        src={userProduct?.src}
        alt={userProduct?.alt}
      />
      <div className="w-[550px] mr-10">
        <div className="flex items-center justify-between text-[rgb(67,67,67)] mb-4">
          <div className="flex items-center">
            <Image
              className="ml-2"
              width={25}
              height={25}
              src="/icons/star-golden.png"
              alt="rate"
            />
            <span>{userProduct.rate}</span>
          </div>
          <span>1229 نظر </span>
        </div>
        <div className="text-sm text-[rgb(67,67,67)] mb-8">
          بیش از ۷۵۰ خریدار این کالا را پیشنهاد داده‌اند
        </div>
        <h1 className="font-bold text-lg mb-8">{userProduct?.name}</h1>
        <div className="flex items-center justify-between mb-8">
          <span>فروشنده : راسل گالری</span>
          <span>{userProduct?.price} تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <form action={formAction}>
            <button
              // disabled={isPending}
              className="w-[400px] h-[50px] bg-black text-white hover:bg-white hover:text-black border border-black delay-200 rounded-sm"
            >
              افزودن به سبد خرید
            </button>
            {errorMessage && (
              <div>
                <span>{errorMessage}</span>
                <p>مشکلی می باشد</p>
              </div>
            )}
          </form>
          <button className="group flex items-center justify-center h-[50px] bg-black text-white hover:bg-white border border-black hover:text-balance delay-200 p-4 rounded-sm">
            {/* <Image
              className="stroke-none"
              width={25}
              height={25}
              src="/icons/heart.svg"
              alt="heart-icon"
            /> */}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              // fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-white group-hover:stroke-black delay-200"
                d="M4 12H20M12 4V20"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
