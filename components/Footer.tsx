import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark px-6 py-10 text-center text-xs text-[#CBD6DF]">
      © Reliable Properties &nbsp;|&nbsp;{" "}
      <Link href="/" className="text-[#CBD6DF]">
        Back to Home
      </Link>
    </footer>
  );
}
