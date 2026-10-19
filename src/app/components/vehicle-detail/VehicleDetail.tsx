import Image from "next/image";
import Hero from "../hero/hero";
import Footer from "../footer/Footer";
import VehicleGallery from "./VehicleGallery";
import type { VehicleEngine, VehicleSlide } from "./vehicleTypes";
import "./vehicle-detail.css";

export interface VehicleDetailProps {
  brand: string;
  model: string;
  generation: string;
  introduction: string;
  slides: VehicleSlide[];
  specifications: { label: string; value: string }[];
  engine: VehicleEngine;
}

export default function VehicleDetail({
  brand,
  model,
  generation,
  introduction,
  slides,
  specifications,
  engine,
}: VehicleDetailProps) {
  const vehicleName = `${brand} ${model}`;

  return (
    <>
      <Hero />
      <main className="vehicle-detail">
        <section className="vehicle-intro">
          <div className="vehicle-intro-copy">
            <p className="detail-eyebrow">{generation} · ENGINEERED TO MOVE</p>
            <h1>
              <span>{brand}</span> {model}
            </h1>
            <p className="vehicle-introduction">{introduction}</p>
          </div>

          <VehicleGallery slides={slides} vehicleName={vehicleName} />

          <dl className="vehicle-specifications">
            {specifications.map((specification) => (
              <div className="vehicle-specification" key={specification.label}>
                <dt>{specification.label}</dt>
                <dd>{specification.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="engine-section" id="engineering">
          <div className="engine-section-heading">
            <p className="detail-eyebrow">THE HEART OF THE MACHINE</p>
            <h2>Engineered from within.</h2>
          </div>

          <div className="engine-layout">
            <div className="engine-blueprint">
              {engine.blueprint ? (
                <Image
                  src={engine.blueprint}
                  alt={`${vehicleName} engine blueprint`}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              ) : (
                <div className="blueprint-placeholder">
                  <span className="placeholder-mark" aria-hidden="true">
                    +
                  </span>
                  <p className="detail-eyebrow">BLUEPRINT IMAGE</p>
                  <p>Engine blueprint will be added here.</p>
                  <span className="placeholder-format">ENGINE / TECHNICAL DRAWING</span>
                </div>
              )}
            </div>

            <article className="engine-copy">
              <p className="detail-eyebrow">POWERTRAIN / 01</p>
              <h3>{engine.architecture}</h3>
              <p className="engine-displacement">
                {engine.displacement} <span>·</span> {engine.induction}
              </p>

              <div className="engine-facts">
                <div>
                  <span>Architecture</span>
                  <strong>{engine.architecture}</strong>
                </div>
                <div>
                  <span>Displacement</span>
                  <strong>{engine.displacement}</strong>
                </div>
                <div>
                  <span>Induction</span>
                  <strong>{engine.induction}</strong>
                </div>
                <div>
                  <span>Output</span>
                  <strong>{engine.output}</strong>
                </div>
              </div>

              <div className="engine-description">
                {engine.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
