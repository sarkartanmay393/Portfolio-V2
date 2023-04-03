import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import QuoteCard from "../components/QuoteCard";
import ContactCard from "../components/ContactCard";

import Data from "../public/assets/WebsiteData.json";
import AboutCard from "../components/AboutCard";

export default function Home() {
  const [websiteData, setWebsiteData] = useState({
    funfacts: Data["funfacts"],
    funfact_highlights: Data["funfact-highlights"],
    email: Data["email"],
    intro_text: Data["intro-text"],
    intro_terms: Data["intro-terms"],
    intro_desc: Data["intro-description"],
    ps: Data["ps"],
    quote: Data["quote"],
    contacts: Data["contacts"],
    about_me: Data["about-me"],
    footer_desc: Data["footer-description"],
    skills: Data["skills"],
    projects: Data["projects"],
  });

  return (
    <Layout title="Portfolio V2">
      <IntroCard
        intro_text={websiteData.intro_text}
        term_first={websiteData.intro_terms.first}
        term_second={websiteData.intro_terms.second}
        ps_ref={websiteData.ps.ref}
        ps_status={websiteData.ps.status}
        description={websiteData.intro_desc}
      />
      <QuoteCard
        quote={websiteData.quote.text}
        author={websiteData.quote.author}
      />
      {/*
      <BlogSection />
      <ProjectSection projects={websiteData.projects} />
      <SkillSection
        languages={websiteData.skills.languages}
        frameworks={websiteData.skills.frameworks}
        cloud={websiteData.skills.cloud}
        others={websiteData.skills.others}
        tools={websiteData.skills.tools}
        databases={websiteData.skills.databases}
      />*/}
      <AboutCard {...websiteData.about_me} />
      <ContactCard
        contacts={{ twitter: "sarkartanmay393", linkedin: "tanmaysrkr" }}
        email="{websiteData.email}"
      />
    </Layout>
  );
}
