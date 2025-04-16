import React from "react";
import Image from "next/image";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="flex flex-col self-center pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">BLOG</h2>
      </div>
      <div className="flex flex-col self-center gap-12 w-[1200px] p-5">
        <Link className="flex flex-row gap-2" href="/">
          <Image
            src="/blog_audio_api.png"
            width={260}
            height={150}
            alt="Web Audio API"
            quality={100}
          />
          <div className="flex flex-col gap-2 pr-2 pl-5">
            <h3 className="text-lg font-bold">What is Web Audio API?</h3>
            <div>4/10/25</div>
            <p>
              The Web Audio API is designed for processing and synthesizing
              audio directly in web applications. It gives developers the tools
              to build rich, dynamic audio experiences using high-level
              JavaScript objects and functions. With it, you can create
              everything from music and sound effects in games to immersive,
              interactive audio for virtual reality—and much more.
            </p>
            <div className="text-gray-600 self-end">Read More...</div>
          </div>
        </Link>

        <Link className="flex flex-row gap-2" href="/">
          <Image
            src="/blog_next_react.jpg"
            width={260}
            height={150}
            alt="React vs. Next.js"
            quality={100}
          />
          <div className="flex flex-col gap-2 pr-2 pl-5">
            <h3 className="text-lg font-bold">React vs. Next.js</h3>
            <div>4/2/25</div>
            <p>
              Next.js is an open-source JavaScript framework developed by Vercel
              in 2016. Built on top of React, it&apos;s used to create fast,
              efficient, and user-friendly web applications, including static
              websites. While it relies on tools like Node.js and Babel, Next.js
              simplifies the process of building single-page applications and
              makes server-side rendering straightforward for
            </p>
            <div className="text-gray-600 self-end">Read More...</div>
          </div>
        </Link>

        <Link className="flex flex-row gap-2" href="/">
          <Image
            src="/blog_accessibility.jpg"
            width={260}
            height={150}
            alt="React vs. Next.js"
            quality={100}
          />
          <div className="flex flex-col gap-2 pr-2 pl-5">
            <h3 className="text-lg font-bold">
              What is Accessibility and Why is it Important?
            </h3>
            <div>3/29/25</div>
            <p>
              The web plays a growing role in nearly every part of our
              lives—education, work, government, shopping, healthcare,
              entertainment, and more. That&apos;s why it&apos;s so important
              for the web to be accessible to everyone, ensuring equal access
              and opportunity for people of all abilities. In fact, access to
              information and communication technologies, including the
            </p>
            <div className="text-gray-600 self-end">Read More...</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
