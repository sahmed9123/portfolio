import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
    </main>
  );
}
