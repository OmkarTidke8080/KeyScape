import FeaturedProjects from "./properties/page";
import Hero from "./components/Hero";
import ProjectTypes from "./components/ProjectType";
import ContactForm from "./components/ContactForm";
import TopLocalities from "./components/TopLocalities";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <TopLocalities />
        <FeaturedProjects />
        <ContactForm />
      </main>
    </div>
  );
}
