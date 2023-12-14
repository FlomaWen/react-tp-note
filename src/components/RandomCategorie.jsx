import { Link } from "react-router-dom";

// Récupération des données dans le prop "categories" | parent : pages/HomePage.jsx"
const RandomCategorie = ({ categories }) => {
  // On récupère une catégorie aléatoire
  const randomCocktail =
    categories[Math.floor(Math.random() * categories.length)];
  // Puis on l'affiche
  return (
    <section className="flex flex-col items-center justify-center p-6">
      <Link to={`/Categories/`} className="text-center mb-6">
        <h2 className="font-bold text-4xl text-indigo-600 hover:underline">
          Envie de découvrir une catégorie ?
        </h2>
      </Link>
      <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-full transition-transform transform hover:scale-105 duration-300">
          <Link
            to={`/Cocktails/FilteredCategories/${encodeURIComponent(
              randomCocktail.strCategory
            )}`}
            className="text-lg font-semibold text-indigo-600 hover:underline"
          >
            <h3>{randomCocktail.strCategory}</h3>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default RandomCategorie;
