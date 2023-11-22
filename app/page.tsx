import { Intro } from "@/components/intro";
import { Divider } from "@/components/divider";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experiences } from "@/components/experiences";
import { Contact } from "@/components/contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}
