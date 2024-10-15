import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value, tags });
  };

  const handleTagChange = (e) => {
    const tag = e.target.value;
    setTags(prevTags => prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]);
    onFilterChange({ category, tags });
  };

  return (
    <div className="filter">
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Todas</option>
        <option value="novidades">Novidades</option>
        <option value="estudo">Estudo</option>
        <option value="entretenimento">Entretenimento</option>
      </select>
      <div>
        <label>
          <input type="checkbox" value="Tecnologia" onChange={handleTagChange} />
          Tecnologia
        </label>
        <label>
          <input type="checkbox" value="Ciência" onChange={handleTagChange} />
          Ciência
        </label>
      </div>
    </div>
  );
};

export default Filter;
