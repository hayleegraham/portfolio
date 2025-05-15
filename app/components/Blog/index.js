import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col self-center lg:mr-3 lg:ml-8 w-full">
      <div className="flex flex-col self-center gap-12 w-full p-5">
        {data?.map((blog) => (
          <Link key={blog.name} className="flex flex-col items-center lg:items-start lg:flex-row gap-2" href={`/blog_details?name=${encodeURIComponent(blog.name)}`}>
            <Image
              src={blog.img}
              width={780}
              height={540}
              alt={blog.alt}
              quality={100}
              className="border border-gray-500 lg:w-[260px] lg:h-[180px] sm:w-[65%] w-[90%] rounded"
            />
            <div className="flex flex-col gap-2 pr-2 pl-5">
              <h3 className="text-lg font-bold mt-2 lg:mt-0">{blog.name}</h3>
              <div>{blog.date}</div>
              <p>{blog.content_1}</p>
              <div className="text-gray-600 self-end">Read More...</div>
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
};

export default Blog;
