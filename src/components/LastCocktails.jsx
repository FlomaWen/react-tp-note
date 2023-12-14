import { Link } from "react-router-dom";

// Récupération des données dans le prop "cocktails" | parent : pages/HomePage.jsx"
const LastCocktails = ({ cocktails }) => {
  // Récupération des 4 derniers cocktails de la liste
  const LastCocktails = cocktails.slice(-4);

  return (
    <section className="container mx-auto mt-8 pb-10">
      <Link to="/Cocktails">
        <h2 className="text-center mb-8 text-4xl font-bold">
          Nos derniers cocktails !
        </h2>
      </Link>
      <div className="flex flex-wrap justify-center gap-8">
        {LastCocktails.map((cocktail) => (
          <Link to={`/Cocktails/Detail/${cocktail.idDrink}`}>
            <div className="shadow-lg w-40 h-52 transform hover:rotate-2 transition-transform duration-200">
              <article className="relative w-40 h-52 overflow-hidden p-4">
                <div className="bg-blue-500 rounded-full absolute top-0 left-0 w-12 h-12 -ml-6 -mt-6 flex items-center justify-center"></div>

                <h3 className="text-lg font-semibold mb-2 text-center">
                  {cocktail.strDrink}
                </h3>

                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className="object-cover rounded-full mx-auto w-32 h-32 mb-2"
                />
              </article>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LastCocktails;
