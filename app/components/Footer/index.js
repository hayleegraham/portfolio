import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[100px] bg-[#d3eef0] justify-between mt-auto">
      <div className="flex lg:w-1/3">
        <div className="h-[96px] pt-0.5">
        <Link href="/">
            <Image
              src="/logo.png"
              width={96}
              height={96}
              alt="Graham Slams Logo"
              className="p-0.5 ml-12 hidden lg:block"
            />
          </Link>
        </div>
        <div className="flex flex-col lg:pl-6 pl-3 pt-[18px]">
          <Link className="xl:text-3xl xl:font-bold text-xl font-semibold" href="/">
            Haylee Graham
          </Link>
          <div className="flex xl:flex-row flex-col pt-0.5 pl-0.5">
            <div className="xl:text-base text-sm">Web Developer</div>
            <div className="rounded-full bg-black w-1 h-1 mt-3.5 ml-2 hidden xl:block"></div>
            <div className="xl:text-base text-sm xl:pl-2.5">Audio Engineer</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:gap-5 gap-2 self-center justify-center lg:ml-0 ml-2.5">
        <Link href="https://github.com/hayleegraham" target="_blank" passHref>
          <Image
            src="/github_icon.png"
            width={40}
            height={40}
            alt="Git Hub Logo"
            className="lg:w-10 w-6"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/haylee-graham-b57826237/"
          target="_blank"
          passHref
        >
          <Image
            src="/linked_in_icon.png"
            width={40}
            height={40}
            alt="LinkedIn Logo"
            className="p-[1px] lg:w-10 w-6"
          />
        </Link>
        <Link
          href="https://codepen.io/hayleegraham"
          target="_blank"
          passHref
        >
          <Image
            src="/codepen_icon.png"
            width={40}
            height={40}
            alt="CodePen Logo"
            className="pt-[1px] lg:w-10 w-6"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-8 mt-[38px] lg:mr-12 mr-3 w-1/3 justify-end text-sm xl:text-base">
        <Link href="#top">BACK TO TOP</Link>
      </div>
    </div>
  );
};

export default Header;
