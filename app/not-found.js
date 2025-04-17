import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex self-center flex-col pt-6 gap-3">
      <h2 className="text-xl font-bold self-center">404 - Page Not Found</h2>
      <p className="text-lg self-center">
        This page isn&apos;t in the mix.
      </p>
      <p className="text-lg self-center">We traced the cables, checked the input
      list, and line-checked twice…</p>
      <p className="text-lg self-center">Still dead silence.</p>
      <Image
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdhYWV4MDdrOGY3eWloeTVzamR3ZnUwZnBycDd3ZzhkZHN2ZnZ2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGwSs39WPuxsFhe/giphy.gif"
        width={500}
        height={500}
        alt="Mic not working GIF"
        className="self-center"
      />
      <Link href="/" className="text-xl self-center border border-gray-400 rounded-sm bg-[#eaf4f4] px-1 mb-8 mt-4"> 
      Back to the Main Mix
      </Link>
    </div>
  );
}
