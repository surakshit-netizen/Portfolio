import type { Metadata } from "next";
import ProjectsSection from "@/components/work/ProjectsSection";
import EducationSection from "@/components/work/EducationSection";
import ContactSection from "@/components/work/ContactSection";

export const metadata: Metadata = {
  title: "Work & Contact",
  description:
    "Explore Surakshit Chauhan's projects, education, certifications, and get in touch.",
};

export default function WorkPage() {
  return (
    <main style={{ paddingTop: "5rem" }}>
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
