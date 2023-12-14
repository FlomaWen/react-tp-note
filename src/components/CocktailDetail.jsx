import { Link } from "react-router-dom";
import BoucleIngredients from "./BoucleIngredients";

// Récupération des données dans le prop "cocktail" | parent : pages/CocktailDetailPage.jsx
const CocktailDetail = ({ cocktail }) => {
  return (
    <div className="container mx-auto p-4">
      <article className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-600">
          {cocktail.strDrink}
        </h2>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="rounded-full w-64 h-64 mx-auto mb-6"
        />
        <p className="text-gray-700 mb-6">{cocktail.strInstructions}</p>
        <Link
          to={`/Cocktails/FilteredCategories/${cocktail.strCategory}`}
          className="text-indigo-500 hover:underline"
        >
          <p className="mb-4">{cocktail.strCategory}</p>
        </Link>
        <p className="text-gray-500 mb-6">
          Last Modified: {cocktail.dateModified}
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Ingrédients :
          </h3>
          <BoucleIngredients cocktail={cocktail} />
        </div>
      </article>
    </div>
  );
};

export default CocktailDetail;
