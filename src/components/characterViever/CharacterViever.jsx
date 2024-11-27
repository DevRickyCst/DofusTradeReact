import React, { useState, useEffect } from 'react'
import CharacterInfo from './components/CharacterInfo'
import CharacterStuff from './components/CharacterStuff'
import { getCharacterInfo } from '../../api/charaters'; // Assurez-vous que le chemin d'importation est correct
import { useParams } from 'react-router-dom'

export default function CharacterViever() {
  const [characterInfo, setCharacterInfo] = useState({})
  const [rawCharacteristique, setRawCharacteristique] = useState({});
  const [parchoCharacteristique, setParchoCharacteristique] = useState({});
  const [stuff, setStuff] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchCharacterInfo = async () => {
        try {
            const data = await getCharacterInfo(params.id);
            setCharacterInfo({
              'name':data.name,
              'lvl': data.lvl,
              'classeUrl':data.classeUrl,
            });
            setRawCharacteristique(data.raw_characteristique || {});
            setParchoCharacteristique(data.parcho_characteristique || {});
            setStuff(data.stuff || {})
            console.log('data after the call')
            console.log(data.stuff)
        } catch (error) {
            console.error('Error fetching character info:', error);
        }
    };
    fetchCharacterInfo();
  }, [params.id]);

  return (
    <div className='row '>
        <h1>Personnages</h1>

        <div className="col-3 divCharacterFullInfo">
          <CharacterInfo 
            characterInfoBase={characterInfo} 
            rawCharacteristiqueBase={rawCharacteristique} 
            parchoCharacteristiqueBase={parchoCharacteristique} 
          />
        </div>        
        <div className="col-9 stuff">
            <CharacterStuff 
            stuffInit={stuff}/>
        </div>
    </div>
  )
}
