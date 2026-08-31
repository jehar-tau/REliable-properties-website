export type Purpose = "Sale" | "Rent";
export type PropertyStatus = "Available" | "Sold" | "Rented";

export interface Property {
  id: number;
  slug: string;
  title: string;
  tower: string;
  purpose: Purpose;
  price: string;
  priceValue: number;
  status: PropertyStatus;
  bhk: number;
  baths: number;
  area: string;
  furnishing: string;
  floor: string;
  totalFloors: number;
  parking: string;
  facing: string;
  featured: boolean;
  images: number;
}

export const towers = [
  "Future Towers",
  "Aspire Towers",
  "Adreno Towers",
  "Ascent Towers",
  "Metro Towers",
  "Trendy Towers",
  "Neo Towers",
  "Gateway Towers",
] as const;

export const properties: Property[] = [
  { id: 1, slug: "3bhk-future-towers-amanora", title: "3 BHK Fully Furnished Apartment", tower: "Future Towers", purpose: "Sale", price: "₹1.85 Cr", priceValue: 18500000, status: "Available", bhk: 3, baths: 3, area: "1,650 sq.ft.", furnishing: "Fully Furnished", floor: "18th Floor", totalFloors: 22, parking: "2 Covered", facing: "East", featured: true, images: 6 },
  { id: 2, slug: "2bhk-aspire-towers-amanora", title: "2 BHK Semi Furnished Apartment", tower: "Aspire Towers", purpose: "Rent", price: "₹32,000/month", priceValue: 32000, status: "Available", bhk: 2, baths: 2, area: "1,120 sq.ft.", furnishing: "Semi Furnished", floor: "9th Floor", totalFloors: 18, parking: "1 Covered", facing: "North", featured: true, images: 5 },
  { id: 3, slug: "4bhk-villa-gateway-towers-amanora", title: "4 BHK Independent Villa", tower: "Gateway Towers", purpose: "Sale", price: "₹3.2 Cr", priceValue: 32000000, status: "Available", bhk: 4, baths: 4, area: "2,800 sq.ft.", furnishing: "Unfurnished", floor: "Ground+1", totalFloors: 2, parking: "3 Open", facing: "South-East", featured: true, images: 7 },
  { id: 4, slug: "1bhk-studio-neo-towers-amanora", title: "1 BHK Studio Apartment", tower: "Neo Towers", purpose: "Rent", price: "₹22,000/month", priceValue: 22000, status: "Available", bhk: 1, baths: 1, area: "620 sq.ft.", furnishing: "Semi Furnished", floor: "4th Floor", totalFloors: 16, parking: "1 Open", facing: "West", featured: false, images: 4 },
  { id: 5, slug: "2bhk-adreno-towers-amanora", title: "2 BHK Unfurnished Apartment", tower: "Adreno Towers", purpose: "Sale", price: "₹1.1 Cr", priceValue: 11000000, status: "Available", bhk: 2, baths: 2, area: "980 sq.ft.", furnishing: "Unfurnished", floor: "6th Floor", totalFloors: 20, parking: "1 Covered", facing: "North-East", featured: true, images: 5 },
  { id: 6, slug: "3bhk-ascent-towers-amanora", title: "3 BHK Fully Furnished Apartment", tower: "Ascent Towers", purpose: "Rent", price: "₹48,000/month", priceValue: 48000, status: "Available", bhk: 3, baths: 3, area: "1,580 sq.ft.", furnishing: "Fully Furnished", floor: "14th Floor", totalFloors: 19, parking: "2 Covered", facing: "East", featured: true, images: 6 },
  { id: 7, slug: "3bhk-metro-towers-amanora", title: "3 BHK Semi Furnished Apartment", tower: "Metro Towers", purpose: "Sale", price: "₹1.65 Cr", priceValue: 16500000, status: "Sold", bhk: 3, baths: 2, area: "1,490 sq.ft.", furnishing: "Semi Furnished", floor: "11th Floor", totalFloors: 18, parking: "1 Covered", facing: "South", featured: false, images: 5 },
  { id: 8, slug: "2bhk-trendy-towers-amanora", title: "2 BHK Fully Furnished Apartment", tower: "Trendy Towers", purpose: "Rent", price: "₹35,000/month", priceValue: 35000, status: "Rented", bhk: 2, baths: 2, area: "1,050 sq.ft.", furnishing: "Fully Furnished", floor: "7th Floor", totalFloors: 15, parking: "1 Covered", facing: "West", featured: false, images: 4 },
  { id: 9, slug: "4bhk-penthouse-future-towers-amanora", title: "4 BHK Penthouse", tower: "Future Towers", purpose: "Sale", price: "₹4.5 Cr", priceValue: 45000000, status: "Available", bhk: 4, baths: 4, area: "3,100 sq.ft.", furnishing: "Fully Furnished", floor: "24th Floor", totalFloors: 24, parking: "3 Covered", facing: "East", featured: true, images: 8 },
  { id: 10, slug: "1bhk-aspire-towers-amanora", title: "1 BHK Apartment", tower: "Aspire Towers", purpose: "Rent", price: "₹18,000/month", priceValue: 18000, status: "Available", bhk: 1, baths: 1, area: "580 sq.ft.", furnishing: "Semi Furnished", floor: "3rd Floor", totalFloors: 18, parking: "1 Open", facing: "North", featured: false, images: 4 },
];

export const amenities = [
  "Swimming Pool",
  "Gym",
  "Clubhouse",
  "Garden",
  "Security",
  "Parking",
  "Children's Play Area",
  "Power Backup",
];

export const AGENT = {
  name: "Shyam Kadam",
  business: "Reliable Properties",
  phones: ["9890982473", "8668611436"],
  whatsappNumber: "919890982473",
};

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function waLink(text: string): string {
  return `https://wa.me/${AGENT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function generalWaLink(): string {
  return waLink("Hi Shyam, I'm looking for a property in Amanora.");
}

export function propertyWaLink(property: Property, url?: string): string {
  const base = `Hi Shyam, I'm interested in this property: ${property.title}, ${property.tower}, ${property.price}.`;
  return waLink(url ? `${base} ${url}` : base);
}

/** Auto-generated listing copy from the structured fields — property-data.js
 *  carries no free-text description, so this stands in for CMS copy. */
export function describeProperty(property: Property): string {
  const purposeText = property.purpose === "Sale" ? "for sale" : "available for rent";
  const furnishingText = property.furnishing.toLowerCase();
  return (
    `A ${furnishingText} ${property.bhk} BHK home ${purposeText} in ${property.tower}, ` +
    `Amanora Park Town. Set on the ${property.floor.toLowerCase()} ` +
    `${property.totalFloors > 1 ? `(of ${property.totalFloors} floors) ` : ""}` +
    `and facing ${property.facing}, it offers ${property.area} of living space with ${property.parking.toLowerCase()} parking. ` +
    `${property.tower} is one of the well-established addresses in Amanora, close to the central park, retail street and schools.`
  );
}
