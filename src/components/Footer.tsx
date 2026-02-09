import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--hops-navy-dark)] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">Mark Watson for Oregon House District 29</p>
        <p className="text-gray-400 text-sm mb-4">
          Paid for by Friends of Mark Watson
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-[var(--hops-green)] transition-colors">About</Link>
          {/* Supporters link hidden temporarily
          <Link href="/supporters" className="hover:text-[var(--hops-green)] transition-colors">Supporters</Link>
          */}
          <Link href="/contribute" className="hover:text-[var(--hops-green)] transition-colors">Contribute</Link>
        </div>
      </div>
    </footer>
  );
}
