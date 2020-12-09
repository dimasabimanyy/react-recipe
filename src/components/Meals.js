import React from "react";
import Meal from "./Meal";

const Meals = ({ recipes }) => {
  return (
    <div className="meals">
      <div className="meals-wrapper">
        {recipes === null ? (
          <h1 className="no-data">Sorry, we dont have that recipe.</h1>
        ) : (
          recipes.map((recipe, index) => <Meal recipe={recipe} key={index} />)
        )}
      </div>
    </div>
  );
};

export default Meals;
