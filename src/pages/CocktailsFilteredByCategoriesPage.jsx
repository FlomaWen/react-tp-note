import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import CocktailsFilteredByCategory from "../components/CocktailsFilteredByCategory";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailsFilteredByCategories - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailsFilteredByCategories = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des cocktails présents dans la catégorie extraite des données de la réponse JSON.
  return responseData.drinks;
};

const CocktailsFilteredByCategoriesPage = () => {
  // Récupération de la catégorie selectionné dans l'url
  const { category } = useParams();

  // state cocktailsFiltered + setteur
  const [cocktailsFiltered, setCocktailsFiltered] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsFilteredByCategories =
        // Concaténation de l'url de filtre + de la catégorie récupérée
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category;

      const dataCocktailsFilteredByCategories =
        await fetchDataCocktailsFilteredByCategories(
          urlCocktailsFilteredByCategories
        );
      // on envoi les données dans le state une fois que la fonction fetchDataCocktailsFilteredByCategories a fini d'être éxécutée
      setCocktailsFiltered(dataCocktailsFilteredByCategories);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktailsFiltered ? (
        // envoi du prop cocktailsFiltered dans le composant CocktailsFilteredByCategory

        <CocktailsFilteredByCategory cocktailsFiltered={cocktailsFiltered} />
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};

export default CocktailsFilteredByCategoriesPage;
