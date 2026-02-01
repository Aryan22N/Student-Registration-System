"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, loading, setUser } = useAuth();
  const router = useRouter();

  if (loading) return null;

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    router.replace("/login");
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="font-semibold text-lg">Student Event System</h1>

      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/create-event">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Get Started
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
