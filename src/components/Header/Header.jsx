import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from './locales';
import './style.css';
import Logo from '../ImageContainers/Logo';
import logo from './img/logo.png';
import logo2 from './img/hsc.png';
import instagram from './img/instagram.png'
import whatsapp from './img/whatsapp.png'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState('kz');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'kz' ? 'ru' : 'kz';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.dispatchEvent(new Event('storage'));
  };

  const t = translations[lang];

  return (
    <header>
      <div className="top-bar">
      <div className="logos">
        <Logo url={logo} style={{width: 70}}/>
        <Logo url={logo2} style={{width: 70}}/>
      </div>
      <div></div>
      <div className="logo-pc">Dana school</div>
      {/* <div className="logo-pc">        {t.title}      </div> */}
        
        <div className="social-icons">
          <a href="https://www.instagram.com/dana_school_almaty?igsh=MTJxMXAzcHJjMWNyMA== " target="_blank" rel="noopener noreferrer">
            <Logo url={instagram}/>
          {/* <img src="/icons/instagram.svg" alt="Instagram" /> */}
          </a>
          <a href="https://wa.me/+77003700333" target="_blank" rel="noopener noreferrer">
            <Logo url={whatsapp}/>
          </a>
        </div>
      </div>

      <div className="main-header">
      <div className="logo">  
        <Logo url={logo} />
        <Logo url={logo2} />
        Dana school
        </div>
        <div className={`nav ${navOpen ? 'open' : ''}`}>
          <Link to='/'>{t.home}</Link>
            <Link to='/about'>{t.about}</Link>
            <Link to='/documents'>{t.services}</Link>
            <Link to='/to-apply'>{t.apply}</Link>
            <Link to='/graduates'>{t.graduators}</Link>
            <Link to='/contacts'>{t.contact}</Link>
            <a onClick={toggleLang} className="lang-btn">
              {lang === 'kz' ? 'RU' : 'KZ'}
            </a>
        </div>

        <div className="burger" onClick={() => setNavOpen(!navOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
