"use client"
import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import Blog from "@/app/components/Blog";

export default function BlogPage() {
    const { blogs } = useContext(AppContext);

    return (
        <div className="flex flex-col justify-center pt-10 pb-8">
            <div className="w-[1200px] flex justify-center self-center">
                <h2 className="text-2xl font-bold self-center">BLOG</h2>
            </div>
            <Blog data={blogs}/>
        </div>

    );
}
