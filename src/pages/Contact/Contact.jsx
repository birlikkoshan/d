import React, {useState, useEffect} from "react";
import "./Contact.css";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Header from '../../components/Header/Header';
import { translations } from "./locales";
export const ContactPage = () => {
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
  
  return (<>   <Header/> <div className="graduates-page">
      <h1 className="title">{translations[lang]?.title}</h1>
      <div className="contact-section">
        <div className="contact-block">
          <FaMapMarkerAlt className="icon" />
          <div>
          <div style={{ width: '100%', height: '500px' }}>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.7447978047271!2d77.02480768458979!3d43.39964019297044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38830d9ba1f43d6d%3A0xfbc3e4a549e58014!2z0KfQsNGB0YLQvdCw0Y8g0J7QsdGA0LDQt9C-0LLQsNGC0LXQu9GM0L3QsNGPINCo0LrQvtC70LAgItCU0JDQndCQIg!5e0!3m2!1sru!2skz!4v1746596204197!5m2!1sru!2skz"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


            <p><strong>{translations[lang]?.map1}</strong> {translations[lang]?.map2}</p>
            <a href="https://2gis.kz/almaty/geo/70000001019977638/77.025026,43.399782" target="_blank" rel="noopener noreferrer">
            {translations[lang]?.map3}
            </a>
          </div>
        </div>

        <div className="contact-block">
          <FaWhatsapp className="icon" />
          <div>
            <p><strong>{translations[lang]?.w1}</strong> <a href="https://wa.me/+77003700333">+7 700 370 03 33</a></p>
            <p><strong>{translations[lang]?.w2}</strong> <a href="https://wa.me/+77058116933">+7 705 811 69 33</a></p>
            <p><strong>{translations[lang]?.w3}</strong> <a href="https://wa.me/+77073700333">+7 707 370 03 33</a></p>
          </div>
        </div>

        <div className="contact-block">
          <FaEnvelope className="icon" />
          <p><strong>Email:</strong> <a href="mailto:info@danaschool.kz">info@danaschool.kz</a></p>
        </div>

        <h2 className="contact-title">{translations[lang]?.soc1}</h2>
        <div className="social-links">
          <p>
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/dana_school_almaty?igsh=MTJxMXAzcHJjMWNyMA==" target="_blank" rel="noopener noreferrer">
              Instagram ({translations[lang]?.soc2})
            </a>
          </p>
          <p>
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/dana.highschool?igsh=amJ3bXVnMGZkcnV5" target="_blank" rel="noopener noreferrer">
              Instagram (high school)
            </a>
          </p>
          <p>
            <FaTiktok className="icon" />
            <a href="https://www.tiktok.com/@dana_school_almaty?_t=ZM-8tFGUwSB41G&_r=1" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </p>
        </div>
      </div>
    </div>
    <footer className="form-footer">
          <p>© {new Date().getFullYear()} Dana School. Все права защищены.</p>
        </footer>
    </>

  );
}
