import Header from "@/components/Header";
import Link from "next/link";
import Herosec from "@/components/Herosec";
import FeaturesSection from "@/components/Featuresec";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
     <Herosec />
      {/* Features Section */}
     <FeaturesSection />
     {/* Footer Section */}
     <Footer/>
    </div>
  );
}
