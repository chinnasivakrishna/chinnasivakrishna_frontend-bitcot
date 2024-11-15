import React from 'react';
import './styles/SearchContact.css';

const SearchContact = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Contact"
      onChange={handleSearch}
    />
  );
};

export default SearchContact;
