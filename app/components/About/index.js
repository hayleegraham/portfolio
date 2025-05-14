import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = ({ longDesc }) => {

  return (

    <div className="flex justify-self-center flex-col pt-10">

      {longDesc ? (
        <div className="flex flex-col justify-center">
          <div className="w-[1200px] flex flex-col self-center" id="top">
            <h2 className="text-2xl font-bold self-center">ABOUT</h2>
            <p className="font-semibold text-lg self-center py-4">
              Hi, I&apos;m Haylee Graham - a passionate Audio Engineer and
              full-stack Web Developer.
            </p>
          </div>
          <div className="flex flex-col self-center">

            <div className="flex">
              <div className="pt-5 pr-[60px]">
                <Image
                  src="/haylee_profile.jpg"
                  width={500}
                  height={500}
                  alt="Picture of Haylee Graham"
                  className="shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"
                />
              </div>

              <div className="w-[620px] pl-4 py-6">

                <h3 className="text-xl font-bold mb-4">Audio Engineer</h3>
                <p>
                  With over 10 years of experience in the audio-visual
                  field, I&apos;ve worked on a wide range of
                  projects, from mixing FOH for live theater productions and concerts, to operating
                  zoom conference rooms and other coorporate events, to permanent audio/visual system installations.
                </p>
                <p className="pt-3">
                  I have experience working in casinos, where I maintained server rooms, network switches, and large 70-volt audio systems. I've also developed strong skills in programming and operating Q-SYS systems.
                </p>
                <h3 className="text-xl font-bold mb-4 mt-[36px]">Web Developer</h3>
                <p>
                  I&apos;ve developed a strong foundation in web development,
                  with hands-on experience in React, Next.js,
                  PHP, SQL, and CMS platforms like WordPress. I have worked with both Firebase Realtime Database, as well as MySQL databases. I have built multiple full-stack projects, and am eager to gain mmore hands-on experience in this feild.
                </p>
                <p className="pt-3">
                  I&apos;m excited to
                  bring my creativity, technical skills, and problem-solving abilities
                  to new challenges in both the AV and web development industries.
                </p>

              </div>

            </div>

            <div className="flex mb-6">
              <div className="flex flex-col">
                <div className="mt-6">Experienced In:</div>
                <div className="flex flex-row gap-5 pt-6 pl-2">
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">React</div>
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">Next.js</div>
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">Firebase</div>
                </div>
                <div className="flex flex-row gap-5 pt-5 pl-2">
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">PHP</div>
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">SQL</div>
                  <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">WordPress</div>
                </div>

              </div>

              <div className="w-[620px] ml-[108px] pb-5">
                <h3 className="text-xl font-bold my-3">Personal Life</h3>
                <p>
                  In my spare time, I love to be outdoors hiking, biking, Onewheel-ing, snowboarding, and gardening. My boyfriend and I take full advantage of the amazing beaches here in San Diego and go snorkeling and body surfing often. We also love playing video games together, and coding together, as he is also a full-stack Web Developer, and the reason I starting learning to code!
                </p>
              </div>
            </div>

          </div>
        </div>
      ) : (

        <div className="flex flex-col">
          <div className="w-[1200px] flex flex-col self-center" id="top">
            <Link href="/about">
              <h2 className="text-2xl font-bold self-start">ABOUT</h2>
            </Link>
          </div>
          <div className="flex justify-between self-center w-[1200px] px-6">
            <div className="pt-5 pr-[60px]">
              <Image
                src="/haylee_profile.jpg"
                width={1160}
                height={1160}
                alt="Picture of Haylee Graham"
                className="h-[400px] w-[400px] shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="w-[650px] py-8 pr-10">
              <div>
                <p>
                  Hi, I'm Haylee Graham — a passionate Audio Engineer and full-stack Web Developer.
                </p>
                <p className="pt-3.5">
                  With over 10 years of experience in the audio-visual industry, I&apos;ve now transitioned into the world web development with hands-on experience in React, Next.js, PHP, SQL, and WordPress.
                </p>
                <p className="pt-3.5">
                  I&apos;m excited to bring my creativity, technical skills, and problem-solving mindset to new challenges in both the AV and web development industries.
                </p>

              </div>

              <div className="mt-14">Experienced In:</div>
              <div className="flex flex-row gap-5 pt-6 pl-2">
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">React</div>
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">Next.js</div>
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">Firebase</div>
              </div>
              <div className="flex flex-row gap-5 pt-5 pl-2">
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">PHP</div>
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">SQL</div>
                <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">WordPress</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
