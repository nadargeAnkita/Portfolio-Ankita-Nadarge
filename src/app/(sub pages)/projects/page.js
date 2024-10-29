import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/app/components/projects";
import { projectsData } from "@/app/data";
import RenderModel from "@/app/components/RenderModel";
import Staff from "@/app/components/models/Staff";


export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image"  className="-z-50 fixed w-full h-full top-0 left-0 object-cover object-center opacity-25"/>

        <ProjectList projects={projectsData} />

        <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <Staff/>
        </RenderModel>
        </div>
    </>
  );
}
