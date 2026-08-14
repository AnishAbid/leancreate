import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ComingSoonPage({ title }: { title: string }) {
  return (
    <>
      <PageHero title={title} />
      <section className="bg-white">
        <Container className="max-w-2xl py-20 text-center md:py-28">
          <p className="text-lg leading-8 text-muted">
            This page is on the way. In the meantime, tell us what you are
            trying to solve — we will help identify the right expertise and
            approach.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="orange" arrow>
              Tell Us Your Challenge
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
