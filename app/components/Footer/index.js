import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[100px] bg-[#d3eef0] justify-between">
      <div className="flex">
        <div className="h-[96px] pt-0.5">
        <Link href="/">
            <Image
              src="/logo.png"
              width={96}
              height={96}
              alt="Graham Slams Logo"
              className="p-0.5 ml-12"
            />
          </Link>
        </div>
        <div className="flex flex-col pl-6 pt-[18px]">
          <Link className="text-4xl font-bold" href="/">
            Haylee Graham
          </Link>
          <div className="flex flex-row pt-0.5 pl-0.5">
            <div className="text-lg">Web Developer</div>
            <div className="rounded-full bg-black w-1 h-1 mt-3.5 ml-2"></div>
            <div className="text-lg pl-2.5">Audio Engineer</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-[30px]">
        <Link href="https://github.com/hayleegraham" target="_blank" passHref>
          <Image
            src="/github_icon.png"
            width={40}
            height={40}
            alt="Git Hub Logo"
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
            className="p-[1px]"
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
            className="pt-[1px]"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-8 mt-[38px] mr-12 w-[391px] justify-end">
        <Link href="/">BACK TO TOP</Link>
      </div>
    </div>
  );
};

export default Header;
