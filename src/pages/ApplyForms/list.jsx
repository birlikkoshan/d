import React, { useState, useEffect } from 'react';
import './AnimatedForm.css';
const content = {
  ru: {
    title: 'К заявлению прилагаются следующие документы:',
    documents: [
      'Копия свидетельства о рождении ребенка',
      'Копия документа, удостоверяющего личность матери ребенка',
      'Копия документа, удостоверяющего личность отца ребенка',
      '2 фото ребенка 3×4 см',
      'Документы о состоянии здоровья:',
      'Форма 052-2/е – Паспорт здоровья ребенка',
      'Форма 065/е – Профилактическая карта прививок',
      'ОАК, ОАМ, 3-х кратный соскоб',
      'Справка об эпид. окружении на момент прибытия',
      'Проф. осмотр узких специалистов'
    ]
  },
  kz: {
    title: 'The following documents are attached to the application:',
    documents: [
      'Copy of the child\'s birth certificate',
      'Copy of the mother\'s identity document',
      'Copy of the father\'s identity document',
      '2 child photos (3×4 cm)',
      'Health documents:',
      'Form 052-2/e - Child\'s health passport',
      'Form 065/e - Preventive vaccination record',
      'CBC, urinalysis, triple stool test',
      'Certificate of epidemiological environment',
      'Specialist medical check-up results'
    ]
  }
};

const AnimatedFormPage = ({func, trs, lang}) => {

  return (<>
    <div className="form-container">
      
      <form className="animated-form" onSubmit={(e) => e.preventDefault()}>
        <h2>{content[lang].title}</h2>
        
        <ul style={{padding: 20}}>
          {content[lang].documents.map(el => (
            <li>{el}</li>
          ))}
        </ul>
        <div className="form-buttons">
          <button type="button" className="btn save" onClick={func}>{trs.modal.btn2}</button>
        </div>
      </form>
    </div></>
  );
};

export default AnimatedFormPage