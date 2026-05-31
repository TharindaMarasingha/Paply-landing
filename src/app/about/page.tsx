import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Creator | Paply",
  description: "Learn more about the founder and lead developer behind Paply.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '60px', minHeight: 'calc(100vh - 200px)' }}>
        <About />
      </div>
      <Footer />
    </main>
  );
}
