'use client'

import Image from "next/image";
import Logo from "@/app/_assets/Logo.svg";
import { londrinaSolid } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) {
      return 'underline'
    }
  }

  return (
    <nav className={`container max-w-7xl px-4 py-8 flex justify-between ${londrinaSolid.className}`}>
      <Link href="/">
        <Image src={Logo} alt="Logotipo da empresa" />
      </Link>
      <ul className="flex gap-6 text-3xl">
        <li className={`${isActive(pathname, 'servicos')}`}><Link href="/servicos">Serviços</Link></li>
        <li className={`${isActive(pathname, 'sobre')}`}><Link href="/sobre">Sobre Mim</Link></li>
        <li className={`text-right`}>
          <Link href="/contato" className="flex flex-col">
            <span className={`${isActive(pathname, 'contato')} text-right`}>Contato</span>
            <span className="text-xs text-zinc-400 font-extralight flex gap-1 items-center">
              <FaWhatsapp />
              (14) 99999-9999
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
