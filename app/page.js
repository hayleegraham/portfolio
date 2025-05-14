"use client"
import React, { useContext } from "react";
import { AppContext } from "./components/AppContext";
import Link from "next/link";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blog from "./components/Blog";

export default function Home() {
  const { projects } = useContext(AppContext);

  return (
    <div>
      <About longDesc={false} />

      <div className="flex flex-col self-center pt-10">
        <div className="w-[1200px] flex self-center">
          <h2 className="text-2xl font-bold self-start">PROJECTS</h2>
        </div>
        <Projects data={projects} />
      </div>
      
      <div className="flex flex-col self-center pt-10">
        <div className="w-[1200px] flex self-center">
          <h2 className="text-2xl font-bold self-start">BLOG</h2>
        </div>
        <Blog />
      </div>

      <div className="flex flex-col self-center pt-10">
        <div className="w-[1200px] flex self-center">
          <Link href="/resume">
            <h2 className="text-2xl font-bold self-start">RESUME</h2>
          </Link>
        </div>
        <Resume />
      </div>
    </div>
  );
}
