import React from 'react'
import Meal from "./Meal"

const Meals = ({ recipes }) => {
    return (
        <div className="meals">
            <div className="meals-wrapper">
                {recipes.map((recipe, index) => (
                    <Meal recipe={recipe} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Meals
