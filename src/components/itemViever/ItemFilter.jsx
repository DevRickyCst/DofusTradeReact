import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemViewer from './ItemViewer';

export default function ItemFilter({ changeFilters }) {
  const [filters, setFilters] = useState({
    item_name: '',
    page_size: 20,
    lvl_min: 1,
    lvl_max: 200
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilters(filters); // Pass current filters to parent component
  };

  return (
    <form id="filter_form" className="filter_form" onSubmit={handleSubmit}>
      <h3>Filtre</h3>

      <label htmlFor="item_name">Rechercher:</label>
      <input
        type="text"
        id="item_name"
        name="item_name"
        value={filters.item_name}
        onChange={handleInputChange}
      /><br/>

      <label htmlFor="page_size">Taille de page:</label>
      <input
        type="number"
        id="page_size"
        name="page_size"
        value={filters.page_size}
        onChange={handleInputChange}
        min="1"
      /><br/>

      <label htmlFor="lvl_min">Niveau min:</label>
      <input
        type="number"
        id="lvl_min"
        name="lvl_min"
        value={filters.lvl_min}
        onChange={handleInputChange}
        min="1"
      /><br/>

      <label htmlFor="lvl_max">Niveau max:</label>
      <input
        type="number"
        id="lvl_max"
        name="lvl_max"
        value={filters.lvl_max}
        onChange={handleInputChange}
        min="1"
      /><br/>

      <button type="submit">Appliquer les filtres</button>
    </form>
  );
}

ItemFilter.propTypes = {
  changeFilters: PropTypes.func.isRequired,
};