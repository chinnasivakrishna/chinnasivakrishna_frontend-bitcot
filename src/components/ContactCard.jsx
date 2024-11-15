import React from 'react';

const ContactCard = ({ contact, openModal, deleteContact, viewContactDetails }) => {
  return (
    <div className="contact-card">
      <div>
        <p>{contact.name}</p>
        <p>{contact.mobile}</p>
      </div>
      <div className="actions">
        <button onClick={() => viewContactDetails(contact)}>👁️</button> {/* View icon */}
        <button onClick={() => openModal(contact)}>✏️</button> {/* Edit icon */}
        <button onClick={() => deleteContact(contact.id)}>🗑️</button> {/* Delete icon */}
      </div>
    </div>
  );
};

export default ContactCard;
