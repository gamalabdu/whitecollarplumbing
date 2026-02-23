import { Link } from "react-router-dom";
import grandStrandVideo from "@/assets/grandStrand.mp4";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  Phone,
  CheckCircle,
  Droplets,
  Flame,
  PipetteIcon,
  ShowerHead,
  Building2,
  Umbrella,
  Home as HomeIcon,
  Waves,
  CloudRain,
  Palmtree,
  Medal,
  MapPin,
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
    icon: Wrench,
    title: "Emergency Repairs",
    hash: "emergency-repairs",
    description:
      "Burst pipes, leaks, or backups? Our 24/7 emergency team responds fast to prevent damage and restore your plumbing.",
  },
  {
    icon: PipetteIcon,
    title: "Pipe Installation",
    hash: "pipe-installation",
    description:
      "From repiping salt-air-damaged coastal homes to new construction in Carolina Forest, we use premium materials built to last.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    hash: "drain-cleaning",
    description:
      "Stubborn clogs don't stand a chance. We use advanced hydro-jetting and camera inspections to clear and diagnose any blockage.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    hash: "water-heater",
    description:
      "Installation, repair, and maintenance for tank and tankless systems. Stay comfortable with reliable hot water year-round.",
  },
  {
    icon: Waves,
    title: "Coastal Plumbing Protection",
    hash: "coastal-protection",
    description:
      "Salt air corrodes pipes faster at the beach. We offer corrosion inspections, outdoor shower installs, and hard water solutions built for coastal living.",
  },
  {
    icon: HomeIcon,
    title: "Vacation Rental Plumbing",
    hash: "vacation-rental",
    description:
      "Keep your Airbnb or vacation rental guest-ready year-round with turnover plumbing checks, preventive maintenance, and rapid-response repairs.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Remodeling",
    hash: "bathroom-remodeling",
    description:
      "Transform your bathroom with expert plumbing for showers, tubs, vanities, and fixtures — designed around your vision.",
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    hash: "commercial",
    description:
      "Tailored solutions for restaurants on the Myrtle Beach strip, hotels, golf course clubhouses, and retail. We keep your business running.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Little River",
    content:
      "White Collar Plumbing saved us during a late-night pipe burst. They arrived within 30 minutes and had everything fixed by morning. Truly professional service.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Restaurant Owner, North Myrtle Beach",
    content:
      "We rely on White Collar for all our commercial plumbing needs at our oceanfront restaurant. They understand peak tourist season urgency and always deliver on time.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Vacation Rental Manager, Myrtle Beach",
    content:
      "Managing 50+ rental units along the Grand Strand means plumbing emergencies are a given. White Collar is our go-to — reliable, fair pricing, and genuinely great work every single time.",
    rating: 5,
  },
  {
    name: "Tom & Linda Beckett",
    role: "Seasonal Residents, Pawleys Island",
    content:
      "We spend winters in Pawleys and needed someone to winterize our place each spring and fall. White Collar handles it all — we don't worry about a thing while we're away.",
    rating: 5,
  },
  {
    name: "Karen Holloway",
    role: "HOA Board President, Carolina Forest",
    content:
      "Our 200-unit community needed a reliable plumbing partner for backflow testing and emergency calls. White Collar's response time and professionalism are unmatched.",
    rating: 5,
  },
  {
    name: "Dave Simmons",
    role: "Golf Course Manager, Murrells Inlet",
    content:
      "They handle all the plumbing for our clubhouse and pro shop. After Hurricane Ian rattled some pipes, they were out the next morning. Can't recommend them enough.",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Years on the Grand Strand" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={grandStrandVideo}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              Licensed &amp; Insured — Serving the Grand Strand Since 2010
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Plumbing Done Right,{" "}
              <span className="text-blue-300">Every Time</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              From emergency repairs to full bathroom remodels, White Collar
              Plumbing delivers premium craftsmanship and dependable service for
              homes and businesses across the Grand Strand.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white bg-white text-primary hover:bg-white/90 text-base">
                <a href="tel:+11234567890">
                  <Phone className="mr-1 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Plumbing Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether it's a dripping faucet or a full commercial build-out, our
            team has the expertise to handle it all.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} to={`/services#${service.hash}`}>
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The White Collar Difference
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We're not your average plumbing company. Built for the unique
                demands of coastal South Carolina, our commitment to
                professionalism, transparency, and quality workmanship sets us
                apart from the rest.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Upfront pricing with no hidden fees",
                  "Background-checked, uniformed technicians",
                  "Same-day service availability",
                  "1-year warranty on all labor",
                  "Coastal corrosion expertise — we know salt air plumbing",
                  "Vacation rental & property management partnerships",
                  "Military, senior & first-responder discounts",
                  "Complimentary plumbing inspection with every visit",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <Clock className="mb-3 h-8 w-8" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm opacity-90">Emergency Response</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Star className="mb-3 h-8 w-8 text-primary" />
                    <p className="text-2xl font-bold">4.9/5</p>
                    <p className="text-sm text-muted-foreground">
                      Average Rating
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <ShieldCheck className="mb-3 h-8 w-8 text-primary" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">
                      Satisfaction Guarantee
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <Wrench className="mb-3 h-8 w-8" />
                    <p className="text-2xl font-bold">5,000+</p>
                    <p className="text-sm opacity-90">Jobs Completed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it — hear from homeowners, rental
            managers, and businesses across the Grand Strand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <Separator className="my-4" />
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hurricane / Storm Season */}
      <section className="border-y bg-amber-50 dark:bg-amber-950/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-200">
                <CloudRain className="mr-1.5 h-3.5 w-3.5" />
                Hurricane Season Readiness
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Storm-Proof Your Plumbing Before Hurricane Season
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Living on the Grand Strand means being prepared. From June
                through November, tropical storms and hurricanes can cause
                flooding, pipe damage, and sewer backups. Our storm-prep
                plumbing inspections help protect your home or rental property
                before the weather turns.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Pre-storm plumbing inspection & shut-off valve check",
                  "Sump pump installation and testing",
                  "Backflow preventer installation to stop sewer surge",
                  "Post-storm damage assessment & emergency repairs",
                  "Flood-zone compliant plumbing upgrades",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" asChild>
                <Link to="/contact">
                  Schedule a Storm-Prep Inspection
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Card className="border-amber-200 bg-white dark:border-amber-800 dark:bg-amber-950/40">
              <CardContent className="p-8">
                <Umbrella className="mb-4 h-10 w-10 text-amber-600" />
                <h3 className="text-xl font-bold">Seasonal Residents?</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Heading north for the summer or south for the winter? We offer
                  seasonal plumbing services specifically for snowbirds and
                  part-time Grand Strand residents:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Spring startup — open lines, check for freeze damage",
                    "Fall winterization — drain pipes, insulate, protect",
                    "Vacancy monitoring partnerships",
                    "Pre-arrival plumbing health check",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area & Discounts */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              Service Area
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Proudly Serving the Entire Grand Strand
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From the NC border down to Georgetown, we cover every community
              along the Grand Strand and the surrounding Lowcountry. Whether
              you're in a beachfront condo, a Carolina Forest subdivision, or a
              historic home in Conway — we're never far away.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {[
                "Little River",
                "North Myrtle Beach",
                "Myrtle Beach",
                "Carolina Forest",
                "Conway",
                "Socastee",
                "Surfside Beach",
                "Garden City Beach",
                "Murrells Inlet",
                "Pawleys Island",
                "Georgetown",
                "Longs",
                "Calabash, NC",
                "Sunset Beach, NC",
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Medal className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">
                  Military, Senior & First-Responder Discounts
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The Grand Strand is home to thousands of active-duty
                  military, veterans, retirees, and first responders. We're
                  proud to offer 10% off all services to say thank you for
                  your service. Just mention your status when you call.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Palmtree className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">
                  Vacation Rental Owner? We've Got You Covered.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  With thousands of vacation rentals along the Grand Strand,
                  plumbing problems between guests can cost you bookings. We
                  offer priority service plans for property managers and
                  Airbnb hosts — including same-day turnaround, preventive
                  maintenance schedules, and seasonal deep inspections.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Waves className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">
                  Built for Coastal Living
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Salt air, sandy soil, hard water, and humidity wreak havoc on
                  plumbing systems. Our technicians are trained in the specific
                  challenges of coastal South Carolina plumbing — from
                  accelerated pipe corrosion to outdoor shower installations
                  and water softener systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Contact us today for a free, no-obligation quote. Whether you're
              a full-time Grand Strand resident, a seasonal homeowner, or
              managing vacation rentals — our team is standing by to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base"
              >
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white/40 text-white hover:bg-white/10 text-base"
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
