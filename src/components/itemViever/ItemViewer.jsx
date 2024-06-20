import React, { useState, useEffect, useRef } from 'react';
import './ItemViewer.css';
import axiosInstance from '../../axiosConfig';
import ItemFilter from './ItemFilter';
import Item from './Item';




export default function ItemViewer() {

  const [itemSelected, setItemSelected] = useState(null)
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    item_name: '',
    page_size: 20,
    lvl_min: 1,
    lvl_max: 200
  });

  useEffect(() => {
    fetchData(filters); // Fetch data when the component mounts
  }, [filters]); 

  const fetchData = async (filters) => {
    console.log('Fetch data')
    try {
      const response = await axiosInstance.get('items/getitems', { params: filters });
      setItems(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="row justify-content-start divItemViewer">
      <div className="table_div col-9">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody id="items-table-body">

            {items.map((item, index) => (
              
              <tr key={item.ankama_id} className='item' onClick={() => setItemSelected(item.ankama_id)}>
                  <Item item={item} isFulldisplay={itemSelected == item.ankama_id}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form_div col-3">
            <ItemFilter  changeFilters={setFilters} initialFilters={filters} />
      </div>
    </div>
  );
}
