import { Intro } from "@/components/intro";
import { Divider } from "@/components/divider";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
