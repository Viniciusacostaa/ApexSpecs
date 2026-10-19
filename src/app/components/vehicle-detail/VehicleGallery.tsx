"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { VehicleSlide } from "./vehicleTypes";

export default function VehicleGallery({
  slides,
  vehicleName,
}: {
  slides: VehicleSlide[];
  vehicleName: string;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      slides.length < 2 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <div
      className="vehicle-gallery"
      aria-label={`${vehicleName} photo gallery`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="vehicle-gallery-slides" aria-live="off">
        {slides.map((slide, index) => (
          slide.src ? (
            <Image
              key={slide.alt}
              className={`vehicle-gallery-image${index === activeSlide ? " is-active" : ""}`}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1280px) 1200px, 100vw"
              aria-hidden={index !== activeSlide}
            />
          ) : (
            <div
              key={slide.alt}
              className={`vehicle-gallery-placeholder${index === activeSlide ? " is-active" : ""}`}
              role="img"
              aria-label={slide.alt}
              aria-hidden={index !== activeSlide}
            >
              <span aria-hidden="true">+</span>
              <p>{slide.placeholderLabel ?? "Vehicle photo coming soon"}</p>
              <small>ADD IMAGE IN VEHICLE GALLERY</small>
            </div>
          )
        ))}
      </div>

      <div className="vehicle-gallery-shade" />
      <div className="vehicle-gallery-caption">
        <span>{vehicleName}</span>
        <span>
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {slides.length > 1 && (
        <div className="vehicle-gallery-controls" aria-label="Gallery controls">
          <button
            type="button"
            className="gallery-arrow"
            aria-label="Previous photo"
            onClick={() => showSlide(activeSlide - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="gallery-dots" aria-label="Choose a photo">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={`gallery-dot${index === activeSlide ? " is-active" : ""}`}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="gallery-arrow"
            aria-label="Next photo"
            onClick={() => showSlide(activeSlide + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
