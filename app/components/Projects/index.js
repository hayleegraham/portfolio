'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { get, ref } from "firebase/database";
import { database } from "../../firebaseConfig";
import { useEffect, useState } from "react";

//Projects
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      const projRef = ref(database, 'projects_home');
      get(projRef).then((snapshot) => {
          console.log(snapshot.val())
          if (snapshot.exists()) {
              const projArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                  id,
                      ...data,
              }));
              setProjects(projArray);
          } else {
              console.log("No Data")
          }
      })
      .catch((error) => {
          console.error(error)
      })
  }, [])

  return (
    <div className="flex flex-col self-center pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">PROJECTS</h2>
      </div>
      <div className="flex flex-row self-center gap-12 flex-wrap w-[1200px] p-5">

      {projects.map((proj) => (
                   
        <Link className="flex flex-col gap-2 w-[350px]" href="/projects" key={proj.id}>
          <div>
            <Image
              src={proj.img}
              width={350}
              height={247}
              alt={proj.alt}
              quality={100}
            />
          </div>
          
          <h3 className="font-bold text-center text-lg">{proj.title}</h3>
          <p>{proj.desc}</p>

          <div className="flex flex-row gap-4 mt-0.5 flex-wrap">
          {proj.tech.map((t) => (
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1.5" key={t}>{t}</div>
          ))}
          </div>
        </Link>
                  ))}

      </div>
    </div>
  );
};

export default Projects;
