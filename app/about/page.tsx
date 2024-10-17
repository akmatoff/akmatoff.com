import Blog from "@/components/Blog";
import Reveal from "@/components/Reveal";
import SkillsSection from "@/components/SkillsSection";
import Socials from "@/components/Socials";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { SOCIAL_LINKS, WORK_EXPERIENCE } from "@/constants/common";

export default function About() {
  return (
    <main className="flex flex-col md:flex-row flex-wrap gap-32">
      <section className="flex flex-col gap-8 flex-[1_1_8%]">
        <Reveal>
          <h2 className="uppercase font-semibold">
            Hello, I&apos;m Azim, a web-developer <br /> and musician based in
            Kyrgyzstan.
          </h2>

          <div className="mt-8">
            <p>
              With over 2 years of experience in web development, I specialize
              in React and Next.js.
            </p>
            <p>
              I have been studying programming since 2018, before I went to
              college. By that time, I had started learning JavaScript, having
              previously learned HTML and CSS. I realized I needed JavaScript to
              advance, but I initially found it quite difficult to understand.
              My understanding of programming improved later when I studied
              Python at college.
            </p>
            <p>
              I started my first job when I was almost 19, in February 2022. I
              joined a startup based in Singapore as an intern, where I worked
              for 2 years. During that time, I gained a lot of valuable
              experience.
            </p>
            <p>
              Currently, I am looking for new opportunities and trying to keep
              improving.
            </p>
            <p>
              When I&apos;m not programming, I&apos;m producing electronic music
              in various genres and also love playing the guitar.{" "}
              <a
                href={SOCIAL_LINKS.linktree}
                className="underline text-primary"
                target="__blank"
              >
                Here you can find my music.
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <a
            href="/Azim Akmatov.pdf"
            download
            className="underline text-muted-foreground hover:text-foreground duration-300"
          >
            Download my resume
          </a>
        </Reveal>

        <Reveal>
          <Blog />
        </Reveal>
      </section>

      <section className="flex flex-col gap-8 flex-[1_1_0%]">
        <SkillsSection />

        <div className="text-muted-foreground">
          <Reveal>
            <h2>Professional Experience</h2>
          </Reveal>

          <div className="flex flex-col gap-8 mt-3">
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
