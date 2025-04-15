import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex self-center flex-col pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">ABOUT</h2>
      </div>
      <div className="flex self-center">
        <div className="p-5">
          <Image
            src="/haylee_profile.jpg"
            width={580}
            height={580}
            alt="Picture of Haylee Graham"
          />
        </div>
        <div className="w-[580px] p-5">
          <p className="p-2.5">
            Hi, I&apos;m Haylee Graham, a passionate Audio Engineer and
            soon-to-be graduate with an Associate&apos;s Degree in Web
            Development. With over 10 years of experience in the audio-visual
            field, I&apos;ve had the opportunity to work on a wide range of
            projects, from live theater productions and concerts to corporate
            events and permanent installations. I have experience working in
            casinos and maintaining dedicated server rooms, network switches,
            and large 70-volt audio systems. I&apos;ve honed my skills in
            operating and maintaining digital and analog audio consoles, video
            switchers, lighting systems, signage content management systems, and
            more.
          </p>
          <p className="p-2.5">
            I&apos;ve also developed a strong foundation in web development,
            with hands-on experience in JavaScript, React, React with Next.js,
            PHP, SQL, and CMS platforms like WordPress. I&apos;m excited to
            bring my creativity, technical skills, and problem-solving abilities
            to new challenges in both the AV and web development industries.
            I&apos;m always eager to learn and adapt in fast-paced environments,
            and I thrive when working in collaborative, team-oriented settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
