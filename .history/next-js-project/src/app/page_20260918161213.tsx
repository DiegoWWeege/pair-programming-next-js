import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main >
        <NavBar></NavBar>
      </main>
    </div>
  );
}
