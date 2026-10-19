import "./hero.css"
import Image from "next/image"
import  Pistao  from "@/assets/imagens/gemini-svg.svg"

export default function Hero(){
    return (
        <>
        <div className="body">
            <div className="icon">
                <Image alt="pistao logo" src={Pistao}/>
            </div>
            <div className="enterprise"><a href=".">ApexSpecs</a> </div>
            
        </div>
        </>
    )
}