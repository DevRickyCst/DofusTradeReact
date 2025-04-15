import React, { useState, useEffect, useRef } from 'react';
import './components/itemCard/ItemCard.css';
import axiosInstance from '../../axiosConfig';
import ItemFilter from './components/ItemFilter';
import ItemApplied from './components/ItemApplied';
import ItemCardBody from './components/itemCard/ItemCardBody';
import ItemCardHeader from './components/itemCard/ItemCardHeader';


const defaultFilters = {
  item_name: '',
  page_size: 20,
  lvl_min: 1,
  lvl_max: 200,
  category: null,
  is_weapon: null,
  is_two_handed: null
};

export default function ItemViewer() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [loading, setLoading] = useState(true);



// Call back end endpoint to fetch items info
const fetchData = async (filters) => {
  setLoading(true);
  console.log('Calling get item :items/getitems with filter ' + filters);
  try {
    const response = await axiosInstance.get('items/getitems', { params: filters });
    setItems(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  // Fetch data if components gets created and when filters change
  useEffect(() => {
    fetchData(filters); // Fetch data when filters change
  }, [filters]);


  const handleRecipe = (item) => {
    let newItemName = item.name;
    item.recipe.forEach((recipe) => {
      newItemName += ` + ${recipe.item_name}`;
    });
    setFilters((prevFilters) => ({
      ...defaultFilters,
      item_name: newItemName,
    }));
  };

  const cleanFilterKey = (key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: defaultFilters[key],
    }));  
  };

  return (
    <div className='row'>
      <h1>Encyclopédie</h1>

      <div className='col-9'>


          <div className='widget'>
          <ItemApplied filters={filters} cleanFilterKey={cleanFilterKey} defaultFilters={defaultFilters}/>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            ) : (
              <div id='accordion'>
                {items.map((item) => (
                  <div className="card" key={item.ankama_id}>
                    <ItemCardHeader item={item} />
                    <ItemCardBody item={item} handleRecipe={handleRecipe} />
                  </div>
                ))}
              </div>
            )}
          </div>


      </div>
      <div className="col-3">


          <div className='widget'>
            <ItemFilter changeFilters={setFilters} initialFilters={filters} />
          </div>
      
      
      </div>
    </div>
  );
}
