import React from 'react';

function ContactsView({ contacts, deleteContact, setSelectedContact, setEditModalOpen, setDetailsModalOpen, searchTerm }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.mobile.includes(searchTerm)
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <div key={contact.id} className="contact-card">
          <p>{contact.name}</p>
          <p>{contact.mobile}</p>
          <button onClick={() => { setSelectedContact(contact); setDetailsModalOpen(true); }}>View</button>
          <button onClick={() => { setSelectedContact(contact); setEditModalOpen(true); }}>Edit</button>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactsView;
