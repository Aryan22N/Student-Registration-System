import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await adminAuth.createUser({
      email,
      password,
    });

    return NextResponse.json({
      message: "User created successfully",
      uid: user.uid,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Invalid or empty JSON body 123" },
      { status: 400 }
    );
  }
}
