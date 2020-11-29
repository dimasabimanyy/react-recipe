import React, { useState } from "react";

const Meal = ({ recipe }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="meal">
        <div className="meal-image">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="meal-info">
          <h1>{recipe.strMeal}</h1>

          {/* Check Instructions */}
          {recipe.strInstructions ? (
            <p>{recipe.strInstructions.substring(100, 0)}...</p>
          ) : (
            ""
          )}

          {/* Check Category */}
          {recipe.strCategory ? (
            <p>
              <span>Category :</span> {recipe.strCategory}
            </p>
          ) : (
            ""
          )}

          {/* Check Area */}
          {recipe.strArea ? (
            <p>
              <span>Area : </span>
              {recipe.strArea}
            </p>
          ) : (
            ""
          )}

          {/* Check youtube */}
          <p className="meal-link">
            {recipe.strYoutube ? (
              <a href={recipe.strYoutube} alt="youtube link">
                See On Youtube
              </a>
            ) : (
              ""
            )}
          </p>

          {/* Check source */}
          <p className="meal-link">
            {recipe.strSource ? (
              <a href={recipe.strSource} alt="source">
                Source
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Meal;
