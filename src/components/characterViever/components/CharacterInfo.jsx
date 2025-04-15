import React, { useState, useEffect } from 'react';
import '../../../assets/styles/pages/_personnages.scss'


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
    <div className='divCharacterFullInfo '>
    <div className='widget row mb-4'>
      <div className='col-6 '>
      <img className="img-other-charac" src={characterInfo.classeUrl} alt="Character Class Logo" />
      </div>
      <div className='col-6 info'>
      <h3>{characterInfo.name}</h3>
      <p>Level: {characterInfo.lvl}</p>
      </div>
    </div>


  <div className="table-responsive div-charac widget">
    <h3>Point de charac</h3>
  <table className="charac-tab table custom-table">

  <tbody>
    {characteristiqueType.map((type) => (
      <tr key={type}>
        <td>
          <img
            className="img-charac"
            src={`/src/assets/logo/logo_charac/${type}.png`}
            alt="Character"
          />
        </td>
        <td>
          <input
            type="number"
            name={type}
            min="0"
            max="1000"
            value={rawCharacteristique[type] || 0}
            onChange={(e) => handleRawChange(e, type)}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            name={`${type}_parcho`}
            min="0"
            max="100"
            value={parchoCharacteristique[type] || 0}
            onChange={(e) => handleParchoChange(e, type)}
            className="form-control"
          />
        </td>

      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  );
}