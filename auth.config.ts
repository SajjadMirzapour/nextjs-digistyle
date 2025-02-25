import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {

      const loginRoute = ["/login"];
      const dashboardRoute = ["/dashboard"];
      const isLoggedIn = !!auth?.user;
      const userRole = auth?.user?.role;
      // console.log('auth1' , auth);

      if (loginRoute.includes(request.nextUrl.pathname) && isLoggedIn) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      if (dashboardRoute.includes(request.nextUrl.pathname)) {
        if (userRole === "admin") return true;
        else {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }

      return NextResponse.next();
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.username;
        token.picture = user.image;
        token.basket = user?.basket
        token.favorites = user?.favorites
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.image = token.picture;
      session.user.basket = token.basket
      session.user.favorites = token.favorites
      // console.log("session1", session);
      return session;
    },
  },
  secret: "+bG0mZ07G4dvmGIsPepHw8lDvSzXANprq7HHEJL2tOw=",
  providers: [],
} satisfies NextAuthConfig;
