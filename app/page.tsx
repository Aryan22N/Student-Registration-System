import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Public Navbar */}
      {/* <nav className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-xl font-bold">Student Reg System</h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-black text-white rounded"
          >
            Get Started
          </Link>
        </div>
      </nav> */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">
          QR-Based Event Registration & Verification
        </h2>
        <p className="text-gray-600 max-w-xl mb-8">
          Create events, manage teams, handle on-spot registrations,
          and verify participants instantly using QR codes.
        </p>

        <Link
          href="/login"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Create Your First Event
        </Link>
      </section>
    </div>
  );
}
