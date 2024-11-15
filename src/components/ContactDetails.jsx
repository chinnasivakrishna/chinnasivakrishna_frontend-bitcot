import React from 'react';

function ContactDetails({ contact, setDetailsModalOpen }) {
  return (
    <div className="modal">
      <h3>Contact Details</h3>
      <p>Name: {contact.name}</p>
      <p>Mobile: {contact.mobile}</p>
      <p>Email: {contact.email}</p>
      <button onClick={() => setDetailsModalOpen(false)}>Close</button>
    </div>
  );
}

export default ContactDetails;
