import Image from "next/image";

import Codiumdev from "@/assets/work/codiumdev.png";
import Link from "next/link";
import { Button } from "./ui/button";

export default function WorkSection() {
  return (
    <section className="flex flex-col w-full mt-10 gap-16">
      <div>
        <h2>Take a look at some of my work</h2>
        <p>Here you can explore some of my projects I've been working on.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-72">
        <div className="flex flex-col gap-2">
          <Image src={Codiumdev} alt="codium image" className="rounded-2xl" />

          <div className="flex justify-between items-center">
            <h3 className="font-bold mt-4">Codium KG</h3>
            <Link
              href="https://codiumdev.com"
              className="underline text-muted-foreground hover:text-foreground duration-300"
              target="_blank"
            >
              Visit website
            </Link>
          </div>
          <p>
            A platform for organization which provides programming courses which
            includes the admin panel, the landing page and the platform for
            students to make studying and management easier.
          </p>

          <Link href="/work/codium">
            <Button>Read more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
