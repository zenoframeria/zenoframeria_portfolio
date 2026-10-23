import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import SkillTags from "@/components/SkillTags";
import SimpleFooter from "@/components/SimpleFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Hey there, I'm Frame!</h1>
            <h2 className="hero-fullname">Student Developer</h2>
            <p>Exploring web development, AI, Cybersecurity & Quantum Tech</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Projects</a>
              <a href="#achievements" className="btn-outline">Achievements</a>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/zintherion_viii" target="_blank" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/zenoframeria" target="_blank" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/frame-img-3.jpg" alt="Frame"/>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-photo">
            <img src="/frame-img-1.jpg" alt="Frame"/>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">Hi, I’m a high school student fascinated by modern physics and quantum technology, while actively exploring web development, AI, and cybersecurity.</p>
            <p>paragraph about myself</p>
            <p>paragraph about goals</p>
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <SkillTags />
        </section>

        <section className="section" id="projects">
          <h2>Featured Projects</h2>

          <div className="max-w-7xl">
            <FeaturedProject 
              label="Planned"
              title="Project Idea"
              description="A brief description of the project idea."
              tech={["Planning", "next.js"]}
            />
          </div>

          <div className="max-w-7xl ml-auto">
            <FeaturedProject 
              label="Featured project"
              title="RFC: Recycle for Credits"
              description="A gamified web application that lets students recycle waste to earn points and redeem various rewards."
              tech={["Web App", "Gamification", "HTML/CSS/JS"]}
              reverse
            />
          </div>
          <div className="mt-10 flex justify-center">
              <a href="/projects" className="btn-outline">See more projects</a>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <Experience
              period=" Jan 2026"
              title="title"
              description="description"
              tags={["tags", "tags", "tags"]}
            />
            <Experience
              period="2025"
              title="title"
              description="description"
              tags={["tags", "tags", "tags"]}
            />     
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}
