import { Button } from "@/components/ui/button";
import WorkSection from "@/components/WorkSection";
import { SOCIAL_LINKS } from "@/constants/common";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pb-20">
      <section className="flex flex-col gap-4 w-full">
        <h1>Azim Akmatov</h1>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-muted-foreground">
            <p>
              Front-End developer based in Kyrgyzstan. Ready to bring ideas into
              life.
            </p>
            <div>
              <Link href={SOCIAL_LINKS.email}>
                <Button role="link">Let&apos;s work together!</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WorkSection />
    </main>
  );
}
