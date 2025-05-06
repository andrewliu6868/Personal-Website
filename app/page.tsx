import Image from "next/image";
import Introduction from "@/components/introduction";
import Divider from "@/components/divider";
import About from "@/components/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <Divider/>
      <About/>
    </main>
  );
}
