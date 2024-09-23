import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Grid from "@/components/landing/Grid";
import Header from "@/components/landing/Header";
import Nav from "@/components/landing/Nav";
import "@/styles/globals.css";
import { createClient } from "@/utils/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if ((!error && data?.user) || data?.user) {
    redirect("/dashboard");
  }
  return (
    <main className="flex justify-center items-center w-full h-full">
      <div className="max-w-[1200px] w-full h-full flex flex-col items-center justify-center relative z-10">
        <Nav />
        <Header />
        <Grid />
        <Contact />
        <Footer />
      </div>
      <div className="absolute inset-0 -z-10 h-[80vh] w-full mx-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
    </main>
  );
}
