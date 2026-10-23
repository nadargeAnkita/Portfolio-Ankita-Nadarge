
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

import RenderModel from "@/app/components/RenderModel";
import HatModel from "@/app/components/models/HatModel";
import AboutDetails from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Portfolio background"
        priority
        className="-z-50 fixed inset-0 h-full w-full object-cover object-center opacity-25"
      />

      <div className="pointer-events-none absolute left-0 top-1/2 h-screen w-full -translate-y-1/2">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-5">
        <div className="absolute left-1/2 top-[60%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
            About Me
          </p>

          <h1 className="text-4xl font-bold text-accent sm:text-6xl md:text-7xl">
            Ankita Nadarge
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-foreground sm:text-xl">
            AI/ML Enthusiast | Python Developer | Data Analytics
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-foreground/80 sm:text-base">
            Turning data into insights and exploring how machine learning
            can solve real-world problems.
          </p>
        </div>
      </main>

      <AboutDetails />
    </>
  );
}
