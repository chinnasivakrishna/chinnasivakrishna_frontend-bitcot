import React, { useState } from 'react';

function AddContact({ addContact, setAddModalOpen }) {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ ...formData, id: Date.now() });
    setAddModalOpen(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Add</button>
        <button onClick={() => setAddModalOpen(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default AddContact;
