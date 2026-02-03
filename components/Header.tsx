// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";

// export default function Header() {
//   const { user, loading, setUser } = useAuth();
//   const router = useRouter();

//   if (loading) return null;

//   async function handleLogout() {
//     await fetch("/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     setUser(null);
//     router.replace("/login");
//   }

//   return (
//     <header className="flex items-center justify-between px-6 py-4 border-b">
//       <h1 className="font-semibold text-lg">Student Event System</h1>

//       <nav className="flex items-center gap-4">
//         {user ? (
//           <>
//             <Link href="/create-event">Dashboard</Link>
//             <button
//               onClick={handleLogout}
//               className="text-red-600 hover:underline"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link href="/login">Login</Link>
//             <Link
//               href="/login"
//               className="px-4 py-2 bg-black text-white rounded"
//             >
//               Get Started
//             </Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
"use client";

import React from 'react';
import { Header } from "./ui/header-1";

export default function Demo() {
	return (
		<div className="w-full">
			<Header />

			{/* <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12">
				<div  className="space-y-2 mb-4">
					<div className="bg-accent h-6 w-4/6 rounded-md border" />
					<div className="bg-accent h-6 w-1/2 rounded-md border" />
				</div>
				<div  className="flex gap-2 mb-8">
					<div className="bg-accent h-3 w-14 rounded-md border" />
					<div className="bg-accent h-3 w-12 rounded-md border" />
				</div>

				{Array.from({ length: 7 }).map((_, i) => (
					<div key={i} className="space-y-2 mb-8">
						<div className="bg-accent h-4 w-full rounded-md border" />
						<div className="bg-accent h-4 w-full rounded-md border" />
						<div className="bg-accent h-4 w-full rounded-md border" />
						<div className="bg-accent h-4 w-1/2 rounded-md border" />
					</div>
				))}
			</main> */}
		</div>
	);
}
