import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import './ItemFilter.css'


export default function ItemFilter({ changeFilters, initialFilters }) {
  const [filters, setFilters] = useState({
    item_name: initialFilters.item_name,
    page_size: initialFilters.page_size,
    lvl_min: initialFilters.lvl_min,
    lvl_max: initialFilters.lvl_max,
    category: initialFilters.category,
    is_weapon: initialFilters.is_weapon,
    is_two_handed: initialFilters.is_two_handed,
  });
  useEffect(() => {
    setFilters(initialFilters); // Update local state when initialFilters changes
  }, [initialFilters]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked ? value : '',
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilters(filters); // Pass current filters to parent component
  };

  return (
    <form id="filter_form" className="filter_form" onSubmit={handleSubmit}>
      <h3>Filtre</h3>

      <div className="form-group mb-3">
      <label>Catégorie</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckboxEquipments"
            value="equipments"
            name="category"
            onChange={handleCheckboxChange}
            checked={filters.category === 'equipments'}
          />
          <label className="form-check-label" htmlFor="inlineCheckboxCosmetiques">Equipements</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckboxCosmetiques"
            value="cosmetics"
            name="category"
            onChange={handleCheckboxChange}
            checked={filters.category === 'cosmetics'}
          />
          <label className="form-check-label" htmlFor="inlineCheckboxCosmetiques">Cosmétiques</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckboxRessources"
            value="resources"
            name="category"
            onChange={handleCheckboxChange}
            checked={filters.category === 'resources'}
          />
          <label className="form-check-label" htmlFor="inlineCheckboxRessources">Ressources</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckboxConsommables"
            value="consumables"
            name="category"
            onChange={handleCheckboxChange}
            checked={filters.category === 'consumables'}
          />
          <label className="form-check-label" htmlFor="inlineCheckboxConsommables">Consommables</label>
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="item_name">Rechercher</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={filters.item_name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="page_size">Taille de page</label>
        <input
          type="number"
          id="page_size"
          name="page_size"
          value={filters.page_size}
          onChange={handleInputChange}
          min="1"
      />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="lvl_min">Niveau min</label>
        <input
          type="number"
          id="lvl_min"
          name="lvl_min"
          value={filters.lvl_min}
          onChange={handleInputChange}
          min="1"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="lvl_max">Niveau max</label>
        <input
          type="number"
          id="lvl_max"
          name="lvl_max"
          value={filters.lvl_max}
          onChange={handleInputChange}
          min="1"
        />
      </div>
      
      <div className="form-group mb-3">
        <label>Est une arme ?</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="is_weapon"
            id="is_weapon_yes"
            value="yes"
            onChange={handleRadioChange}
            checked={filters.is_weapon === 'yes'}
          />
          <label className="form-check-label" htmlFor="is_weapon_yes">Oui</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="is_weapon"
            id="is_weapon_no"
            value="no"
            onChange={handleRadioChange}
            checked={filters.is_weapon === 'no'}
          />
          <label className="form-check-label" htmlFor="is_weapon_no">Non</label>
        </div>
      </div>

      <div className="form-group mb-3">
        <label>À deux mains ?</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="is_two_handed"
            id="is_two_handed_yes"
            value="yes"
            onChange={handleRadioChange}
            checked={filters.is_two_handed === 'yes'}
          />
          <label className="form-check-label" htmlFor="is_two_handed_yes">Oui</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="is_two_handed"
            id="is_two_handed_no"
            value="no"
            onChange={handleRadioChange}
            checked={filters.is_two_handed === 'no'}
          />
          <label className="form-check-label" htmlFor="is_two_handed_no">Non</label>
        </div>
      </div>
      <button type="submit">Appliquer les filtres</button>
    </form>
  );
}

ItemFilter.propTypes = {
  changeFilters: PropTypes.func.isRequired,
};