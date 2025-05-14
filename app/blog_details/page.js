"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../components/AppContext";
import { useSearchParams } from "next/navigation";

export default function BlogDetailsPage() {
    const { blogs, getBlogByName } = useContext(AppContext);
    const [blogData, setBlogData] = useState();

    const searchParams = useSearchParams();
    const urlName = decodeURIComponent(searchParams.get("name"));


    useEffect(() => {
        if (blogs && !blogData) {
            const data = getBlogByName(urlName);
            setBlogData(data);
        }
    }, [blogs]);

    return (
        <div>
            {blogData ? (
                blogData.content_4 ? (
                    <div className="flex flex-wrap justify-self-center flex-col pt-10">
                        <div className="w-[1200px] flex self-center justify-center pb-4" id="top">
                            <h1 className="text-3xl font-bold text-center">
                                {blogData.name}
                            </h1>
                        </div>
                        <div className="pt-3 pr-2 self-center">
                            <Image
                                src={blogData.img_lg}
                                width={blogData.img_w}
                                height={blogData.img_h}
                                alt={blogData.alt}
                                quality={100}
                                className="border rounded-lg border-black w-[1000px]"
                            />
                        </div>

                        <div className="flex flex-col justify-center w-[1200px] px-3 pt-10">

                            <p className="w-[900px] self-center">{blogData.content_1}</p>
                            </div>

                            {/* <div className="flex flex-col mt-6 w-[900px] self-center">
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
                                        className="justify-start w-[140px] mt-6 bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
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
                                    <div className="flex gap-5">
                                    <Link
                                        href={projData.mockup_url}
                                        className="justify-start mt-6 bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
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

                        <div className="flex flex-col self-center my-5 w-[1200px] gap-4">
                            <h3 className="text-xl font-bold">Step 4: The Final Product</h3>
                            <div className="flex self-center my-5 w-[1200px] gap-4">
                                <div className="flex flex-col gap-5 w-[540px]">
                                    <h3 className="text-xl font-bold">Key Features</h3>
                                    <ul className="list-disc ml-8 flex flex-wrap">
                                        {projData.key_features.map((feature) => (
                                            <li key={feature} className="w-[49%]">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col">
                                    <p className="mr-6 w-[600px]">
                                        {projData.final_prod_desc}
                                    </p>
                                    <div className="flex py-5 gap-5">
                                        <Link
                                            href={projData.url_live}
                                            className="justify-start bg-[#023E50] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
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
                        </div> */}

                    </div>

                ) : (

                    <div className="flex flex-wrap justify-self-center flex-col pt-10">
                        <div className="w-[1200px] flex self-center justify-center pb-4" id="top">
                            <h1 className="text-3xl font-bold text-center">
                                {blogData.name}
                            </h1>
                        </div>
                        {/* <div className="pt-3 pr-2 self-center">
                            <Image
                                src={projData.img_lg}
                                width={projData.img_w}
                                height={projData.img_h}
                                alt={projData.alt}
                                quality={100}
                                className="border rounded-lg border-black w-[1200px]"
                            />
                        </div>

                        <div className="flex flex-col justify-center w-[1200px] px-3 pt-10">

                            <p className="w-[900px] self-center">{projData.long_desc}</p>

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

                        </div> */}

                    </div>
                )
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}
