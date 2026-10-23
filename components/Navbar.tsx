export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-inner">
                <a href="/" className="logo">FRAMERIA</a>

                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/#contact">Contact</a>
                </nav>

                <button id="themeToggle" className="theme-btn" aria-label="Toggle Theme">
                    <span className="theme-icon">🌙</span>
                </button>
            </div>
        </header>
    );
}   