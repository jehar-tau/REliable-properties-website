import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyBySlug, properties, describeProperty } from "@/lib/property-data";
import PropertyDetailClient from "./PropertyDetailClient";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) return {};
  const priceLabel = property.purpose === "Sale" ? property.price : `${property.price}`;
  return {
    title: `${property.title}, ${property.tower} — ${priceLabel}`,
    description: describeProperty(property),
    alternates: { canonical: `/properties/${property.slug}` },
    openGraph: {
      title: `${property.title}, ${property.tower}`,
      description: describeProperty(property),
    },
  };
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();
  return <PropertyDetailClient property={property} />;
}
