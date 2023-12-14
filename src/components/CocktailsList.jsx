import { Link } from "react-router-dom";
import BoucleIngredients from "./BoucleIngredients";

// Récupération des données dans le prop "cocktails" | parent : pages/CocktailsList.jsx"
const CocktailsList = ({ cocktails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
      {cocktails.map((cocktail) => (
        <article className="relative overflow-hidden bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="object-cover w-50 h-50 p-1 rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <Link to={`/Cocktails/Detail/${cocktail.idDrink}`}>
              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                {cocktail.strDrink}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <Link
                to={`/Cocktails/FilteredCategories/${encodeURIComponent(
                  cocktail.strCategory
                )}`}
                className="text-blue-500 hover:underline"
              >
                {cocktail.strCategory}
              </Link>
            </p>
            <div className="mb-2">
              <h4 className="text-sm font-semibold text-gray-700">
                Ingrédients:
              </h4>
              <ul className="list-disc ml-4">
                {/* Composant permettant de récupérer les ingrédients du cocktails[i] */}
                <BoucleIngredients cocktail={cocktail} />
              </ul>
            </div>
            <Link
              to={`/Cocktails/Detail/${cocktail.idDrink}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CocktailsList;
