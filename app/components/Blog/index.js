import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col self-center">
      <div className="flex flex-col self-center gap-12 w-[1200px] p-5">
        {data?.map((blog) => (
          <Link key={blog.name} className="flex flex-row gap-2" href={`/blog_details?name=${encodeURIComponent(blog.name)}`}>
            <Image
              src={blog.img}
              width={780}
              height={540}
              alt={blog.alt}
              quality={100}
              className="border border-gray-500 w-[260px] h-[180px]"
            />
            <div className="flex flex-col gap-2 pr-2 pl-5">
              <h3 className="text-lg font-bold">{blog.name}</h3>
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
