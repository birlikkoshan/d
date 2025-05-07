// import { useEffect, useState } from 'react';
// import './style.css';



// const steps = [
//   {
//     title: 'НАЧАЛЬНАЯ ШКОЛА (1-4 класс)',
//     text: 'Основная цель начальной школы — сформировать интерес и положительную мотивацию к учебе. Педагоги, воспитатели и психологи становятся наставниками детей: они учат самоорганизации и ответственности, выстраиванию правильных отношений с одноклассниками и взрослыми, помогают и направляют маленькую личность в процессе взросления.',
//   },
//   {
//     title: 'СРЕДНЯЯ ШКОЛА (5-8 класс)',
//     text: 'Обучение в Основней школе дает базовые знания по главным направлениям науки и дополнительного образования, идет интенсивная подача общих и профессиональных компетенций. Основной задачей на данном этапе является реализация программ, развивающих технологические, личностные, интеллектуальные склонности и интересы подростка.',
//   },
//   {
//     title: 'СТАРШАЯ ШКОЛА (9-11 класс)',
//     text: 'К данному этапу каждый ученик имеет обширные знания и умения в областях науки, спорта и творчества. Основные фокусы старшей школы - углубленное изучение профильных предметов, осознанный выбор профессиональной деятельности и абсолютная готовность к самообучению. Выпускник школы - это самостоятельная сформировавшаяся личность, готовая принять на себя вызовы 21 век',
//   },
// ];

// export default function SuccessSteps() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(true), 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section className="success-section">
//       <h1 className="success-title">Жетістікке апарар 3 қадам</h1>
//       <div className="steps-container">
//         {steps.map((step, idx) => (
//           <div
//             key={idx}
//             className={`step-card ${show ? 'visible' : ''}`}
//             style={{ transitionDelay: `${idx * 300}ms` }}
//           >
//             <h2>{step.title}</h2>
//             <p>{step.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from 'react';
import './style.css';
import { translations } from './locales';

export default function SuccessSteps(props) {
  const {lang} = props
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // однократный запуск
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="success-section">
      <h1 className="success-title">{translations[lang]?.title}</h1>
      <div className="steps-container">
        {translations[lang]?.slides?.map((step, idx) => (
          <div
            key={idx}
            className={`step-card ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: `${idx * 300}ms` }}
          >
            <h2>{step?.title}</h2>
            <p style={{fontWeight: "bold"}}>{step?.class}</p>
            <p>{step?.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
