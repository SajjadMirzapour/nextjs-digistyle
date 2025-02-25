"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function BasketShop({ basketShopItems, emptyBasketIcon }) {
  const totalPrice = useMemo(() => {
    return basketShopItems.reduce((prev, current) => {
      return prev + (current?.price || 0);
    }, 0);
  }, [basketShopItems]);

  return (
    <div className="absolute top-8 bg-white w-[300px] h-auto p-4 rounded-md duration-700 origin-top-right scale-0 group-hover:scale-100 z-30">
      <div>
        {basketShopItems?.length === 0 ? (
          <div>
            <Image
              className="mx-auto mb-4"
              width={100}
              height={100}
              src={emptyBasketIcon?.src}
              alt={emptyBasketIcon?.alt}
            />
            <p className="text-center mb-4">سبد خرید شما خالی است</p>
            <div className="flex items-center justify-between text-[.8rem] mb-4">
              <Link
                className="px-2 border-l-2 underline text-blue-900"
                href={"/"}
              >
                حراج استایل{" "}
              </Link>
              <Link
                className="px-2 border-l-2 underline text-blue-900"
                href={"/"}
              >
                حراج استایل{" "}
              </Link>
              <Link className="px-2 underline text-blue-900" href={"/"}>
                حراج استایل{" "}
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span>{basketShopItems?.length} کالا</span>
              <Link className="text-cyan-600 text-sm" href="/basket">
                مشاهده سبد خرید
              </Link>
            </div>
            {basketShopItems?.map((el, index) => (
              <div className="flex border-t-2 p-2" key={index}>
                <Image
                  className="bg-[gray] rounded-md ml-4"
                  width={60}
                  height={60}
                  src={el.src}
                  alt={el.alt}
                />
                <div>
                  <p className="text-sm mb-2">{el.name}</p>
                  <span className="text-xs">{el.price} تومان</span>
                </div>
              </div>
            ))}
            {/* </div> */}
            <div className="flex items-center justify-between text-sm border-t-2 p-2">
              <div>
                <div>مبلغ قابل پرداخت : </div>
                <div className="text-pink-500">{totalPrice} تومان</div>
              </div>
              <button className="rounded-md bg-pink-600 p-2 text-white hover:bg-white hover:text-pink-600 border border-pink-600 delay-200">
                ورود و ثبت سفارش
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasketShop;
