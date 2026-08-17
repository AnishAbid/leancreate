import { site } from "@/lib/site";

const cards = [
  {
    icon: "/assets/hugeicons_contact-01.svg",
    title: "Contact us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: "/assets/mage_email.svg",
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "/assets/proicons_location.svg",
    title: "Location",
    value: site.location,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {cards.map((card) => {
        const value = card.href ? (
          <a href={card.href} className="hover:text-orange">
            {card.value}
          </a>
        ) : (
          card.value
        );

        return (
          <article
            key={card.title}
            className="rounded-[1.5rem] bg-cream p-6 md:p-7"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.icon}
              alt=""
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
            <h3 className="mt-4 text-lg font-bold tracking-tight text-charcoal">
              {card.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{value}</p>
          </article>
        );
      })}
    </div>
  );
}
