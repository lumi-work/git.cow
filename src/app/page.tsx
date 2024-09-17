import Header from "@/components/landing/Header";
import Nav from "@/components/landing/Nav";
import Partners from "@/components/landing/Partners";
import "@/styles/globals.css";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Partners />
    </main>
  );
}
