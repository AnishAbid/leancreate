import {
  Activity,
  Brain,
  Building2,
  Cloud,
  Compass,
  Factory,
  Flag,
  Gauge,
  Globe,
  GraduationCap,
  Handshake,
  HardHat,
  House,
  Landmark,
  Layers,
  Lightbulb,
  MessageSquare,
  MessagesSquare,
  PersonStanding,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Store,
  Sunrise,
  Target,
  Timer,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const icons = {
  target: Target,
  compass: Compass,
  rocket: Rocket,
  spark: Sparkles,
  user: UserRound,
  workflow: Workflow,
  timer: Timer,
  users: Users,
  badge: Flag,
  layers: Layers,
  flag: Flag,
  gauge: Gauge,
  store: Store,
  buildings: Building2,
  house: House,
  landmark: Landmark,
  school: GraduationCap,
  incubator: Lightbulb,
  mobile: Smartphone,
  web: Globe,
  transform: RefreshCw,
  cloud: Cloud,
  consult: MessageSquare,
  speech: MessagesSquare,
  handshake: Handshake,
  walk: PersonStanding,
  healthcare: Activity,
  manufacturing: Factory,
  construction: HardHat,
  cyber: Shield,
  sunrise: Sunrise,
  search: Search,
  brain: Brain,
} as const;

export type IconName = keyof typeof icons;

export function FeatureIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon: LucideIcon = icons[name];
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl text-orange",
        className,
      )}
    >
      <Icon className="size-6" strokeWidth={1.75} />
    </span>
  );
}
