"use server";

// import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { connectDB } from "@/db";
// import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import type { AddToUserBasket } from './action.type';

const pool = connectDB();

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // const parsedCredentials = z
    //   .object({
    //     username: z.string().min(6),
    //     email: z.string().email(),
    //     password: z.string().min(5),
    //   })
    //   .safeParse(formData);
    // if (!parsedCredentials.success) {
    //   return parsedCredentials.error
    // }
    await signIn("credentials", formData);
  } catch (error) {
    console.log("error6", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "اطلاعات صحیح نمی باشد";
        default:
          return "مشکلی رخ داده است";
      }
    }
    throw error;
  }
};


export const addToUserBasket: AddToUserBasket = async ({ username, basket }) => {
  // console.log('hi1', basket, basket?.join('-'), username);

  try {
    await pool.query(`update users set basket='${basket?.join('-')}' where username='${username}'`)
    // console.log('hi2');

  } catch (error) {
    // console.log('hi3');

    return { message: 'Database Error: Failed to add basket.' };
  }
  // console.log('hi4');

  // revalidatePath('/men-shop/accessories');
  redirect('/men-shop/accessories');

}
