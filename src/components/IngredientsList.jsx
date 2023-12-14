import React from "react";
import { Link } from "react-router-dom";
// Récupération des données dans le prop "ingredients" | parent : pages/IngredientsListPage.jsx"
const IngredientsList = ({ ingredients }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
      {ingredients.map((ingredient) => (
        <article className="mb-6 p-6 rounded-md bg-white shadow-md transition-transform transform hover:scale-105 duration-300">
          <Link
            to={`/Cocktails/FilteredIngredients/${ingredient.strIngredient1}`}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png`}
                alt={ingredient.strIngredient1}
                className="w-16 h-16 object-contain mr-4"
              />
              <p className="text-lg font-semibold text-gray-800">
                {ingredient.strIngredient1}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default IngredientsList;
