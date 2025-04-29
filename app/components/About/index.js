import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex self-center flex-col pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">ABOUT</h2>
      </div>
      <div className="flex self-center">
        <div className="pt-5 pr-[60px]">
          <Image
            src="/haylee_profile.jpg"
            width={500}
            height={500}
            alt="Picture of Haylee Graham"
            className="shadow-[2px_2px_5px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="w-[600px] pl-5 py-8 pr-10">
          <p>
            Hi, I&apos;m Haylee Graham, a passionate Audio Engineer and
            soon-to-be graduate with an Associate&apos;s Degree in Web
            Development. With over 10 years of experience in the audio-visual
            field, I&apos;ve had the opportunity to work on a wide range of
            projects, from live theater productions and concerts to corporate
            events and permanent installations. I have experience working in
            casinos and maintaining dedicated server rooms, network switches,
            and large 70-volt audio systems. I&apos;ve honed my skills in
            operating and maintaining digital audio consoles, video
            switchers, lighting systems, content management systems, and
            more.
          </p>
          <p className="pt-2.5">
            I&apos;ve also developed a strong foundation in web development,
            with hands-on experience in JavaScript, React, Next.js,
            PHP, SQL, and CMS platforms like WordPress. I&apos;m excited to
            bring my creativity, technical skills, and problem-solving abilities
            to new challenges in both the AV and web development industries.
            I&apos;m always eager to learn and adapt in fast-paced environments,
            and I thrive when working in collaborative, team-oriented settings.
          </p>
          <div className="flex flex-row gap-5 pt-6 pl-2">
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">JavaScript</div>
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">React</div>
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">Next.js</div>
          </div>
          <div className="flex flex-row gap-5 pt-5 pl-2">
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">PHP</div>
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">SQL</div>
            <div className="border border-[#B1D0D3] rounded bg-[#eaf4f4] p-1.5 w-[140px] text-center shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.2)]">WordPress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
