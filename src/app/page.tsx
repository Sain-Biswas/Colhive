import { Home } from "@/components/Home";
import { Footer } from "@/components/Footer";
export default async function Page() {
  return (
    <main >
      <Home/>
      <div className="w-full h-px bg-[#38d1d1] my-5"/>
      <Footer/>
    </main>
  );
}
