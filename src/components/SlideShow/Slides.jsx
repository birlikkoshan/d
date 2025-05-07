import { useEffect, useState } from 'react';
import { translations } from './locales';
import './style.css';

export default function Slideshow(props) {
    const {pageCount, imageUrls, lang} = props;
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % imageUrls.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index]);

    const slideTexts = translations[lang] || translations.kz;

    return (
        <div className="slideshow">
        {imageUrls.map((image, i) => (
            <div
              key={i}
              className={`slide ${i === index ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${image})`
                }}
            />
        ))}
        <div className="slide slide-text">
            <div className="overlay static-text">
                <h1>{slideTexts?.title}</h1>
                <p>{slideTexts?.subtitle}</p>
            </div>
        </div>

        
    </div>
  //   <section className="welcome-section">
  //   <div className="welcome-content">
  //     <h1>{slideTexts?.title}</h1>
  //     <p>{slideTexts?.subtitle}</p>
  //   </div>
  //   <div className='welcome-slider'>

  //   {imageUrls.map((image, i) => (
  //   <div
  //     key={i}
  //     className={`welcome-image ${i === index ? 'active' : ''}`}
  //   //   style={{ 
  //   //     backgroundImage: `url(${image})`
  //   //     }}
  //   >
  //       <img src={image}/>            
  //   </div>
  //   ))}
  //   </div>

  //   {/* <div className="welcome-image">
  //     <img src={image} alt="My Future" />
  //   </div> */}
  // </section>
    );
}
