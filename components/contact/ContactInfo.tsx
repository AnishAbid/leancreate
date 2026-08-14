import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const cards = [
  {
    icon: Phone,
    title: "Contact us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: site.location,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {cards.map((card) => {
        const Icon = card.icon;
        const value = card.href ? (
          <a href={card.href} className="hover:text-orange">
            {card.value}
          </a>
        ) : (
          card.value
        );

        return (
          <article key={card.title} className="rounded-3xl bg-cream p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-orange">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-bold text-charcoal">{card.title}</h3>
            <p className="mt-1 text-sm text-muted">{value}</p>
          </article>
        );
      })}
    </div>
  );
}
