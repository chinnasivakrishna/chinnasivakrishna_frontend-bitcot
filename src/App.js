import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [viewContact, setViewContact] = useState(null); // For viewing contact details
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch contacts data on mount
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      .then(response => response.json())
      .then(data => setContacts(data))
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
    if (contact.id) {
      // Update existing contact
      setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
    } else {
      // Add new contact
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
    closeModal();
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
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
