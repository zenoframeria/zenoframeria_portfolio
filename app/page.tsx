import Navbar from "@/components/Navbar";

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
      </main>
    </>
  );
}
