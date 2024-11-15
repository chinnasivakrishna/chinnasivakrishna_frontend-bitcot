import React from 'react';
import ContactCard from './ContactCard';
import SearchBar from './SearchBar';

const ContactList = ({ contacts, openModal, deleteContact, viewContactDetails, handleSearch }) => {
  return (
    <div className="contact-list">
      <header>
        <h2>All Contacts</h2>
        <button onClick={() => openModal()}>+</button>
      </header>
      <SearchBar handleSearch={handleSearch} />
      {contacts.map(contact => (
        <ContactCard 
          key={contact.id} 
          contact={contact} 
          openModal={openModal} 
          deleteContact={deleteContact} 
          viewContactDetails={viewContactDetails}
        />
      ))}
    </div>
  );
};

export default ContactList;
