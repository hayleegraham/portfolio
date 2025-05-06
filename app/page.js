import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <About />
      <Projects />
      <Blog />
      <Resume />
    </div>
  );
}
