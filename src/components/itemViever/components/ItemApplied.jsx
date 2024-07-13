import React from 'react'
import logo from '/src/assets/svg/delete.png'
import './ItemApplied.css'

const applyLabels = {
  "item_name": "Nom contenant",
  "page_size": "Nombre d'items affichés",
  "lvl_min": "Lvl min",
  "lvl_max": "Lvl max",
  "category": "Catégorie",
  "is_weapon": "Arme",
  "is_weapon": "A deux main"
};

const cleanItemValueTooLong = (filter_value) => {

  if (filter_value.length > 20){
    return filter_value.substring(0,10) + ' ... '  + filter_value.slice(-11, filter_value.length);
  }else{
    return filter_value
  }

}

export default function ItemApplied({ filters, cleanFilterKey, defaultFilters }) {
  return (
    <div className='div_filter_applied inline_row'>
      <h3>Filtres appliqués:</h3>
      <ul>
        {Object.entries(filters).map(([key, value]) => (
          defaultFilters[key] !== value && (
            <li key={key} className='liItemApplied'>
              {applyLabels[key]}: {cleanItemValueTooLong(value)} <img className="img_delete_item" type="button" src={logo} onClick={() => cleanFilterKey(key)} />
            </li>
          )
        ))}
      </ul>
    </div>
  );
  }
