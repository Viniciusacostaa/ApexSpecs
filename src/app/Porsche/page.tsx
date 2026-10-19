import type { Metadata } from "next";
import CimaPorsche from "@/assets/imagens/CimaPorsche.png";
import FrentePorsche from "@/assets/imagens/FrentePorsche.png";
import PorscheRear from "@/assets/imagens/911 GT3 (2027) purple.jpg";
import PorscheFront from "@/assets/imagens/911 GT3 (2027).jpg";
import PorscheBlueprint from "@/assets/imagens/PorscheMotor.png";
import VehicleDetail from "../components/vehicle-detail/VehicleDetail";

export const metadata: Metadata = {
  title: "Porsche 911 GT3 | ApexSpecs",
  description: "Explore the Porsche 911 GT3, its flat-six engineering and performance.",
};

export default function PorschePage() {
  return (
    <VehicleDetail
      brand="Porsche"
      model="911 GT3"
      generation="992.2 / 2027"
      introduction="A naturally aspirated icon shaped by precision, balance and a direct connection between driver and machine."
      // Add or replace gallery images here; import each image above and add it to this array.
      slides={[
        { src: CimaPorsche, alt: "Porsche 911 GT3, elevated view" },
        { src: FrentePorsche, alt: "Porsche 911 GT3, front view" },
        { src: PorscheFront, alt: "Porsche 911 GT3, front three-quarter view" },
        { src: PorscheRear, alt: "Porsche 911 GT3, rear view" },
      ]}
      specifications={[
        { label: "Power", value: "510 cv" },
        { label: "0–100 km/h", value: "3.4 s" },
        { label: "Top speed", value: "311 km/h" },
      ]}
      engine={{
        architecture: "Naturally aspirated flat-six",
        displacement: "4.0 L",
        induction: "Naturally aspirated",
        output: "510 cv",
        blueprint: PorscheBlueprint,
        description: [
          "The 911 GT3’s 4.0-litre boxer engine places six horizontally opposed cylinders low in the rear of the car. Its compact layout helps keep the centre of gravity down while the opposing pistons balance one another across the crankshaft.",
          "With no turbochargers between the throttle and the cylinders, response stays immediate and power builds progressively as the engine rises through the rev range. The result is a powertrain defined as much by precision and feedback as by its output.",
        ],
      }}
    />
  );
}
