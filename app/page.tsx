import type { Metadata } from "next";
import { properties, describeProperty } from "@/lib/property-data";
import PropertyDetailClient from "./properties/[slug]/PropertyDetailClient";

const property = properties[0];

export const metadata: Metadata = {
  title: `${property.title}, ${property.tower} — ${property.price}`,
  description: describeProperty(property),
};

// The site's single published listing lives at the domain root, matching
// the original Property-Detail.dc.html mock this was built from.
export default function RootPage() {
  return <PropertyDetailClient property={property} />;
}
