export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-inner">
                <a href="#home" className="logo">FRAMERIA</a>

                <nav className="nav-links">
                    <a href="#about">Home</a>
                    <a href="#experience">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#achievements">Contact</a>
                </nav>

                <button id="themeToggle" className="theme-btn" aria-label="Toggle Theme">
                    <span className="theme-icon">🌙</span>
                </button>
            </div>
        </header>
    );
}   