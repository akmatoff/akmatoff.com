import Reveal from "@/components/Reveal";
import SkillsSection from "@/components/SkillsSection";
import Socials from "@/components/Socials";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { WORK_EXPERIENCE } from "@/constants/common";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-4 w-full md:8/12 lg:w-6/12 p-4">
        <Reveal>
          <h1>Azim Akmatov</h1>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div className="text-muted-foreground">
            <Reveal>
              <p>
                Creating web experiences. Currently looking for new
                opportunities.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I&apos;m a front-end developer who is passionate about bringing
                into life great projects which will make life easier and
                enjoyable. I believe communication and working together can lead
                to achieving great things.
              </p>
            </Reveal>
            <Reveal>
              <p>
                When I&apos;m not programming, I&apos;m producing electronic
                music in different genres.
              </p>
            </Reveal>
          </div>

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
        </div>

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
          <div className="md:hidden">
            <Socials />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
