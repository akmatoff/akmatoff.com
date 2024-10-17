import Blog from "@/components/Blog";
import Reveal from "@/components/Reveal";
import SkillsSection from "@/components/SkillsSection";
import Socials from "@/components/Socials";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { SOCIAL_LINKS, WORK_EXPERIENCE } from "@/constants/common";

export default function About() {
  return (
    <main className="flex flex-col md:flex-row flex-wrap gap-16">
      <section className="flex flex-col gap-6 flex-[1_1_0%]">
        <Reveal>
          <p>
            When I&apos;m not programming, I&apos;m producing electronic music
            in different genres. Also love playing guitar.{" "}
            <a
              href={SOCIAL_LINKS.linktree}
              className="underline text-primary"
              target="__blank"
            >
              Here you can find my music.
            </a>
          </p>
        </Reveal>

        <Reveal>
          <a
            href="/Azim Akmatov.pdf"
            download
            className="underline text-muted-foreground hover:text-white duration-300"
          >
            Download my resume
          </a>
        </Reveal>

        <Reveal>
          <Blog />
        </Reveal>
      </section>

      <section className="flex flex-col gap-6 flex-[1_1_20%]">
        <SkillsSection />

        <div className="text-muted-foreground">
          <Reveal>
            <h2>Professional Experience</h2>
          </Reveal>

          <div className="flex flex-col gap-4 mt-3">
            <Reveal>
              {WORK_EXPERIENCE.map((exp, index) => (
                <WorkExperienceCard key={index} data={exp} />
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
