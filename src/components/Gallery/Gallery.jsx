import React, { useState, useEffect } from "react";
import './style.css'; // Подключаем стили


const Carousel = ({imgUrls}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  const nextSlide = () => {
    // if (inTransition) return; // Если анимация всё ещё идет, не переключаем слайд
    setInTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
  };

  const prevSlide = () => {
    if (inTransition) return;
    setInTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgUrls.length) % imgUrls.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // Переходить каждые 3 секунды
    return () => clearInterval(timer); // Очистить таймер при размонтировании
  }, []);

  useEffect(() => {
    if (inTransition) {
      const timeout = setTimeout(() => setInTransition(false), 2800); // Время анимации
      return () => clearTimeout(timeout);
    }
  }, [inTransition]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* <button className="prev-btn" onClick={prevSlide}>❮</button> */}
        <div className={`carousel-slide ${inTransition ? "transition" : ""}`}>
          <img src={imgUrls[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        {/* <button className="next-btn" onClick={nextSlide}>❯</button> */}
      </div>
    </div>
  );
}

export default Carousel;
