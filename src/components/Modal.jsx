import React, { useState } from 'react';

const Modal = ({ contact, closeModal, onSave, isViewOnly = false }) => {
  const [formData, setFormData] = useState({
    name: contact ? contact.name : '',
    email: contact ? contact.email : '',
    mobile: contact ? contact.mobile : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...contact, ...formData });
  };

  return (
    <>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal">
        <div className="modal-header">
          <h3>{isViewOnly ? 'View Contact' : contact ? 'Edit Contact' : 'Add Contact'}</h3>
          <button className="close-button" onClick={closeModal}>✖️</button>
        </div>
        <div className="modal-content">
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Name" 
            disabled={isViewOnly}
          />
          <input 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            disabled={isViewOnly}
          />
          <input 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            placeholder="Phone Number" 
            disabled={isViewOnly}
          />
        </div>
        {!isViewOnly && (
          <div className="modal-footer">
            <button className="btn-update" onClick={handleSubmit}>Save</button>
            <button className="btn-reset" onClick={() => setFormData(contact || { name: '', email: '', mobile: '' })}>Reset</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
