import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

// TODO: add protected route
export default auth(async function middleware(req: NextRequest) {
  const isWhitelisted = whitelist.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (isWhitelisted) {
    return NextResponse.next();
  }

  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

const whitelist = ["/"];
