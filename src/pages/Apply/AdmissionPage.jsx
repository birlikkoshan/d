import './AdmissionPage.css';
import Header from '../../components/Header/Header';
import { translate } from './locales';
import { useState, useEffect } from 'react';
import Modal from './Modal'
import List from './Modal1'
export const AdmissionPage = () => {

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
  const trs = translate[lang];
  return (<>
    <Header/>
    <div className="admission-page">
      <h1 className="admission-title">{trs.block1.title}</h1>
      
      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <h3>{trs.block1.q1}</h3>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <h3>{trs.block1.q2}</h3>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <h3>{trs.block1.q3}</h3>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <h3>{trs.block1.q4}</h3>
        </div>
      </div>

      <h2 className="admission-subtitle">{trs.block2.title}</h2>

      <div className="exam-blocks">
        <div className="exam-card">
          <h3>1–2 {trs.block2.class}</h3>
          <ul>
            <li>🧠 {trs.block2.q1.test1}</li>
            <li>🧩 {trs.block2.q1.test2}</li>
          </ul>
          <p>{trs.block2.q1.add}</p>
        </div>

        <div className="exam-card">
          <h3>3–4 {trs.block2.class}</h3>
          <ul>
            <li>📐 Математика</li>
            <li>📘 {trs.block2.q2.test2}</li>
            <li>📘 {trs.block2.q2.test3}</li>
            <li>🌍 {trs.block2.q2.test4}</li>
          </ul>
        </div>

        <div className="exam-card">
          <h3>5–11 {trs.block2.class}</h3>
          <ul>
            <li>📐 Математика</li>
            <li>📘 {trs.block2.q2.test2}</li>
            <li>📘 {trs.block2.q2.test3}</li>
            <li>🌍 {trs.block2.q2.test4}</li>
          </ul></div>
      </div>
      <div className="btnCase">
        {/* <Btn text={trs.btn1}/> */}
        <List trs={trs} lang={lang}/> 
        <Modal trs={trs}/>
      </div>
    
    </div>
   <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>
  );
};

