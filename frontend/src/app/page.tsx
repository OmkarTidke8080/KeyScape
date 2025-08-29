import FeaturedProjects from "./properties/page";
import Hero from "./components/Hero";
import ProjectTypes from "./components/ProjectType";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ProjectTypes />
        <FeaturedProjects />
        <ContactForm />
      </main>
    </div>
  );
}
