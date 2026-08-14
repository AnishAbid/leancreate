import { FeatureIcon, type IconName } from "@/components/ui/FeatureIcon";

export function InfoCard({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <article className="lift-card rounded-3xl bg-cream p-6">
      <FeatureIcon name={icon} className="bg-white" />
      <h3 className="mt-5 text-lg font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}
