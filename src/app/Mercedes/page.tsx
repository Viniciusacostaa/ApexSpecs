import type { Metadata } from "next";
import MercedesPhoto from "@/assets/imagens/Mercedes-AMG-GT-R-Black-Series-18.jpg";
import VehicleDetail from "../components/vehicle-detail/VehicleDetail";
import AmgMotor from "@/assets/imagens/AmgMotor.png"
import Amg1 from "@/assets/imagens/amg1.jpg"
import Amg2 from "@/assets/imagens/amg2.jpg"
import Amg3 from "@/assets/imagens/amg3.jpg"

export const metadata: Metadata = {
  title: "Mercedes-AMG GT Black Series | ApexSpecs",
  description: "Explore the Mercedes-AMG GT Black Series and its V8 biturbo engineering.",
};

export default function MercedesPage() {
  return (
    <VehicleDetail
      brand="Mercedes-AMG"
      model="GT Black Series"
      generation="C190 / Black Series"
      introduction="A track-focused expression of AMG performance, bringing race-bred intent and hand-built V8 character to the road."
      // Add or replace gallery images here; import each image above and add it to this array.
      slides={[
        { src: MercedesPhoto, alt: "Mercedes-AMG GT Black Series" },
    
        {
          src: Amg1,
          alt: "Mercedes-AMG GT Black Series photo placeholder",
          placeholderLabel: "Second vehicle angle",
        },
        {
          src: Amg2,
          alt: "Mercedes-AMG GT Black Series detail placeholder",
          placeholderLabel: "Detail photography",
        },
        {
          src: Amg3,
          alt: "Mercedes-AMG GT Black Series detail placeholder",
          placeholderLabel: "Detail photography",
        },
      ]}
      specifications={[
        { label: "Power", value: "730 cv" },
        { label: "0–100 km/h", value: "3.2 s" },
        { label: "Top speed", value: "325 km/h" },
      ]}
      engine={{
        architecture: "AMG V8 biturbo",
        displacement: "4.0 L",
        induction: "Twin turbochargers",
        output: "730 cv",
        // Replace null with an imported StaticImageData asset when the blueprint is ready.
        blueprint: AmgMotor,
        description: [
          "At the heart of the Black Series is AMG’s 4.0-litre V8 biturbo: a compact, hot-inside-V layout that places the turbochargers between the cylinder banks for a direct response and efficient packaging.",
          "Its twin-turbocharged architecture delivers immense, sustained acceleration, while the model’s track-focused character is built around precise throttle response and a powertrain designed to perform under demanding conditions.",
        ],
      }}
    />
  );
}
