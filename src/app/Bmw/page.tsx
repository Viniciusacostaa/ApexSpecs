import type { Metadata } from "next";
import BmwFront from "@/assets/imagens/P90548546_highRes_the-all-new-bmw-m4-c.jpg";
import BmwTrack from "@/assets/imagens/P90548561_highRes_the-all-new-bmw-m4-c.jpg";
import BmwDetail from "@/assets/imagens/P90548566_highRes_the-all-new-bmw-m4-c.jpg";
import BmwRear from "@/assets/imagens/P90548570_highRes_the-all-new-bmw-m4-c.jpg";
import VehicleDetail from "../components/vehicle-detail/VehicleDetail";
import  BmwMotor from "@/assets/imagens/BmwMotor.png"

export const metadata: Metadata = {
  title: "BMW M4 CS | ApexSpecs",
  description: "Explore the BMW M4 CS and its high-performance inline-six powertrain.",
};

export default function BmwPage() {
  return (
    <VehicleDetail
      brand="BMW"
      model="M4 CS"
      generation="G82 / Competition Sport"
      introduction="A sharper interpretation of the M4, pairing a high-revving turbocharged straight-six with focused, driver-first performance."
      // Add or replace gallery images here; import each image above and add it to this array.
      slides={[
        { src: BmwFront, alt: "BMW M4 CS, front three-quarter view" },
        { src: BmwTrack, alt: "BMW M4 CS on track" },
        { src: BmwDetail, alt: "BMW M4 CS exterior detail" },
        { src: BmwRear, alt: "BMW M4 CS rear three-quarter view" },
        // Add further BMW gallery images here as they become available.
      ]}
      specifications={[
        { label: "Power", value: "550 cv" },
        { label: "0–100 km/h", value: "3.4 s" },
        { label: "Top speed", value: "302 km/h" },
      ]}
      engine={{
        architecture: "M TwinPower Turbo inline-six",
        displacement: "3.0 L",
        induction: "Twin turbochargers",
        output: "550 cv",
        // Replace null with an imported StaticImageData asset when the blueprint is ready.
        blueprint: BmwMotor,
        description: [
          "The M4 CS is powered by a 3.0-litre inline-six with BMW M TwinPower Turbo technology. The straight-six layout keeps all cylinders in a single bank, a configuration valued for its inherent balance and smooth power delivery.",
          "Twin turbochargers build strong torque across the rev range, while the engine’s responsive character makes power easy to access on both road and circuit. Its output is matched to the M4 CS’s focused approach to performance.",
        ],
      }}
    />
  );
}
