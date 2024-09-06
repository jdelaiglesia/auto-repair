"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navbar() {
  const pathName = usePathname();

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
      <Link
        href={"/"}
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CarIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Auto Repair</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href={pathName !== "/" ? "/#services" : "#services"}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Servicios
        </Link>
        <Link
          href="/catalog"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Catálogo
        </Link>
        <Link
          href={pathName !== "/" ? "/#contact" : "#contact"}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
