"use client"
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

                <div className="flex flex-wrap self-center flex-col pt-10">
                    <div className="w-[1200px] flex self-center justify-center pb-4">
                        <h1 className="text-3xl font-bold text-center">{projData.title}</h1>
                    </div>
                    <div className="flex self-center w-[1200px]">
                        <div className="pt-5 pr-2">
                            <Image
                                src={projData.img_lg}
                                width={700}
                                height={700}
                                alt={projData.alt}
                                quality={100}
                                className="border rounded-lg border-black"
                            />
                        </div>
                        <div className="w-[600px] pl-6 py-6">
                            <p>{projData.long_desc}</p>
                            <div className="pt-8">Technology Used:</div>
                            <div className="flex flex-row gap-5 pt-4 pl-2 flex-wrap">
                                {projData.tech.map((t) => (
                                    <div className="border border-[#EAD7DD] bg-[#F8F2F4] rounded-2xl px-1.5 w-[100px] text-center" key={t}>{t}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex self-center py-5 w-[1200px] gap-5">
                        <Link href={projData.url_live} className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded p-1.5 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">View Live Site</Link>
                        <Link href={projData.url_github} className="justify-start border border-[#B1D0D3] bg-[#eaf4f4] rounded p-1.5 text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">View Project Code</Link>
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}