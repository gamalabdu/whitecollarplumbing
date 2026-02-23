import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground">
              White Collar
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Plumbing
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium",
                location.pathname === link.href &&
                  "bg-accent text-accent-foreground"
              )}
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          ))}
          <div className="ml-4">
            <Button asChild size="sm">
              <a href="tel:+11234567890">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
            </Button>
          </div>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Droplets className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">White Collar Plumbing</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pt-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      location.pathname === link.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-6 border-t pt-6">
                <Button className="w-full" size="lg" asChild>
                  <a href="tel:+11234567890">
                    <Phone className="h-4 w-4" />
                    Call (123) 456-7890
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
