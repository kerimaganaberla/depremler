import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="w-500 text-xl font-semibold">
      <span className=" bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
        depremler
      </span>
    </Link>
  );
}
