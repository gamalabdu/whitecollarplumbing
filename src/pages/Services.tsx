import { Link } from "react-router-dom";
import {
  Wrench,
  ArrowRight,
  Phone,
  CheckCircle,
  Droplets,
  Flame,
  PipetteIcon,
  ShowerHead,
  Building2,
  HardHat,
  Gauge,
  Thermometer,
  Pipette,
  Shield,
  Waves,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    id: "emergency-repairs",
    icon: Wrench,
    title: "Emergency Repairs",
    tagline: "Fast response when every minute counts.",
    description:
      "Burst pipes, backed-up sewage, and major leaks don't wait for business hours — and neither do we. Our 24/7 emergency team is dispatched immediately to minimize damage, protect your property, and restore your plumbing as quickly as possible.",
    features: [
      "24/7 availability, 365 days a year",
      "Rapid response times across the Grand Strand",
      "Burst pipe repair and water shut-off",
      "Sewer line backups and overflows",
      "Gas leak detection and repair",
      "Flood damage mitigation",
    ],
  },
  {
    id: "pipe-installation",
    icon: PipetteIcon,
    title: "Pipe Installation & Repiping",
    tagline: "Modern piping solutions built for the coast.",
    description:
      "Whether you're building new in Carolina Forest or replacing corroded pipes in an older beach home, our installation team uses premium, corrosion-resistant materials — including PEX and copper — to deliver reliable, long-lasting plumbing systems tailored to coastal properties.",
    features: [
      "Whole-house repiping for salt-air-damaged properties",
      "New construction rough-in and finish plumbing",
      "PEX, copper, and CPVC piping options",
      "Water line installation and replacement",
      "Sewer line replacement",
      "Pressure testing and SC code compliance",
    ],
  },
  {
    id: "drain-cleaning",
    icon: Droplets,
    title: "Drain Cleaning",
    tagline: "Clear the blockage. Prevent it from coming back.",
    description:
      "Slow drains and stubborn clogs are more than a nuisance — they can lead to backups and water damage if left untreated. We use state-of-the-art hydro-jetting and sewer camera inspections to clear blockages and identify underlying issues before they become costly problems.",
    features: [
      "Hydro-jetting for tough clogs and buildup",
      "Sewer camera inspection and diagnostics",
      "Kitchen, bathroom, and floor drain clearing",
      "Main sewer line cleaning",
      "Root intrusion removal",
      "Preventive drain maintenance plans",
    ],
  },
  {
    id: "water-heater",
    icon: Flame,
    title: "Water Heater Service",
    tagline: "Reliable hot water, year-round comfort.",
    description:
      "From installation to repair and routine maintenance, we service all types of water heaters — tank, tankless, and hybrid. Whether your unit is underperforming or you're ready for an energy-efficient upgrade, our technicians will recommend the best solution for your home and budget.",
    features: [
      "Tank and tankless water heater installation",
      "Same-day repair for most models",
      "Annual flush and maintenance service",
      "Energy-efficient upgrade consultations",
      "Temperature and pressure valve inspection",
      "Expansion tank installation",
    ],
  },
  {
    id: "bathroom-remodeling",
    icon: ShowerHead,
    title: "Bathroom Remodeling",
    tagline: "Your dream bathroom, expertly plumbed.",
    description:
      "A bathroom remodel is only as good as the plumbing behind it. We work alongside your contractor — or manage the plumbing scope independently — to ensure every shower, tub, vanity, and fixture is installed precisely, up to code, and leak-free.",
    features: [
      "Shower and tub installation",
      "Vanity and sink plumbing",
      "Toilet replacement and relocation",
      "Fixture upgrades (faucets, showerheads, valves)",
      "Rough-in plumbing for new layouts",
      "ADA-compliant bathroom installations",
    ],
  },
  {
    id: "coastal-protection",
    icon: Waves,
    title: "Coastal Plumbing Protection",
    tagline: "Plumbing solutions built for life at the beach.",
    description:
      "The Grand Strand's salt air, sandy soil, hard water, and high humidity create unique challenges that inland plumbers rarely face. Our coastal plumbing protection services are designed specifically for beachfront condos, oceanfront homes, and properties in flood zones — keeping your system resilient against the elements.",
    features: [
      "Salt air corrosion inspections and pipe replacement",
      "Outdoor shower installation and maintenance",
      "Water softener and filtration system installation",
      "Hurricane and storm prep plumbing assessments",
      "Sump pump installation and testing",
      "Flood-zone compliant plumbing upgrades",
    ],
  },
  {
    id: "vacation-rental",
    icon: HomeIcon,
    title: "Vacation Rental Plumbing",
    tagline: "Keep your rental guest-ready, booking after booking.",
    description:
      "With thousands of vacation rentals lining the Grand Strand, a plumbing problem between guests can cost you reviews and revenue. We partner with property managers and Airbnb hosts to provide priority service, rapid turnaround repairs, and preventive maintenance plans that keep your properties in top shape all season long.",
    features: [
      "Priority same-day service for rental properties",
      "Guest-turnover plumbing checks",
      "Preventive maintenance contracts",
      "Seasonal deep inspections (pre-summer & post-season)",
      "Multi-property discount packages",
      "Emergency after-hours support for property managers",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Plumbing",
    tagline: "Keep your business running without interruption.",
    description:
      "Downtime costs money — especially during peak tourist season. Our commercial plumbing team understands the urgency of keeping Myrtle Beach restaurants, hotels, golf course clubhouses, retail stores, and multi-unit properties running smoothly. We offer scheduled maintenance, emergency service, and build-out plumbing for new commercial spaces.",
    features: [
      "Restaurant and food service plumbing",
      "Hotel and resort plumbing maintenance",
      "Office building maintenance contracts",
      "Grease trap installation and cleaning",
      "Backflow prevention and testing",
      "Multi-unit, HOA, and condo association services",
    ],
  },
];

