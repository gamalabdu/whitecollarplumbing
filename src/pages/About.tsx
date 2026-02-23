import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Target,
  Award,
  Lightbulb,
  Handshake,
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

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We provide honest assessments and transparent pricing. No upselling, no hidden fees — just straightforward service you can trust.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every job meets our exacting standards. We use premium materials and proven techniques to deliver work that lasts.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We treat every home and business like our own. That means showing up on time, respecting your space, and cleaning up after ourselves.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We invest in the latest tools and technology — from camera inspections to trenchless pipe repair — so you get the best results possible.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    description:
      "When we say we'll be there, we mean it. Our team shows up on time, every time, and communicates clearly throughout the process.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "As a locally owned Grand Strand business, we sponsor youth sports leagues, support the Lowcountry Food Bank, and partner with Habitat for Humanity Horry County. This community raised us — we give back every chance we get.",
  },
];

const team = [
  {
    name: "Michael Torres",
    role: "Founder & Master Plumber",
    bio: "With over 20 years in the industry, Michael founded White Collar Plumbing to raise the standard of service in residential and commercial plumbing.",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    bio: "David ensures every project runs smoothly from scheduling to completion. His attention to detail keeps our team efficient and our customers happy.",
  },
  {
    name: "Jessica Alvarez",
    role: "Lead Technician",
    bio: "A certified journeyman plumber specializing in complex installations and renovations, Jessica brings precision and expertise to every job.",
  },
  {
    name: "Ryan Cooper",
    role: "Emergency Services Lead",
    bio: "Ryan heads our 24/7 emergency response team. His calm under pressure and rapid problem-solving skills make him invaluable during crises.",
  },
];

const milestones = [
  { year: "2010", event: "White Collar Plumbing founded in Little River, SC" },
  { year: "2013", event: "Expanded team to 10 full-time technicians" },
  { year: "2016", event: "Launched commercial plumbing division" },
  { year: "2019", event: "Reached 3,000 completed jobs milestone" },
  { year: "2022", event: "Opened second location in North Myrtle Beach" },
  { year: "2025", event: "Surpassed 5,000 jobs with a 4.9-star rating" },
];

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/5 via-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Users className="mr-1.5 h-3.5 w-3.5" />
              About White Collar Plumbing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built on Trust,{" "}
              <span className="text-primary">Driven by Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Since 2010, we've been the Grand Strand's trusted plumbing partner —
              combining old-school craftsmanship with modern professionalism to
              deliver an experience you won't find anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">
              Our Story
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From One Truck to the Grand Strand's Most Trusted Plumbing Team
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                White Collar Plumbing started with a simple idea: plumbing
                service should be professional, transparent, and reliable. Our
                founder, Michael Torres, spent years working for large plumbing
                companies and saw firsthand how customers were often left in the
                dark — unclear pricing, missed appointments, and subpar work.
              </p>
              <p className="leading-relaxed">
                He launched White Collar Plumbing out of a single service truck
                with a commitment to doing things differently. Every technician
                would be trained not just in plumbing, but in customer service.
                Every quote would be honest. Every job site would be left
                cleaner than we found it.
              </p>
              <p className="leading-relaxed">
                That philosophy struck a chord with Grand Strand homeowners,
                vacation rental managers, and business owners alike. Today,
                we're a team of over 20 skilled professionals serving every
                community from Calabash to Georgetown. We've completed more
                than 5,000 jobs with a near-perfect customer satisfaction
                rating — and we understand the unique plumbing challenges
                that come with coastal South Carolina living.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Target className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To redefine what customers expect from a plumbing company by
                  delivering premium service, honest communication, and
                  craftsmanship that stands the test of time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <Lightbulb className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the gold standard in plumbing — a company that customers
                  recommend without hesitation and professionals aspire to join.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Milestones Along the Way
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-semibold text-primary">
                      {milestone.year}
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Our Values
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Stand For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These aren't just words on a wall — they guide every decision we
            make and every interaction we have.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the People Behind the Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of certified professionals brings decades of combined
              experience to every project.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <Separator className="my-3" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Giving Back
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Invested in the Grand Strand Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We live here, we work here, and we believe in making the Grand
            Strand a better place for everyone.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Habitat for Humanity",
              detail:
                "We donate plumbing labor and materials to Habitat for Humanity Horry County builds every year.",
            },
            {
              title: "Lowcountry Food Bank",
              detail:
                "Our team volunteers and donates quarterly to help fight food insecurity across Horry and Georgetown counties.",
            },
            {
              title: "Youth Sports Sponsorships",
              detail:
                "Proud sponsors of Little River Little League, North Myrtle Beach youth soccer, and Conway rec basketball.",
            },
            {
              title: "Storm Recovery Support",
              detail:
                "After every major storm, we offer discounted emergency repairs and free inspections for elderly and low-income residents.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Whether you need a quick fix or a full renovation, our team is
              ready to deliver the white-collar service you deserve.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="mt-8 text-base"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
