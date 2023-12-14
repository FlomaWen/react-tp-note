// Composant permettant de récupérer les ingrédients du cocktails[i]

import React from "react";
import { Link } from "react-router-dom";
// Récupération des données dans le prop
const BoucleIngredients = ({ cocktail }) => {
  const ingredients = [];

  // BOUCLE POUR RECUPERER LES INGREDIENTS
  for (let i = 1; i <= 15; i++) {
    // si i<15(nombre max d'ingrédients dans l'api) , i +=1
    const stringredient = `strIngredient${i}`;
    // Récupération de la valeur de strIngredient[i] depuis le state cocktail dans la variable ingredientvalue
    const ingredientvalue = cocktail[stringredient];

    // si ingredientvalue contient une donnée
    if (ingredientvalue) {
      // ajoute la valeur dans le tableau ingredients avec un lien cliquable
      ingredients.push(
        <li>
          <Link
            to={`/Cocktails/FilteredIngredients/${ingredientvalue}`}
            className="text-indigo-500 hover:underline"
          >
            {ingredientvalue}
          </Link>
        </li>
      );
    }
  }

  // retourne le tableau ingrédients
  return <ul>{ingredients}</ul>;
};

export default BoucleIngredients;
