import { Link } from "react-router-dom";
// Récupération des données dans le prop "cocktailsFiltered" | parent : pages/CocktailsFilteredByGlassesPage.jsx"
const CocktailsFilteredByGlasses = ({ cocktailsFiltered }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cocktailsFiltered.map((cocktail) => (
        <article className="mb-6 p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105 duration-300">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <Link to={`/Cocktails/Detail/${cocktail.idDrink}`}>
            <h3 className="text-lg font-semibold text-center text-indigo-600 mb-2">
              {cocktail.strDrink}
            </h3>
          </Link>
          <p className="text-gray-500 text-center mb-2">
            {cocktail.strCategory}
          </p>
        </article>
      ))}
    </div>
  );
};

export default CocktailsFilteredByGlasses;
