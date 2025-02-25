"use server";

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { fetchUser } from "./src/lib/data";
// import { LoginFormSchems } from "./src/lib/defition";

const getUser = async (username: string, email: string) => {
  try {
    const user = await fetchUser(username, email);
    return user[0];
  } catch (e) {
    console.log("failed to fetch user :", e);
    throw new Error("failed to fetch user");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string().min(6),
            email: z.string().email(),
            password: z.string().min(5),
          })
          .safeParse(credentials);

        // const parsedCredentials = LoginFormSchems.safeParse(credentials);
        // console.log("parsedCredentials6", parsedCredentials.error?.errors[0].message);

        if (parsedCredentials.success) {

           const { username, email, password } = parsedCredentials.data;
           const myUser = await getUser(username, email);

            if (!myUser) return null;
            // console.log('mase' , password , myUser?.password );
            if (password === myUser?.password) {
              return myUser;
              // return {
              //   errors : parsedCredentials.error.flatten().fieldErrors
              // }
              // throw new Error(`${parsedCredentials.error.errors[0].message}`);
              // console.log(parsedCredentials.error);
              // return null
              // return { error: parsedCredentials.error.flatten().fieldErrors };
            }
        };
        console.log("invalid credentilas");
        return null;
      }
    }),
  ],
});
