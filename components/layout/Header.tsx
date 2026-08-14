"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="grid grid-cols-[1fr_auto] items-center gap-4 py-5 xl:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start" aria-label="LEAN CREATE home">
          <LogoMark className="h-11 w-auto" />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm xl:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors duration-200",
                  active
                    ? "bg-cream text-charcoal"
                    : "text-charcoal/80 hover:text-charcoal",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end xl:block">
          <Button href="/contact" arrow>
            Talk To An Expert
          </Button>
        </div>

        <button
          type="button"
          className="justify-self-end rounded-full bg-white p-2 text-charcoal xl:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-charcoal xl:hidden"
          >
            <Container className="flex h-full flex-col py-5">
              <div className="flex items-center justify-between">
                <LogoMark className="h-11 w-auto" />
                <button
                  type="button"
                  className="rounded-full bg-white p-2 text-charcoal"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-2 py-3 text-2xl font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <Button
                  href="/contact"
                  variant="orange"
                  arrow
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Talk To An Expert
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
