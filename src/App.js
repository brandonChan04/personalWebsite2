import './App.css';
import { useState, useEffect } from 'react';
import CompanyLogo from './CompanyLogo';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <main className="portfolio">
        <header className="portfolio-header">
          <h1>Brandon Chan</h1>
          <div className="header-controls">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/brandon-chan-a10831165/" title="LinkedIn" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://github.com/brandonChan04" title="Github" target="_blank" rel="noopener noreferrer">in</a>
              <a href="mailto:bjc19@sfu.ca" title="Email">✉</a>
            </div>
            <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
              {isDark ? '☀️' : '🌙'}
            </button>
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
            <p>↳ Computer Science @ <CompanyLogo src="/logos/arista.png" alt="Simon Fraser University" /><strong>Simon Fraser University</strong></p>
            <div style={{marginLeft: '30px'}}>
              <p className="sub-entry">↳ Expected Graduation: April 2027</p>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>◆ Previously:</h2>
          <div className="entry">
            <p>↳ Machine Learning Software Engineer Intern @ <CompanyLogo src="/logos/arista.png" alt="CanAI Garage" /><strong>CanAI Garage</strong></p>
            <div style={{marginLeft: '30px'}}>
              <p className="sub-entry">↳ LLMs, ML</p>
            </div>
          </div>

          <div className="entry">
            <p>↳ Software Engineer Intern @ <CompanyLogo src="/logos/arista.png" alt="Excelar" /><strong>Excelar</strong></p>
            <div style={{marginLeft: '30px'}}>
              <p className="sub-entry">↳ Fullstack, Careflow</p>
            </div>
          </div>
          <div className="entry">
            <p>↳ Junior Programmer @ <CompanyLogo src="/logos/arista.png" alt="Lantronix" /><strong>Lantronix</strong></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
