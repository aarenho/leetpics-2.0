import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center gap-40">
        <div className="relative">
          <Image
            src="/batman.png"  
            width={500}
            height={500}
          />
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-black opacity-50" />
        </div>
        <h1 className="text-4xl font-bold text-white">
          Batman
        </h1>
        </div>
      </div>
    </div>
  );
}
