import { generalWaLink } from "@/lib/property-data";

export default function WhatsAppFab() {
  return (
    <a
      href={generalWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[84px] right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-success text-white no-underline shadow-[0_8px_20px_rgba(0,0,0,0.25)] lg:bottom-5"
    >
      <span className="text-2xl">☎</span>
    </a>
  );
}
