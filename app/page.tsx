import Header from "@/components/Header";
import Link from "next/link";
import Herosec from "@/components/Herosec";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
     <Herosec />
    </div>
  );
}
