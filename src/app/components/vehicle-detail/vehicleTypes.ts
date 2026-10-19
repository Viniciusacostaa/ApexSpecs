import type { StaticImageData } from "next/image";

export interface VehicleSlide {
  src: StaticImageData | null;
  alt: string;
  placeholderLabel?: string;
}

export interface VehicleEngine {
  architecture: string;
  displacement: string;
  induction: string;
  output: string;
  description: string[];
  blueprint: StaticImageData | null;
}
