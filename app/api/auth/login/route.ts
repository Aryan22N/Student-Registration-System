import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { clientAuth } from "@/lib/firebaseClient";
import { FirebaseError } from "firebase/app";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const userCred = await signInWithEmailAndPassword(
      clientAuth,
      email,
      password
    );

    const token = await userCred.user.getIdToken();
    const isProd = process.env.NODE_ENV === "production";

  return NextResponse.json(
  { message: "Login successful" },
  {
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Strict;${
        isProd ? " Secure;" : ""
      }`,
    },
  }
);

  } catch (error: unknown) {
    // ✅ Narrow Firebase error safely
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
          return NextResponse.json(
            { error: "Account does not exist. Please sign up." },
            { status: 404 }
          );

        case "auth/wrong-password":
          return NextResponse.json(
            { error: "Incorrect password." },
            { status: 401 }
          );

        case "auth/invalid-email":
          return NextResponse.json(
            { error: "Invalid email address." },
            { status: 400 }
          );
      }
    }

    // fallback
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 }
    );
  }
}
