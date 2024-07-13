import React, { useState, useEffect } from 'react';

export default function CharacterStuff({ stuffInit }) {
  const [stuff, setStuff] = useState(stuffInit || {});

  const renderStuffItem = (stuffItem) => {
    if (!stuffItem || !stuffItem.image_urls) return null;
    return (
      <button>
        <img
          src={stuffItem.image_urls.icon}
          alt={`${stuffItem.name}_image`}
          data-bs-toggle="modal"
          data-bs-target="#itemsSelectionsModal"
        />
      </button>
    );
  };

  return (
    <div className="pano-div">
      <h4 className="title">Panoplie</h4>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(stuff.chapeau)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(stuff.collier)}
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-4">
            {renderStuffItem(stuff.anneau_1)}
          </div>
          <div className="col-4">
            {renderStuffItem(stuff.anneau_2)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(stuff.arme)}
          </div>
          <div className="col-4">
            {renderStuffItem(stuff.ceinture)}
          </div>
          <div className="col-4">
            {renderStuffItem(stuff.bouclier)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(stuff.botte)}
          </div>
        </div>
      </div>
    </div>
  );
}
