import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [viewContact, setViewContact] = useState(null); // For viewing contact details
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch contacts data from API
  useEffect(() => {
    axios.get('https://chinnasivakrishna-backend-bitcot.onrender.com/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const openModal = (contact = null) => {
    setModalData(contact);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  const addOrUpdateContact = (contact) => {
    axios.post('https://chinnasivakrishna-backend-bitcot.onrender.com/api/contacts', contact)
      .then(response => {
        const updatedContacts = contacts.map(c => c.id === contact.id ? contact : c);
        setContacts(contact.id ? updatedContacts : [...contacts, response.data]);
        closeModal();
      })
      .catch(error => console.error('Error adding or updating contact:', error));
  };

  const deleteContact = (id) => {
    axios.delete(`https://chinnasivakrishna-backend-bitcot.onrender.com/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.error('Error deleting contact:', error));
  };

  const viewContactDetails = (contact) => {
    setViewContact(contact);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.mobile.includes(searchTerm)
  );

  return (
    <div className="container">
      <ContactList 
        contacts={filteredContacts} 
        openModal={openModal} 
        deleteContact={deleteContact} 
        viewContactDetails={viewContactDetails}
        handleSearch={handleSearch}
      />
      {isModalOpen && (
        <Modal contact={modalData} closeModal={closeModal} onSave={addOrUpdateContact} />
      )}
      {viewContact && (
        <Modal contact={viewContact} closeModal={() => setViewContact(null)} isViewOnly={true} />
      )}
    </div>
  );
};

export default App;
