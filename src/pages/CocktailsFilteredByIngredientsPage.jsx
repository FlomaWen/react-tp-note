import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import CocktailsFilteredByIngredients from "../components/CocktailsFilteredByIngredients";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailsFilteredByIngredients - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailsFilteredByIngredients = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des cocktails utilisant le verre selectionné extraite des données de la réponse JSON.
  return responseData.drinks;
};

const CocktailsFilteredByIngredientsPage = () => {
  //Récupération de l'ingrédient selectionné dans l'url
  const { ingredient } = useParams();
  // state cocktailsFiltered et setteur
  const [cocktailsFiltered, setCocktailsFiltered] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsFilteredByIngredients =
        // Concaténation de l'url de filtre + de l'ingrédient récupérée
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
        ingredient;

      const dataCocktailsFilteredByIngredients =
        await fetchDataCocktailsFilteredByIngredients(
          urlCocktailsFilteredByIngredients
        );
      // on envoi les données dans le state une fois que la fonction fetchDataCocktailsFilteredByIngredients a fini d'être éxécutée
      setCocktailsFiltered(dataCocktailsFilteredByIngredients);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktailsFiltered ? (
        // envoi du prop cocktailsFiltered dans le composant CocktailsFilteredByIngredients
        <CocktailsFilteredByIngredients cocktailsFiltered={cocktailsFiltered} />
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default CocktailsFilteredByIngredientsPage;
