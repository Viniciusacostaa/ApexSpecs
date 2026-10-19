import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import "./car.css";

export interface VehicleStat {
  label: string;
  value: string | number;
  unit?: string;
}

export interface VehicleCardProps {
  brand: string;
  model: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  href: string;
  stats: VehicleStat[];
  priority?: boolean;
  className?: string;
}

export function VehicleCard({
  brand,
  model,
  subtitle,
  imageSrc,
  imageAlt,
  href,
  stats,
  priority = false,
  className = "",
}: VehicleCardProps) {
  return (
    <article className={`vcard ${className}`}>
      <div className="vcard-image">
        <Image
          src={imageSrc}
          alt={imageAlt ?? `${brand} ${model}`}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />

        <Link href={href} className="vcard-button">
          VER FICHA <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="vcard-info">
        <div className="vcard-title">
          <p className="vcard-brand">{brand}</p>
          <h2 className="vcard-model">{model}</h2>
          {subtitle && <p className="vcard-subtitle">{subtitle}</p>}
        </div>

        {stats.map((stat) => (
          <dl key={stat.label} className="vcard-stat">
            <dt>{stat.label}</dt>
            <dd>
              <span className="vcard-stat-value">{stat.value}</span>
              {stat.unit && <span className="vcard-stat-unit">{stat.unit}</span>}
            </dd>
          </dl>
        ))}
      </div>
    </article>
  );
}