import React from "react";

const Meal = ({ recipe }) => {
  return (
    <div className="meal">
      <div className="meal-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="meal-info">
        <h1>{recipe.strMeal}</h1>
        <p>
          <span>Category :</span> {recipe.strCategory}
        </p>
        <p>
          <span>Area : </span> {recipe.strArea}
        </p>
        <div className="meal-link">
          {recipe.strYoutube ? (
            <a href={recipe.strYoutube} alt="youtube link">
              <i className="fab fa-youtube"></i>
            </a>
          ) : (
            ""
          )}
          {recipe.strSource ? (
            <a href={recipe.strSource} alt="source">
              <i className="fas fa-external-link-square-alt"></i>
            </a>
          ) : (
            ""
          )}
        </div>
        {/* <button className="btn">See Instruction</button> */}
      </div>
      {/* <p>{recipe.strInstructions}</p> */}
    </div>
  );
};

export default Meal;
