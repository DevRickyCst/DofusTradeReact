import React from 'react';


const ItemCardHeader = ({ item }) => (
  <div className="card-header"
    id={`heading${item.ankama_id}`}
    type="button" data-toggle="collapse"
    data-target={`#collapse${item.ankama_id}`}
    aria-expanded="true"
    aria-controls={`collapse${item.ankama_id}`}>

    <div className='row'>
      <div className='col-6 d-flex align-items-center'>
        <img
          src={item.image_urls__icon}
          alt={item.name}
          className="item-icon mr-3"
        />
        <div>
          <h5 className="mb-0"><strong>{item.name}</strong></h5>
          <p className="mb-0">{item.type__name} {item.is_weapon && "(Arme)"}</p>
        </div>
      </div>
      <div className='col-6 card-header-r'>
        <div>
          <p className="mb-0">{`Lvl: ${item.level}`}</p>
          <p className="card-text"><strong>Pods:</strong>: {item.pods}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ItemCardHeader;