import Link from "next/link";
import { AGENT, generalWaLink } from "@/lib/property-data";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] grid grid-cols-3 border-t border-border bg-white lg:hidden">
      <a
        href={`tel:${AGENT.phones[0]}`}
        className="border-r border-border px-1 py-3 text-center text-xs font-bold text-navy no-underline"
      >
        Call
      </a>
      <a
        href={generalWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="border-r border-border px-1 py-3 text-center text-xs font-bold text-success no-underline"
      >
        WhatsApp
      </a>
      <Link
        href="/properties"
        className="px-1 py-3 text-center text-xs font-bold text-navy no-underline"
      >
        View Properties
      </Link>
    </div>
  );
}
