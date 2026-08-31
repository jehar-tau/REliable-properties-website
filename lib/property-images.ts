import type { Property } from "./property-data";

export interface PropertyPhoto {
  src: string;
  alt: string;
}

/** Real photographs of Amanora Park Town / its towers, supplied by Reliable
 *  Properties (not stock). They show the neighbourhood and building
 *  exteriors, not the interior of any specific unit. */
const REAL_PHOTOS: PropertyPhoto[] = [
  { src: "/images/amanora-dome-dusk.jpg", alt: "Amanora Park Town at dusk" },
  { src: "/images/amanora-skyline-day.jpg", alt: "Amanora skyline, daytime" },
  { src: "/images/tower-facade-low-angle.jpg", alt: "Building exterior, low angle" },
  { src: "/images/amanora-tower-night.jpg", alt: "Amanora Park Town at night" },
];

/** Representative stock interior photos (Unsplash License) — standing in
 *  until real interior photography is available for a listing. */
const STOCK_PHOTOS: PropertyPhoto[] = [
  { src: "/images/living-room.jpg", alt: "Living room (representative)" },
  { src: "/images/kitchen.jpg", alt: "Kitchen (representative)" },
  { src: "/images/bedroom.jpg", alt: "Bedroom (representative)" },
  { src: "/images/master-bedroom.jpg", alt: "Master bedroom (representative)" },
  { src: "/images/dining.jpg", alt: "Dining area (representative)" },
  { src: "/images/bathroom.jpg", alt: "Bathroom (representative)" },
];

/** Fixed gallery order: real exterior/neighbourhood shots interleaved with
 *  representative interior stock, mirroring the static site's gallery. */
const PHOTOS: PropertyPhoto[] = [
  REAL_PHOTOS[0],
  STOCK_PHOTOS[0],
  STOCK_PHOTOS[1],
  STOCK_PHOTOS[2],
  REAL_PHOTOS[1],
  STOCK_PHOTOS[3],
  STOCK_PHOTOS[4],
  STOCK_PHOTOS[5],
  REAL_PHOTOS[2],
  REAL_PHOTOS[3],
];

/** Cycles the fixed photo set to fill a property's listed image count,
 *  offset by property id so neighbouring listings don't all open on the
 *  same photo. */
export function getPropertyPhotos(property: Property): PropertyPhoto[] {
  const count = Math.max(1, property.images);
  const offset = (property.id - 1) % PHOTOS.length;
  return Array.from({ length: count }, (_, i) => PHOTOS[(offset + i) % PHOTOS.length]);
}
