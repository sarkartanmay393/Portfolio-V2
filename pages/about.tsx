// import FunfactSection from '../src/components/FunFactCard';
import React from "react";
import Layout from "../components/Layout";
import aboutImage from "../public/assets/tanmay-image.png";
import webInfo from "../public/assets/WebsiteData.json";

function AboutPage() {
  const { funfacts } = webInfo;
  const { intro, p1, p2, p3 } = webInfo["about-me"];
  const funfact_highlights = webInfo["funfact-highlights"];

  return (
    <Layout title="About Me">
      <section className="about-page">
        <header>
          <a href="/about">
            <h1 id="page-header-text">
              <span id="page-slash-text">/</span>about-me
            </h1>
          </a>
        </header>
        <main>
          <section className="about-whoami-section">
            <section className="about-description">
              <h3>Who am I?</h3>
              <p id="desc-intro">{intro}</p>
              <p id="desc-text">{p1}</p>
              <p id="desc-text">{p2}</p>
              <p id="desc-text">{p3}</p>
            </section>
            <div id="about-image-div">
              <img id="about-image" src={aboutImage} alt="tanmay-profile" />
            </div>
          </section>

          {/* <FunfactSection
          funfacts={funfacts}
          funfact_highlights={funfact_highlights}
        /> */}
        </main>
      </section>
    </Layout>
  );
}

export default AboutPage;
