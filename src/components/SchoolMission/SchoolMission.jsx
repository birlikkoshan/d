import React from 'react';
import './SchoolMission.css';
import { translations } from './locales';
const SchoolMission = (props) => {
    const {lang} = props
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2 className="mission-title">{translations[lang]?.title}</h2>
        <p className="mission-text">
        {translations[lang]?.q1}
        </p>

        <h2 className="mission-title">{translations[lang]?.title1} </h2>
        <p className="mission-text">
        {translations[lang]?.q2}
        </p>
      </div>
    </section>
  );
};

export default SchoolMission;
