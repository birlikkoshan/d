import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { translations } from './locales';

const SchoolTimeline = (props) => {
    const {lang} = props
    const events = [
      { year: '2009', text: translations[lang]?.q1 },
      { year: '2012', text: translations[lang]?.q2},
      { year: '2014', text: translations[lang]?.q3 },
      { year: '2020', text: translations[lang]?.q4 },
      { year: '2022', text: translations[lang]?.q5 },
    ];
  return (
    <div className="timeline-wrapper">
      <motion.h2 
        className="timeline-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {translations[lang]?.title}
      </motion.h2>

      <div className="timeline-container">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-text">{event.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SchoolTimeline;
