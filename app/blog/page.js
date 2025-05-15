"use client"
import React, { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";
import Blog from "@/app/components/Blog";

export default function BlogPage() {
    const { blogs } = useContext(AppContext);
    const [selectedSort, setSelectedSort] = useState('');

    //sort by date when dropdown option is selected
    const handleSort = (event) => {
        const sortValue = event.target.value;
        setSelectedSort(sortValue)
        if (sortValue == "desc") {
            blogs.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
        } else {
            blogs.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
        }
    };

    return (
        <div className="flex flex-col self-center pt-10 pb-8 sm:w-[80%] w-[90%] justify-self-center">
            <div className="w-full flex justify-center self-center">
                <h2 className="text-2xl font-bold self-center">BLOG</h2>
            </div>

            <div className="flex lg:justify-end justify-center w-full self-center lg:pr-8 my-2">
                <label htmlFor="sort">Sort by Date:</label>
                <select
                    className="ml-2 rounded py-1 !pr-8 cursor-pointer"
                    id="sort"
                    name="sort"
                    value={selectedSort}
                    onChange={handleSort}
                >
                    <option value="asc">Newest First</option>
                    <option value="desc">Oldest First</option>

                </select>
            </div>

            <Blog data={blogs} />
        </div>

    );
}
