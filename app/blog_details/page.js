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

                <div className="flex flex-wrap flex-col pt-10 pb-10 w-[80%] justify-self-center">

                    <div className="w-full xl:w-[90%] flex self-center justify-center pb-4" id="top">
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
                            className="border rounded-lg border-black w-full"
                        />
                        <div className="flex m-3 text-gray-700 gap-5">
                            <div>Author: Haylee Graham</div>
                            <div>Posted: {blogData.date}</div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center self-center w-full xl:w-[70%] px-3 pt-4">

                        <p className="w-full xl:w-[90%] self-center">{blogData.content_1}</p>

                        <div className="w-full xl:w-[90%] flex self-center justify-start py-4">
                            <h2 className="text-xl font-bold">
                                {blogData.header_2}
                            </h2>
                        </div>

                        <p className="w-full xl:w-[90%] self-center">{blogData.content_2}</p>

                        <div className="w-full xl:w-[90%] flex self-center justify-start py-4">
                            <h2 className="text-xl font-bold">
                                {blogData.header_3}
                            </h2>
                        </div>

                        <p className="w-full xl:w-[90%] self-center">{blogData.content_3}</p>

                        {blogData.list_3 &&
                            <ul className="list-disc pt-3 pl-5 w-full xl:w-[90%] self-center">
                                {blogData.list_3.map((item) => (
                                    <li key={item} className="p-1">
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        }

                        {blogData.header_4 &&
                            <div className="w-full xl:w-[90%] flex self-center flex-col">
                                <div className="flex justify-start py-4">
                                    <h2 className="text-xl font-bold">
                                        {blogData.header_4}
                                    </h2>
                                </div>

                                <p className="w-full self-center">{blogData.content_4}</p>
                            </div>
                        }

                        {blogData.header_5 ? (

                            <div className="w-full xl:w-[90%] flex self-center flex-col">
                                <div className="flex justify-start py-4">
                                    <h2 className="text-xl font-bold">
                                        {blogData.header_5}
                                    </h2>
                                </div>

                                <p className="w-full self-center">{blogData.content_5}</p>

                                {blogData.list_5 &&
                                    <ul className="list-disc pt-3 pl-5">
                                        {blogData.list_5.map((item) => (
                                            <li key={item} className="p-1">
                                                {item}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                }
                            </div>
                        ) : (
                            <div className="w-full xl:w-[90%] self-center">
                                <p className="w-full self-center py-4">{blogData.content_5}</p>

                                {blogData.list_5 &&
                                    <ul className="list-disc pl-5">
                                        {blogData.list_5.map((item) => (
                                            <li key={item} className="p-1">
                                                {item}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                }
                            </div>
                        )}

                        {blogData.codechunk &&

                            <div className="w-full xl:w-[90%] flex self-center flex-col">

                                {blogData.codechunk_header &&
                                    <div className="flex justify-start pt-5">
                                        <h3 className="font-semibold">
                                            {blogData.codechunk_header}
                                        </h3>
                                    </div>
                                }

                                <Image
                                    src={blogData.codechunk}
                                    height={blogData.codechunk_h}
                                    width={blogData.codechunk_w}
                                    alt={blogData.codechunk_alt}
                                    quality={100}
                                    className="border rounded-lg border-black xl:w-[600px] mt-5 self-center"
                                />
                            </div>
                        }

                        <div className="w-full xl:w-[90%] flex self-center justify-start pb-5 pt-8">
                            <h3 className="font-semibold">Helpful Video</h3>
                        </div>

                        <iframe
                            src={blogData.video}
                            className="w-full h-[200px] xl:w-[880px] xl:h-[450px] object-center self-center rounded-lg"
                        />

                        <div className="w-full xl:w-[90%] flex self-center justify-start pb-4 pt-8">
                            <h3 className="font-semibold">Helpful Link</h3>
                        </div>

                        <p className="w-full xl:w-[90%] self-center">I found this article very helpful in understanding this topic more. Check it out for more information.</p>

                        <Link
                            href={blogData.link_url}
                            className="self-center mt-5 bg-[#023E50] w-[120px] rounded py-1.5 px-3 text-center text-white shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)] hover:shadow-xl hover:scale-105 active:scale-95"
                            target="_blank"
                            passHref>
                            Go To Article
                        </Link>


                        <div className="w-full xl:w-[90%] flex self-center justify-start py-4">
                            <h2 className="text-xl font-bold">
                                {blogData.header_6}
                            </h2>
                        </div>

                        <p className="w-full xl:w-[90%] self-center">{blogData.content_6}</p>

                    </div>

                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}
