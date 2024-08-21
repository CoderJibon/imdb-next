"use client";
import Link from "next/link.js";
import { useSearchParams } from "next/navigation.js";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <div>
        <Link
          className="hover:text-amber-500 font-medium font-weight-bold "
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
