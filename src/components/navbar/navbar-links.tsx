"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const NavbarLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      label: "Accueil",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Services",
      href: "/services",
      active: pathname === "/services",
    },
  ];

  return (
    <>
      {isMenuOpen ? (
        <div className="md:hidden ml-auto" onClick={() => setIsMenuOpen(false)}>
          <X className="w-6 h-6" />
        </div>
      ) : (
        <div className="md:hidden ml-auto" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </div>
      )}

      <div className="hidden md:flex items-center h-full">
        <div className="w-full mx-auto flex items-center gap-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-semibold text-lg hover:text-primary",
                link.active && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute bg-background inset-0 top-20 h-0 transition-all overflow-hidden w-full",
          isMenuOpen && "h-56"
        )}
      >
        <div className="flex flex-col gap-y-4 items-center justify-between h-full p-4 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border border-input w-full flex items-center justify-center py-2 font-semibold text-lg hover:bg-muted",
                link.active && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button>Commencer</Button>
        </div>
      </div>
    </>
  );
};
