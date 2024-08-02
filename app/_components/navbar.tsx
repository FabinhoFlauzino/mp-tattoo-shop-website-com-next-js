import Image from "next/image";
import Logo from "@/app/_assets/Logo.svg"

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logotipo da empresa" />
      <ul>
        <li>Serviços</li>
        <li>Sobre Min</li>
        <li>Contato <br /> (+55 14 99999-9999)</li>
      </ul>
    </nav>
  )
}
