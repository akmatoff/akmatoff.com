import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-4 w-full">
        <Reveal>
          <h1>Azim Akmatov</h1>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div className="text-muted-foreground">
            <Reveal>
              <p>
                Front-End developer based in Kyrgyzstan. Ready to bring ideas
                into life.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="md:hidden">
            <Socials />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
