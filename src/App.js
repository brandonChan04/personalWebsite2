import './App.css';
import { useState, useEffect } from 'react';
import initFluidCursor from "./useFluidCursor";
import CompanyLogo from './CompanyLogo';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(savedMode);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    initFluidCursor();
  }, []);


  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <>
    <canvas
        id="fluid"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <main className="portfolio">
          <header className="portfolio-header">
            <h1>Brandon Chan</h1>
            <div className="header-controls">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/brandon-chan-a10831165/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><CompanyLogo src="/logos/linkedin.png" alt="LinkedIn" /></a>
                <a href="https://github.com/brandonChan04" title="Github" target="_blank" rel="noopener noreferrer"><CompanyLogo src="/logos/github.png" alt="Github" /></a>
                <a href="mailto:bjc19@sfu.ca" title="Email"><CompanyLogo src="/logos/mail.svg" alt="Email" /></a>
                <a href="/BrandonChanResume.pdf" title="Resume" target="_blank" rel="noopener noreferrer"><CompanyLogo src="/logos/resume.svg" alt="Resume" /></a>
                <button
                  className="dark-mode-toggle"
                  onClick={toggleDarkMode}
                  title="Toggle dark mode"
                >
                  <img
                    src={isDark ? "/logos/sun.svg" : "/logos/moon.svg"}
                    alt={isDark ? "Light mode" : "Dark mode"}
                    className="theme-icon"
                  />
                </button>
              </div>
            </div>
          </header>

          <section className="portfolio-section">
            <h2>◆ Currently:</h2>
            <div className="entry">
              <p>↳ Incoming Software Engineer Intern @ <CompanyLogo src="/logos/arista.png" alt="Arista" /><strong>Arista</strong></p>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ EOS Network Operating Systems Team</p>
              </div>
            </div>
            <div className="entry">
              <p>↳ Computer Science @ <CompanyLogo src="/logos/sfu.jpeg" alt="Simon Fraser University" /><strong>Simon Fraser University</strong></p>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ Expected Graduation: April 2027</p>
              </div>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ 3.92 GPA. Dean's, Principal's honour role</p>
              </div>
            </div>
          </section>

          <section className="portfolio-section">
            <h2>◆ Previously:</h2>
            <div className="entry">
              <p>↳ Machine Learning Software Engineer Intern @ <CompanyLogo src="/logos/canai.png" alt="CanAI Garage" /><strong>CanAI Garage</strong></p>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ Shipped production ML systems to operationalize LLMs across public-sector workflows</p>
              </div>
            </div>

            <div className="entry">
              <p>↳ Software Engineer Intern @ <CompanyLogo src="/logos/excelar.png" alt="Excelar" /><strong>Excelar</strong></p>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ Built high-performance data visualizations and AI marketplaces for Careflow at scale</p>
              </div>
            </div>
            <div className="entry">
              <p>↳ Junior Programmer @ <CompanyLogo src="/logos/lantronix.jpeg" alt="Lantronix" /><strong>Lantronix</strong></p>
              <div style={{marginLeft: '30px'}}>
                <p className="sub-entry">↳ Automated Open-Q DK training/testing pipelines, streamlining implementation</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;