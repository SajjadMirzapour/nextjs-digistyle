"use client";

import { authenticate } from "@/src/lib/action";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

function Login() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form className="relative py-8" action={formAction}>
      <div className="w-full border-b border-gray-400 p-4">
        <Image
          className="mx-auto"
          src="/icons/digi-icon.svg"
          alt="digi-style"
          width={300}
          height={200}
        />
      </div>
      <h1 className="text-center text-lg font-bold my-8">ثبت نام</h1>
      <div className="w-1/3 mx-auto my-10 p-6 border border-gray-300">
        <div className="mb-12 text-sm">
          <div className="mb-4 ">
            {/* <label htmlFor="username">نام کاربری</label> */}
            <input
              className="w-full outline-none p-2 border-b border-gray-400 caret-blue-500 focus:border-blue-500"
              required
              name="username"
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
            />
          </div>
          {/* {state?.errors?.name &&
                        <p>{state?.errors?.name}</p>
                    } */}
          <div className="mb-4">
            {/* <label htmlFor="email">ایمیل</label> */}
            <input
              className="w-full outline-none p-2 border-b border-gray-400 caret-blue-500 focus:border-blue-500"
              required
              name="email"
              type="text"
              placeholder="ایمیل خود را وارد کنید"
            />
            {errorMessage?.email}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password">رمز عبور</label> */}
            <input
              className="w-full outline-none p-2 border-b border-gray-400 caret-blue-500 focus:border-blue-500"
              required
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          {typeof errorMessage === "string" && errorMessage && (
            <p className="absolute text-red-400 text-xs font-semibold">
              {" "}
              * {errorMessage}
            </p>
          )}
        </div>
        <div className="flex justify-center mb-4">
          <button
            className="w-3/4 p-3 border bg-gray-300 text-white hover:bg-white hover:text-gray-400 duration-300 rounded-md disabled:cursor-not-allowed shadow-lg"
            disabled={isPending}
            aria-disabled={isPending}
          >
            ادامه
          </button>
        </div>
        <p className="w-1/2 mx-auto pb-4 text-sm">
          با ورود به سایت دیجی استایل , شما
          <strong className="text-blue-500 mx-1">
            <Link href="/">شرایط و قوانین</Link>
          </strong>
          استفاده از تمام سرویس های دیجی کالا
          <strong className="text-blue-500">
            <Link className="mx-1" href="/">
              قوانین حریم خصوصی
            </Link>
          </strong>
          آن را می پذیرید .
        </p>
      </div>
      {isPending && (
        <div>
          <div className="absolute top-0 w-full h-screen bg-black opacity-40"></div>
          <div className="absolute top-[15%] right-[40%] w-[300px] h-[300px] bg-white shadow-2xl rounded-lg p-4 text-center">
            <p className="font-semibold text-xl mt-6 mb-12">لطفا صبر کنید</p>
            <Image
              className="mx-auto"
              width={100}
              height={100}
              src="/icons/spinner.svg"
              alt="loading"
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default Login;
