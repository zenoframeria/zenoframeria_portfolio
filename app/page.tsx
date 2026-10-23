import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Hey there, I'm Frame!</h1>
            <h2 className="hero-fullname">Thitipron Lapchaitavornkul</h2>
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
            <img src="https://media.discordapp.net/attachments/1426420966111707188/1562800598225518622/RUN_1935.jpg?ex=6adb4efa&is=6ad9fd7a&hm=3791f6e71f31108f80f5515b951b9b91b6cf7768dd32189c7f6c7117660fa3b8&=&format=webp" alt="Frame"/>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">Hi, I’m a high school student fascinated by modern physics and quantum technology, while actively exploring web development, AI, and cybersecurity.</p>
            <p>paragraph about myself</p>
            <p>paragraph about goals</p>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>My Projects</h2>

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
              description="A brief description of the project idea."
              tech={["Web App", "Gamification", "next.js"]}
              reverse
            />
          </div>
        </section>
      </main>
    </>
  );
}
