import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/layout/_characternavbar.scss';
import logo from '/src/assets/svg/add.svg';
import { addCharacter, getUserCharacters } from '../api/charaters';

export default function CharacterNavBar() {
  const [characters, setCharacters] = useState([]);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleAddCharacter = async () => {
    const id = await addCharacter();
    get_user_characs_info();
  };

  const get_user_characs_info = async () => {
    const userCharacters = await getUserCharacters();
    setCharacters(userCharacters);
  };

  useEffect(() => {
    get_user_characs_info();
  }, []);

  useEffect(() => {
    // Recalculer l'état de défilement après le chargement des personnages
    updateScrollState();
  }, [characters]);

  const handleCharacterClick = (id) => {
    window.location.href = `/personnages/${id}`;
  };

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -50, behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 50, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    updateScrollState();
  };

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 1); // Tolérance de 1 pixel
    }
  };

  return (
    <div className="leftNavBar widget">
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {characters.map((charac) => (
          <div
            type="button"
            key={charac.id}
            onClick={() => handleCharacterClick(charac.id)}
            className="character-card"
          >
            <img
              className="img-other-charac"
              src={charac.character_class__logo_url}
              alt=""
            />
            <p>{charac.name}</p>
          </div>
        ))}
      </div>
      <div className="scroll-buttons">
        <button
          type="button"
          onClick={handleScrollUp}
          disabled={!canScrollUp}
          className="scroll-button up"
        >
          ↑
        </button>
        <button
          type="button"
          onClick={handleScrollDown}
          disabled={!canScrollDown}
          className="scroll-button down"
        >
          ↓
        </button>
      </div>
      {characters.length < 5 && (
        <button type="button" onClick={handleAddCharacter} id="add-character-btn">
          <img src={logo} alt="Ajouter un personnage" />
        </button>
      )}
    </div>
  );
}
