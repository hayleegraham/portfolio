"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../components/AppContext";
import { useSearchParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const { projects, getProjectByName } = useContext(AppContext);
  const [projData, setProjData] = useState();

  const searchParams = useSearchParams();
  const urlName = searchParams.get("name");

  // Replace the placeholders back to their original characters
  const projName = urlName.replace(/_/g, " ").replace(/and/g, "&");

  useEffect(() => {
    if (projects && !projData) {
      const data = getProjectByName(projName);
      setProjData(data);
    }
  }, [projects]);

  return (
    <div>
      {projData ? (
        projData.case_study ? (
          <div className="flex flex-wrap self-center flex-col pt-10">
            <div className="w-[1200px] flex self-center justify-center pb-4">
              <h1 className="text-3xl font-bold text-center">
                {projData.title}
              </h1>
            </div>
            <div className="flex self-center w-[1200px]">
              <div className="pt-5 pr-2">
                <Image
                  src={projData.img_lg}
                  width={1902}
                  height={834}
                  alt={projData.alt}
                  quality={100}
                  className="border rounded-lg border-black w-[680px]"
                />
              </div>
              <div className="w-[600px] pl-6 py-6">
                <p>{projData.long_desc}</p>
                <div className="pt-8">Technology Used:</div>
                <div className="flex flex-row gap-5 pt-4 pl-2 flex-wrap">
                  {projData.tech.map((t) => (
                    <div
                      className="border border-[#EAD7DD] bg-[#F8F2F4] rounded-2xl px-1.5 w-[100px] text-center"
                      key={t}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex self-center py-5 w-[1200px] gap-5">
              <Link
                href={projData.url_live}
                className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                target="_blank"
                passHref
              >
                View Live Site
              </Link>
              <Link
                href={projData.url_github}
                className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                target="_blank"
                passHref
              >
                View Code
              </Link>
            </div>

            <div className="flex self-center my-5 w-[1200px] gap-5 border-b border-gray-400">
              <h2 className="text-2xl font-bold">Case Study</h2>
            </div>

            <div className="flex flex-col self-center my-5 w-[1200px] gap-5">
              <h3 className="text-xl font-bold">Project Goals</h3>
              <ul className="list-disc ml-8">
                {projData.proj_goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col self-center my-5 w-[1200px] gap-4">
              <h3 className="text-xl font-bold">Step 1: The Sketch</h3>
              <div className="flex self-center my-5 w-[1200px] gap-5">
                <Image
                  src={projData.sketch_img}
                  width={1407}
                  height={2070}
                  alt={projData.sketch_alt}
                  quality={100}
                  className="border rounded-lg border-black h-[450px] w-[350px] ml-4"
                />
                <div className="flex flex-col ml-12">
                  <p className="mr-6 mt-2 w-[600px]">{projData.sketch_desc}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-center my-5 w-[1200px] gap-4">
              <h3 className="text-xl font-bold">Step 2: The Wireframe</h3>
              <div className="flex self-center my-5 w-[1200px] gap-5">
                <Image
                  src={projData.wireframe_img}
                  width={1284}
                  height={816}
                  alt={projData.wireframe_alt}
                  quality={100}
                  className="border rounded-lg border-black h-[300px] w-auto ml-4"
                />
                <div className="flex flex-col ml-12">
                  <p className="mr-6 mt-2 w-[600px]">
                    {projData.wireframe_desc}
                  </p>
                  <Link
                    href={projData.wireframe_url}
                    className="justify-start border w-[140px] mt-6 border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                    target="_blank"
                    passHref
                  >
                    View Wireframe
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-center my-5 w-[1200px] gap-4">
              <h3 className="text-xl font-bold">Step 3: The Mockup</h3>
              <div className="flex self-center my-5 w-[1200px] gap-5">
                <Image
                  src={projData.mockup_img}
                  width={1284}
                  height={816}
                  alt={projData.mockup_alt}
                  quality={100}
                  className="border rounded-lg border-black h-[300px] w-auto ml-4"
                />
                <div className="flex flex-col ml-12">
                  <p className="mr-6 mt-2 w-[600px]">{projData.mockup_desc}</p>
                  <Link
                    href={projData.mockup_url}
                    className="justify-start border w-[140px] mt-6 border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                    target="_blank"
                    passHref
                  >
                    View Mockup
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-center my-5 w-[1200px] gap-4">
              <h3 className="text-xl font-bold">Step 4: The Final Product</h3>
              <div className="flex self-center my-5 w-[1200px] gap-5">
                <div className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold">Key Features</h3>
                  <ul className="list-disc ml-8 flex flex-wrap">
                    {projData.key_features.map((feature) => (
                      <li key={feature} className="w-[49%]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Image
                    src={projData.img_lg}
                    width={1902}
                    height={834}
                    alt={projData.alt}
                    quality={100}
                    className="border rounded-lg border-black w-[471.14px] h-[210px] ml-4"
                  />
                </div>

                <div className="flex flex-col ml-12">
                  <p className="mr-6 mt-38 w-[600px]">
                    {projData.final_prod_desc}
                  </p>

                  <div className="flex py-5 gap-5">
                    <Link
                      href={projData.url_live}
                      className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                      target="_blank"
                      passHref
                    >
                      View Live Site
                    </Link>
                    <Link
                      href={projData.url_github}
                      className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                      target="_blank"
                      passHref
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap self-center flex-col pt-10">
            <div className="w-[1200px] flex self-center justify-center pb-4">
              <h1 className="text-3xl font-bold text-center">
                {projData.title}
              </h1>
            </div>
            <div className="flex self-center w-[1200px]">
              <div className="pt-5 pr-2">
                <Image
                  src={projData.img_lg}
                  width={1902}
                  height={834}
                  alt={projData.alt}
                  quality={100}
                  className="border rounded-lg border-black w-[680px]"
                />
              </div>
              <div className="w-[600px] pl-6 py-6">
                <p>{projData.long_desc}</p>
                <div className="pt-8">Technology Used:</div>
                <div className="flex flex-row gap-5 pt-4 pl-2 flex-wrap">
                  {projData.tech.map((t) => (
                    <div
                      className="border border-[#EAD7DD] bg-[#F8F2F4] rounded-2xl px-1.5 w-[100px] text-center"
                      key={t}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex self-center py-5 w-[1200px] gap-5">
              <Link
                href={projData.url_live}
                className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                target="_blank"
                passHref
              >
                View Live Site
              </Link>
              <Link
                href={projData.url_github}
                className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded py-1.5 px-3 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]"
                target="_blank"
                passHref
              >
                View Code
              </Link>
            </div>
          </div>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
