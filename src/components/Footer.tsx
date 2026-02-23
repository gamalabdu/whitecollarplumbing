import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">
                  White Collar
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Plumbing
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium plumbing services for residential, commercial, and
              vacation rental properties across the Grand Strand. Licensed,
              insured, and committed to excellence since 2010.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Emergency Repairs", hash: "emergency-repairs" },
                { label: "Pipe Installation", hash: "pipe-installation" },
                { label: "Drain Cleaning", hash: "drain-cleaning" },
                { label: "Water Heater Service", hash: "water-heater" },
                { label: "Coastal Protection", hash: "coastal-protection" },
                { label: "Vacation Rental Plumbing", hash: "vacation-rental" },
                { label: "Bathroom Remodeling", hash: "bathroom-remodeling" },
                { label: "Commercial Plumbing", hash: "commercial" },
              ].map((service) => (
                <li key={service.hash}>
                  <Link
                    to={`/services#${service.hash}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>311 Horsetail Court<br />Little River, SC 29566</span>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@whitecollar.plumbing"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@whitecollar.plumbing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} White Collar Plumbing. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Licensed &amp; Insured &middot; SC License #PLB-12345 &middot;
            Serving the Grand Strand &amp; Surrounding Areas &middot;
            Military &amp; Senior Discounts Available
          </p>
        </div>
      </div>
    </footer>
  );
}
