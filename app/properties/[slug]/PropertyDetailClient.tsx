"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import WhatsAppFab from "@/components/WhatsAppFab";
import {
  AGENT,
  amenities,
  describeProperty,
  propertyWaLink,
  type Property,
} from "@/lib/property-data";
import { getPropertyPhotos } from "@/lib/property-images";

const STATUS_STYLE: Record<Property["status"], string> = {
  Available: "bg-success-dark",
  Sold: "bg-[#6b6b60]",
  Rented: "bg-[#6b6b60]",
};

export default function PropertyDetailClient({ property }: { property: Property }) {
  const photos = getPropertyPhotos(property);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, photos.length]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full overflow-x-hidden bg-cream pb-[54px] text-body lg:pb-0">
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-5 text-[13px] text-muted">
        <Link href="/properties" className="text-muted no-underline">
          Properties
        </Link>{" "}
        / {property.tower} / {property.title}
      </div>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pt-5">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative block h-[260px] w-full cursor-zoom-in overflow-hidden rounded-[14px] border-0 p-0 lg:h-[460px]"
        >
          <Image
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
            priority
          />
          <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
            {activeIndex + 1} / {photos.length}
          </span>
        </button>

        <div className="mt-3 grid grid-cols-4 gap-2.5 sm:grid-cols-6">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative h-16 overflow-hidden rounded-lg border-0 p-0 ${
                i === activeIndex ? "outline outline-2 outline-offset-1 outline-gold" : ""
              }`}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-11 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div>
          <div className="mb-3.5 flex gap-2">
            <span className="rounded-[5px] bg-navy px-[11px] py-1.5 text-[11px] font-extrabold text-white">
              {property.purpose === "Sale" ? "FOR SALE" : "FOR RENT"}
            </span>
            <span
              className={`rounded-[5px] px-[11px] py-1.5 text-[11px] font-extrabold text-white ${STATUS_STYLE[property.status]}`}
            >
              {property.status.toUpperCase()}
            </span>
          </div>

          <h1 className="mb-1.5 font-serif text-[30px] text-navy">{property.title}</h1>
          <div className="mb-3.5 text-[15px] text-muted">
            {property.tower}, Amanora Park Town, Pune
          </div>
          <div className="mb-8 font-serif text-[28px] font-bold text-navy">{property.price}</div>

          <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl bg-white p-6 sm:grid-cols-3">
            <Detail label="Configuration" value={`${property.bhk} BHK`} />
            <Detail label="Bathrooms" value={String(property.baths)} />
            <Detail label="Area" value={property.area} />
            <Detail label="Furnishing" value={property.furnishing} />
            <Detail label="Parking" value={property.parking} />
            <Detail
              label="Floor"
              value={property.totalFloors > 1 ? `${property.floor} of ${property.totalFloors}` : property.floor}
            />
          </div>

          <h2 className="mb-3.5 font-serif text-[22px] text-navy">Description</h2>
          <p className="mb-8 text-[15px] leading-[1.7] text-ink">{describeProperty(property)}</p>

          <h2 className="mb-3.5 font-serif text-[22px] text-navy">Amenities</h2>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amenities.map((a) => (
              <div key={a} className="rounded-lg bg-white p-2.5 text-center text-[13px] text-ink">
                {a}
              </div>
            ))}
          </div>

          <h2 className="mb-3.5 font-serif text-[22px] text-navy">Location</h2>
          <div className="mb-3 rounded-xl bg-white p-5">
            <div className="mb-1 font-bold text-navy">{property.tower}</div>
            <div className="text-sm text-muted">Amanora Park Town, Hadapsar, Pune</div>
            <p className="mt-2 text-xs text-muted">
              Exact apartment number is shared once you get in touch — not published publicly.
            </p>
          </div>
          <div className="h-[220px] overflow-hidden rounded-xl">
            <iframe
              title="Amanora Park Town location"
              src="https://www.google.com/maps?q=Amanora+Park+Town%2C+Hadapsar%2C+Pune&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Enquiry card */}
        <div className="rounded-[14px] bg-white p-6 shadow-[0_10px_30px_rgba(11,46,78,0.12)] lg:sticky lg:top-[90px]">
          <div className="mb-4 text-[17px] font-bold text-navy">Interested in this property?</div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-beige font-serif text-lg font-bold text-navy">
              SK
            </div>
            <div>
              <div className="font-bold text-navy">{AGENT.name}</div>
              <div className="text-[13px] text-muted">{AGENT.business}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${AGENT.phones[0]}`}
              className="rounded-lg bg-navy py-[13px] text-center font-bold text-white no-underline"
            >
              Call
            </a>
            <a
              href={propertyWaLink(property, pageUrl || undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-success py-[13px] text-center font-bold text-white no-underline"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setShowForm((v) => !v)}
              className="cursor-pointer rounded-lg border-none bg-beige py-[13px] text-center font-bold text-navy"
            >
              Send Enquiry
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5">
              <input
                required
                placeholder="Your Name"
                className="rounded-[7px] border border-border-input p-[11px] font-sans"
              />
              <input
                required
                placeholder="Mobile Number"
                className="rounded-[7px] border border-border-input p-[11px] font-sans"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-[7px] border-none bg-navy p-3 font-bold text-white"
              >
                Submit
              </button>
              {submitted && (
                <div className="text-center text-[13px] text-success-dark">
                  Thank you, {AGENT.name.split(" ")[0]} will contact you shortly.
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
      <MobileBottomBar />

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Property photo viewer"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 cursor-pointer border-none bg-transparent text-3xl text-white"
          >
            ×
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="mt-4 flex items-center gap-6 text-white" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex((i) => (i - 1 + photos.length) % photos.length)}
              className="cursor-pointer border-none bg-transparent text-2xl text-white"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <span className="text-sm">
              {activeIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={() => setActiveIndex((i) => (i + 1) % photos.length)}
              className="cursor-pointer border-none bg-transparent text-2xl text-white"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 text-xs text-muted">{label}</div>
      <div className="font-bold text-navy">{value}</div>
    </div>
  );
}
