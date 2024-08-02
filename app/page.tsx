import Image from "next/image";
import { londrinaSolid } from "./_lib/fonts";
import portrait from "@/app/_assets/Portrait.png"

export default function Home() {
  return (
    <main className="relative flex-1">
      <h1 className={`absolute -z-10 text-[400px] text-zinc-800
          -left-20 -top-10 leading-tight uppercase ${londrinaSolid.className}`}>Tattoo</h1>

      <div className="font-black text-zinc-500 text-8xl pt-28">
        <h2>INSPIRE-SE </h2>
        <h2>EXPRESSE-SE</h2>
        <h2 className="text-yellow-400">TATUE-SE</h2>
      </div>

      <Image width={380} src={portrait} alt="Retrato de Sandro Luz"
        className="absolute grayscale right-0 -bottom-20 h-auto"
      />

    </main>
  );
}
