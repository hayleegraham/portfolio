import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarLink, NavbarToggle, NavbarCollapse, NavbarBrand } from "flowbite-react";

const Header = () => {
  return (

    <Navbar className="flex h-[100px] bg-[#d3eef0] dark:bg-[#d3eef0] dark:border-none py-0 justify-between sticky top-0 left-0 z-50 w-full">
      <div className="flex">
        <div className="h-[96px] pt-0.5">
          <Link href="/" className="hidden sm:block">
            <Image
              src="/logo.png"
              width={96}
              height={96}
              alt="Graham Slams Logo"
              className="p-0.5"
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

      <NavbarToggle />
      <NavbarCollapse>

        <NavbarLink href="/about" className="lg:text-base text-black dark:text-black bg-[#d3eef0] border border-gray-500">ABOUT</NavbarLink>
        <NavbarLink href="/projects" className="lg:text-base text-black dark:text-black bg-[#d3eef0] border border-gray-500">PROJECTS</NavbarLink>
        <NavbarLink href="/blog" className="lg:text-base text-black dark:text-black bg-[#d3eef0] border border-gray-500">BLOG</NavbarLink>
        <NavbarLink href="/resume" className="lg:text-base text-black dark:text-black bg-[#d3eef0] border border-gray-500">RESUME</NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
