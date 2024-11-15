import React from 'react';
import './styles/ContactItem.css';

const ContactItem = ({ contact, onView, onEdit, onDelete }) => {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <span>{contact.id}</span>
        <img src="https://via.placeholder.com/30" alt="Contact" />
        <div>
          <h4>{contact.name}</h4>
          <p>{contact.phone}</p>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => onView(contact.id)}><i className="fas fa-eye"></i></button>
        <button onClick={() => onEdit(contact.id)}><i className="fas fa-edit"></i></button>
        <button onClick={() => onDelete(contact.id)}><i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
};

export default ContactItem;
