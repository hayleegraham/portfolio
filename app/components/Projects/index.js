import React from "react";
import Image from "next/image";
import Link from "next/link";

//Projects
const Projects = () => {
  return (
    <div className="flex flex-col self-center gap-5 pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">PROJECTS</h2>
      </div>
      <div className="flex flex-row self-center gap-12 flex-wrap w-[1200px] p-5">

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_graham_gardens.png"
              width={350}
              height={247}
              alt="Graham Gardens Website"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Graham Gardens</h3>
          <p>An E-Commerce website for a seed company with PayPal checkout.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">React</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">Next.js</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">MySQL Database</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">Tailwind</div>
          </div>
        </Link>

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_weather.png"
              width={350}
              height={247}
              alt="Weather Website"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Weather Website</h3>
          <p>A searchable weather website using weather API.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">Angular</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">Bootstrap</div>
          </div>
        </Link>

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_ent_reviews.png"
              width={350}
              height={247}
              alt="Entertainment Reviews Website"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Entertainment Reviews</h3>
          <p>A project built to enter and track internal entertainment reviews for a Casino.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">JavaScript</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">HTML</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">SCSS</div>
          </div>
        </Link>

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_shapes.png"
              width={350}
              height={247}
              alt="Random Shape Generator Website"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Random Shape Generator</h3>
          <p>A random shape generator that creates unique designs with each refresh.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">JavaScript</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">HTML</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">SCSS</div>
          </div>
        </Link>

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_hangman.png"
              width={350}
              height={247}
              alt="Dinosaur Hangman Game"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Dinosaur Hangman Game</h3>
          <p>A hangman game where you try to save the dinosaurs from an incoming meteor.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">JavaScript</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">HTML</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">SCSS</div>
          </div>
        </Link>

        <Link className="flex flex-col gap-2 w-[350px]" href="/">
          <div>
            <Image
              src="/proj_card_match.png"
              width={350}
              height={247}
              alt="Card Match Game"
              quality={100}
            />
          </div>
          <h3 className="font-bold text-center text-lg">Quick Match</h3>
          <p>A card matching game using a dog API for adorable images.</p>
          <div className="flex flex-row gap-3 mt-0.5">
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">JavaScript</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">HTML</div>
            <div className="border border-[#cce3de] rounded-sm bg-[#eaf4f4] px-1">SCSS</div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Projects;
