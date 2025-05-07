import React, { useState, useEffect } from 'react';
import './AnimatedForm.css';
const AnimatedFormPage = ({func, trs}) => {
  const [formData, setFormData] = useState({
    p_name: '',
    s_name: '',
    date: '',
    class: 0,
    language: '',
    phone: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('formData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Данные сохранены!');
  };

  const handleClear = () => {
    func();
    setFormData({
      p_name: '',
      s_name: '',
      date: '',
      class: 0,
      language: '',
      phone: ''
    });
    localStorage.removeItem('formData');
  };

  return (<>
    <div className="form-container">
      
      <form className="animated-form" onSubmit={(e) => e.preventDefault()}>
        <h2>{trs.modal.title}</h2>
        
        <div className="input-group">
          <input
            type="text"
            name="p_name"
            value={formData.p_name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q1}</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="s_name"
            value={formData.s_name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q2}</label>
        </div>
        <div className="input-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q3}</label>
        </div>
        <div className="input-group">
          <input
            type="number"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q4}</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q5}</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{trs.modal.q6}</label>
        </div>
        <div className="form-buttons">
          <button type="button" className="btn save" onClick={handleSave}>{trs.modal.btn1}</button>
          <button type="button" className="btn clear" onClick={handleClear}>{trs.modal.btn2}</button>
        </div>
      </form>
    </div></>
  );
};

export default AnimatedFormPage