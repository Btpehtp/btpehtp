import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Projects } from "../components/Projects";
import { Sponsors } from "../components/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Projects />
      <Sponsors />
    </>
  );
}
