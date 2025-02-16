import { NavbarLinks } from "@/components/navbar/navbar-links";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 border-b shadow-sm fixed top-0 inset-0 z-50 bg-background">
      <div className="mx-auto max-w-7xl h-full bg-transparent flex items-center justify-between px-2 md:px-4">
        <div className="bg-transparent">
          <Link href={"/"}>
            <span className="font-extrabold bg-transparen text-2xl">
              CV<span className="text-primary">Builder</span>
            </span>
          </Link>
        </div>
        <NavbarLinks />
        <Button className="hidden md:flex items-center justify-center gap-x-2">
          Commencer
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
};
