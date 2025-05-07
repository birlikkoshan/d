import React, { useEffect, useState } from 'react';
import './Values.css';
import team from './img/team.jpg'
import {translate} from './locales'
// const values = [ 'Уважение', 'Уверенность в себе', 'Ответственность', 'Командная работа', ".",'Дисциплина', 'Саморазвитие', "."]



const SchoolValues = (props) => {
  const {lang} = props;
  const values = translate[lang]?.qs;
  const [st, setSt] = useState({display:`${ window.innerWidth < 756 ? 'none' : 'flex'}`, background: 'transparent', boxShadow: 'none', color: "transparent"})
  useEffect(() => {
    setSt({display:`${ window.innerWidth < 756 ? 'none' : 'flex'}`, background: 'transparent', boxShadow: 'none', color: "transparent"})
  }, [window.innerWidth]);
  const arrev = (val) => {
    if(val == '.'){
      return st
    }
  }
  return (
    <section className="values-section">
      <h2 className="values-title">{translate[lang]?.header}</h2>
      <div className="values-grid">
        {values.map((val, index) => (
          
          <div key={index} className='value-card' style={ arrev(val) }>
            <h3>{val}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolValues;
