import React from 'react';
import './styles/ViewContactDetails.css';

const ViewContactDetails = ({ contact, onClose }) => (
  <div className="modal">
    <h2>Contact Details</h2>
    <p><strong>First Name:</strong> {contact.firstName}</p>
    <p><strong>Last Name:</strong> {contact.lastName}</p>
    <p><strong>Phone Number:</strong> {contact.phoneNumber}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ViewContactDetails;
