import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   new URL(
    //     "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdhYWV4MDdrOGY3eWloeTVzamR3ZnUwZnBycDd3ZzhkZHN2ZnZ2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGwSs39WPuxsFhe/giphy.gif"
    //   ),
    // ],
  },
};

export default withFlowbiteReact(nextConfig);