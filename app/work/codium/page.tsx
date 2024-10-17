import Codiumdev from "@/assets/work/codiumdev.png";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

export default function CodiumPage() {
  return (
    <main className="flex flex-col gap-8 md:max-w-[80%]">
      <div className="flex items-center justify-between">
        <h1>Codium</h1>

        <Link
          href="https://github.com/codiumkg"
          className="text-3xl text-muted-foreground hover:text-foreground duration-300"
        >
          <IoLogoGithub />
        </Link>
      </div>

      <div className="flex flex-wrap gap-10">
        <Image
          src={Codiumdev}
          height={280}
          alt="codium image"
          className="rounded-2xl"
        />

        <div className="flex flex-col text-justify justify-center flex-[1_1_0%]">
          <div>
            <p>
              It&apos;s a platform for the organization{" "}
              <b className="text-foreground">&quot;Codium&quot;</b> which is
              based in Tokmok, Kyrgyzstan. It provides programming and other
              various courses to help local people to keep learning.
            </p>
            <p>
              This platform simplifies studying for students by providing
              features to read the lectures, complete the tasks and track their
              progress. Also makes managing students, documents, tasks, lectures
              and other resources easier for teachers, managers and
              administrators.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Technologies used</h2>
        <p>
          <span className="font-bold text-foreground">Nest.js</span> for backend
          API, <span className="font-bold text-foreground">Next.js </span>
          for landing page,{" "}
          <span className="font-bold text-foreground">React</span> for back
          office (admin panel) and student platform and{" "}
          <span className="font-bold text-foreground">Postgres</span> for the
          database.
        </p>

        <p>
          I worked on the whole system including backend, front-end
          applications, deployment, configuring CI/CD and containerizing with
          Docker.
        </p>
      </div>
    </main>
  );
}
