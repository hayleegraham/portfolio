import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex sm:h-[100px] bg-[#d3eef0] sm:justify-between justify-center mt-auto sm:flex-row flex-col items-center sm:itetms-start gap-4">
      <div className="flex sm:w-1/3">
        <div className="lg:h-[96px] pt-0.5">
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
        <div className="flex flex-col lg:pl-6 sm:pl-3 sm:pt-[18px] pt-2 text-center sm:text-start">
          <Link className="xl:text-3xl xl:font-bold text-xl font-semibold" href="/">
            Haylee Graham
          </Link>
          <div className="flex xl:flex-row flex-col pt-1 pl-0.5">
            <div className="xl:text-base text-sm flex gap-2 my-auto"><svg className="w-4 h-4 text-black mt-1 hidden sm:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg> graham.haylee@yahoo.com</div>

          </div>
        </div>
      </div>
      <div className="flex flex-row lg:gap-5 gap-2 self-center justify-center">
        <Link href="https://github.com/hayleegraham" target="_blank" passHref>
          <Image
            src="/github_icon.png"
            width={40}
            height={40}
            alt="Git Hub Logo"
            className="lg:w-10 w-8"
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
            className="p-[1px] lg:w-10 w-8"
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
            className="pt-[1px] lg:w-10 w-8"
          />
        </Link>
      </div>
      <div className="flex flex-row lg:mr-12 sm:mr-3 sm:w-1/3 justify-end text-sm xl:text-base pb-2">
        <Link href="#top">BACK TO TOP</Link>
      </div>
    </div>
  );
};

export default Header;
