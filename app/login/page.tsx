"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginComp } from "@/components/logincomp";

export default function LoginPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        router.replace("/create-event");
      } else {
        setChecking(false);
      }
    });
  }, [router]);

  // optional: prevent flicker
  if (checking) return null;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginComp />
    </div>
  );
}
