import React from 'react';

const renderWeaponDetails = (item) => {
  if (!item.is_weapon) return null;

  return (
    <div className='row'>
      <div className='col-6'>
      <p><strong>Max Lancer par tour:</strong> {item.max_cast_per_turn}</p>
      <p className="card-text"><strong>Probabilité de coup critique:</strong> {item.critical_hit_probability}% </p>
      </div>
      <div className='col-6'>
      <p><strong>À deux mains:</strong> {item.is_two_handed ? 'Oui' : 'Non'}</p>
      <p><strong>Bonus de coup critique:</strong> {item.critical_hit_bonus}%</p>
      </div>
    </div>
  );
};

const renderEffects = (effects) => {
  if (!effects || effects.length === 0) return null;

  return (
    <>
      <p className="card-text"><strong>Effets:</strong></p>
      <ul>
        {effects.map((effect, index) => (
          <li key={index}>
            {effect.formatted}
          </li>
        ))}
      </ul>
    </>
  );
};

const renderRecipe = (recipe, handleRecipe, item) => {
  if (!recipe || recipe.length === 0) return null;

  return (
    <>
      <p className="card-text"><strong>Recettes:</strong></p>
      <div type="button" onClick={() => handleRecipe(item)}>
        {recipe.map((recipeItem, index) => (
          <div key={index}>
            <img
              src={recipeItem.item_icon}
              alt={recipeItem.item_name}
              className='recipe_icon'
            />
            {recipeItem.item_name} x {recipeItem.quantity}
          </div>
        ))}
      </div>
    </>
  );
};

const ItemCardBody = ({ item, handleRecipe }) => (
  <div
  id={`collapse${item.ankama_id}`}
  className="collapse"
  aria-labelledby={`heading${item.ankama_id}`}
  >
    <div className="card-body">
      <p className="card-text"><strong>{item.description}</strong></p>
      <div className='row'>
      {renderWeaponDetails(item)}

        <div className="col-6">
          {renderEffects(item.effects)}
        </div>
        <div className="col-6">
          {renderRecipe(item.recipe, handleRecipe, item)}
        </div>
      </div>
    </div>
  </div>
);

export default ItemCardBody;
