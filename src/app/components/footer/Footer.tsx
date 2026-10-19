import Image from "next/image";
import Piston from "@/assets/imagens/gemini-svg.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Image className="site-footer-logo" src={Piston} alt="" aria-hidden />
      <p className="site-footer-brand">ApexSpecs</p>
      <p className="site-footer-tagline">The apex of motoring excellence.</p>
    </footer>
  );
}
