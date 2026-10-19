import Hero from "./components/hero/hero";
import Footer from "./components/footer/Footer";
import { VehicleCard, type VehicleCardProps } from "./components/cardCar/VehicleCard";
import Porsche from "@/assets/imagens/911 GT3 (2027).jpg";
import Bmw from "@/assets/imagens/P90548561_highRes_the-all-new-bmw-m4-c.jpg";
import Mercedes from "@/assets/imagens/Mercedes-AMG-GT-R-Black-Series-18.jpg";

type Car = Omit<VehicleCardProps, "priority">;

const cars: Car[] = [
  {
    brand: "Porsche",
    model: "911 GT3 2027",
    subtitle: "992.2 · Naturally aspirated",
    imageSrc: Porsche,
    imageAlt: "Porsche 911 GT3 2027 roxa",
    href: "/Porsche",
    stats: [
      { label: "Potência", value: 510, unit: "cv" },
      { label: "0—100 km/h", value: 3.4, unit: "s" },
      { label: "Velocidade máx.", value: 311, unit: "km/h" },
    ],
  },
  {
    brand: "BMW",
    model: "M4 CS",
    subtitle: "G82 · 3.0 biturbo",
    imageSrc: Bmw,
    href: "/Bmw",
    stats: [
      { label: "Potência", value: 550, unit: "cv" },
      { label: "0—100 km/h", value: 3.4, unit: "s" },
      { label: "Velocidade máx.", value: 302, unit: "km/h" },
    ],
  },
  {
    brand: "Mercedes-AMG",
    model: "GT Black Series",
    subtitle: "C190 · 4.0 V8 biturbo",
    imageSrc: Mercedes,
    href: "/Mercedes",
    stats: [
      { label: "Potência", value: 730, unit: "cv" },
      { label: "0—100 km/h", value: 3.2, unit: "s" },
      { label: "Velocidade máx.", value: 325, unit: "km/h" },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <h1 className="tittleHome">
        ENGINEERED <br /> FOR <span className="apex">APEX</span>
      </h1>

      <div className="vehicle-showcase">
        {cars.map((car, i) => (
          <section
            key={car.href}
            className="vehicle-stage"
            aria-label={`${car.brand} ${car.model}`}
          >
            <VehicleCard priority={i === 0} {...car} />
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
}