const process = [
  {
    step: "01",
    icon: Phone,
    title: "Get in Touch",
    description:
      "Call us or fill out our online form. We'll ask a few questions to understand your situation and schedule a visit at your convenience.",
  },
  {
    step: "02",
    icon: Gauge,
    title: "Inspection & Diagnosis",
    description:
      "Our technician arrives on time, inspects the issue, and provides a clear explanation of what's happening and what needs to be done.",
  },
  {
    step: "03",
    icon: Pipette,
    title: "Upfront Quote",
    description:
      "Before any work begins, you'll receive a transparent, written estimate. No surprises, no hidden fees — just honest pricing.",
  },
  {
    step: "04",
    icon: HardHat,
    title: "Expert Repair",
    description:
      "Our licensed technicians complete the work efficiently using premium materials and proven techniques, leaving your space clean and tidy.",
  },
  {
    step: "05",
    icon: Shield,
    title: "Guaranteed Results",
    description:
      "Every job comes with our satisfaction guarantee and a 1-year labor warranty. If something isn't right, we'll make it right.",
  },
];

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/5 via-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Wrench className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Plumbing Solutions for{" "}
              <span className="text-primary">Every Need</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From quick fixes to full-scale installations, White Collar
              Plumbing offers a comprehensive range of residential, commercial,
              and coastal-specific services across the Grand Strand — all
              backed by our satisfaction guarantee.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="tel:+11234567890">
                  <Phone className="mr-1 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav cards */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium leading-tight">
                  {service.title.split(" &")[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "bg-muted/40" : ""}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-primary">
                  {service.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Button className="mt-8" asChild>
                  <Link to="/contact">
                    Request This Service
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <Card className={index % 2 === 1 ? "lg:order-1" : ""}>
                <CardHeader>
                  <CardTitle className="text-lg">What's Included</CardTitle>
                  <CardDescription>
                    Our {service.title.toLowerCase()} service covers:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple, transparent, and stress-free — from your first call to the
              finished job.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Card key={step.step} className="relative text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <Thermometer className="h-4 w-4 rotate-90 text-muted-foreground/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not Sure What You Need?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              No problem. Tell us what's going on and we'll recommend the right
              solution — no charge for the consultation.
            </p>
            <Separator className="mx-auto my-6 max-w-xs bg-primary-foreground/20" />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base"
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                <a href="tel:+11234567890">
                  <Phone className="mr-1 h-4 w-4" />
                  (123) 456-7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
