import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protected routes
      const protectedRoutes = ["/profile"];
      const isProtected = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      if (isProtected && !isLoggedIn) {
        // Redirect user to login WITH callbackUrl preserved
        const loginUrl = new URL("/login", nextUrl);
        loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
        return Response.redirect(loginUrl);
      }

      return true; // Allow access normally
    },
  },

  providers: [],
} satisfies NextAuthConfig;
