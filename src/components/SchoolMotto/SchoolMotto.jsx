import React from 'react';
import './SchoolMotto.css';
import {translations} from './locales'
const SchoolMotto = (props) => {
    const {lang} = props
  return (
    <section className="motto-section">
      <div className="motto-box">
        <h2 className="motto-title">{translations[lang]?.title} 🎓</h2>
        <p className="motto-text">{translations[lang]?.q1}</p>
      </div>
    </section>
  );
};

export default SchoolMotto;
