import React, { useState, useEffect } from 'react';



export default function CharacterInfo({ characterInfoBase, rawCharacteristiqueBase, parchoCharacteristiqueBase}) {
    const [characterInfo, setCharacterInfo] = useState({})
    const [rawCharacteristique, setRawCharacteristique] = useState({});
    const [parchoCharacteristique, setParchoCharacteristique] = useState({});
    const characteristiqueType = ['vitalite', 'sagesse', 'agilite', 'intelligence', 'chance', 'force'];

    useEffect(() => {
    setCharacterInfo(characterInfoBase)
    setRawCharacteristique(rawCharacteristiqueBase)
    setParchoCharacteristique(parchoCharacteristiqueBase)

  }, [characterInfoBase]);

  const handleParchoChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setParchoCharacteristique(prevState => ({
      ...prevState,
      [type]: value
    }));
  };
  const handleRawChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setRawCharacteristique(prevState => ({
      ...prevState,
      [type]: value
    }));
  };
  return (
    <div className='divCharacterFullInfo'>
      <img className="img-other-charac" src={characterInfo.classeUrl} alt="Character Class Logo" />
      <h3>{characterInfo.name}</h3>
      <p>Level: {characterInfo.lvl}</p>
      <div>
        {characteristiqueType.map((type) => (
          <div key={type} className="col-md-6 mb-3">
            <h5>{type}</h5>
            <div className="row">
              <div className="col-4">
                <label>Base:</label>
                <input 
                  type="number" 
                  name={type} 
                  min="0" 
                  max="1000" 
                  value={rawCharacteristique[type] || 0} 
                  onChange={(e) => handleRawChange(e, type)}
                  className="form-control" 
                />
              </div>
              <div className="col-4">
                <label>Parcho:</label>
                <input 
                  type="number" 
                  name={`${type}_parcho`} 
                  min="0" 
                  max="100" 
                  value={parchoCharacteristique[type] || 0} 
                  onChange={(e) => handleParchoChange(e, type)} 
                  className="form-control" 
                />
              </div>
              <div className="col-4">
                <label>Stuff:</label>
                <input 
                  type="number" 
                  name={`${type}_stuff`} 
                  min="0" 
                  max="1000" 
                  readOnly 
                  className="form-control" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}