import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import tattoo from "@/app/_assets/tattoo.png";

export default function ContatoPage() {
  return (
    <main className="flex gap-10 items-center justify-between">
      <section className="max-w-96">
        <h1 className={`text-3xl font-black mt-12`}>Entre em <span className="text-yellow-400">Contato</span></h1>
        <p className="mt-10 text-zinc-400 font-light">
          Clique no botão abaixo e envie uma mensagem.
          Vamos conversar!
        </p>

        <Link href="https://wa.me//5514999999999?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20o%20seu%20trabalho" target="_blank"
          className="flex items-center justify-center gap-4 bg-zinc-700 hover:bg-zinc-600 p-4 border-b-4 border-zinc-800 rounded mt-10 max-w-64">
          <FaWhatsapp className="w-8 h-8" />
          <div className="flex flex-col">
            <span>Enviar Whatsapp</span>
            <span className="text-zinc-400 text-sm">(14) 99999-9999</span>
          </div>
        </Link>
      </section>

      <Image src={tattoo} alt="Pessoa fazendo tatuagem" width={600}/>
    </main>
  )
}
