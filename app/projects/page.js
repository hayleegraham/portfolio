"use client"
import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import Projects from "@/app/components/Projects";

export default function ProjectsPage() {

    const { technologies, setSelectedTech, selectedTech, filterByTech, displayedProjects } = useContext(AppContext);

    //filter by venue when dropdown option is selected
    const handleChange = (event) => {
        const filterValue = event.target.value;
        setSelectedTech(filterValue);
        filterByTech(filterValue);
    };

    return (
        <div className="flex flex-col self-center pt-10 pb-8 w-[80%] justify-self-center">
            <div className="w-full flex justify-center self-center">
                <h2 className="text-2xl font-bold self-center">PROJECTS</h2>
            </div>

            {/* filter */}
            <div className="flex lg:justify-end justify-center w-full self-center lg:pr-8 my-2">
                <label htmlFor="venues">Filter by Technology:</label>
                <select
                    className="ml-2 rounded py-1 !pr-8 cursor-pointer"
                    id="venues"
                    name="venues"
                    value={selectedTech}
                    onChange={handleChange}
                >
                    <option value="">Select Technology</option>
                    {technologies?.map((tech) => (
                        <option key={tech.id} value={tech.name}>
                            {tech.name}
                        </option>
                    ))}
                </select>
            </div>

            <Projects data={displayedProjects}/>
        </div>
    );
}
