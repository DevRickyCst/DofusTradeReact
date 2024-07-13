import React, { useState, useEffect} from 'react';
import './CharacterNavBar.scss'
import logo from '/src/assets/svg/add.svg';
import { addCharacter, getUserCharacters } from '../api/charaters'


export default function CharacterNavBar() {
    const [characters, setCharacters] = useState([]);

    const handleAddCharacter = async () => {
          const id = await addCharacter();
          get_user_characs_info();

    };

    const get_user_characs_info = async () => {
      const userCharacters = await getUserCharacters();
      setCharacters(userCharacters)
    };  

    useEffect(() => {
      get_user_characs_info();
    }, []);

    const handleCharacterClick = (id) => {
      window.location.href = `/personnages/${id}`;
    };
    return (
      <div className="leftNavBar">
        {characters.map(charac => (
          <div type='button' key={charac.id} onClick={() => handleCharacterClick(charac.id)} className="character-card">
              <img className="img-other-charac" src={charac.character_class__logo_url} alt="" />
              <p>{charac.name}</p>
            </div>
          ))}
      {characters.length < 5 && (
        <button type="button" onClick={handleAddCharacter} id="add-character-btn">
          <img src={logo} alt="Description de l'image SVG" />
        </button>
      )}
      </div>
    );
  }
