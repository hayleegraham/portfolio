"use client"
import Image from "next/image";
import Link from "next/link";

const Projects = ({data}) => {
  
  return (
    
      <div className="flex flex-row self-center gap-12 flex-wrap w-[1200px] p-5">

        {data?.map((proj) => (
          <div className="flex flex-col gap-2 w-[350px] shadow-[1px_1px_5px_rgba(0,0,0,0.15)] border border-gray-400 rounded-md" key={proj.id}>
            <Link href={`/project_details?name=${proj.title.replace(/\s/g, '_').replace(/&/g, 'and')}`}>
              <div>
                <Image
                  src={proj.img}
                  width={350}
                  height={247}
                  alt={proj.alt}
                  quality={100}
                  className="border-b border-gray-400 rounded-t-md"
                />
              </div>

              <h3 className="font-bold text-center text-lg mx-5 my-2">{proj.title}</h3>
              <p className="mx-5">{proj.desc}</p>

            </Link>
            <div className="flex flex-row gap-4 mt-1 mb-4 flex-wrap mx-5">
              {proj.tech.map((t) => (
                <div className="border border-[#EAD7DD] bg-[#F8F2F4] rounded-xl px-2 py-0.5 w-[83px] text-center text-sm" key={t}>{t}</div>
              ))}
            </div>
          </div>
        ))}

      </div>
  );
};

export default Projects;
