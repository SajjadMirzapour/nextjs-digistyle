import { fetchHeaderIcons, fetchAllProducts } from "@/src/lib/data";
import Image from "next/image";
import Link from "next/link";
import BasketShop from "./basket-shop";
import { auth } from "@/auth";
import UserInfo from "./user-info";

async function TopHeader() {
  const headerIcons = await fetchHeaderIcons();
  const digiIcon = headerIcons.find((el) => el.name === "digi-icon");
  const basket = headerIcons.find((el) => el.name === "basket");
  const emptyBasketIcon = headerIcons.find((el) => el.name === "empty-basket");
  const search = headerIcons.find((el) => el.name === "search");
  const session = await auth();
  const basketItems = session?.user?.basket?.split("-");
  const allProducts = await fetchAllProducts();
  // console.log('products', products);
  console.log("basketItems", basketItems);
  const basketShopItems = allProducts.filter((el) =>
    basketItems?.includes(el.id)
  );
  // console.log("basketShopItems", basketShopItems);

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between hidden mx-8 mb-5">
        <div className="flex items-center justify-between">
          <div className="group ml-8">
            <Image
              className="relative z-10"
              width={25}
              height={25}
              src={basket.src}
              alt={basket.alt}
            />
            <BasketShop
              basketShopItems={basketShopItems}
              emptyBasketIcon={emptyBasketIcon}
            />
            <div className="absolute right-[1.5%] top-[20%] w-[20px] h-[20px] rounded-full text-sm text-white bg-[#ef5a88] flex items-center justify-center p-[3px] z-[15]">
              {basketItems?.length}
            </div>
          </div>
          {session?.user ? (
            <UserInfo session={session} />
          ) : (
            <Link className="w-[200px] mr-3 text-[.8rem]" href="/login">
              وارد شوید
            </Link>
          )}
        </div>
        <Image
          className="border-b border-black p-5"
          width={250}
          height={100}
          src={digiIcon.src}
          alt={digiIcon.alt}
        />
        <div className="w-[230px] after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:opacity-50">
          <Image
            className="absolute left-[15.5%] w-[24px] h-[24px]"
            width={50}
            height={50}
            src={search.src}
            alt={search.alt}
          />
          <input
            className="w-full text-[.8rem] text-black bg-transparent placeholder-black p-1 pr-8 border-none outline-none"
            type="text"
            placeholder="جستجوی محصولات از ۲۳۵۰ برند"
          />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
