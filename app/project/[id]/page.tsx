import { projects } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

export default function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white min-h-screen">
      <div className="max-w-7xl w-full pt-20 pb-10 flex flex-col gap-10">
        
        {/* Back navigation */}
        <div className="w-full flex justify-start">
          <Link href="/#projects">
            <MagicButton
              title="Back to Projects"
              icon={<FaArrowLeft />}
              position="left"
              otherClasses="!w-auto px-6"
            />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between w-full mt-10">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="heading text-left !text-4xl lg:!text-6xl">
              {project.title.split(" ").map((word, idx, arr) => {
                if (idx === arr.length - 1) {
                  return <span key={idx} className="text-purple">{word}</span>;
                }
                return <span key={idx}>{word} </span>;
              })}
            </h1>
            <p className="text-white-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {project.des}
            </p>

            {/* Resources (Links) */}
            {project.resources && project.resources.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {project.resources.map((res, index) => (
                  <Link href={res.link} key={index} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#13162D] border border-white/10 hover:border-purple/50 transition duration-300">
                      <img src={res.icon} alt={res.name} className="w-5 h-5 object-contain" />
                      <span className="text-sm md:text-base font-medium text-white">{res.name}</span>
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] bg-[#13162D]">
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-10" />

        {/* Details Section */}
        <div className="flex flex-col lg:flex-row gap-16 w-full">
          <div className="flex-[2] flex flex-col gap-6">
            <h2 className="text-3xl font-bold">About the Project</h2>
            <div className="text-white-200 text-base md:text-lg leading-relaxed space-y-4">
              {project.longDes?.split("\n").map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-4">
               {project.iconLists.map((icon, index) => (
                 <div
                   key={index}
                   className="border border-white/20 rounded-full bg-black-200 w-16 h-16 flex justify-center items-center backdrop-blur-md shadow-lg hover:border-purple hover:scale-110 transition duration-300"
                 >
                   <img src={icon} alt="tech icon" className="p-3 w-full h-full object-contain" />
                 </div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
