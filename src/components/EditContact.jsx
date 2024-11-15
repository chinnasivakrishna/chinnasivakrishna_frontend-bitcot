import React, { useState, useEffect } from 'react';

function EditContact({ contact, editContact, setEditModalOpen }) {
  const [formData, setFormData] = useState(contact);

  useEffect(() => {
    setFormData(contact);
  }, [contact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(formData);
    setEditModalOpen(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} required />
        <input name="mobile" value={formData.mobile} onChange={handleChange} required />
        <input name="email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Save</button>
        <button onClick={() => setEditModalOpen(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default EditContact;
