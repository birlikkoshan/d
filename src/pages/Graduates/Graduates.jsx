import React from "react";
import "./Graduates.css";
import Header from '../../components/Header/Header';
import ScrollToTopButton from './../../components/Btns/UpBtn/ScrollToTopButton'
import kbtu from './imgs/kbtu.jpg'
import iitu from './imgs/IITU.jpg'
import kimep from './imgs/kimep.jpg'
import osu from './imgs/Oregon_state.jpg'
import casino from './imgs/casino.jpg'
import almaU from './imgs/almaU.jpg'
import narxoz from './imgs/narxoz.png'
import kau from './imgs/kau.jpg'
import avia from './imgs/avia.jpg'
import ciu from './imgs/ciu.jpg'
import niu from './imgs/NIU vshe.jpg'

import kazgasa from './imgs/kazgasa.jpg'
import kazgiu from './imgs/kazgiu.jpeg'
import krmu from './imgs/krmu.jpg'
import satbayev from './imgs/satbayev.jpg'
import uib from './imgs/uib.jpeg'
import turan from './imgs/turan.jpeg'
import uas from './imgs/uas.jpg'




const universities = [
  {
    name: "Казахстанско-Британский технический университет",
    image: kbtu,
    graduates: [
      "Аргимбаева Александра — Автоматизация и управление (2022-2023)",
      "Асылбек Мухамедали — Электротехника и автоматизация (2022-2023)",
      "Рахимов Рауль — Data Science в Бизнесе (2022-2023)",
      "Нурсапанов Темирлан — Информационные технологии (2022-2023)",
    ],
  },
  {
    name: "Университет КИМЭП",
    image: kimep,
    graduates: ["Аязбай Фаиза — Bang college of Business, Corporate finance (2022-2023)"],
  },
  {
    name: "Oregon State University",
    image: osu,
    graduates: ["Бурханов Марат (2022-2023)"],
  },
  {
    name: "University of Cassino (Италия)",
    image: casino,
    graduates: ["Валеев Ануар (2022-2023)"],
  },
  {
    name: "AlmaU – Алматы Менеджмент Университет",
    image: almaU,
    graduates: [
      "Изатов Бейбарс — Менеджмент (2022-2023)",
      "Толеген Амина — Маркетинг и реклама (2022-2023)",
      "Тынысбаев Ален — Информационные технологии (2022-2023)",
      "Устименко Иван — Юриспруденция (2023-2024)",
    ],
  },
  {
    name: "NARXOZ University",
    image: narxoz,
    graduates: ["Кажмукан Тамерлан — Информационные технологии (2022-2023)"],
  },
  {
    name: "Международный университет информационных технологии",
    image: iitu,
    graduates: [
      "Макушев Кирилл — Кибербезопасность (2022-2023)",
      "Вайгандт Богдан — Кибербезопасность (2023-2024)",
      "Ни Богдан — Сетевая безопасность (2023-2024)",
    ],
  },
  {
    name: "Казахстанско-американский университет",
    image: kau,
    graduates: ["Суренин Андрей — Туризм (2022-2023)"],
  },
  {
    name: "Академия Гражданской Авиации",
    image: avia,
    graduates: ["Артеменко Дмитрий — Пилот (2022-2023)"],
  },
  {
    name: "Cyprus International University",
    image: ciu,
    graduates: ["Конкашов Алихан — Бизнес администрирование (2023-2024)"],
  },
  {
    name: "Национальный исследовательский университет ВШЭ",
    image: niu,
    graduates: ["Котов Даниил — Информационная безопасность (2023-2024)"],
  },
  {
    name: "КазГАСА",
    image: kazgasa,
    graduates: ["Пак Таисия — Графический дизайн (2023-2024)"],
  },
  {
    name: "КазНУ им. Аль-Фараби",
    image: kazgiu,
    graduates: ["Пилипенко Эвелина — Генетика (2023-2024)"],
  },
  {
    name: "Казахстанско-Российский медицинский университет",
    image: krmu,
    graduates: [
      "Сейт Данияр — Стоматология (2023-2024)",
      "Ягмур Хамид — Общая медицина (2023-2024)",
    ],
  },
  {
    name: "Satbayev University",
    image: satbayev,
    graduates: [
      "Спиридонов Илья — Автоматизация и управление (2023-2024)",
      "Цыганков Валерий — Транспортная техника и технологии (2023-2024)",
    ],
  },
  {
    name: "UIB – Университет Международного Бизнеса",
    image: uib,
    graduates: ["Темиржанова Карина — Финансы, экономика, банковское дело и страховое дело (2023-2024)"],
  },
  {
    name: "Университет \"Туран\"",
    image: turan,
    graduates: ["Тлеу Руслан — Ресторанное дело и гостиничный бизнес (2023-2024)"],
  },
  {
    name: "University of Applied Sciences",
    image: uas,
    graduates: ["Хакимова Элина — Foundation (2023-2024)"],
  },
];

export const GraduatesPage = () => {
  const formattedUniversities = universities.map(university => {
    const formattedGraduates = university.graduates.map(entry => {
      if (typeof entry === 'string') {
        // Находим последний открывающийся скобки (где год)
        const lastParenIndex = entry.lastIndexOf('(');
        if (lastParenIndex !== -1) {
          const nameAndMajor = entry.slice(0, lastParenIndex).trim();
          const year = entry.slice(lastParenIndex).trim();
          return { name_uni: nameAndMajor, year };
        } else {
          // Если нет скобок — просто вся строка в name_uni, year пустой
          return { name_uni: entry, year: '' };
        }
      }
      // Если уже в правильном формате (объект), оставляем как есть
      return entry;
    });
  
    return {
      ...university,
      graduates: formattedGraduates,
    };
  });
  


  return ( <> < Header />
    <div className="graduates-page">
      <h1 className="title">Наши выпускники</h1>
      <div className="university-list">
        {formattedUniversities.map((uni) => (
          <div className="university-card" key={uni.name}>
            <img src={uni.image} alt={uni.name} className="university-image" />
            <h2 className="university-name">{uni.name}</h2>
            <ul className="graduate-list">
              {uni.graduates.map((grad, index) => (
                <li key={index}>{grad.name_uni} <span style={{color: "#00ffcc"}}>{grad.year}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <ScrollToTopButton />
    <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>
  );
}
