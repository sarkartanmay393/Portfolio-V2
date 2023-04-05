import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import QuoteCard from "../components/QuoteCard";
import ContactCard from "../components/ContactCard";
import BlogCard from "../components/BlogCard";
import AboutCard from "../components/AboutCard";
import ProjectSection from "../components/ProjectsCard";
import SkillSection from "../components/SkillsCard";

export default function Home() {
  return (
    <Layout title="Portfolio V2">
      <IntroCard />
      <QuoteCard />
      <BlogCard />
      <ProjectSection />
      <SkillSection />
      <AboutCard />
      <ContactCard />
    </Layout>
  );
}
