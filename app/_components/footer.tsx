import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 px-4 py-8 text-xs">
      <div className="container flex gap-2 items-center max-w-7xl">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p className="flex items-center gap-1"><FaWhatsapp /> (+55 11) 99999 9999</p>
      </div>
    </footer>
  )
}
