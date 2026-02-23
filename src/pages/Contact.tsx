import type { FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(123) 456-7890",
    sub: "Available 24/7 for emergencies",
    href: "tel:+11234567890",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@whitecollar.plumbing",
    sub: "We respond within 2 business hours",
    href: "mailto:info@whitecollar.plumbing",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "311 Horsetail Court",
    sub: "Little River, SC 29566",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon–Fri: 7AM – 6PM",
    sub: "Sat: 8AM – 2PM · Sun: Emergency Only",
    href: "#",
  },
];

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 2 business hours.");
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/5 via-background to-accent/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              We'd Love to{" "}
              <span className="text-primary">Hear From You</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Have a question, need a quote, or facing a plumbing emergency?
              Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-7xl px-4 -mt-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <info.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{info.title}</h3>
                {info.href !== "#" ? (
                  <a
                    href={info.href}
                    className="mt-1 block text-sm font-medium text-primary hover:underline"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium">{info.detail}</p>
                )}
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {info.sub}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Form & Map */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Badge variant="outline" className="mb-4">
              Send a Message
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              Request a Free Quote
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out the form below and we'll get back to you within 2
              business hours with a detailed estimate.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Needed
                </label>
                <Input
                  id="service"
                  placeholder="e.g. Drain cleaning, water heater repair, bathroom remodel..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your plumbing needs, preferred timeline, or any questions you have..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Service Area</CardTitle>
                <CardDescription>
                  We proudly serve Little River and the surrounding communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted/60 p-6">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="text-center text-sm font-medium">
                    Serving the Grand Strand &amp; Beyond
                  </p>
                  <Separator className="my-4" />
                  <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
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
                      <li key={area} className="flex items-center gap-1.5">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <Phone className="mb-3 h-8 w-8" />
                <h3 className="text-lg font-semibold">
                  Plumbing Emergency?
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  Don't wait — call us now for immediate 24/7 emergency
                  assistance. Our response team is always ready.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="mt-4 w-full"
                >
                  <a href="tel:+11234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (123) 456-7890
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {[
              {
                q: "Do you offer free estimates?",
                a: "Yes! We provide free, no-obligation estimates for all non-emergency work. Just fill out the form above or give us a call.",
              },
              {
                q: "What areas do you serve?",
                a: "We serve the entire Grand Strand and surrounding areas — from Calabash and Sunset Beach near the NC border, through Little River, North Myrtle Beach, Myrtle Beach, Carolina Forest, Conway, Socastee, Surfside Beach, Garden City Beach, Murrells Inlet, Pawleys Island, and down to Georgetown.",
              },
              {
                q: "Are your technicians licensed and insured?",
                a: "Absolutely. Every technician on our team is fully licensed, insured, and background-checked for your peace of mind.",
              },
              {
                q: "Do you offer emergency plumbing services?",
                a: "Yes, we provide 24/7 emergency plumbing services across the Grand Strand. Call us anytime at (123) 456-7890 and our on-call team will respond quickly.",
              },
              {
                q: "Do you work with vacation rental properties?",
                a: "Absolutely. We partner with property managers and Airbnb hosts across the Grand Strand to provide priority service plans, guest-turnover plumbing checks, and preventive maintenance — so your rentals stay guest-ready all season.",
              },
              {
                q: "How does salt air affect my plumbing?",
                a: "Salt air accelerates pipe corrosion, especially on copper and galvanized steel. If your home is near the beach, we recommend annual corrosion inspections. We also install corrosion-resistant piping and water softener systems to combat the effects of coastal living.",
              },
              {
                q: "Do you offer hurricane prep plumbing services?",
                a: "Yes. Before hurricane season, we offer storm-prep inspections including shut-off valve checks, sump pump installation and testing, backflow preventer installation, and post-storm damage assessment. We strongly recommend scheduling these services by May.",
              },
              {
                q: "Do you offer military or senior discounts?",
                a: "Yes! We offer 10% off all services for active-duty military, veterans, seniors, and first responders. Just mention your status when you call to schedule.",
              },
              {
                q: "Can you winterize my home if I leave for the season?",
                a: "Of course. Many of our customers are seasonal residents. We offer fall winterization (draining pipes, insulating, protecting) and spring startup services to get everything running again when you return.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, checks, and cash. We also offer financing options for larger projects.",
              },
            ].map((faq) => (
              <Card key={faq.q}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
