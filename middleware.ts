import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

const protectedRoutes = ["/create-event", "/dashboard"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1️⃣ Only run middleware for protected routes
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // 2️⃣ Read token from cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 3️⃣ Verify token with Firebase Admin
  try {
    await adminAuth.verifyIdToken(token);
    return NextResponse.next();
  } catch {
    // invalid / expired / tampered token
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
