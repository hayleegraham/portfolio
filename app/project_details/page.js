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
                    <div className="flex flex-wrap justify-self-center flex-col pt-10 xl:w-[70%] sm:w-[85%] w-[80%] justify-self-center">
                        <div className="w-full flex self-center justify-center pb-4" id="top">
                            <h1 className="text-3xl font-bold text-center">
                                {projData.title}
                            </h1>
                        </div>
                        <div className="pt-3 pr-2 self-center">
                            <Image
                                src={projData.img_lg}
                                width={projData.img_w}
                                height={projData.img_h}
                                alt={projData.alt}
                                quality={100}
                                className="border rounded-lg border-black w-full"
                            />
                        </div>

                        <div className="flex flex-col justify-center w-full px-3 pt-10">

                            <p className="w-full xl:w-[90%] self-center">{projData.long_desc}</p>

                            <div className="flex flex-col mt-6 w-full self-center">
                                <div className="self-center">Technology Used:</div>
                                <div className="flex flex-row gap-5 pt-4 flex-wrap self-center justify-center">
                                    {projData.tech.map((t) => (
                                        <div
                                            className="border border-[#B1D0D3] rounded-lg bg-[#eaf4f4] px-1.5 w-[100px] text-center"
                                            key={t}
                                        >
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex self-center justify-center py-10 w-[900px] gap-8">
                                <Link
                                    href={projData.url_live}
                                    className="justify-end bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                    target="_blank"
                                    passHref
                                >
                                    View Live Site
                                </Link>
                                <Link
                                    href={projData.url_github}
                                    className="justify-end bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                    target="_blank"
                                    passHref
                                >
                                    View Code
                                </Link>
                            </div>   

                        </div>

                        <div className="flex self-center my-5 w-full gap-5 border-b border-gray-400">
                            <h2 className="text-2xl font-bold">Case Study</h2>
                        </div>

                        <div className="flex flex-col self-center my-5 w-full gap-5">
                            <h3 className="text-xl font-bold">Project Goals</h3>
                            <ul className="list-disc ml-8">
                                {projData.proj_goals.map((goal) => (
                                    <li key={goal}>{goal}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col self-center my-5 w-full gap-4">
                            <h3 className="text-xl font-bold">Step 1: The Sketch</h3>
                            <div className="flex self-center my-5 w-full gap-5 flex-col xl:flex-row">
                                <Image
                                    src={projData.sketch_img}
                                    width={1407}
                                    height={2070}
                                    alt={projData.sketch_alt}
                                    quality={100}
                                    className="border rounded-lg border-black h-[450px] w-[350px] xl:ml-4 xl:self-start self-center"
                                />
                                <div className="flex flex-col xl:ml-12 xl:w-[60%] w-full">
                                    <p className="xl:mr-6 mx-1 mt-2">{projData.sketch_desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col self-center my-5 w-full gap-4">
                            <h3 className="text-xl font-bold">Step 2: The Wireframe</h3>
                            <div className="flex self-center my-5 w-full gap-5 xl:flex-row flex-col">
                                <Image
                                    src={projData.wireframe_img}
                                    width={1284}
                                    height={816}
                                    alt={projData.wireframe_alt}
                                    quality={100}
                                    className="border rounded-lg border-black sm:h-[300px] sm:w-[471px] xl:ml-4 xl:self-start self-center"
                                />
                                <div className="flex flex-col xl:ml-12">
                                    <p className="xl:mr-6 mx-1 xl:mx-0 mt-2 xl:w-[90%]">
                                        {projData.wireframe_desc}
                                    </p>
                                    <Link
                                        href={projData.wireframe_url}
                                        className="xl:justify-start justify-center self-center xl:self-start w-[140px] mt-6 bg-[#023E50] rounded py-1.5 px-3 mx-0.5 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                        target="_blank"
                                        passHref
                                    >
                                        View Wireframe
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col self-center my-5 w-full gap-4">
                            <h3 className="text-xl font-bold">Step 3: The Mockup</h3>
                            <div className="flex self-center my-5 w-full gap-5 xl:flex-row flex-col">
                                <Image
                                    src={projData.mockup_img}
                                    width={1284}
                                    height={816}
                                    alt={projData.mockup_alt}
                                    quality={100}
                                    className="border rounded-lg border-black sm:h-[300px] sm:w-[471px] xl:ml-4 xl:self-start self-center"
                                />
                                <div className="flex flex-col xl:ml-12">
                                    <p className="xl:mr-6 mt-2 mx-1 xl:mx-0 xl:w-[90%] w-full">{projData.mockup_desc}</p>
                                    <div className="flex gap-5 xl:justify-start justify-center self-center xl:self-start">
                                    <Link
                                        href={projData.mockup_url}
                                        className="justify-start mt-6 bg-[#023E50] rounded py-1.5 px-3 mx-0.5 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                        target="_blank"
                                        passHref
                                    >
                                        View Mockup
                                    </Link>
                                    <Link
                                        href={projData.styleguide_url}
                                        className="justify-start mt-6 bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                        target="_blank"
                                        passHref
                                    >
                                        View Style Guide
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col self-center my-5 w-full gap-4">
                            <h3 className="text-xl font-bold">Step 4: The Final Product</h3>
                            <div className="flex self-center my-5 w-full gap-4 xl:flex-row flex-col justify-center">
                                <div className="flex flex-col gap-5 sm:w-[500px] w-full">
                                    <h3 className="text-xl font-bold self-center xl:self-start">Key Features</h3>
                                    <ul className="list-disc ml-8 flex flex-wrap justify-center xl:justify-start gap-2">
                                        {projData.key_features.map((feature) => (
                                            <li key={feature} className="xl:w-[49%] w-[50%]">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col mr-1 xl:mx-0 xl:w-[52%] w-full">
                                    <p className="mx-1 xl:mx-0 w-full">
                                        {projData.final_prod_desc}
                                    </p>
                                    <div className="flex py-5 gap-5 xl:justify-start justify-center self-center xl:self-start">
                                        <Link
                                            href={projData.url_live}
                                            className="justify-start bg-[#023E50] rounded py-1.5 px-3 mx-0.5 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                            target="_blank"
                                            passHref
                                        >
                                            View Live Site
                                        </Link>
                                        <Link
                                            href={projData.url_github}
                                            className="justify-start bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
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

                    <div className="flex flex-wrap justify-self-center flex-col pt-10 xl:w-[70%] sm:w-[85%] w-[80%] justify-self-center">
                        <div className="w-full flex self-center justify-center pb-4" id="top">
                            <h1 className="text-3xl font-bold text-center">
                                {projData.title}
                            </h1>
                        </div>
                        <div className="pt-3 pr-2 self-center">
                            <Image
                                src={projData.img_lg}
                                width={projData.img_w}
                                height={projData.img_h}
                                alt={projData.alt}
                                quality={100}
                                className="border rounded-lg border-black w-full"
                            />
                        </div>

                        <div className="flex flex-col justify-center w-full px-3 pt-10">

                            <p className="w-full xl:w-[90%] self-center">{projData.long_desc}</p>

                            <div className="flex flex-col mt-6 w-[900px] self-center">
                                <div className="self-center">Technology Used:</div>
                                <div className="flex flex-row gap-5 pt-4 flex-wrap self-center">
                                    {projData.tech.map((t) => (
                                        <div
                                            className="border border-[#B1D0D3] rounded-lg bg-[#eaf4f4] px-1.5 w-[100px] text-center"
                                            key={t}
                                        >
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex self-center justify-center py-10 w-full xl:w-[90%] gap-8">
                                <Link
                                    href={projData.url_live}
                                    className="justify-end bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                    target="_blank"
                                    passHref
                                >
                                    View Live Site
                                </Link>
                                <Link
                                    href={projData.url_github}
                                    className="justify-end bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                                    target="_blank"
                                    passHref
                                >
                                    View Code
                                </Link>
                            </div>   

                        </div>

                    </div>
                )
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}
