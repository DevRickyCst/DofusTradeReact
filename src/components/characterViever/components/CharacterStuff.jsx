import React, { useState, useEffect } from 'react';

export default function CharacterStuff({ stuffInit }) {


  const [currentStuff, setStuff] = useState(stuffInit || {});

  useEffect(() => {
    console.log(stuffInit);
    setStuff(stuffInit || {}); // Met à jour `currentStuff` quand `stuff` change
  }, [stuffInit]);


  const renderStuffItem = (stuffItem) => {
    if (!stuffItem || !stuffItem.image) return null;
    return (
      <button>
        <img
          src={stuffItem.image}
          alt={`${stuffItem.id}_image`}
          data-bs-toggle="modal"
          data-bs-target="#itemsSelectionsModal"
        />
      </button>
    );
  };

  return (
    <div className="pano-div widget">
      <h2 className="title">Panoplie</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(currentStuff.chapeau)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(currentStuff.collier)}
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-4">
            {renderStuffItem(currentStuff.anneau_1)}
          </div>
          <div className="col-4">
            {renderStuffItem(currentStuff.anneau_2)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(currentStuff.arme)}
          </div>
          <div className="col-4">
            {renderStuffItem(currentStuff.ceinture)}
          </div>
          <div className="col-4">
            {renderStuffItem(currentStuff.bouclier)}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {renderStuffItem(currentStuff.botte)}
          </div>
        </div>
      </div>
    </div>
  );
}
