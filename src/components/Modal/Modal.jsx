import { useState } from 'react';
import './style.css';



  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <button className="modal-button secondary" onClick={onClose}>
              Отмена
            </button>
            <button className="modal-button primary">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  const ModalBlock = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="app-container">
        <button 
          className="open-modal-button"
          onClick={() => setIsModalOpen(true)}
        >
          Открыть модальное окно
        </button>
  
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3 className="modal-title">Подтвердите действие</h3>
          <p className="modal-text">Вы уверены, что хотите выполнить это действие? Изменения будут невозможно отменить.</p>
        </Modal>
      </div>
    );
  }


  export default ModalBlock;
