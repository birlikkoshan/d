import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import History from '../../components/History/History';
import SchoolMotto from './../../components/SchoolMotto/SchoolMotto'   
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'
import SchoolMission from './../../components/SchoolMission/SchoolMission'
import Values from './../../components/Values/Values'
import vid from './IMG_0154.mp4'
import './About.css'
// import Slides from '../../components/SlideShow/Slides'
// import SuccsesSteps from './../../components/SuccessSteps/SuccessSteps';
// import Gallery from './../../components/Gallery/Gallery';

// import img1 from './img/img1.png'
// import img2 from './img/img2.png'
// import img3 from './img/img3.png'

// import gal1 from './gal/gal1.png';
// import gal2 from './gal/gal2.png';
// import gal3 from './gal/gal3.png';
// import gal4 from './gal/gal4.png';
// import gal5 from './gal/gal5.png';
// import gal6 from './gal/gal6.png';
// import gal7 from './gal/gal7.png';
// import gal8 from './img/gal8.png';
// import gal9 from './img/gal9.png';


// const imageUrls = [img1, img2, img3];
// const galUrls = [gal1, gal2, gal3, gal4, gal5,gal6, gal7];
// , gal8, gal9


import { translations } from './locales';
export const AboutPage = () => {
    const [lang, setLang] = useState('kz');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') || 'kz';
        setLang(savedLang);
    }, []);
    useEffect(() => {
        const handleStorageChange = () => {
            const savedLang = localStorage.getItem('lang') || 'kz';
            setLang(savedLang);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return <div>
        <Header />
        <div className="video-background">
        <div className='about-container'>
        <video autoPlay muted loop playsInline>
          <source src={vid} type="video/mp4" />
        </video>
        </div>
            <div className='about-content'>
                <h1 className="about-title">{translations[lang]?.title}</h1> 
                <p className="about-intro">{translations[lang]?.subtitle}</p> 
                <p className="about-description"> {translations[lang]?.q1} <strong>{translations[lang]?.q2}</strong> {translations[lang]?.q3}</p> 
                <p className="about-description"> {translations[lang]?.q5}</p> 
            </div>
        </div>
        <History lang={lang}/>
        <SchoolMotto lang={lang}/>
        <SchoolMission lang={lang}/>
        <Values lang={lang}/>
        <ScrollToTopButton/>
        <footer className="form-footer">
            <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
        
    </div>
}